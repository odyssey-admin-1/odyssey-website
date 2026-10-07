import SectionHeading from "../components/SectionHeading";
import ProcessStep from "../components/ProcessStep";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, users, goals, and requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Create the product experience, architecture, and technical roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the solution using modern technologies and engineering practices.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "Deploy the product, monitor it, improve it, and scale it as the business grows.",
  },
];

export default function Process() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Process"
              title="From Idea to Impact"
              subtitle="A clear, collaborative process that turns ideas into reliable digital products."
            />
          </div>
          <div>
            {steps.map((s, i) => (
              <ProcessStep key={s.number} {...s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}