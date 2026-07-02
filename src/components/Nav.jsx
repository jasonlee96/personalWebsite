"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/profile";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navItems[0]?.href ?? "");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-lg font-semibold text-foreground"
        >
          <span className="text-accent">&gt;</span> {profile.initials}
        </a>

        <ul className="hidden items-center gap-8 font-mono text-sm md:flex">
          {navItems.map((item, i) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`group relative py-1 transition-colors ${
                    isActive ? "text-accent" : "text-muted hover:text-accent"
                  }`}
                >
                  <span className="text-accent">0{i + 1}.</span> {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded border border-accent px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/10 md:inline-block"
        >
          Contact
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-border bg-background px-6 py-6 font-mono text-sm text-muted md:hidden">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`transition-colors hover:text-accent ${
                  active === item.href ? "text-accent" : ""
                }`}
              >
                <span className="text-accent">0{i + 1}.</span> {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block rounded border border-accent px-4 py-2 text-accent"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
