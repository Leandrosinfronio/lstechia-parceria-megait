import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { ParticleCanvas } from "./ParticleCanvas";

const NeuralOrb = () => (
  <div className="relative w-full max-w-[480px] mx-auto float-orb" data-testid="neural-orb">
    {/* Ambient glow */}
    <div
      className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, rgba(124,58,237,0.08) 50%, transparent 70%)" }}
    />
    <svg viewBox="0 0 400 400" className="w-full h-auto relative z-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#00D4FF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
        </radialGradient>
        <radialGradient id="ambientGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,212,255,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="glow-filter" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outermost ambient */}
      <circle cx="200" cy="200" r="190" fill="url(#ambientGrad)" />

      {/* Orbit Ring 3 (outermost) */}
      <g className="orbit-ring-3">
        <circle cx="200" cy="200" r="185" fill="none" stroke="rgba(37,99,235,0.1)" strokeWidth="0.5" strokeDasharray="4 30" />
      </g>

      {/* Orbit Ring 2 */}
      <g className="orbit-ring-2">
        <circle cx="200" cy="200" r="158" fill="none" stroke="rgba(124,58,237,0.25)" strokeWidth="1" strokeDasharray="12 20" />
      </g>

      {/* Orbit Ring 1 */}
      <g className="orbit-ring-1">
        <circle cx="200" cy="200" r="128" fill="none" stroke="rgba(0,212,255,0.3)" strokeWidth="1" strokeDasharray="8 15" />
      </g>

      {/* Connection lines to nodes */}
      {[
        [200, 42], [358, 200], [200, 358], [42, 200],
        [300, 72], [328, 328], [72, 328], [72, 72]
      ].map(([x, y], i) => (
        <line
          key={i}
          x1="200" y1="200" x2={x} y2={y}
          stroke={i % 2 === 0 ? "rgba(0,212,255,0.18)" : "rgba(124,58,237,0.18)"}
          strokeWidth="0.8"
        />
      ))}

      {/* Secondary connection ring */}
      {[
        [200, 42], [358, 200], [200, 358], [42, 200],
      ].map(([x1, y1], i) => {
        const next = [[358, 200], [200, 358], [42, 200], [200, 42]][i];
        return (
          <line
            key={`sec-${i}`}
            x1={x1} y1={y1} x2={next[0]} y2={next[1]}
            stroke="rgba(0,212,255,0.08)"
            strokeWidth="0.6"
          />
        );
      })}

      {/* Outer nodes */}
      {[
        { cx: 200, cy: 42, color: "#00D4FF", cls: "node-0" },
        { cx: 358, cy: 200, color: "#7C3AED", cls: "node-1" },
        { cx: 200, cy: 358, color: "#00D4FF", cls: "node-2" },
        { cx: 42, cy: 200, color: "#7C3AED", cls: "node-3" },
        { cx: 300, cy: 72, color: "#2563EB", cls: "node-4" },
        { cx: 328, cy: 328, color: "#2563EB", cls: "node-5" },
        { cx: 72, cy: 328, color: "#00D4FF", cls: "node-6" },
        { cx: 72, cy: 72, color: "#7C3AED", cls: "node-7" },
      ].map(({ cx, cy, color, cls }) => (
        <circle key={cls} cx={cx} cy={cy} r="6" fill={color} filter="url(#glow-filter)" className={cls} />
      ))}

      {/* Inner ring */}
      <circle cx="200" cy="200" r="85" fill="none" stroke="rgba(0,212,255,0.12)" strokeWidth="0.5" />

      {/* Core outer glow */}
      <circle cx="200" cy="200" r="62" fill="rgba(0,212,255,0.06)" filter="url(#soft-glow)" />

      {/* Core */}
      <circle cx="200" cy="200" r="52" fill="url(#coreGrad)" filter="url(#glow-filter)" />

      {/* Core spinning ring */}
      <g className="core-spin-cw">
        <circle cx="200" cy="200" r="44" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="8 5" />
      </g>
      <g className="core-spin-ccw">
        <circle cx="200" cy="200" r="34" fill="none" stroke="rgba(0,212,255,0.5)" strokeWidth="1" strokeDasharray="5 8" />
      </g>

      {/* LS Text */}
      <text
        x="200" y="208"
        textAnchor="middle"
        fill="white"
        fontSize="20"
        fontWeight="800"
        fontFamily="Outfit, sans-serif"
        letterSpacing="3"
        filter="url(#glow-filter)"
      >
        LS
      </text>
    </svg>
  </div>
);

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="hero-section"
      style={{
        background: "linear-gradient(135deg, #050B18 0%, #0A1628 50%, #0d0520 100%)",
      }}
    >
      {/* Particle Canvas */}
      <ParticleCanvas />

      {/* Background radial glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 hero-badge"
              data-testid="hero-badge"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-sm font-medium tracking-wide">
                Inteligência Artificial • Cibersegurança • Automação
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
              data-testid="hero-headline"
            >
              Soluções modernas em{" "}
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(90deg, #00D4FF, #7C3AED, #00D4FF)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "badge-shimmer 4s linear infinite",
                }}
              >
                IA e tecnologia
              </span>{" "}
              para empresas
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg"
              data-testid="hero-subheadline"
            >
              Criamos sites, assistentes inteligentes, automações, soluções de atendimento,
              análise de dados e projetos focados em inovação, performance e segurança.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contato"
                className="btn-primary flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-full"
                style={{ fontFamily: "'Outfit', sans-serif" }}
                data-testid="hero-cta-primary"
              >
                <Mail size={18} />
                Solicitar proposta
              </a>
              <a
                href="#servicos"
                className="btn-secondary flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-full"
                style={{ fontFamily: "'Outfit', sans-serif" }}
                data-testid="hero-cta-secondary"
              >
                Ver serviços
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap gap-8 mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              {[
                { value: "50+", label: "Projetos Entregues" },
                { value: "100%", label: "Foco em Resultado" },
                { value: "24/7", label: "Suporte Disponível" },
              ].map(({ value, label }) => (
                <div key={label} data-testid={`hero-stat-${label}`}>
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>{value}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Neural Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center"
            data-testid="hero-visual"
          >
            <NeuralOrb />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        data-testid="scroll-indicator"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="text-slate-600 animate-bounce" size={18} />
      </motion.div>
    </section>
  );
};
