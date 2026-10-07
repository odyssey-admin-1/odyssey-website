import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Building2,
  Code2,
  Lightbulb,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const iconMap = {
  Globe,
  LayoutDashboard,
  Building2,
  Code2,
  Lightbulb,
  GraduationCap,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || Code2;

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-navy-800/50 p-6 transition-colors hover:border-blue-500/30 hover:bg-navy-800/80"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 transition group-hover:bg-blue-500/25">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-white">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {service.description}
          </p>
          <Link
            to="/services"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}