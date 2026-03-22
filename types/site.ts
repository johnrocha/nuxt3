export type ButtonVariant = "primary" | "secondary" | "outline";

export type SubjectOption = "CVM" | "Varfarma" | "Consultoria";

export type SourceOption =
  | "Google"
  | "Projeto desenvolvido por vocês"
  | "Indicação"
  | "Outro";

export interface SeoContent {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  to: string;
}

export interface CtaLink {
  label: string;
  to: string;
  variant?: ButtonVariant;
}

export interface MetricItem {
  label: string;
  value: string;
  helper: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: "bolt" | "network" | "target";
}

export interface SolutionCardData {
  slug: "iep" | "varfarma" | "consultoria";
  name: string;
  summary: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface CaseCardData {
  name: string;
  sector: string;
  summary: string;
  impact: string;
}

export interface ContactDetails {
  address: string;
  city: string;
  email: string;
  phone: string;
  businessHours: string;
}
