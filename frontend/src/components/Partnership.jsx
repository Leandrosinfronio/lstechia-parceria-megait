import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Handshake,
  Building2,
  Cloud,
  ShieldCheck,
  Server,
  Network,
  BrainCircuit,
  Activity,
  Settings2,
} from "lucide-react";

const ENTERPRISE_SOLUTIONS = [
  {
    icon: Cloud,
    title: "Cloud",
    description:
      "Projetos em nuvem pública, privada e híbrida com foco em escalabilidade, segurança e performance.",
  },
  {
    icon: ShieldCheck,
    title: "Cibersegurança",
    description:
      "Proteção de ambiente, prevenção a ameaças, Zero Trust, borda, conformidade e segurança operacional.",
  },
  {
    icon: Server,
    title: "Infraestrutura",
    description:
      "Ambientes corporativos com datacenter, storage, processamento e alta disponibilidade para operações críticas.",
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "Conectividade estável para matriz, filiais e operação distribuída, com redes seguras e bem administradas.",
  },
  {
    icon: BrainCircuit,
    title: "Data & AI",
    description:
      "Dados, analytics e inteligência artificial para apoiar decisões, produtividade e inovação nas empresas.",
  },
  {
    icon: Activity,
    title: "Observabilidade",
    description:
      "Visibilidade ponta a ponta para identificar gargalos, reduzir incidentes e melhorar a continuidade operacional.",
  },
  {
    icon: Settings2,
    title: "Serviços Gerenciados",
    description:
      "Implementação, operação, governança, outsourcing, suporte e evolução contínua do ambiente de TI.",
  },
];

const PARTNER_BRANDS = [
  "MegaIT",
  "Fortinet",
  "CrowdStrike",
  "Trellix",
  "Akamai",
  "Veeam",
  "Hewlett Packard Enterprise",
  "HPE Aruba Networking",
  "Microsoft",
  "IBM",
  "IBM Cloud",
  "Cisco",
  "Check Point",
  "Nutanix",
  "Zebra",
  "Meraki",
  "Dell EMC",
];

export const Partnership = () => {
  const marqueeRow = [...PARTNER_BRANDS, ...PARTNER_BRANDS];

  return (
    <section
      id="parceria"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="partnership-section"
      style={{
        background: "linear-gradient(180deg, #050B18 0%, #080d1c 50%, #050B18 100%)",
      }}
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at right top, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at left bottom, rgba(124,58,237,0.04) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="section-label mb-4" data-testid="partnership-label">
              Parceria Estratégica
            </p>

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

            <p
              className="text-cyan-400 text-base font-medium mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              data-testid="partnership-subtitle"
            >
              Mais capacidade de entrega em soluções corporativas de TI
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, rgba(0,180,216,0.18), rgba(124,58,237,0.22))",
                  border: "1px solid rgba(0,212,255,0.18)",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                MegaIT for your business
              </span>

              <span
                className="inline-flex items-center rounded-full px-4 py-2 text-sm text-slate-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                Cloud, cibersegurança, infraestrutura e inovação
              </span>
            </div>

            <p
              className="text-slate-400 text-lg leading-relaxed mb-10"
              data-testid="partnership-text"
            >
              A LS Tech IA atua em parceria com a MegaIT para ampliar a entrega de soluções
              corporativas em TI. Com essa parceria, fortalecemos nossa atuação em cloud,
              cibersegurança, infraestrutura, networking, Data & AI, observabilidade e serviços
              gerenciados, apoiando empresas com mais eficiência, inovação, segurança e evolução
              tecnológica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-white font-semibold group"
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

              <a
                href="https://www.megait.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-white font-semibold group"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(14px)",
                  fontFamily: "'Outfit', sans-serif",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)";
                  e.currentTarget.style.boxShadow = "0 0 26px rgba(0,212,255,0.14)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Conheça a MegaIT
                <ExternalLink
                  size={17}
                  className="group-hover:translate-x-1"
                  style={{ transition: "transform 0.2s ease" }}
                />
              </a>
            </div>
          </motion.div>

          <motion.a
            href="https://www.megait.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-full max-w-md rounded-[28px] p-8 md:p-10 flex flex-col gap-6"
              style={{
                background: "rgba(10, 22, 40, 0.68)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(18px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
              data-testid="partnership-logo-card"
            >
              <div className="flex items-center justify-between gap-4">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.12))",
                    border: "1px solid rgba(0,212,255,0.2)",
                  }}
                  aria-label="Logo MegaIT"
                >
                  <Building2 size={36} className="text-cyan-400" />
                </div>

                <div className="text-right">
                  <p
                    className="text-xs uppercase tracking-[0.35em] text-cyan-300/80 mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    MegaIT for your business
                  </p>
                  <p
                    className="text-white text-2xl font-bold"
                    style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.01em" }}
                  >
                    MegaIT
                  </p>
                  <p className="text-slate-500 text-sm mt-1">Parceiro Estratégico</p>
                </div>
              </div>

              <div
                className="w-full h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,212,255,0.25), transparent)",
                }}
              />

              <p className="text-slate-300 text-base leading-relaxed">
                Soluções corporativas em tecnologia para empresas que buscam performance,
                segurança, escala e evolução operacional.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm text-slate-400">
                <span>Cloud</span>
                <span>Cibersegurança</span>
                <span>Infraestrutura</span>
                <span>Networking</span>
                <span>Data & AI</span>
                <span>Observabilidade</span>
              </div>

              <div
                className="inline-flex items-center gap-2 text-cyan-300 font-semibold"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Acessar site da MegaIT
                <ExternalLink size={16} />
              </div>
            </div>
          </motion.a>
        </div>

        <div className="mt-16">
          <div className="mb-7">
            <p className="section-label mb-3">Atuação Empresarial</p>
            <h3
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
            >
              Também atuamos nas frentes que impulsionam a TI corporativa
            </h3>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {ENTERPRISE_SOLUTIONS.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-3xl p-5"
                  style={{
                    background: "rgba(10,22,40,0.62)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.12))",
                      border: "1px solid rgba(0,212,255,0.15)",
                    }}
                  >
                    <Icon size={20} className="text-cyan-400" />
                  </div>

                  <h4
                    className="text-white text-lg font-semibold mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <div
            className="rounded-[32px] p-6 md:p-8"
            style={{
              background: "rgba(10,22,40,0.58)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
          >
            <div className="max-w-3xl">
              <p className="section-label mb-3">Tecnologias e Ecossistema de Soluções</p>
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
              >
                Marcas e tecnologias que impulsionam negócios
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Como o repositório ainda não tem as logos oficiais em SVG ou PNG, esta faixa foi
                montada com wordmarks premium para manter o visual bonito agora e facilitar a troca
                por logos reais depois.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="logo-marquee">
                <div className="logo-track">
                  {marqueeRow.map((brand, index) => (
                    <div className="logo-pill" key={`${brand}-${index}`}>
                      {brand}
                    </div>
                  ))}
                </div>
              </div>

              <div className="logo-marquee">
                <div className="logo-track reverse">
                  {[...marqueeRow].reverse().map((brand, index) => (
                    <div className="logo-pill" key={`${brand}-reverse-${index}`}>
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
