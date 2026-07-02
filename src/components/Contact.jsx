import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <Reveal>
        <p className="font-mono text-accent">06. What&apos;s Next?</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted">
          I&apos;m actively exploring Senior / Lead Software Engineer roles.
          Whether you have an opportunity in mind or just want to connect,
          my inbox is open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded border border-accent px-8 py-4 font-mono text-accent transition-colors hover:bg-accent/10"
        >
          Say Hello
        </a>

        <div className="mt-10 flex justify-center gap-6 font-mono text-sm text-muted">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
