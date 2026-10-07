import { useEffect } from "react";
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
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import Button from "../components/Button";
import CTA from "../sections/CTA";
import { SERVICES } from "../data/services";
import { COMPANY } from "../data/company";

const iconMap = {
  Globe,
  LayoutDashboard,
  Building2,
  Code2,
  Lightbulb,
  GraduationCap,
};

export default function Services() {
  useEffect(() => {
    document.title = `Services – ${COMPANY.name}`;
  }, []);

  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
              Services
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              What We Build
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              From your first digital presence to enterprise-scale applications
              and developer training — end-to-end technology solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-24 px-4 pb-20 sm:px-6 lg:px-8">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon] || Code2;
          const reverse = index % 2 === 1;

          return (
            <ScrollReveal key={service.id}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <span className="text-sm font-bold text-blue-400/80">
                    {String(service.id).padStart(2, "0")}
                  </span>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                      {service.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    {service.longDescription}
                  </p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {service.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button to={service.ctaPath} icon={ArrowRight}>
                      {service.cta}
                    </Button>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-navy-800/50 p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    What&apos;s included
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>

      <CTA />
    </PageTransition>
  );
}