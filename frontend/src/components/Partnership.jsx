import { motion } from "framer-motion";
import { ArrowRight, Handshake, Building2 } from "lucide-react";

export const Partnership = () => {
  return (
    <section
      id="parceria"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="partnership-section"
      style={{
        background: "linear-gradient(180deg, #050B18 0%, #080d1c 50%, #050B18 100%)",
      }}
    >
      {/* Decorative background glow - right side */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right top, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }}
      />
      {/* Left accent */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at left bottom, rgba(124,58,237,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Top divider line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Section label */}
            <p className="section-label mb-4" data-testid="partnership-label">
              Parceria Estratégica
            </p>

            {/* Title */}
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
              data-testid="partnership-title"
            >
              Parceria Estratégica com a{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00D4FF, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                MegaIT
              </span>
            </h2>

            {/* Subtitle */}
            <p
              className="text-cyan-400 text-base font-medium mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              data-testid="partnership-subtitle"
            >
              Mais capacidade de entrega em soluções corporativas de TI
            </p>

            {/* Body text */}
            <p
              className="text-slate-400 text-lg leading-relaxed mb-10"
              data-testid="partnership-text"
            >
              A LS Tech IA atua em parceria com a MegaIT para ampliar a entrega de soluções
              corporativas em TI. Essa parceria fortalece nossa capacidade de atender empresas
              com mais eficiência, inovação e segurança, apoiando projetos de transformação
              digital e evolução tecnológica.
            </p>

            {/* CTA Button */}
            <a
              href="#contato"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white font-semibold group"
              style={{
                background: "linear-gradient(135deg, #00B4D8, #7C3AED)",
                boxShadow: "0 0 25px rgba(0,212,255,0.25)",
                fontFamily: "'Outfit', sans-serif",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 40px rgba(0,212,255,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 25px rgba(0,212,255,0.25)";
              }}
              data-testid="partnership-cta"
            >
              <Handshake size={18} />
              Fale com nossa equipe
              <ArrowRight
                size={17}
                className="group-hover:translate-x-1"
                style={{ transition: "transform 0.2s ease" }}
              />
            </a>
          </motion.div>

          {/* Right: MegaIT logo placeholder card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="w-full max-w-sm rounded-2xl p-10 flex flex-col items-center justify-center gap-6"
              style={{
                background: "rgba(10, 22, 40, 0.65)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
              data-testid="partnership-logo-card"
            >
              {/* Logo placeholder — substitua pela logo real da MegaIT quando disponível */}
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.12))",
                  border: "1px solid rgba(0,212,255,0.2)",
                }}
                aria-label="Logo MegaIT"
              >
                <Building2 size={40} className="text-cyan-400" />
              </div>

              {/* Company name */}
              <div className="text-center">
                <p
                  className="text-white text-2xl font-bold"
                  style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.01em" }}
                >
                  MegaIT
                </p>
                <p className="text-slate-500 text-sm mt-1">Parceiro Estratégico</p>
              </div>

              {/* Separator */}
              <div
                className="w-full h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,212,255,0.25), transparent)",
                }}
              />

              {/* Tag line */}
              <p className="text-slate-400 text-sm text-center leading-relaxed">
                Soluções corporativas de TI com maior capacidade e eficiência operacional.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
