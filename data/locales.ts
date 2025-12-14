export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "es";
export const localeParams = locales.map((locale) => ({ locale }));

export function resolveLocale(raw?: string): Locale {
  return locales.includes(raw as Locale) ? (raw as Locale) : defaultLocale;
}
