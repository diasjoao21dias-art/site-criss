import { Link } from "wouter";
import { Menu, X, Dumbbell } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Produtos", href: "#products" },
    { name: "Benefícios", href: "#benefits" },
    { name: "Sobre", href: "#about" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => scrollToSection("#hero")}
          >
            <div className="bg-emerald-500/20 p-2 rounded-lg group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300">
              <Dumbbell className="h-6 w-6 text-emerald-500" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase text-white">
              Nutri<span className="text-emerald-500">GlowUp</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-zinc-950 shadow-2xl flex flex-col border-l border-white/5"
            >
              <div className="p-6 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-500/20 p-2 rounded-lg">
                    <Dumbbell className="h-5 w-5 text-emerald-500" />
                  </div>
                  <span className="text-lg font-bold text-white tracking-tighter uppercase">
                    Nutri<span className="text-emerald-500">GlowUp</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="flex items-center w-full px-6 py-4 text-2xl font-black text-white hover:bg-emerald-500/10 hover:text-emerald-500 rounded-2xl transition-all text-left uppercase tracking-tighter"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 border-t border-white/10 bg-zinc-950/50 backdrop-blur-sm">
                <button 
                  onClick={() => scrollToSection("#products")}
                  className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-black rounded-2xl uppercase tracking-widest text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all active:scale-[0.98]"
                >
                  Comprar Agora
                </button>
                <p className="text-center text-zinc-500 text-sm mt-4 font-medium uppercase tracking-widest">
                  Nutri GlowUp © 2024
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
