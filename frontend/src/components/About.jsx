import { motion } from "framer-motion";
import { Target, Eye, Star } from "lucide-react";

const CARDS = [
  {
    icon: Target,
    label: "Missão",
    color: "#00D4FF",
    gradient: "from-cyan-500 to-blue-600",
    text: "Levar inovação, automação e inteligência para empresas que querem crescer com mais eficiência e segurança.",
  },
  {
    icon: Eye,
    label: "Visão",
    color: "#7C3AED",
    gradient: "from-violet-500 to-purple-700",
    text: "Ser referência em soluções de IA, automação e cibersegurança, entregando valor real e transformação digital.",
  },
  {
    icon: Star,
    label: "Diferencial",
    color: "#F59E0B",
    gradient: "from-amber-400 to-orange-600",
    text: "Unimos tecnologia, prática de mercado e foco em resultado para criar soluções modernas, úteis e escaláveis.",
  },
];

export const About = () => {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-32"
      data-testid="about-section"
      style={{
        background: "linear-gradient(180deg, #050B18 0%, #0a0f1e 50%, #050B18 100%)",
      }}
    >
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at left bottom, rgba(0,212,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4" data-testid="about-label">Sobre a Empresa</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
            data-testid="about-title"
          >
            Tecnologia aplicada com visão estratégica
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6" data-testid="about-grid">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="about-card rounded-2xl p-8 group cursor-default"
                data-testid={`about-card-${card.label.toLowerCase()}`}
              >
                {/* Label badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${card.color}22, ${card.color}11)`,
                    border: `1px solid ${card.color}44`,
                  }}
                >
                  <Icon size={14} style={{ color: card.color }} />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: card.color, fontFamily: "'Outfit', sans-serif" }}
                  >
                    {card.label}
                  </span>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed">
                  {card.text}
                </p>

                {/* Bottom gradient accent */}
                <div
                  className="mt-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, ${card.color}, transparent)`,
                    transition: "opacity 0.3s ease",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
