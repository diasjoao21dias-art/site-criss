import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.png";

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
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 md:gap-4 cursor-pointer group flex-shrink-0" 
            onClick={() => scrollToSection("#hero")}
            data-testid="link-logo"
          >
            <div className="p-1 rounded-lg group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300">
              <img src={logoImg} alt="Nutri Glow Up Logo" className="h-14 sm:h-18 md:h-20 lg:h-24 w-auto object-contain" />
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter uppercase text-white whitespace-nowrap">
              Nutri<span className="text-emerald-500">GlowUp</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center bg-zinc-900/50 rounded-full px-6 py-1.5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-xs font-bold text-zinc-400 hover:text-emerald-500 transition-colors uppercase tracking-[0.2em]"
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection("#products")}
              className="hidden sm:block px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-[10px] font-black rounded-full uppercase tracking-widest transition-all active:scale-95"
              data-testid="button-buy-desktop"
            >
              Comprar
            </button>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-400 p-2 hover:text-white transition-colors"
                data-testid="button-menu-toggle"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 md:hidden"
          >
            <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center w-full px-4 py-3 text-sm font-bold text-zinc-300 hover:bg-emerald-500/10 hover:text-emerald-500 rounded-xl transition-all uppercase tracking-widest"
                    data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                ))}
                <div className="mt-2 pt-2 border-t border-white/5">
                  <button 
                    onClick={() => scrollToSection("#products")}
                    className="w-full py-4 bg-emerald-500 text-black font-black rounded-xl uppercase tracking-widest text-xs transition-all active:scale-[0.98]"
                    data-testid="button-buy-mobile"
                  >
                    Comprar Agora
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
