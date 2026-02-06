import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/30 via-black to-black opacity-60" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
      
      {/* Floating Elements Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-white tracking-wide">Potencialize seu treino</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
            TRANSFORME SEU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600">
              CORPO HOJE
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Suplementos de alta performance para quem busca resultados reais. 
            Energia, força e recuperação em cada dose.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={scrollToProducts}
              className="group px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] flex items-center justify-center gap-2"
            >
              Comprar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-transparent border-2 border-white/10 hover:border-white/30 text-white font-bold rounded-full transition-all hover:bg-white/5"
            >
              Saiba Mais
            </button>
          </div>
        </motion.div>

        {/* Right Column: Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Main Hero Image */}
          <div className="relative z-20">
            {/* Unsplash: Fit man working out with ropes */}
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" 
              alt="Atleta em alta performance" 
              className="rounded-3xl shadow-2xl border border-white/10 relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500 w-[80%] mx-auto"
            />
            
            {/* Floating Supplement Bottle Mockup (Placeholder) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-5 z-30 w-48 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Zap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Energia Máxima</p>
                  <p className="text-xs text-zinc-400">+40% Performance</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Circle Behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
