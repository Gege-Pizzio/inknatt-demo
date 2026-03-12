import { motion } from "motion/react";

const services = [
  {
    title: "Blackwork",
    description:
      "Trabalhos focados em tinta preta sólida, linhas grossas e contrastes marcantes. Ideal para quem busca impacto visual e durabilidade.",
    icon: "https://images.unsplash.com/photo-1590246814883-57832bda4a74?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Fineline",
    description:
      "Traços finos, delicados e precisos. Perfeito para tatuagens minimalistas, escritas e desenhos detalhados que exigem sutileza.",
    icon: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Realismo",
    description:
      "Reprodução fiel de fotografias e imagens reais na pele. Exige alto nível de técnica e sombreamento para criar profundidade.",
    icon: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Cobertura (Cover-up)",
    description:
      "Transformação de tatuagens antigas ou indesejadas em novas obras de arte. Avaliação cuidadosa para garantir o melhor resultado.",
    icon: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-logo text-5xl sm:text-6xl mb-4">
              Especialidades
            </h2>
            <p className="text-gray-400 font-heading uppercase tracking-widest text-sm sm:text-base max-w-2xl mx-auto">
              Dominamos diversas técnicas para entregar o resultado perfeito
              para a sua ideia.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-sm bg-darker border border-white/5 hover:border-primary/50 transition-colors duration-500"
            >
              <div className="flex flex-col sm:flex-row h-full">
                <div className="w-full sm:w-1/3 h-48 sm:h-auto relative overflow-hidden">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-darker sm:hidden"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-darker hidden sm:block"></div>
                </div>
                <div className="w-full sm:w-2/3 p-8 flex flex-col justify-center relative z-10">
                  <h3 className="text-2xl font-heading uppercase tracking-widest text-white mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-sans text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
