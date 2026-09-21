"use client";

import { motion } from "framer-motion";
import { useItemFade, useStagger } from "@/lib/motion";
import { PROCESS_STEPS } from "@/data/process";

export default function Process() {
  const container = useStagger(0.1);
  const item = useItemFade();

  return (
    <section id="process" className="bg-base py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={item}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Process</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Một quy trình rõ ràng, không phải một hộp đen
          </h2>
          <p className="mt-4 text-lg text-muted">
            Sáu bước để mọi dự án đi từ ý tưởng đến hệ thống vận hành thực tế.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="rounded-2xl border border-white/10 bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-accent">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-muted">{step.number}</span>
              </div>
              <h3 className="mt-5 text-base font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
