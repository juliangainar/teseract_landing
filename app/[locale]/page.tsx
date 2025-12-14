import Landing from "../components/Landing";
import { getCopy } from "@/data/content";
import { localeParams, resolveLocale } from "@/data/locales";

type PageProps = {
  params: { locale: string };
};

export function generateStaticParams() {
  return localeParams;
}

export default function Page({ params }: PageProps) {
  const locale = resolveLocale(params.locale);
  const content = getCopy(locale);
  return <Landing locale={locale} content={content} />;
}
