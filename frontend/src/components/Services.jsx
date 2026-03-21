import { motion } from "framer-motion";
import { Globe, Bot, Zap, Shield, Brain, Server } from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description:
      "Landing pages, sites institucionais e páginas comerciais com visual moderno, responsivo e focado em conversão.",
    color: "#00D4FF",
    gradient: "from-cyan-500/20 to-blue-600/20",
    border: "rgba(0,212,255,0.3)",
  },
  {
    icon: Bot,
    title: "Chatbots com IA",
    description:
      "Assistentes inteligentes para WhatsApp, web e atendimento automatizado, com respostas rápidas e personalizadas.",
    color: "#7C3AED",
    gradient: "from-violet-500/20 to-purple-700/20",
    border: "rgba(124,58,237,0.3)",
  },
  {
    icon: Zap,
    title: "Automações",
    description:
      "Otimizamos processos repetitivos, integrações e fluxos internos para ganhar produtividade e reduzir erros.",
    color: "#2563EB",
    gradient: "from-blue-500/20 to-indigo-700/20",
    border: "rgba(37,99,235,0.3)",
  },
  {
    icon: Shield,
    title: "Cibersegurança",
    description:
      "Apoio técnico, conscientização, boas práticas, análise de riscos e soluções com foco em proteção digital.",
    color: "#10B981",
    gradient: "from-emerald-500/20 to-green-700/20",
    border: "rgba(16,185,129,0.3)",
  },
  {
    icon: Brain,
    title: "Consultoria em IA",
    description:
      "Estruturamos o uso de inteligência artificial no seu negócio com estratégia, ferramentas e implementação prática.",
    color: "#D946EF",
    gradient: "from-fuchsia-500/20 to-pink-700/20",
    border: "rgba(217,70,239,0.3)",
  },
  {
    icon: Server,
    title: "Suporte Tecnológico",
    description:
      "Soluções para infraestrutura, manutenção, melhoria operacional e evolução do ambiente digital da sua empresa.",
    color: "#F59E0B",
    gradient: "from-amber-500/20 to-orange-700/20",
    border: "rgba(245,158,11,0.3)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Services = () => {
  return (
    <section
      id="servicos"
      className="relative py-24 md:py-32"
      data-testid="services-section"
      style={{
        background: "linear-gradient(180deg, #050B18 0%, #07101f 50%, #050B18 100%)",
      }}
    >
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4" data-testid="services-label">Nossos Serviços</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
            data-testid="services-title"
          >
            O que a LS Tech IA pode fazer por você
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-testid="services-grid"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="service-card rounded-2xl p-8 group cursor-default"
                data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                  style={{
                    border: `1px solid ${service.border}`,
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: service.color }} />
                </div>

                <h3
                  className="text-white font-semibold text-xl mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, ${service.color}, transparent)`,
                    transition: "opacity 0.3s ease",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
