import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {subtitle && (
          <span className="inline-block mb-3 text-sm font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4">
          {title}
        </h2>
        <div className={`h-1.5 w-24 bg-gradient-to-r from-primary to-emerald-800 rounded-full ${align === "center" ? "mx-auto" : ""}`} />
      </motion.div>
    </div>
  );
}
