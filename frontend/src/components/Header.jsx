import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="header"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(5,11,24,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" data-testid="logo">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #00D4FF, #7C3AED)",
              boxShadow: "0 0 20px rgba(0,212,255,0.4)",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span
            className="font-bold text-xl text-white"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            LS Tech IA
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              data-testid={`nav-link-${label.toLowerCase()}`}
              className="text-slate-300 text-sm font-medium"
              style={{ transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.target.style.color = "#00D4FF")}
              onMouseLeave={(e) => (e.target.style.color = "")}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contato"
            data-testid="cta-acessar-sistema"
            className="hidden md:flex items-center px-5 py-2.5 text-white text-sm font-semibold rounded-full"
            style={{
              background: "linear-gradient(135deg, #00B4D8, #7C3AED)",
              boxShadow: "0 0 20px rgba(0,212,255,0.25)",
              transition: "box-shadow 0.3s ease, opacity 0.3s ease",
              fontFamily: "'Outfit', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 35px rgba(0,212,255,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,255,0.25)";
            }}
          >
            Acessar Sistema
          </a>
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(5,11,24,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
            data-testid="mobile-menu"
          >
            <div className="px-6 py-5 flex flex-col gap-5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-slate-300 text-base font-medium"
                  onClick={() => setMenuOpen(false)}
                  data-testid={`mobile-nav-${label.toLowerCase()}`}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contato"
                className="px-5 py-3 text-white text-sm font-semibold rounded-full text-center"
                style={{ background: "linear-gradient(135deg, #00B4D8, #7C3AED)" }}
                onClick={() => setMenuOpen(false)}
                data-testid="mobile-cta"
              >
                Acessar Sistema
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
