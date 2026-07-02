import { experience } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading number="03" title="Experience" />
      </Reveal>
      <div className="space-y-8">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.period}`} delay={i * 80}>
            <div className="rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/5 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {job.role}{" "}
                  <span className="text-accent">@ {job.company}</span>
                </h3>
                <span className="font-mono text-sm text-muted">
                  {job.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 text-accent-2">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
