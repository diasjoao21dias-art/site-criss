import { Instagram, Facebook, Twitter } from "lucide-react";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="p-1 rounded-lg group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300">
                <img src={logoImg} alt="Nutri Glow Up Logo" className="h-12 w-auto object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white uppercase">
                Nutri<span className="text-emerald-500">GlowUp</span>
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm leading-relaxed mb-6">
              Sua parceira na busca pela melhor versão de si mesmo. 
              Suplementos premium, resultados reais e compromisso com sua saúde.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-4">
              {[
                { name: 'Início', href: '#hero' },
                { name: 'Produtos', href: '#products' },
                { name: 'Benefícios', href: '#benefits' },
                { name: 'Sobre Nós', href: '#about' }
              ].map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-zinc-400 hover:text-primary transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contato</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>contato@nutriglowup.com</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Nutri Glow Up Suplementos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
