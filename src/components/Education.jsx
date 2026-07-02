import { education } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading number="05" title="Education" />
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((entry, i) => (
          <Reveal key={entry.school} delay={i * 80}>
            <div className="h-full rounded-lg border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {entry.degree}
              </h3>
              <p className="mt-1 text-accent">{entry.school}</p>
              <div className="mt-3 flex items-center justify-between font-mono text-sm text-muted">
                <span>{entry.period}</span>
                <span>{entry.detail}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
