"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { usePreferences, type Language } from "@/components/PreferencesProvider";
import { SITE } from "@/data/site";

function LanguageSwitcher() {
  const { language, setLanguage, t } = usePreferences();

  const options: Array<{ value: Language; label: string; ariaLabel: string }> = [
    { value: "vi", label: "VI", ariaLabel: t.header.switchToVietnamese },
    { value: "en", label: "EN", ariaLabel: t.header.switchToEnglish },
  ];

  return (
    <div className="flex items-center rounded-full border border-line bg-card p-1" role="group" aria-label={t.header.languageGroup}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLanguage(option.value)}
          aria-label={option.ariaLabel}
          aria-pressed={language === option.value}
          className={`rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            language === option.value ? "bg-ink text-canvas" : "text-muted hover:text-ink"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme, t } = usePreferences();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.header.switchToLight : t.header.switchToDark}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink transition-colors hover:border-line-strong hover:bg-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {isDark ? <Moon className="h-4 w-4" aria-hidden /> : <Sun className="h-4 w-4" aria-hidden />}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = usePreferences();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-base/80 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:justify-start lg:px-8">
        <a href="#home" className="flex shrink-0 items-center gap-2">
          <Image src="/logo-icon.png" alt={`${SITE.name} logo`} width={32} height={32} className="h-8 w-8" priority />
          <span className="text-lg font-extrabold tracking-tight text-ink sm:text-xl">
            {SITE.shortName} <span className="text-accent">Web Services</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:ml-auto lg:flex xl:gap-8">
          {t.header.nav.map((link) => (
            <a
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-5 hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <a
          href="#contact"
          className="group ml-3 hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:inline-flex"
        >
          {t.header.quote}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
          aria-label={open ? t.header.closeMenu : t.header.openMenu}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-line bg-base lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {t.header.nav.map((link) => (
                <a
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-soft hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex items-center justify-between border-t border-line pt-4">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary"
              >
                {t.header.quote}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
