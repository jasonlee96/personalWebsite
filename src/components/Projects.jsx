import Image from "next/image";
import { projects } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import skillsetAnalysisImg from "@/assets/skillset-analysis.png";
import invoiceGeneratorImg from "@/assets/invoice-generator.png";
import supezyImg from "@/assets/supezy.png";

const images = {
  skillsetAnalysis: skillsetAnalysisImg,
  invoiceGenerator: invoiceGeneratorImg,
  supezy: supezyImg,
};

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading number="04" title="Projects" />
      </Reveal>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent"
            >
              <div className="relative h-44 w-full overflow-hidden bg-surface-2">
                <Image
                  src={images[project.imageId]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs text-accent">
                  {project.subtitle}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-muted">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-border px-2 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
