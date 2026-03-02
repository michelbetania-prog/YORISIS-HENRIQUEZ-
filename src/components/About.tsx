import { MessageCircle } from "lucide-react";

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-beige-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-olive-200 shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/d/1hmtYYJxlMrorqbBHFIbwUOiKocrvDgn2"
                alt="Yosiris Henríquez - Estratega de Vida"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold-400 rounded-[2rem] -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold-200/30 rounded-full blur-2xl -z-10" />
          </div>

          <div>
            <span className="text-gold-500 font-medium tracking-widest text-sm uppercase">TU ACOMPAÑANTE</span>
            <h2 className="font-serif text-4xl md:text-6xl text-olive-800 mt-4 mb-2">Yosiris Henríquez</h2>
            <p className="text-olive-500 font-medium text-xl mb-8">Estratega de Vida</p>
            
            <div className="space-y-6 text-olive-700 leading-relaxed text-lg font-light">
              <p className="font-medium text-olive-800 italic text-xl">
                "Soy una hija Amada por Dios con una nueva identidad."
              </p>
              <p>
                Conecté con mi propósito de vida, eligiendo vivir en obediencia, perseverancia y caminando en la divina voluntad de Dios, creyendo que todo obra para mi mayor bien.
              </p>
              
              <p>
                Es un honor para mí acompañarte desde el Amor y en total Gratitud. Me encanta poder llevar claridad a tu vida, que sigas conectando con tu Esencia y puedas construir tu Mejor Versión en Plenitud Emocional y Espiritualidad.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/18622879211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-olive-600 text-white px-8 py-4 rounded-full font-medium hover:bg-olive-700 transition-all shadow-lg hover:shadow-olive-700/30"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hablemos por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

