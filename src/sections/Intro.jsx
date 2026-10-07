import { Zap, TrendingUp, Shield, Handshake } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";

const features = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Modern technologies and forward-thinking solutions.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Solutions designed to grow with your business.",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Clean, reliable, and maintainable software.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We work closely with clients to turn ideas into successful products.",
  },
];

export default function Intro() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technology That Moves Your Business Forward."
          subtitle="At Odyssey AI Systems, we combine modern technology, thoughtful design, and practical engineering to create digital solutions that solve real business problems."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}