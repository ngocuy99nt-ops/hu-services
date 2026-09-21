"use client";

import { motion } from "framer-motion";
import { usePreferences } from "@/components/PreferencesProvider";
import { useItemFade, useStagger } from "@/lib/motion";
import { WHY_US } from "@/data/whyUs";

export default function WhyUs() {
  const container = useStagger(0.1);
  const item = useItemFade();
  const { t } = usePreferences();

  return (
    <section id="why-us" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={item}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">{t.whyUs.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            {t.whyUs.title}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.whyUs.cards.map((card, index) => {
            const Icon = WHY_US[index].icon;
            return (
            <motion.div
              key={card.title}
              variants={item}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-[1rem] font-bold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
