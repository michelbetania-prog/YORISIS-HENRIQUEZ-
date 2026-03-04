import { Quote, Play, Instagram, Flower2 } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María G.",
      initial: "M",
      role: "Participante Nivel 1 y 2",
      text: "Este programa cambió mi vida completamente. Por primera vez entendí de dónde venían mis miedos y pude liberarlos. Yosiris me sostuvo con amor en cada paso."
    },
    {
      name: "Carolina S.",
      initial: "C",
      role: "Participante Nivel 1",
      text: "Encontré claridad y paz interior que nunca pensé posible. Las herramientas que aprendí las uso cada día. Mi relación conmigo misma se transformó por completo."
    },
    {
      name: "Ana M.",
      initial: "A",
      role: "Participante Nivel 1 y 2",
      text: "Una experiencia transformadora que recomiendo a toda mujer que esté lista para su evolución. Yosiris tiene un don especial para guiar este proceso."
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-beige-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold-500 font-medium tracking-widest text-sm uppercase">Testimonios</span>
          <h2 className="font-serif text-4xl md:text-5xl text-olive-800 mt-4 mb-6">Voces de transformación</h2>
        </div>

        {/* Video Testimonial Highlight */}
        <div className="mb-20">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-olive-100 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:h-[400px] relative group">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Testimonio Kirsi Abreu - Girasol" 
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-olive-900/40 flex items-center justify-center group-hover:bg-olive-900/20 transition-all duration-500">
                <a 
                  href="https://www.instagram.com/reel/DVegTRgAdNH/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 relative"
                >
                  <Flower2 className="w-16 h-16 text-gold-500/20 absolute animate-spin-slow" />
                  <Play className="w-8 h-8 text-gold-600 fill-gold-600 relative z-10 ml-1" />
                </a>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
                <Instagram className="w-4 h-4" />
                <span>Ver en Instagram</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-10 md:p-16">
              <Quote className="w-12 h-12 text-gold-200 mb-6" />
              <h3 className="font-serif text-3xl text-olive-800 mb-6">"Una experiencia que trasciende"</h3>
              <p className="text-olive-700 text-lg leading-relaxed font-light italic mb-8">
                ✨ Queremos expresar nuestro más sincero agradecimiento a todas las participantes de nuestro reciente curso ‘Sanada para Servir’. En especial a nuestra querida <span className="font-semibold text-gold-600">@KirsiAbreu</span> por compartir su testimonio.
              </p>
              <a 
                href="https://www.instagram.com/reel/DVegTRgAdNH/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-600 font-bold hover:text-gold-700 transition-colors"
              >
                Ver testimonio completo <Play className="w-5 h-5 fill-gold-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-[2.5rem] p-10 relative shadow-xl shadow-olive-900/5 border border-olive-100 hover:-translate-y-2 transition-transform duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gold-100" />
              
              <p className="text-olive-700 leading-relaxed mb-10 text-lg font-light italic relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-olive-100 rounded-2xl flex items-center justify-center shadow-inner">
                  <span className="font-serif text-olive-700 font-bold text-xl">{testimonial.initial}</span>
                </div>
                <div>
                  <p className="font-bold text-olive-900 text-lg">{testimonial.name}</p>
                  <p className="text-gold-600 text-sm font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
