import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const portfolioImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1590246814883-57832bda4a74?q=80&w=2070&auto=format&fit=crop",
    category: "Blackwork",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop",
    category: "Realism",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1974&auto=format&fit=crop",
    category: "Fineline",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop",
    category: "Traditional",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2070&auto=format&fit=crop",
    category: "Blackwork",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1621252179027-9d7a221f0088?q=80&w=2070&auto=format&fit=crop",
    category: "Fineline",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1588612501944-77a808f10714?q=80&w=2070&auto=format&fit=crop",
    category: "Realism",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop",
    category: "Traditional",
  },
];

const categories = ["All", "Blackwork", "Fineline", "Realism", "Traditional"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-logo text-5xl sm:text-6xl mb-4">
              Portfólio
            </h2>
            <p className="text-gray-400 font-heading uppercase tracking-widest text-sm sm:text-base max-w-2xl mx-auto">
              Explore nossos trabalhos recentes e encontre inspiração para sua
              próxima tatuagem.
            </p>
          </motion.div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-sm font-heading tracking-widest uppercase text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-transparent text-gray-400 border border-gray-800 hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer overflow-hidden rounded-sm aspect-square"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={`Tattoo ${image.category}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary font-heading tracking-widest uppercase text-sm border border-primary px-4 py-2">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="https://instagram.com/inknatt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 font-heading tracking-widest uppercase text-sm text-white border border-white/30 hover:border-primary hover:text-primary transition-all duration-300 rounded-sm"
          >
            Ver mais no Instagram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Tattoo Zoom"
              className="max-w-full max-h-[90vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
