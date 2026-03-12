import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a
              href="#home"
              className="text-primary font-logo text-4xl tracking-wider inline-block mb-6"
            >
              INKNATT
            </a>
            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
              Estúdio de tatuagem especializado em transformar suas ideias em
              arte permanente na pele.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/inknatt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading uppercase tracking-widest text-sm mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-primary transition-colors font-sans text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-primary transition-colors font-sans text-sm"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-primary transition-colors font-sans text-sm"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-primary transition-colors font-sans text-sm"
                >
                  Estilos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-primary transition-colors font-sans text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading uppercase tracking-widest text-sm mb-6">
              Especialidades
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-400 font-sans text-sm">Blackwork</li>
              <li className="text-gray-400 font-sans text-sm">Fineline</li>
              <li className="text-gray-400 font-sans text-sm">Realismo</li>
              <li className="text-gray-400 font-sans text-sm">Traditional</li>
              <li className="text-gray-400 font-sans text-sm">Cover-up</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading uppercase tracking-widest text-sm mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 font-sans text-sm">
                <MapPin size={16} className="mt-1 shrink-0 text-primary" />
                <span>
                  Rua das Artes, 123 - Centro
                  <br />
                  São Paulo, SP
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-sans text-sm">
                <Phone size={16} className="shrink-0 text-primary" />
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-sans text-sm">
                <Mail size={16} className="shrink-0 text-primary" />
                <a
                  href="mailto:contato@inknatt.com"
                  className="hover:text-primary transition-colors"
                >
                  contato@inknatt.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-sans text-xs">
            &copy; {new Date().getFullYear()} INKNATT Tattoo Studio. Todos os
            direitos reservados.
          </p>
          <p className="text-gray-500 font-sans text-xs flex items-center gap-1">
            Desenvolvido com <span className="text-primary">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
