import type { Metadata } from "next";
import "../globals.css";
import { getCopy } from "@/data/content";
import { localeParams, resolveLocale } from "@/data/locales";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return localeParams;
}

export function generateMetadata({ params }: Props): Metadata {
  const locale = resolveLocale(params.locale);
  const meta = getCopy(locale).metadata;
  return {
    title: meta.title,
    description: meta.description,
    icons: { icon: "/assets/teseract.png" },
  };
}

export default function LocaleLayout({ children }: Props) {
  return <>{children}</>;
}
