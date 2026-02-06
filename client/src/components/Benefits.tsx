import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap, HeartPulse } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Benefits() {
  const benefits = [
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Energia Instantânea",
      description: "Sinta o aumento de foco e disposição logo na primeira dose para seus treinos mais intensos."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "Ganho de Massa Magra",
      description: "Fórmulas otimizadas para acelerar a síntese proteica e o desenvolvimento muscular real."
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-primary" />,
      title: "Recuperação Acelerada",
      description: "Reduza o cansaço pós-treino e esteja pronto para o próximo desafio em menos tempo."
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-primary" />,
      title: "Saúde e Imunidade",
      description: "Ingredientes que além da performance, fortalecem seu sistema imunológico e saúde geral."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Benefícios dos Nossos Produtos" 
          subtitle="Sua Transformação" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="mb-6 p-4 bg-primary/10 rounded-xl inline-block group-hover:bg-primary/20 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
