"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { usePreferences } from "@/components/PreferencesProvider";
import { SITE } from "@/data/site";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.877h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { href: "https://github.com/", label: "GitHub", icon: GithubIcon },
  { href: "https://linkedin.com/", label: "LinkedIn", icon: LinkedinIcon },
  { href: SITE.facebook, label: "Facebook", icon: FacebookIcon },
];

export default function Footer() {
  const { t } = usePreferences();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <Image src="/logo-icon.png" alt={`${SITE.name} logo`} width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-extrabold tracking-tight text-ink">
                {SITE.shortName} <span className="text-accent">Web Services</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{t.footer.description}</p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">{t.footer.servicesTitle}</p>
            <ul className="mt-4 flex flex-col gap-3">
              {t.footer.services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-muted transition-colors hover:text-accent">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">{t.footer.navigationTitle}</p>
            <ul className="mt-4 flex flex-col gap-3">
              {t.header.nav.filter((link, i, arr) => arr.findIndex((item) => item.href === link.href) === i).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-sm text-muted transition-colors hover:text-accent">
                  {t.footer.contact}
                </a>
              </li>
            </ul>
            <a
              href={SITE.emailHref}
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-line pt-8 text-center text-sm text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. {t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="transition-colors hover:text-accent">{t.footer.privacy}</a>
            <a href="/terms" className="transition-colors hover:text-accent">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
