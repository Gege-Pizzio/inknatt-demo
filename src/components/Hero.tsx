import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop"
          alt="Tattoo Studio Background"
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-primary font-logo text-7xl sm:text-8xl md:text-9xl tracking-wider mb-6 drop-shadow-lg">
            INKNATT
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-300 font-heading text-xl sm:text-2xl md:text-3xl tracking-[0.2em] uppercase mb-10 max-w-2xl mx-auto">
            Arte na pele. <br className="sm:hidden" />
            <span className="text-white">Identidade eterna.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-heading tracking-widest uppercase text-sm text-white bg-primary hover:bg-primary-hover transition-all duration-300 overflow-hidden rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver Portfólio
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 font-heading tracking-widest uppercase text-sm text-white border border-white/30 hover:border-primary hover:text-primary transition-all duration-300 rounded-sm"
          >
            Agendar Sessão
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-heading tracking-widest uppercase text-gray-400">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
      </motion.div>
    </section>
  );
}
