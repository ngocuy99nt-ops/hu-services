"use client";

import { useReducedMotion } from "framer-motion";
import { TECHNOLOGIES } from "@/data/technology";

export default function TechMarquee() {
  const reduce = useReducedMotion();
  const items = reduce ? TECHNOLOGIES : [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section aria-label="Technology stack" className="border-y border-white/10 bg-surface py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-muted">
          Công nghệ chúng tôi làm việc cùng
        </p>
      </div>

      {reduce ? (
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 px-6">
          {items.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-card px-4 py-2 text-sm text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      ) : (
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max gap-3 [animation:marquee_32s_linear_infinite]">
            {items.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="shrink-0 rounded-full border border-white/10 bg-card px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
