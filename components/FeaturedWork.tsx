"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronUp } from "lucide-react";
import { useItemFade, useStagger } from "@/lib/motion";
import { WORK_CONCEPTS } from "@/data/work";

const MOCK_PATTERNS = [
  <div key="a" className="grid h-full grid-cols-3 gap-2 p-4" aria-hidden>
    <div className="col-span-1 rounded-lg bg-white/5" />
    <div className="col-span-2 flex flex-col gap-2">
      <div className="h-3 w-2/3 rounded bg-white/10" />
      <div className="h-3 w-1/2 rounded bg-white/10" />
      <div className="mt-2 flex-1 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20" />
    </div>
  </div>,
  <div key="b" className="flex h-full flex-col gap-2 p-4" aria-hidden>
    <div className="flex gap-2">
      <div className="h-14 flex-1 rounded-lg bg-white/5" />
      <div className="h-14 flex-1 rounded-lg bg-white/5" />
      <div className="h-14 flex-1 rounded-lg bg-primary/20" />
    </div>
    <div className="flex-1 rounded-lg bg-gradient-to-tr from-surface via-primary/10 to-accent/20" />
  </div>,
  <div key="c" className="flex h-full items-end gap-2 p-4" aria-hidden>
    {[55, 80, 40, 90, 60, 75].map((h, i) => (
      <div
        key={i}
        className="flex-1 rounded-t bg-gradient-to-t from-primary/50 to-accent/50"
        style={{ height: `${h}%` }}
      />
    ))}
  </div>,
];

export default function FeaturedWork() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const container = useStagger(0.12);
  const item = useItemFade();

  return (
    <section id="work" className="bg-base py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={item}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Selected Concepts & Demo Products</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Cách chúng tôi tiếp cận một sản phẩm số
          </h2>
          <p className="mt-4 text-lg text-muted">
            HU hiện chưa công khai dự án khách hàng thực tế. Đây là các bản dựng ý tưởng/kỹ thuật
            minh họa cách tiếp cận, không phải sản phẩm đã bàn giao cho khách hàng.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {WORK_CONCEPTS.map((work, index) => (
            <motion.div
              key={work.title}
              variants={item}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card"
            >
              <div className="relative h-40 border-b border-white/10 bg-surface">
                <span className="absolute top-3 left-3 z-10 rounded-full border border-white/15 bg-base/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-accent backdrop-blur">
                  Concept / Technical Demo
                </span>
                {MOCK_PATTERNS[index % MOCK_PATTERNS.length]}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{work.category}</span>
                <h3 className="mt-2 text-lg font-bold text-ink">{work.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{work.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-surface px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setExpanded((current) => (current === index ? null : index))}
                  aria-expanded={expanded === index}
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {expanded === index ? (
                    <>
                      Ẩn chi tiết
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Xem chi tiết
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {expanded === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="mt-3 overflow-hidden text-sm leading-relaxed text-muted"
                    >
                      {work.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
