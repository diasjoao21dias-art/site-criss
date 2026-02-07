import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { useProducts } from "@/hooks/use-products";
import { Loader2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { type Product } from "@shared/schema";

export default function Home() {
  const { data: products, isLoading, error } = useProducts();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="overflow-x-hidden">
        <Hero />
        
        {/* Products Section */}
        <section id="products" className="py-24 bg-zinc-900 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 to-transparent opacity-50" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading 
              title="Nossos Produtos" 
              subtitle="Ofertas Especiais" 
            />

            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <p className="text-zinc-400">Carregando catálogo...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Erro ao carregar produtos</h3>
                <p className="text-zinc-400">Por favor, tente novamente mais tarde.</p>
              </div>
            ) : products?.length === 0 ? (
               <div className="text-center py-20 text-zinc-400">
                 <p>Nenhum produto disponível no momento.</p>
               </div>
            ) : (
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {products?.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>

        <Benefits />
        <Features />

        {/* About Section */}
        <section id="about" className="py-24 bg-black relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-emerald-600 rounded-3xl blur-lg opacity-30" />
                {/* Unsplash: Woman drinking protein shake or water in gym */}
                <img 
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80" 
                  alt="Estilo de vida saudável" 
                  className="relative rounded-2xl shadow-2xl border border-white/10 z-10"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <SectionHeading 
                  title="Sobre Nós" 
                  subtitle="Nossa Missão" 
                  align="left" 
                />
                
                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                  <p>
                    A <strong className="text-white">Nutri Glow Up</strong> nasceu da paixão pelo esporte e pela vida saudável. 
                    Nossa missão é democratizar o acesso a suplementação de alta qualidade.
                  </p>
                  <p>
                    Acreditamos que cada pessoa possui um potencial ilimitado de transformação. 
                    Nossos produtos são desenvolvidos para ser o combustível dessa mudança, 
                    proporcionando a energia e a nutrição necessárias para você superar seus limites.
                  </p>
                  
                  <div className="pt-6">
                    <button className="text-primary font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2 group">
                      Conheça nossa história
                      <span className="block h-0.5 w-8 bg-primary group-hover:w-12 transition-all" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
