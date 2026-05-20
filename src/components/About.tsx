import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="bg-brand-cream text-black py-24 md:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">Quién soy</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
            Médico que lleva la medicina donde el sistema no llega
          </h2>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-8 font-sans font-light text-lg text-gray-800 leading-relaxed"
        >
          <p>
            Soy médico general con más de 13 años de práctica en comunidades rurales de Bolivia — desde el altiplano andino hasta el Amazonas boliviano. Con la convicción que me llevó al campo: que la calidad de tu salud no debería depender de dónde naciste.
          </p>
          
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-2 text-black">Qué Hago</h3>
            <p>
              Mi práctica integra medicina clínica, salud comunitaria, telemedicina en baja conectividad y ética médica frente a la inteligencia artificial. La fe no es un añadido — es el fundamento que define cómo entiendo al paciente: como persona que lleva la imagen de Dios.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-2 text-black">Mi Formación</h3>
            <p>
              Médico por la Universidad De Aquino Bolivia (UDABOL). Certificado en ACLS, Salud Digital y Vertex AI (Google).
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
