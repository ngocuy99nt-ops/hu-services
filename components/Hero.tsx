"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, FileCode2, MonitorSmartphone, Rocket } from "lucide-react";
import { usePreferences } from "@/components/PreferencesProvider";
import { useFadeUp } from "@/lib/motion";

const TRUST_ICONS = [Code2, FileCode2, MonitorSmartphone, Rocket];

export default function Hero() {
  const fadeUp = useFadeUp();
  const { t } = usePreferences();

  return (
    <section id="home" className="relative overflow-hidden bg-base pt-36 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(to_right,var(--theme-grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--theme-grid-line)_1px,transparent_1px)] [background-size:56px_56px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 [background-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_10%,var(--theme-base)_85%)]"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-sm font-medium text-muted shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t.hero.availability}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mt-8 text-5xl font-extrabold tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          {t.hero.title} <span className="text-accent">{t.hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl"
        >
          {t.hero.description}
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
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[1rem] font-semibold text-on-primary shadow-lg shadow-primary/20 transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto"
          >
            <span>{t.hero.cta}</span>
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
          {t.hero.trustItems.map((label, index) => {
            const Icon = TRUST_ICONS[index];
            return (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon className="h-5 w-5 text-accent" aria-hidden />
                <span className="text-xs font-medium text-muted">{label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
