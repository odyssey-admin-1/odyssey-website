import { Star, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  const { name, client, clientInfo, link, rating, review, description } =
    project;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-800/40 p-6 transition hover:border-blue-500/40">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      <div className="mt-5 border-t border-white/10 pt-5">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          Client
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-200">{client}</p>
        <p className="mt-1 text-sm text-slate-400">{clientInfo}</p>
      </div>

      <div className="mt-5 flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            className={`h-4 w-4 ${
              n <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-slate-600"
            }`}
          />
        ))}
      </div>
      <p className="mt-2 text-sm italic text-slate-300">&ldquo;{review}&rdquo;</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-blue-400 hover:text-blue-300"
      >
        Visit Project <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}