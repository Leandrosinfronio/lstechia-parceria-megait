import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contato"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="contact-section"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)" }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4" data-testid="contact-label">Contato</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
            data-testid="contact-title"
          >
            Vamos tirar seu projeto do papel
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Entre em contato com a LS Tech IA e descubra como podemos transformar sua
            empresa com inteligência artificial, automação e tecnologia de ponta.
          </p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-full"
            style={{
              background: "rgba(10,22,40,0.7)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
            }}
            data-testid="contact-email-display"
          >
            <Mail size={16} className="text-cyan-400" />
            <span className="text-slate-300 text-sm">contato.leandrosinfronio@gmail.com</span>
          </div>
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-full"
            style={{
              background: "rgba(10,22,40,0.7)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
            }}
            data-testid="contact-phone-display"
          >
            <Phone size={16} className="text-cyan-400" />
            <span className="text-slate-300 text-sm">+55 61 99241-1758</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="https://wa.me/5561992411758"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg w-full sm:w-auto justify-center"
            style={{
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              boxShadow: "0 0 25px rgba(34,197,94,0.3)",
              fontFamily: "'Outfit', sans-serif",
              transition: "box-shadow 0.3s ease, opacity 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 40px rgba(34,197,94,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 25px rgba(34,197,94,0.3)";
            }}
            data-testid="contact-whatsapp-btn"
          >
            <MessageCircle size={22} />
            Falar no WhatsApp
            <ArrowRight size={18} className="group-hover:translate-x-1" style={{ transition: "transform 0.2s ease" }} />
          </a>

          <a
            href="mailto:contato.leandrosinfronio@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg w-full sm:w-auto justify-center"
            style={{
              background: "linear-gradient(135deg, #00D4FF22, #7C3AED22)",
              border: "1px solid rgba(0,212,255,0.4)",
              backdropFilter: "blur(12px)",
              fontFamily: "'Outfit', sans-serif",
              transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.8)";
              e.currentTarget.style.boxShadow = "0 0 25px rgba(0,212,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)";
              e.currentTarget.style.boxShadow = "none";
            }}
            data-testid="contact-email-btn"
          >
            <Mail size={22} />
            Enviar E-mail
            <ArrowRight size={18} className="group-hover:translate-x-1" style={{ transition: "transform 0.2s ease" }} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
