import { Video, FileText, Heart, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Video,
      title: "Encuentros Guiados",
      description: "Sesiones en vivo donde te guío paso a paso por cada proceso de sanación y liberación."
    },
    {
      icon: FileText,
      title: "Tareas Terapéuticas",
      description: "Ejercicios prácticos diseñados para integrar cada aprendizaje en tu vida diaria de forma orgánica."
    },
    {
      icon: Heart,
      title: "Espacio Seguro",
      description: "Un contenedor amoroso y confidencial donde puedes ser vulnerable sin temor al juicio."
    },
    {
      icon: Users,
      title: "Acompañamiento Cercano",
      description: "Mi presencia y apoyo constante durante todo tu proceso para que nunca te sientas sola."
    }
  ];

  return (
    <section className="py-24 bg-olive-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full leaf-pattern opacity-5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold-400 font-medium tracking-widest text-sm uppercase">Qué Incluye</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">Tu experiencia de transformación</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-8 bg-olive-800 rounded-3xl flex items-center justify-center border border-olive-700 group-hover:border-gold-500/50 transition-all duration-500 group-hover:-translate-y-2">
                <feature.icon className="w-10 h-10 text-gold-400" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-gold-300">{feature.title}</h3>
              <p className="text-olive-200 text-base leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
