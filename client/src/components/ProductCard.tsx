import { ProductResponse } from "@shared/routes";
import { motion } from "framer-motion";
import { ShoppingCart, Check, Star } from "lucide-react";

interface ProductCardProps {
  product: ProductResponse;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Image Area */}
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10">
            {product.category}
          </span>
        </div>

        {/* Rating Mockup */}
        <div className="absolute top-4 right-4 z-20 flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-6 z-20 -mt-20">
        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Price & Action */}
        <div className="mt-auto space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-sm text-zinc-500 line-through block">De: R$ 199,90</span>
              <span className="text-2xl font-bold text-white tracking-tight">{product.price}</span>
            </div>
            <div className="bg-secondary/20 px-2 py-1 rounded text-xs font-bold text-secondary-foreground uppercase">
              Oferta
            </div>
          </div>

          <a
            href={product.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <ShoppingCart className="w-4 h-4" />
            Comprar Agora
          </a>
          
          <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
            <Check className="w-3 h-3 text-green-500" /> 
            <span>Entrega Garantida</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
