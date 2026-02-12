import { ArrowUpRight } from "lucide-react";
import {
  emailLink,
  fullName,
  instagramUrl,
  linkedInUrl,
  twitterUrl,
} from "../utils/utils";

export function Footer2() {
  return (
    <footer
      id="contact"
      className="relative py-32 px-6 md:px-12 bg-(--bg-secondary) text-(--text-primary) overflow-hidden transition-colors duration-500 border-t border-(--border-color)"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-350 mx-auto flex flex-col items-center text-center">
        <span className="inline-block px-3 py-1 mb-8 border border-(--border-color) rounded-full text-xs font-mono uppercase tracking-widest text-(--text-secondary)">
          Open for opportunities
        </span>

        <h2 className="text-[12vw] leading-[0.8] font-black tracking-tighter mb-12 mix-blend-difference">
          Let's
          <br />
          Create.
        </h2>

        <a
          href={emailLink.href}
          className="group relative inline-flex items-center gap-4 text-2xl md:text-4xl font-serif italic hover:text-(--text-secondary) transition-colors duration-300"
        >
          <span>{emailLink.text}</span>
          <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="w-full h-px bg-(--border-color) my-24" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-(--text-secondary) font-mono uppercase tracking-wider">
          <div className="flex gap-8">
            <a
              href={linkedInUrl}
              className="hover:text-(--text-primary) transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={twitterUrl}
              className="hover:text-(--text-primary) transition-colors"
            >
              Twitter/X
            </a>
            <a
              href={instagramUrl}
              className="hover:text-(--text-primary) transition-colors"
            >
              Instagram
            </a>
          </div>
          <span>
            © {new Date().getFullYear()} {fullName}
          </span>
        </div>
      </div>
    </footer>
  );
}
