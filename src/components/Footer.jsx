import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 text-center font-mono text-xs text-muted">
      <p>
        Built by {profile.name} ·{" "}
        <a
          href={profile.links.projectRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          view source
        </a>
      </p>
    </footer>
  );
}
