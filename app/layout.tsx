import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreferencesProvider from "@/components/PreferencesProvider";
import { SITE } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
});

const preferencesScript = `
(function () {
  try {
    var root = document.documentElement;
    var savedTheme = localStorage.getItem("hu-theme");
    var theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    var savedLanguage = localStorage.getItem("hu-language");

    root.dataset.theme = theme;
    if (savedLanguage === "vi" || savedLanguage === "en") root.lang = savedLanguage;
  } catch (_) {
    document.documentElement.dataset.theme = "dark";
  }
})();`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  openGraph: {
    type: "website",
    url: SITE.domain,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: "/logo-icon.png", width: 973, height: 973, alt: `${SITE.name} logo` }],
    locale: "vi_VN",
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/logo-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.domain,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: [SITE.facebook],
  };

  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} bg-base text-ink antialiased`}>
        <Script id="hu-preferences" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: preferencesScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <PreferencesProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PreferencesProvider>
      </body>
    </html>
  );
}
