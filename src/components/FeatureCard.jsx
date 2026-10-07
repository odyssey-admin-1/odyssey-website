import ScrollReveal from "./ScrollReveal";

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="rounded-2xl border border-white/10 bg-navy-800/40 p-6 transition hover:border-blue-500/25 hover:bg-navy-800/60">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-400">{description}</p>
      </div>
    </ScrollReveal>
  );
}