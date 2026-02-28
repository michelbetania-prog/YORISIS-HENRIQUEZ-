import { MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-olive-800 to-olive-950 text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-500 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-olive-400 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
          Tu transformación <br />
          <span className="italic text-gold-400">comienza con un sí</span>
        </h2>
        
        <p className="text-olive-200 text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed font-light">
          Este es el momento. Ya has esperado suficiente. Tu niña interior, tu presente y tu futuro merecen que des este paso hacia la plenitud.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/18622879211"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gold-500 text-olive-950 px-12 py-6 rounded-full font-bold text-xl hover:bg-gold-400 transition-all shadow-2xl shadow-gold-500/30 hover:-translate-y-1"
          >
            <span>Consultar próximas fechas</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/18622879211"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white border-2 border-white/20 px-10 py-5 rounded-full font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
