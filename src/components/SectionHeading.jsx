import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <ScrollReveal className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-sm font-medium uppercase tracking-widest text-blue-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}