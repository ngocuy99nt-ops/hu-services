"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { usePreferences } from "@/components/PreferencesProvider";
import { useFadeUp } from "@/lib/motion";
import { SITE } from "@/data/site";

type FormState = {
  name: string;
  contact: string;
  service: string;
  budget: string;
  message: string;
  company: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  contact: "",
  service: "",
  budget: "",
  message: "",
  company: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fadeUp = useFadeUp();
  const { t } = usePreferences();
  const contactChannels = [
    { icon: MessageCircle, label: "Zalo", value: t.contact.channels.zalo, href: SITE.zalo },
    { icon: Mail, label: "Email", value: SITE.email, href: SITE.emailHref },
    { icon: Phone, label: t.contact.channels.phone, value: SITE.phone, href: SITE.phoneHref },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      await res.json();

      if (!res.ok) {
        throw new Error(t.contact.form.error);
      }

      setStatus("success");
      setForm(INITIAL_STATE);
    } catch (err) {
      setStatus("idle");
      setErrorMessage(err instanceof Error ? err.message : t.contact.form.error);
    }
  };

  return (
    <section id="contact" className="bg-base py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
            className="lg:col-span-2"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">{t.contact.eyebrow}</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-lg text-muted">{t.contact.description}</p>

            <ul className="mt-10 flex flex-col gap-5">
              {contactChannels.map((channel) => (
                <li key={channel.label}>
                  <a href={channel.href} className="group flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-accent">
                      <channel.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted">{channel.label}</p>
                      <p className="text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                        {channel.value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-line bg-card p-8">
              {status === "success" ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 text-xl font-bold text-ink">{t.contact.form.successTitle}</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">{t.contact.form.successDescription}</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-accent hover:text-ink"
                  >
                    {t.contact.form.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Honeypot field — hidden from real visitors, silently rejects bots that auto-fill it */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-body">
                        {t.contact.form.name}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t.contact.form.namePlaceholder}
                        className="rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact" className="text-sm font-medium text-body">
                        {t.contact.form.contact}
                      </label>
                      <input
                        id="contact"
                        name="contact"
                        type="text"
                        required
                        maxLength={100}
                        value={form.contact}
                        onChange={handleChange}
                        placeholder={t.contact.form.contactPlaceholder}
                        className="rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-sm font-medium text-body">
                        {t.contact.form.service}
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      >
                        <option value="" disabled>
                          {t.contact.form.servicePlaceholder}
                        </option>
                        {t.contact.form.serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="budget" className="text-sm font-medium text-body">
                        {t.contact.form.budget}
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={form.budget}
                        onChange={handleChange}
                        className="rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      >
                        <option value="" disabled>
                          {t.contact.form.budgetPlaceholder}
                        </option>
                        {t.contact.form.budgetOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-body">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      maxLength={2000}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-sm text-red-400" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[1rem] font-semibold text-on-primary transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t.contact.form.submitting}
                      </>
                    ) : (
                      <>
                        {t.contact.form.submit}
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
