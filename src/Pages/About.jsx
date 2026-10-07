import { useEffect } from "react";
import {
  Lightbulb,
  Shield,
  BookOpen,
  MessageSquare,
  Trophy,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import ScrollReveal from "../components/ScrollReveal";
import CTA from "../sections/CTA";
import { COMPANY } from "../data/company";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always explore better ways to solve problems.",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Build reliable, maintainable, and scalable products.",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Technology never stops evolving, and neither do we.",
  },
  {
    icon: MessageSquare,
    title: "Transparency",
    description: "Clear communication and honest collaboration.",
  },
  {
    icon: Trophy,
    title: "Customer Success",
    description:
      "Our success is measured by the value we create for our clients.",
  },
];

export default function About() {
  useEffect(() => {
    document.title = `About – ${COMPANY.name}`;
  }, []);

  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
              About Us
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              We Build Technology With Purpose.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-400">
              {COMPANY.name} is a technology and software development company
              focused on helping businesses transform ideas into reliable digital
              products. We work across business websites, custom web applications,
              enterprise applications, full-stack development, technology
              consulting, and developer training.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl border border-white/10 bg-navy-800/50 p-8">
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                To empower businesses and developers through modern technology,
                practical solutions, and continuous innovation.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-navy-800/50 p-8">
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                To become a trusted technology partner for businesses while
                building an ecosystem where aspiring developers can gain practical
                skills and become industry-ready.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Values" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <FeatureCard key={v.title} {...v} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}   