import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type ServiceCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CredibilityCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PricingTier = {
  name: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type WorkConcept = {
  category: string;
  title: string;
  description: string;
  tech: string[];
  detail: string;
};
