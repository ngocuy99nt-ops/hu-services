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
      </div>
    </section>
  );
}
