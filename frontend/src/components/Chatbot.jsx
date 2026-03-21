import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, Mail, Bot } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const genSessionId = () =>
  `session_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

const INITIAL_MESSAGES = [
  {
    id: "init",
    role: "assistant",
    content:
      "Olá! Sou o assistente da LS Tech IA. Como posso ajudar você hoje?",
    showContact: false,
  },
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(genSessionId);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { id: Date.now().toString(), role: "user", content: text, showContact: false };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const { data } = await axios.post(`${API}/chat`, {
        session_id: sessionId,
        message: text,
      });
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "_ai",
          role: "assistant",
          content: data.response,
          showContact: data.show_contact,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "_err",
          role: "assistant",
          content:
            "Desculpe, ocorreu um problema. Por favor, entre em contato diretamente.",
          showContact: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-4"
      data-testid="chatbot-container"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.93 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-80 sm:w-96 rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "rgba(5,11,24,0.97)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0,212,255,0.2)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.7), 0 0 40px rgba(0,212,255,0.08)",
              maxHeight: "520px",
            }}
            data-testid="chatbot-window"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.12))",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #00D4FF, #7C3AED)" }}
                >
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <p
                    className="text-white text-sm font-semibold"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Assistente IA
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-white p-1"
                style={{ transition: "color 0.2s ease" }}
                data-testid="chatbot-close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-3 chat-messages"
              style={{ minHeight: 0 }}
              data-testid="chatbot-messages"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-tr-sm"
                        : "rounded-tl-sm"
                    }`}
                    style={
                      msg.role === "user"
                        ? {
                            background: "linear-gradient(135deg, #00B4D8, #7C3AED)",
                            color: "#fff",
                          }
                        : {
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.09)",
                            color: "#CBD5E1",
                          }
                    }
                  >
                    <p>{msg.content}</p>
                    {msg.showContact && (
                      <div className="mt-3 flex flex-col gap-2">
                        <a
                          href="https://wa.me/5561992411758"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-2 rounded-xl text-white text-xs font-semibold"
                          style={{
                            background: "linear-gradient(135deg, #16a34a, #15803d)",
                            transition: "opacity 0.2s ease",
                          }}
                          data-testid="chatbot-whatsapp-btn"
                        >
                          <Phone size={13} />
                          Falar no WhatsApp
                        </a>
                        <a
                          href="mailto:contato.leandrosinfronio@gmail.com"
                          className="flex items-center justify-center gap-2 py-2 rounded-xl text-white text-xs font-semibold"
                          style={{
                            background: "linear-gradient(135deg, #1d4ed8, #1e40af)",
                            transition: "opacity 0.2s ease",
                          }}
                          data-testid="chatbot-email-btn"
                        >
                          <Mail size={13} />
                          Enviar E-mail
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div
                    className="rounded-2xl rounded-tl-sm px-4 py-3"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.09)",
                    }}
                    data-testid="chatbot-typing"
                  >
                    <div className="flex gap-1 items-center h-4">
                      {[0, 150, 300].map((delay) => (
                        <span
                          key={delay}
                          className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="flex-shrink-0 px-4 py-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 rounded-xl px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(0,212,255,0.4)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                  data-testid="chatbot-input"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #00B4D8, #7C3AED)",
                    transition: "opacity 0.2s ease",
                  }}
                  data-testid="chatbot-send"
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full flex items-center justify-center chatbot-pulse"
        style={{
          background: "linear-gradient(135deg, #00B4D8, #7C3AED)",
          boxShadow: "0 0 30px rgba(0,212,255,0.35)",
        }}
        data-testid="chatbot-toggle"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} className="text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
