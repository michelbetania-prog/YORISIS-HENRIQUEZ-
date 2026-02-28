import { BookOpen, RefreshCw, ShieldCheck } from "lucide-react";

export default function Problem() {
  const points = [
    {
      icon: BookOpen,
      title: "Has leído mucho, pero no aplicas",
      description: "Tienes una biblioteca llena de libros de desarrollo personal. Has tomado cursos, escuchado podcasts... pero la información se queda en tu cabeza y no transforma tu vida."
    },
    {
      icon: RefreshCw,
      title: "Repites los mismos patrones emocionales",
      description: "Aunque prometiste que esta vez sería diferente, vuelves a caer en las mismas dinámicas. Las mismas discusiones, las mismas reacciones, los mismos miedos que te paralizan."
    },
    {
      icon: ShieldCheck,
      title: "Entiendes tu herida, pero no logras expandirte",
      description: "Ya identificaste de dónde viene el dolor. Sabes que tu infancia te marcó. Pero ese conocimiento no te ha liberado. Sientes que hay un techo invisible que no te deja crecer."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-widest text-sm uppercase">¿Te identificas?</span>
          <h2 className="font-serif text-4xl md:text-5xl text-olive-800 mt-4 mb-6">Sé que has intentado sanar...</h2>
        </div>

        <div className="space-y-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-3xl bg-beige-50 border border-beige-200 hover:border-gold-300 transition-all duration-300 hover:shadow-md group"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-olive-100 rounded-2xl flex items-center justify-center group-hover:bg-olive-200 transition-colors">
                <point.icon className="w-7 h-7 text-olive-600" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-olive-800 mb-3">{point.title}</h3>
                <p className="text-olive-600 font-light leading-relaxed text-lg">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-serif text-3xl text-olive-700 italic leading-relaxed">
            "No necesitas más información.<br />
            Necesitas transformación guiada."
          </p>
        </div>
      </div>
    </section>
  );
}
