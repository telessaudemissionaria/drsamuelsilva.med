import { motion } from 'motion/react';
import { Instagram as InstaIcon } from 'lucide-react';

export function Instagram() {
  return (
    <section id="instagram" className="bg-brand-cream text-black py-24 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <InstaIcon className="w-12 h-12 mb-6" />
          <span className="text-sm uppercase tracking-widest font-semibold mb-3">Conecta conmigo</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-6">
            Sígueme en Instagram
          </h2>
          <p className="text-lg text-gray-700 font-sans font-light mb-10 leading-relaxed max-w-2xl">
            Acompáñame en mi día a día. Comparto reflexiones sobre medicina humanizada, mi labor en zonas rurales de Bolivia y la conexión vital entre fe y ciencia.
          </p>
          <a 
            href="https://www.instagram.com/drsamuelsilva.med" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-sans tracking-widest uppercase text-sm hover:bg-gray-800 transition-colors duration-300"
          >
            <span>@drsamuelsilva.med</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
