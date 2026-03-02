import { CheckCircle2 } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      level: "1",
      title: "Sanada para Servir",
      subtitle: "NIVEL UNO",
      duration: "Programa de 21 días",
      features: [
        "Sanación de vientre materno",
        "Sanación con tus Padres",
        "Reconexión con tu niña interior",
        "Sanación Emocional y crecimiento Espiritual",
        "Ejercicios prácticos y acompañamiento"
      ],
      popular: false,
      color: "olive"
    },
    {
      level: "2",
      title: "Sanada para Servir",
      subtitle: "NIVEL DOS",
      duration: "Programa de 6 semanas",
      features: [
        "Conectar con tu Amor Propio",
        "Autoestima, tus apegos y poner límites sanos",
        "Ordenar tus finanzas desde la conciencia",
        "Transformar relaciones desde el Amor y el Perdón",
        "Conectar con tu Propósito de Vida"
      ],
      popular: false,
      color: "gold"
    }
  ];

  return (
    <section id="programas" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl text-olive-800 mb-6 uppercase tracking-tight">TU CAMINO DE TRANSFORMACIÓN</h2>
          <p className="text-olive-600 max-w-3xl mx-auto text-lg md:text-xl font-light">
            Dos cursos diseñados para acompañarte y guiarte en la sanación de vientre materno y crecimiento espiritual, hasta conectar con tu propósito de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <div key={index} className="relative group">
              <div className={`relative h-full bg-white rounded-[2.5rem] p-10 md:p-12 border-2 transition-all duration-500 ${
                program.popular ? "border-gold-400 shadow-2xl shadow-gold-200/50" : "border-olive-100 hover:border-olive-300"
              }`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-serif text-2xl font-bold ${
                    program.color === "gold" ? "bg-gold-100 text-gold-700" : "bg-olive-100 text-olive-700"
                  }`}>
                    {program.level}
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-olive-800">{program.title}</h3>
                    <p className={`${program.color === "gold" ? "text-gold-600" : "text-olive-500"} font-medium`}>
                      {program.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gold-600 font-semibold text-lg mb-8">{program.duration}</p>

                <ul className="space-y-5 mb-12">
                  {program.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-4">
                      <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
                        program.color === "gold" ? "text-gold-500" : "text-olive-500"
                      }`} />
                      <span className="text-olive-700 text-lg font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-beige-200 mt-auto text-center">
                  <div className="space-y-4">
                    <p className="text-olive-600 font-medium">Próximas fechas por confirmar</p>
                    <a
                      href="https://wa.me/18622879211"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg ${
                        program.popular 
                          ? "bg-gold-500 text-white hover:bg-gold-600 shadow-gold-500/20" 
                          : "bg-olive-700 text-white hover:bg-olive-800 shadow-olive-700/20"
                      }`}
                    >
                      Consultar próximas fechas
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
