from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel
from typing import Dict
from datetime import datetime, timezone
from emergentintegrations.llm.chat import LlmChat, UserMessage

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

LS_TECH_SYSTEM_MESSAGE = """
Você é o Assistente IA da LS Tech IA, uma empresa premium de soluções em inteligência artificial, automação, sites profissionais, cibersegurança, consultoria em IA e suporte tecnológico para empresas brasileiras.

Seu papel:
1. Responder dúvidas sobre os serviços da LS Tech IA de forma clara, profissional e amigável
2. Orientar o visitante sobre qual serviço melhor atende sua necessidade
3. Quando o visitante demonstrar intenção de contato, orçamento, proposta, contratar ou quiser falar com atendente, inclua ao final da resposta exatamente esta tag: [SHOW_CONTACT]

Serviços da LS Tech IA:
- Sites Profissionais: Landing pages, sites institucionais e páginas comerciais com visual moderno, responsivo e focado em conversão
- Chatbots com IA: Assistentes inteligentes para WhatsApp, web e atendimento automatizado com respostas rápidas e personalizadas
- Automações: Otimização de processos repetitivos, integrações de sistemas e fluxos internos para ganhar produtividade e reduzir erros
- Cibersegurança: Apoio técnico, conscientização, boas práticas, análise de riscos e proteção digital
- Consultoria em IA: Estruturação do uso de inteligência artificial no negócio com estratégia, ferramentas e implementação prática
- Suporte Tecnológico: Soluções para infraestrutura, manutenção, melhoria operacional e evolução do ambiente digital

Contato da empresa:
- WhatsApp: +55 61 99241-1758
- Email: contato.leandrosinfronio@gmail.com

Responda sempre em português brasileiro, de forma profissional, amigável e inteligente. Seja útil, claro e conciso.
"""

chat_instances: Dict[str, LlmChat] = {}


def get_or_create_chat(session_id: str) -> LlmChat:
    if session_id not in chat_instances:
        chat_instances[session_id] = LlmChat(
            api_key=os.environ.get('EMERGENT_LLM_KEY'),
            session_id=session_id,
            system_message=LS_TECH_SYSTEM_MESSAGE
        ).with_model("openai", "gpt-4.1-mini")
    return chat_instances[session_id]


class ChatRequest(BaseModel):
    session_id: str
    message: str


class ChatResponse(BaseModel):
    response: str
    show_contact: bool = False
    session_id: str


@api_router.get("/")
async def root():
    return {"message": "LS Tech IA API - Online"}


@api_router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    try:
        llm = get_or_create_chat(request.session_id)
        user_msg = UserMessage(text=request.message)
        response_text = await llm.send_message(user_msg)

        show_contact = "[SHOW_CONTACT]" in response_text
        clean_response = response_text.replace("[SHOW_CONTACT]", "").strip()

        await db.chat_logs.insert_one({
            "session_id": request.session_id,
            "user_message": request.message,
            "ai_response": clean_response,
            "show_contact": show_contact,
            "timestamp": datetime.now(timezone.utc).isoformat()
        })

        return ChatResponse(
            response=clean_response,
            show_contact=show_contact,
            session_id=request.session_id
        )
    except Exception as e:
        logger.error(f"Chat error: {e}")
        raise HTTPException(status_code=500, detail="Erro ao processar mensagem.")


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
