import { Locale } from "./locales";

export type Feature = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: {
    src: string;
    alt: string;
  };
  accent?: "blue" | "pink";
};

export type LegalCopy = {
  badge: string;
  title: string;
  lead: string;
  sections: {
    title: string;
    items?: string[];
    body?: string;
  }[];
  updatedLabel: string;
  contact: string;
};

export type Copy = {
  metadata: {
    title: string;
    description: string;
  };
  header: {
    tagline: string;
    nav: {
      features: string;
      goals: string;
      aiAgent: string;
      faq: string;
    };
    cta: {
      full: string;
      short: string;
    };
    language: {
      toggle: string;
      aria: string;
    };
  };
  hero: {
    badges: string[];
    title: string;
    highlight: string;
    description: string;
    cta: string;
    bullets: string[];
    dashboard: {
      title: string;
      character: string;
      classLabel: string;
      titleLabel: string;
      xp: string;
      xpChange: string;
      netWorthLabel: string;
      netWorth: string;
      netWorthChange: string;
      cashflowLabel: string;
      cashflow: string;
      cashflowNote: string;
      debtLabel: string;
      debt: string;
      debtChange: string;
      savingsLabel: string;
      savingsStatus: string;
      snapshotLabel: string;
      missionsTitle: string;
      missionSet: string;
      missions: { title: string; reward: string; progress: string }[];
      snapshot: {
        title: string;
        change: string;
        body: string;
      };
    };
  };
  aiAgent: {
    badge: string;
    title: string;
    highlight: string;
    suffix: string;
    description: string;
    liveData: string;
    youAsked: string;
    agentInsight: string;
    advisorPrefix: string;
    advisorTag: string;
    chips: string[];
    sampleQuestion: string;
    sampleAnswer: string;
    sampleAction: string;
  };
  featuresIntro: {
    title: string;
    highlight: string;
    subtitle: string;
    monthlyReport: {
      badge: string;
      liveData: string;
      monthlyLabel: string;
      youAsked: string;
      agentAnswer: string;
      title: string;
      description: string;
      bullets: string[];
      sampleQuestion: string;
      sampleAnswer: string;
      sampleAction: string;
    };
  };
  features: Feature[];
  goals: {
    badge: string;
    title: string;
    description: string;
    bullets: string[];
    exampleQuestion: string;
    exampleAnswer: string;
    exampleLabel: string;
    agentLabel: string;
  };
  faq: {
    title: string;
    highlight: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    highlight: string;
    tail: string;
    subtitle: string;
    button: string;
    signups: string;
  };
  footer: {
    tagline: string;
    product: string;
    company: string;
    legal: string;
    privacy: string;
    terms: string;
    security: string;
    rights: string;
  };
  waitlist: {
    title: string;
    subtitle: string;
    placeholder: string;
    consent: {
      prefix: string;
      and: string;
      suffix: string;
      terms: string;
      privacy: string;
    };
    errors: {
      consent: string;
      generic: string;
    };
    cta: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
  };
  legal: {
    privacy: LegalCopy;
    terms: LegalCopy;
    security: LegalCopy;
  };
};

export type CopyDictionary = Record<Locale, Copy>;
