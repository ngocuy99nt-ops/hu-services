"use client";

import { motion } from "framer-motion";
import { usePreferences } from "@/components/PreferencesProvider";
import { useFadeUp } from "@/lib/motion";

export default function About() {
  const fadeUp = useFadeUp();
  const { t } = usePreferences();

  return (
    <section id="about" className="bg-base py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-24 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={fadeUp}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">{t.about.eyebrow}</span>

          <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            <span className="block">
              {t.about.title}
            </span>
            <span className="mt-5 block text-body">
              {t.about.titleAccent}
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-[1rem] leading-7 text-muted">
            {t.about.description}
          </p>

          <p className="mt-4 max-w-xl text-[1rem] leading-7 text-muted">
            {t.about.descriptionSecondary}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={1}
          variants={fadeUp}
          className="border-t border-line"
        >
          {t.about.principles.map((principle) => (
            <div
              key={principle.number}
              className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-7 sm:grid-cols-[3rem_1fr] sm:gap-6 lg:py-8"
            >
              <span className="pt-1 text-xs font-semibold tracking-wider text-subtle">{principle.number}</span>
              <div>
                <h3 className="text-lg font-bold leading-snug text-ink sm:text-xl">{principle.title}</h3>
                <div className="mt-3 max-w-2xl space-y-3 text-sm leading-6 text-muted sm:text-[1rem] sm:leading-7">
                  {principle.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
