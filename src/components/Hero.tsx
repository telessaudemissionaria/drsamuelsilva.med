import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] bg-brand-black text-white flex items-center overflow-hidden pt-32 md:pt-0">
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
        
        {/* Image - Left */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="order-1 md:col-span-5 relative w-full h-[50vh] md:h-full flex justify-center md:justify-start items-end"
        >
          {/* Subtle gradient to fade edges if needed */}
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-brand-black to-transparent z-10 hidden md:block" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-black to-transparent z-10 md:hidden" />
          <img 
            src="/mi-foto.jpg" 
            alt="Dr. Samuel Silva" 
            className="w-full h-full object-cover object-center md:object-top filter grayscale contrast-125"
            draggable="false"
          />
        </motion.div>

        {/* Text Content - Right */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:col-span-7 flex flex-col justify-center items-start z-20 pb-16 md:pb-0 md:pl-12 lg:pl-24"
        >
          <div className="text-xl md:text-2xl text-white font-sans font-medium leading-[1.6] flex flex-col gap-6 max-w-2xl">
            <p>Hola, soy el Dr. Samuel Silva: médico de campo, explorador y comunicador.</p>
            <p className="text-gray-300 font-normal">Estoy aquí para acompañarte mientras exploramos cómo la fe cristiana y la medicina se conectan para ayudarte a entender tu salud, tomar mejores decisiones y vivir con más dignidad — sin importar dónde estés.</p>
            <p className="text-white">¡Vamos a ello!</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
