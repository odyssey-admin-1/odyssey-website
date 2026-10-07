import SectionHeading from "../components/SectionHeading";
import TechIcon from "../components/TechIcon";

const techs = [
  "React",
  "JavaScript",
  "TypeScript",
  "Python",
  "FastAPI",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Git",
];

export default function Technologies() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Built With Modern Technology"
          subtitle="We work with proven, modern tools that power reliable products."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {techs.map((t, i) => (
            <TechIcon key={t} name={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}