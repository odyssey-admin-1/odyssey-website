import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function TechIcon({ name, index = 0 }) {
  return (
    <ScrollReveal delay={index * 0.04}>
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-navy-800/50 px-5 py-4 transition hover:border-blue-500/30"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-sm font-bold text-blue-300">
          {name.slice(0, 2).toUpperCase()}
        </div>
        <span className="text-xs font-medium text-slate-300">{name}</span>
      </motion.div>
    </ScrollReveal>
  );
}