import { useEffect } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "../components/ContectFrom";  
import { COMPANY } from "../data/company";

export default function Contact() {
  useEffect(() => {
    document.title = `Contact – ${COMPANY.name}`;
  }, []);

  const info = [
    { icon: Mail, label: "Email", value: COMPANY.email },
    { icon: Phone, label: "Phone", value: COMPANY.phone },
    { icon: MapPin, label: "Location", value: COMPANY.location },
    { icon: Clock, label: "Hours", value: COMPANY.hours },
  ];

  return (
    <PageTransition>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
              Let&apos;s Build Something Great Together.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              Have an idea, business requirement, or project in mind? Tell us
              about it and the {COMPANY.name} team will get back to you.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-5">
            <ScrollReveal className="lg:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-navy-800/40 p-6 sm:p-8">
                <ContactForm />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-navy-800/40 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white">{COMPANY.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Building digital solutions for businesses and empowering the
                  next generation of developers.
                </p>
                <ul className="mt-8 space-y-5">
                  {info.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                          {label}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-200">{value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}