"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useItemFade, useStagger } from "@/lib/motion";
import { SERVICES } from "@/data/services";

export default function Services() {
  const container = useStagger(0.12);
  const item = useItemFade();

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
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Services</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Giải pháp công nghệ cho từng bài toán vận hành
          </h2>
          <p className="mt-4 text-lg text-muted">
            Bốn nhóm dịch vụ cốt lõi — mỗi nhóm giải quyết một loại bài toán kinh doanh cụ thể.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-card p-8 transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-accent">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              <ul className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
                {service.items.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {feature}
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
