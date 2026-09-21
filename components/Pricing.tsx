"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { usePreferences } from "@/components/PreferencesProvider";
import { useItemFade, useStagger } from "@/lib/motion";

export default function Pricing() {
  const container = useStagger(0.1);
  const item = useItemFade();
  const { t } = usePreferences();

  return (
    <section id="pricing" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={item}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">{t.pricing.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{t.pricing.description}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.pricing.tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={item}
              className={`flex flex-col rounded-2xl border p-6 ${
                tier.highlighted ? "border-accent/40 bg-card shadow-lg shadow-primary/10" : "border-line bg-card"
              }`}
            >
              <h3 className="text-[1rem] font-bold text-ink">{tier.name}</h3>
              <p className="mt-3 text-xl font-extrabold text-accent">{tier.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{tier.description}</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-body">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={item}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[1rem] font-semibold text-on-primary shadow-lg shadow-primary/20 transition-all hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {t.pricing.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
