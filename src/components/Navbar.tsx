import { motion } from "motion/react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Diagnóstico", href: "#diagnostico" },
    { name: "Programas", href: "#programas" },
    { name: "Testimonios", href: "#testimonios" },
  ];

  const whatsappLink = "https://wa.me/18622879211";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-beige-50/95 backdrop-blur-sm py-3 border-beige-200 shadow-sm"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src="https://lh3.googleusercontent.com/d/1wIh-nrYooMf5Xg7shfW8wW_hhRyyl03d" 
            alt="Logo Sanada para Servir" 
            className="w-10 h-10 object-contain"
            referrerPolicy="no-referrer"
          />
          <a href="#" className="font-serif text-2xl text-olive-700 font-semibold tracking-wide whitespace-nowrap">
            Yosiris Henríquez
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-olive-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gold-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://instagram.com/yosirishenriquez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-olive-600 hover:text-gold-600 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-olive-600 text-white px-5 py-2.5 rounded-full hover:bg-olive-700 transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-olive-600 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-beige-50 border-b border-beige-200 md:hidden flex flex-col items-center gap-6 p-8 text-lg font-medium text-olive-700 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-gold-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-olive-600 text-white px-8 py-3 rounded-full hover:bg-olive-700 transition-colors w-full justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      )}
    </nav>
  );
}
