import { motion } from "framer-motion";
import { ShieldCheck, Truck, Clock, Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Features() {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Qualidade Premium",
      description: "Matéria-prima importada e selecionada para garantir a pureza e eficácia máxima."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "100% Seguro",
      description: "Produtos testados em laboratório e aprovados pela ANVISA. Sua saúde em primeiro lugar."
    },
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      title: "Entrega Rápida",
      description: "Logística otimizada para todo o Brasil. Receba seus suplementos em tempo recorde."
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Resultados Visíveis",
      description: "Fórmulas concentradas para acelerar seus resultados e atingir seus objetivos."
    }
  ];

  return (
    <section id="features" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Por que escolher a Nutri Glow Up?" 
          subtitle="Nossos Diferenciais" 
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className="mb-6 p-4 bg-zinc-800 rounded-xl inline-block group-hover:bg-primary/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
