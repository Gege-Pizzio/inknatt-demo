import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative z-10">
              <img
                src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop"
                alt="Tattoo Artist"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-primary z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-primary z-0"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-primary font-logo text-5xl sm:text-6xl mb-6">
              Sobre INKNATT
            </h2>
            <h3 className="text-2xl sm:text-3xl font-heading uppercase tracking-widest text-white mb-8">
              A Arte da Tatuagem
            </h3>

            <div className="space-y-6 text-gray-400 font-sans text-lg leading-relaxed">
              <p>
                Bem-vindo ao INKNATT, um estúdio de tatuagem dedicado a
                transformar suas ideias e histórias em obras de arte
                permanentes. Acreditamos que cada tatuagem é uma expressão única
                de identidade.
              </p>
              <p>
                Nossa missão é proporcionar uma experiência excepcional, desde a
                primeira consulta até o cuidado pós-tatuagem. Trabalhamos com os
                mais altos padrões de higiene e segurança, garantindo que você
                se sinta confortável e confiante em nosso espaço.
              </p>
              <p>
                Especializados em diversos estilos, incluindo Blackwork,
                Fineline e Realismo, estamos prontos para criar um design
                exclusivo que ressoe com a sua essência.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-primary font-heading text-4xl font-bold">
                  10+
                </span>
                <span className="text-gray-500 text-sm uppercase tracking-widest mt-1">
                  Anos de Experiência
                </span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-primary font-heading text-4xl font-bold">
                  5k+
                </span>
                <span className="text-gray-500 text-sm uppercase tracking-widest mt-1">
                  Clientes Satisfeitos
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
