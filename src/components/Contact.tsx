import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-primary font-logo text-5xl sm:text-6xl mb-6">
              Agende sua Sessão
            </h2>
            <p className="text-gray-400 font-sans text-lg mb-12 max-w-md">
              Pronto para transformar sua ideia em realidade? Entre em contato
              conosco para orçamentos e agendamentos.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-heading uppercase tracking-widest text-sm mb-1">
                    Endereço
                  </h4>
                  <p className="text-gray-400 font-sans text-sm">
                    Rua das Artes, 123 - Centro
                    <br />
                    São Paulo, SP - 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-heading uppercase tracking-widest text-sm mb-1">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 font-sans text-sm hover:text-primary transition-colors"
                  >
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-heading uppercase tracking-widest text-sm mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-gray-400 font-sans text-sm">
                    Terça a Sábado: 10h às 20h
                    <br />
                    Domingo e Segunda: Fechado
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="https://instagram.com/inknatt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contato@inknatt.com"
                className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black p-8 sm:p-12 rounded-sm border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
            <h3 className="text-2xl font-heading uppercase tracking-widest text-white mb-8">
              Envie uma Mensagem
            </h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-heading uppercase tracking-widest text-gray-500 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-darker border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans text-sm"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-heading uppercase tracking-widest text-gray-500 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-darker border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans text-sm"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-heading uppercase tracking-widest text-gray-500 mb-2"
                  >
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-darker border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans text-sm"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="style"
                  className="block text-xs font-heading uppercase tracking-widest text-gray-500 mb-2"
                >
                  Estilo Desejado
                </label>
                <select
                  id="style"
                  className="w-full bg-darker border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans text-sm appearance-none"
                >
                  <option value="">Selecione um estilo</option>
                  <option value="blackwork">Blackwork</option>
                  <option value="fineline">Fineline</option>
                  <option value="realism">Realismo</option>
                  <option value="traditional">Traditional</option>
                  <option value="other">Outro / Não tenho certeza</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-heading uppercase tracking-widest text-gray-500 mb-2"
                >
                  Descreva sua Ideia
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-darker border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-sans text-sm resize-none"
                  placeholder="Conte-nos sobre o tamanho, local do corpo e referências..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-sm font-heading tracking-widest uppercase text-sm transition-all duration-300"
              >
                Solicitar Orçamento
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
