"use client";

import { motion } from "framer-motion";
import { usePreferences } from "@/components/PreferencesProvider";
import { useItemFade, useStagger } from "@/lib/motion";

export default function Services() {
  const container = useStagger(0.12);
  const item = useItemFade();
  const { t } = usePreferences();

  return (
    <section id="services" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={item}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">{t.services.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{t.services.description}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-16 grid items-stretch gap-6 lg:grid-cols-3"
        >
          {t.services.cards.map((service) => (
            <motion.div
              key={service.number}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-full flex-col rounded-2xl border border-line bg-card p-7 transition-colors hover:border-line-strong sm:p-8"
            >
              <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
                <span className="text-6xl font-extrabold leading-none tracking-tighter text-faint">
                  {service.number}
                </span>
                <span className="pb-1 text-right text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {service.category}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-bold leading-snug text-ink sm:text-2xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
              <ul className="mt-8 space-y-3 border-t border-line pt-6 lg:mt-auto">
                {service.items.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-body">
                    <span className="h-px w-4 shrink-0 bg-accent/60" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
