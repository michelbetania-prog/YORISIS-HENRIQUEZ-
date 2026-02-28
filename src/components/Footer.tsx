import { Instagram, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-olive-950 text-olive-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <img 
                src="https://lh3.googleusercontent.com/d/1wIh-nrYooMf5Xg7shfW8wW_hhRyyl03d" 
                alt="Logo Sanada para Servir" 
                className="w-12 h-12 object-contain brightness-0 invert opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <h3 className="font-serif text-3xl text-white">Yosiris Henríquez</h3>
                <p className="text-gold-500 text-sm font-medium uppercase tracking-wider">Estratega de Vida</p>
              </div>
            </div>
            <p className="text-olive-400 text-lg font-light max-w-xs">
              Acompañándote a conectar con tu esencia y sanar desde el amor.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-8">
              <a
                href="https://instagram.com/yosirishenriquez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-400 hover:text-gold-400 transition-all hover:scale-110"
                title="Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://wa.me/18622879211"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-400 hover:text-gold-400 transition-all hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircle className="w-8 h-8" />
              </a>
            </div>
            <nav className="flex gap-8 text-sm font-medium uppercase tracking-widest">
              <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre Mí</a>
              <a href="#programas" className="hover:text-white transition-colors">Programas</a>
              <a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a>
            </nav>
          </div>

          <div className="text-center md:text-right">
            <p className="text-olive-500 text-sm mb-2">Basado en principios de amor y fe.</p>
            <p className="text-olive-400 font-serif italic">"Sanada para Servir"</p>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-olive-600 text-sm">
          <p>© {currentYear} Sanada para Servir. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-gold-600 fill-gold-600" /> para tu expansión
          </p>
        </div>
      </div>
    </footer>
  );
}
