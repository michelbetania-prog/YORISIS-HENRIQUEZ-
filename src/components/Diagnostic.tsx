import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Calendar, Users } from "lucide-react";

export default function Diagnostic() {
  const [step, setStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options = [
    "Siento culpa con frecuencia",
    "Vivo con ansiedad emocional o pensamientos constantes",
    "He experimentado traición en relaciones importantes",
    "Comienzo proyectos o metas pero me cuesta terminarlos",
    "Me cuesta decir “no” a mi familia o a otras personas",
    "A veces siento que no tengo claro mi propósito en la vida"
  ];

  const groups = [
    { name: "SPS1", date: "8 marzo 2026", link: "https://forms.gle/7AUDoZhLR7rRqbKN9" },
    { name: "SPS2", date: "15 marzo 2026", link: "https://forms.gle/DVxRwXtihFSVoHfKA" },
    { name: "SPS1", date: "29 marzo 2026", link: "https://forms.gle/7AUDoZhLR7rRqbKN9" },
    { name: "SPS1", date: "12 abril 2026", link: "https://forms.gle/7AUDoZhLR7rRqbKN9" },
    { name: "SPS2", date: "19 abril 2026", link: "https://forms.gle/DVxRwXtihFSVoHfKA" },
    { name: "SPS1", date: "26 abril 2026", link: "https://forms.gle/7AUDoZhLR7rRqbKN9" }
  ];

  const toggleOption = (option: string) => {
    setSelectedOptions(prev => 
      prev.includes(option) 
        ? prev.filter(o => o !== option) 
        : [...prev, option]
    );
  };

  return (
    <section id="diagnostico" className="py-24 bg-beige-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-olive-800 mb-4">Descubre si este proceso es para ti</h2>
              <p className="text-olive-600 text-lg mb-12 font-light">
                Responde esta breve pregunta para identificar si este proceso de sanación emocional puede ayudarte.
              </p>
              
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-olive-100 text-left">
                <h3 className="text-xl md:text-2xl text-olive-800 font-medium mb-8">
                  ¿Te identificas con alguno de estos sentimientos o situaciones?
                </h3>
                
                <div className="grid gap-4 mb-10">
                  {options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => toggleOption(option)}
                      className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left ${
                        selectedOptions.includes(option)
                          ? "border-gold-500 bg-gold-50 text-olive-800"
                          : "border-olive-50 bg-beige-50/50 text-olive-600 hover:border-olive-200"
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedOptions.includes(option)
                          ? "border-gold-500 bg-gold-500 text-white"
                          : "border-olive-200"
                      }`}>
                        {selectedOptions.includes(option) && <Check className="w-4 h-4" />}
                      </div>
                      <span className="text-lg">{option}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={selectedOptions.length === 0}
                  className="w-full bg-olive-700 text-white py-5 rounded-2xl font-bold text-xl hover:bg-olive-800 transition-all shadow-lg shadow-olive-700/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Ver mi resultado
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-gold-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gold-500" />
                
                <h2 className="font-serif text-4xl md:text-5xl text-olive-800 mb-8">Tu resultado</h2>
                
                <div className="max-w-2xl mx-auto">
                  <p className="text-2xl text-olive-700 leading-relaxed mb-8 font-light">
                    Tu perfil indica que este proceso puede ayudarte a trabajar la <span className="font-semibold text-gold-600">sanación emocional profunda</span>, liberar cargas del pasado y reconectar con tu propósito.
                  </p>
                  
                  <div className="h-px bg-beige-200 w-24 mx-auto mb-8" />
                  
                  <p className="text-olive-600 text-lg mb-12">
                    Cada semana abrimos nuevos grupos con cupos limitados para acompañarte en este proceso.
                  </p>

                  <button
                    onClick={() => setStep(3)}
                    className="group inline-flex items-center gap-3 bg-gold-500 text-olive-950 px-12 py-6 rounded-full font-bold text-xl hover:bg-gold-400 transition-all shadow-2xl shadow-gold-500/30"
                  >
                    <span>Ver próximos grupos</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-olive-800 mb-4">Próximos Grupos</h2>
              <p className="text-olive-600 text-lg mb-12 font-light">
                Selecciona la fecha que mejor se adapte a ti para comenzar tu transformación.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {groups.map((group, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-[2rem] border border-olive-100 shadow-xl hover:border-gold-300 transition-all group text-left"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                        group.name === "SPS1" ? "bg-olive-100 text-olive-700" : "bg-gold-100 text-gold-700"
                      }`}>
                        {group.name === "SPS1" ? "Nivel 1" : "Nivel 2"}
                      </div>
                      <Users className="w-5 h-5 text-olive-300" />
                    </div>
                    
                    <h3 className="font-serif text-2xl text-olive-800 mb-2">{group.name}</h3>
                    
                    <div className="flex items-center gap-2 text-olive-600 mb-8">
                      <Calendar className="w-4 h-4 text-gold-500" />
                      <span className="font-medium">{group.date}</span>
                    </div>

                    <a
                      href={group.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                        group.name === "SPS1"
                          ? "bg-olive-700 text-white hover:bg-olive-800"
                          : "bg-gold-500 text-white hover:bg-gold-600"
                      }`}
                    >
                      Reservar cupo
                    </a>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="mt-12 text-olive-500 hover:text-gold-600 font-medium transition-colors"
              >
                Volver a realizar el diagnóstico
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
