import { resolveLocale } from "./locales";
import { en } from "./en";
import { es } from "./es";
import { CopyDictionary } from "./types";

export const copy: CopyDictionary = { en, es };

export function getCopy(locale: string) {
  return copy[resolveLocale(locale)];
}
