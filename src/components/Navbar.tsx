import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Estilos", href: "#services" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="text-primary font-logo text-4xl tracking-wider hover:text-white transition-colors duration-300"
          >
            INKNATT
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-heading tracking-widest uppercase text-gray-300 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://instagram.com/inknatt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-sm font-heading tracking-widest uppercase text-sm transition-all duration-300"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-3 py-4 text-base font-heading tracking-widest uppercase text-gray-300 hover:text-primary hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col items-center space-y-4 w-full">
                <a
                  href="https://instagram.com/inknatt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-sm font-heading tracking-widest uppercase text-sm transition-all duration-300"
                >
                  Agendar Sessão
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
