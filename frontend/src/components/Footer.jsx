import { Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="relative py-10"
      data-testid="footer"
      style={{
        background: "#02040a",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #00D4FF, #7C3AED)" }}
          >
            <Zap size={14} className="text-white" />
          </div>
          <span
            className="text-white font-semibold text-base"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            LS Tech IA
          </span>
        </div>

        {/* Copyright */}
        <p className="text-slate-500 text-sm text-center" data-testid="footer-copyright">
          © 2026 LS Tech IA. Todos os direitos reservados.
        </p>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {[
            { label: "Serviços", href: "#servicos" },
            { label: "Sobre", href: "#sobre" },
            { label: "Contato", href: "#contato" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-slate-500 text-sm"
              style={{ transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.target.style.color = "#94a3b8")}
              onMouseLeave={(e) => (e.target.style.color = "")}
              data-testid={`footer-link-${label.toLowerCase()}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
