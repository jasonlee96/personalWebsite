import { profile } from "@/data/profile";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col justify-center px-6 pt-24 pb-20 md:min-h-[85vh] md:pt-20"
    >
      <p className="font-mono text-accent">Hi, my name is</p>
      <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-6xl">
        {profile.name}.
      </h1>
      <h2 className="mt-2 text-3xl font-bold text-muted sm:text-5xl">
        <Typewriter text="I build things for the web." />
      </h2>
      <p className="mt-6 max-w-xl text-lg text-muted">{profile.tagline}</p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
