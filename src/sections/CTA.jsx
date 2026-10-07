import { ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import Button from "../components/Button";
import { COMPANY } from "../data/company";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 via-navy-800 to-sky-600/20 px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
            <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
              Ready to build something great?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-slate-300">
              Tell us about your idea. {COMPANY.name} will help you turn it into
              a reliable digital product.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/contact" icon={ArrowRight}>
                Start a Project
              </Button>
              <Button to="/services" variant="secondary">
                Explore Services
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}