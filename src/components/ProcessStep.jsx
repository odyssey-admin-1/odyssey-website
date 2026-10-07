import ScrollReveal from "./ScrollReveal";

export default function ProcessStep({ number, title, description, index }) {
  return (
    <ScrollReveal delay={index * 0.12} className="relative">
      <div className="flex gap-5">
        <div className="flex flex-col items-center">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-blue-500/10 text-sm font-bold text-blue-300">
            {number}
          </div>
          {index < 3 && (
            <div className="mt-2 h-full w-px flex-1 bg-gradient-to-b from-blue-500/40 to-transparent min-h-[40px]" />
          )}
        </div>
        <div className="pb-10">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}