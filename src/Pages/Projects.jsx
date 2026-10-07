import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";
import { COMPANY } from "../data/company";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  useEffect(() => {
    document.title = `Projects – ${COMPANY.name}`;
  }, []);

  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
              Projects
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              Work We&apos;ve Delivered.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              A look at the projects we have built for our clients.
            </p>
          </ScrollReveal>

          {PROJECTS.length === 0 ? (
            <p className="mt-14 text-slate-400">
              Projects will be added here soon.
            </p>
          ) : (
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project) => (
                <ScrollReveal key={project.name}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}