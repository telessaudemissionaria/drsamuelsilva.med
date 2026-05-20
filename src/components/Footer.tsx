import { Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-footer text-gray-300 py-16">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Navigation & Branding */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <h3 className="font-serif text-2xl text-white tracking-wide">Dr. Samuel Silva</h3>
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-sans uppercase tracking-wider">
            <a href="#home" className="hover:text-white transition-colors">Inicio</a>
            <a href="#about" className="hover:text-white transition-colors">Quién soy</a>
            <a href="#areas" className="hover:text-white transition-colors">Enfoques</a>
            <a href="#instagram" className="hover:text-white transition-colors">Instagram</a>
          </nav>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a href="https://www.instagram.com/drsamuelsilva.med" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center text-xs font-sans text-gray-500">
            <span>&copy; {currentYear} Dr. Samuel Silva. Todos los derechos reservados.</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacidad</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
