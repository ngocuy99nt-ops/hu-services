"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, FileCode2, MonitorSmartphone, Rocket } from "lucide-react";
import { useFadeUp } from "@/lib/motion";

const TRUST_INDICATORS = [
  { icon: Code2, label: "Custom Development" },
  { icon: FileCode2, label: "Source Code Handover" },
  { icon: MonitorSmartphone, label: "Responsive & SEO Ready" },
  { icon: Rocket, label: "Deployment & Support" },
];

export default function Hero() {
  const fadeUp = useFadeUp();

  return (
    <section id="home" className="relative overflow-hidden bg-base pt-36 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:56px_56px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_10%,#070b14_85%)]"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card px-4 py-1.5 text-sm font-medium text-muted shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Đang nhận dự án mới
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mt-8 text-5xl font-extrabold tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          We build digital products <span className="text-accent">that move businesses forward</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl"
        >
          Website, hệ thống nghiệp vụ, tự động hóa và giải pháp AI — được thiết kế, phát triển và triển khai
          từ đầu đến cuối.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-ink shadow-lg shadow-primary/20 transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
          >
            <span>Start a Project</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-card px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-white/25 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
          >
            Explore Our Work
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeUp}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {TRUST_INDICATORS.map((indicator) => (
            <div key={indicator.label} className="flex flex-col items-center gap-2 text-center">
              <indicator.icon className="h-5 w-5 text-accent" aria-hidden />
              <span className="text-xs font-medium text-muted">{indicator.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div initial="hidden" animate="visible" custom={5} variants={fadeUp} className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/10 bg-surface px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <div className="ml-3 h-5 max-w-xs flex-1 rounded-md bg-white/5" />
            </div>
            <div className="grid grid-cols-[64px_1fr] gap-px bg-white/5 sm:grid-cols-[96px_1fr]">
              <div className="flex flex-col gap-3 bg-card p-4">
                <div className="h-2 w-8 rounded bg-white/10" />
                <div className="h-2 w-10 rounded bg-primary/50" />
                <div className="h-2 w-6 rounded bg-white/10" />
                <div className="h-2 w-9 rounded bg-white/10" />
              </div>
              <div className="bg-card p-5 text-left sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-3 w-32 rounded bg-white/10" />
                  <div className="h-7 w-20 rounded-full bg-primary/20" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-surface p-3">
                      <div className="h-1.5 w-10 rounded bg-accent/60" />
                      <div className="mt-2 h-4 w-14 rounded bg-white/10" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex h-24 items-end gap-2 rounded-xl border border-white/10 bg-surface p-4" aria-hidden>
                  {[40, 65, 50, 80, 55, 70, 45].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-accent/60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
