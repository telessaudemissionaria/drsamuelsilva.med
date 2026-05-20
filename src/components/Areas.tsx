import { motion } from 'motion/react';

export function Areas() {
  const areas = [
    {
      id: "01",
      title: "Medicina humanizada",
      desc: "El paciente no es un conjunto de síntomas. Es una persona con historia, dignidad y un Creador. La medicina que no ve eso no cura — solo trata."
    },
    {
      id: "02",
      title: "Fe y ciencia",
      desc: "La fe cristiana intelectual no teme la ciencia — la entiende mejor. Hablo desde la intersección de John Lennox, Timothy Keller y 13 años de campo real."
    },
    {
      id: "03",
      title: "IA médica y ética",
      desc: "Los algoritmos no tienen corazón. El médico sí. La IA en salud necesita supervisión humana y una ancla moral — no neutralidad."
    }
  ];

  return (
    <section id="areas" className="bg-white text-black py-24 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 md:flex md:justify-between md:items-end gap-12"
        >
          <div className="max-w-2xl">
            <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">Áreas de enfoque</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-6 mt-4">
              Tres conversaciones que la medicina necesita tener
            </h2>
          </div>
          <p className="text-lg text-gray-600 font-sans font-light max-w-md md:pb-2">
            El médico del siglo XXI no puede ignorar la fe, la tecnología ni el territorio. Aquí hablo de los tres.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {areas.map((area, index) => (
             <motion.div 
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="border-t border-gray-200 pt-8"
            >
              <span className="text-gray-400 font-serif text-3xl block mb-4">{area.id}</span>
              <h3 className="text-xl font-sans font-semibold mb-4">{area.title}</h3>
              <p className="text-gray-600 font-sans font-light leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
