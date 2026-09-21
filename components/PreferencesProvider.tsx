"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { en } from "@/translations/en";
import { vi, type Translation } from "@/translations/vi";

export type Language = "vi" | "en";
export type Theme = "light" | "dark";

type PreferencesContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: Translation;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);
const translations: Record<Language, Translation> = { vi, en };

export default function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("hu-language");
    const initialLanguage: Language = savedLanguage === "en" ? "en" : "vi";
    const appliedTheme = document.documentElement.dataset.theme;

    setLanguageState(initialLanguage);
    setTheme(appliedTheme === "light" ? "light" : "dark");
    document.documentElement.lang = initialLanguage;
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    localStorage.setItem("hu-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("hu-theme", nextTheme);
      document.documentElement.dataset.theme = nextTheme;
      return nextTheme;
    });
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage, theme, toggleTheme, t: translations[language] }),
    [language, setLanguage, theme, toggleTheme],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }

  return context;
}
