"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useItemFade, useStagger } from "@/lib/motion";
import { FAQ_ITEMS } from "@/data/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const container = useStagger(0.06);
  const item = useItemFade();

  return (
    <section id="faq" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={item}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Câu hỏi thường gặp
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-12 flex flex-col gap-3"
        >
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div key={faq.question} variants={item} className="rounded-2xl border border-white/10 bg-card">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span className="text-sm font-semibold text-ink sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
