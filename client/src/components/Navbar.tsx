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

          {/* Desktop & Mobile Links (Simple text menu) */}
          <div className="flex items-center space-x-4 sm:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-[10px] sm:text-sm font-bold text-zinc-400 hover:text-emerald-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
