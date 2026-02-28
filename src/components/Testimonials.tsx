import { Quote } from "lucide-react";

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
