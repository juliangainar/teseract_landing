import { getCopy } from "@/data/content";
import { localeParams, resolveLocale } from "@/data/locales";

type Props = { params: { locale: string } };

export function generateStaticParams() {
  return localeParams;
}

export default function TermsPage({ params }: Props) {
  const locale = resolveLocale(params.locale);
  const terms = getCopy(locale).legal.terms;
  const lastUpdated = new Date().toISOString().split("T")[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-200 text-xs font-semibold">
            {terms.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            {terms.title}
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            {terms.updatedLabel} {lastUpdated}
          </p>
          <p className="text-gray-300 mt-4 max-w-3xl">{terms.lead}</p>
        </div>

        <div className="grid gap-6">
          {terms.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-purple-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(168,85,247,0.12)] backdrop-blur"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {section.title}
              </h2>
              {section.items ? (
                <ul className="space-y-2 text-gray-300">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300">{section.body}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
