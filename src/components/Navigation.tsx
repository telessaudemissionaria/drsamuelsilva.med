import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Inicio', href: '#home' },
    { label: 'Quién soy', href: '#about' },
    { label: 'Enfoques', href: '#areas' },
    { label: 'Instagram', href: '#instagram' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-8 px-6 md:px-12 flex justify-between items-start md:items-center">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl font-serif text-white tracking-tight">
          Dr. Samuel Silva
        </h1>
        <p className="text-gray-400 text-sm md:text-base font-sans tracking-wide mt-2">
          Médico, Teólogo Reformado
        </p>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white hover:text-gray-300 font-sans text-sm tracking-wide transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Nav Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-3 text-white bg-white/10 backdrop-blur-md rounded-full"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-brand-black p-6 flex flex-col md:hidden"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="flex flex-col">
                <h1 className="text-3xl font-serif text-white">Dr. Samuel Silva</h1>
                <p className="text-gray-400 text-sm font-sans mt-1">Médico, Teólogo Reformado</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-white bg-white/10 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-8 items-center mt-12">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl font-serif tracking-wide hover:text-gray-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
