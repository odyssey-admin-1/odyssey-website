import {
  Cpu,
  Target,
  Layers,
  Eye,
  Wrench,
  HeartHandshake,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";

const reasons = [
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "We use modern technologies and development practices to create reliable digital products.",
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description:
      "We don't just write code. We understand the business problem and build solutions around it.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Our applications are designed with future growth in mind.",
  },
  {
    icon: Eye,
    title: "Transparent Development",
    description:
      "Clear communication and visibility throughout the development process.",
  },
  {
    icon: Wrench,
    title: "Practical Expertise",
    description:
      "Our training and development approach focuses on real-world implementation.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "We aim to build long-term relationships rather than simply deliver a project and disappear.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why Choose Odyssey AI Systems?" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <FeatureCard key={r.title} {...r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}