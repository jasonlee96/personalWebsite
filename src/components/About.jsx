import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading number="01" title="About Me" />
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          {profile.summary}
        </p>
      </Reveal>
    </section>
  );
}
