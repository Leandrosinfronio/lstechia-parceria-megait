# PRD - LS Tech IA Landing Page

## Última atualização: 21/03/2026

---

## 1. VISÃO GERAL DO PROJETO

**Nome:** LS Tech IA — Landing Page Premium  
**Tipo:** Landing Page Institucional + Comercial  
**Stack:** React + FastAPI + MongoDB  
**Deploy alvo:** www.lstechia.com.br  
**Repositório:** https://github.com/Leandrosinfronio/lstech-osint  

---

## 2. PERSONAS E PÚBLICO-ALVO

- Empresários e gestores brasileiros buscando soluções de IA e automação
- PMEs que precisam de presença digital, chatbots ou cibersegurança
- Startups e scale-ups em transformação digital

---

## 3. ARQUITETURA IMPLEMENTADA

### Backend (FastAPI — /app/backend/)
- `server.py`: API FastAPI com endpoint `/api/chat` usando `emergentintegrations` (LlmChat)
- Modelo: OpenAI `gpt-4.1-mini` via Emergent LLM Key
- MongoDB: armazenamento de logs de chat
- Sessões de chat: gerenciadas em memória (dict por session_id)

### Frontend (React — /app/frontend/src/)
- `App.js`: Página única, assembla todos os componentes
- `App.css`: Animações premium (neural orb, partículas, glow)
- `index.css`: Google Fonts (Outfit + DM Sans)
- `components/Header.jsx`: Header fixo com glassmorphism, scroll-aware
- `components/Hero.jsx`: Hero full-screen com NeuralOrb SVG animado
- `components/ParticleCanvas.jsx`: Canvas com partículas e conexões animadas
- `components/Services.jsx`: 6 cards de serviços com hover premium
- `components/About.jsx`: 3 cards (Missão, Visão, Diferencial)
- `components/Contact.jsx`: Seção com botões WhatsApp e Email
- `components/Footer.jsx`: Footer elegante
- `components/Chatbot.jsx`: Chatbot flutuante com IA real (OpenAI GPT)

---

## 4. FUNCIONALIDADES IMPLEMENTADAS

### v1.0 — 21/03/2026
- [x] Header fixo com glassmorphism e scroll-awareness
- [x] Logo "LS Tech IA" sem subtexto OSINT
- [x] Menu de navegação: Serviços, Sobre, Contato
- [x] Botão "Acessar Sistema" com gradiente cyan→violet
- [x] Hero section com badge animado, headline, subheadline, CTAs
- [x] Neural Orb SVG animado (anéis orbitais, nós, LS no centro)
- [x] Canvas de partículas com conexões no hero
- [x] Stats: 50+ Projetos, 100% Resultado, 24/7 Suporte
- [x] 6 cards de serviços com hover glow e animações stagger
- [x] Seção Sobre com cards Missão/Visão/Diferencial
- [x] Seção Contato com botões WhatsApp e Email
- [x] Footer com copyright 2026
- [x] Chatbot flutuante com IA real (OpenAI GPT via emergentintegrations)
- [x] Chatbot: resposta inteligente em português sobre serviços
- [x] Chatbot: botões de contato (WhatsApp/Email) em intenção comercial
- [x] Design dark premium (navy/roxo/ciano/neon)
- [x] Framer Motion para animações de entrada e hover
- [x] Responsivo (desktop + mobile)

---

## 5. VARIÁVEIS DE AMBIENTE

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=test_database
CORS_ORIGINS=*
EMERGENT_LLM_KEY=sk-emergent-536D1766e1e3866EaD
```

### Frontend (.env)
```
REACT_APP_BACKEND_URL=https://ai-innovation-hub-21.preview.emergentagent.com
WDS_SOCKET_PORT=443
ENABLE_HEALTH_CHECK=false
```

---

## 6. DEPENDÊNCIAS ADICIONADAS

### Frontend
- `framer-motion@12.38.0` — Animações de entrada, hover, transições

### Backend
- `emergentintegrations` — LLM integration (já estava instalado)

---

## 7. CONTATOS DA EMPRESA

- **WhatsApp:** https://wa.me/5561992411758
- **Email:** mailto:contato.leandrosinfronio@gmail.com

---

## 8. BACKLOG / PRÓXIMAS FEATURES

### P0 (Crítico)
- [ ] Push para GitHub (https://github.com/Leandrosinfronio/lstech-osint) — aguardando token do usuário

### P1 (Alta prioridade)
- [ ] Formulário de contato com envio de email (SendGrid/Resend)
- [ ] Seção de depoimentos/casos de sucesso
- [ ] Blog/artigos de IA e tecnologia

### P2 (Melhorias)
- [ ] Histórico de chat persistente (restaurar ao recarregar)
- [ ] Analytics de visitas e conversões
- [ ] Animações de circuito no background
- [ ] Seção de preços/pacotes
- [ ] Integração com CRM (leads automáticos via WhatsApp)

---

## 9. DEPLOY

Para deploy em www.lstechia.com.br:
1. Fazer build do React: `cd frontend && yarn build`
2. Servir o `/build` via nginx ou CDN
3. Backend FastAPI via uvicorn com gunicorn
4. Configurar CORS_ORIGINS para o domínio real
5. Configurar SSL/HTTPS
