import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 leaf-pattern overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gold-300/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-olive-300/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 text-gold-600 text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-8"
        >
          <span className="w-8 md:w-12 h-px bg-gold-400" />
          Transformación Femenina Consciente
          <span className="w-8 md:w-12 h-px bg-gold-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-olive-800 leading-[1.1] mb-8"
        >
          Sanada para <span className="italic text-gold-600">Servir</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-olive-600 max-w-3xl mx-auto mb-6 leading-relaxed font-light"
        >
          Es un proceso para acompañar y guiar a Mujeres en su Sanación Emocional y Espiritual que eligen transformarse y conectar con su verdadera esencia, guiándolas a encontrar su identidad como hijas Amadas de Dios.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-olive-800 font-serif italic mb-12"
        >
          No necesitas más información. <br />
          Necesitas Acompañamiento y transformación.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://wa.me/18622879211"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-olive-700 text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-olive-800 transition-all shadow-lg shadow-olive-700/20 hover:-translate-y-1"
          >
            <span>Consultar próximas fechas</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#sobre-mi"
            className="inline-flex items-center gap-2 text-olive-600 font-medium hover:text-gold-600 transition-colors py-3"
          >
            Conocer más
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
