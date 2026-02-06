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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-zinc-950 z-50 md:hidden shadow-2xl border-l border-white/5 flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-white/5">
                <span className="text-lg font-bold text-white">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="px-4 py-8 flex flex-col gap-2 overflow-y-auto flex-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center w-full px-6 py-4 text-xl font-bold text-white hover:bg-emerald-500/10 hover:text-emerald-500 rounded-xl transition-all"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <div className="p-8 border-t border-white/5">
                <button 
                  onClick={() => scrollToSection("#products")}
                  className="w-full py-4 bg-emerald-500 text-black font-black rounded-full uppercase tracking-widest"
                >
                  Comprar Agora
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
