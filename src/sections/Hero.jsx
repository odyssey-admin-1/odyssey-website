import logo from "../assets/logo/logo.png";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { COMPANY } from "../data/company";
import Button from "../components/Button";

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReduced ? 0 : 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:min-h-screen">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-sky-600/15 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Technology & Software Development
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {COMPANY.tagline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {COMPANY.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Button to="/contact" icon={ArrowRight}>
              Start a Project
            </Button>
            <Button to="/services" variant="secondary">
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Abstract visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto mt-4 h-[320px] w-full max-w-sm sm:h-[380px] sm:max-w-md lg:mt-0 lg:h-[420px]"
        >
          <FloatingCards prefersReduced={prefersReduced} />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingCards({ prefersReduced }) {
  const cards = [
    { label: "React", top: "8%", left: "10%", delay: 0 },
    { label: "APIs", top: "20%", left: "55%", delay: 0.4 },
    { label: "Cloud", top: "55%", left: "5%", delay: 0.8 },
    { label: "Scale", top: "65%", left: "50%", delay: 1.2 },
  ];

  return (
    <div className="relative h-full w-full">
      {/* Central orb */}
      <motion.div
        animate={
          prefersReduced
            ? {}
            : { scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/40 to-sky-600/40 blur-2xl"
      />
      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/30 bg-navy-800/80 shadow-2xl shadow-blue-500/20">
        <img src={logo} alt="Odyssey logo" className="h-16 w-16 object-contain" />
      </div>

      {/* Orbit rings */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

      {cards.map((c) => (
        <motion.div
          key={c.label}
          className="absolute rounded-xl border border-white/10 bg-navy-800/90 px-4 py-2.5 shadow-xl backdrop-blur-sm"
          style={{ top: c.top, left: c.left }}
          animate={
            prefersReduced
              ? {}
              : { y: [0, -10, 0] }
          }
          transition={{
            duration: 4,
            delay: c.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-sm font-medium text-blue-200">{c.label}</span>
        </motion.div>
      ))}
    </div>
  );
}