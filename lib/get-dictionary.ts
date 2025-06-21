import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
    en: () => import("../locales/en.json").then((module) => module.default),
    uz: () => import("../locales/uz.json").then((module) => module.default),
    ru: () => import("../locales/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? await dictionaries.en();

export const getLangText = (
    lang: string,
    textUz: string,
    textRu: string,
    textEn: string
): string => {
    return lang === "uz" ? textUz : lang === "ru" ? textRu : textEn;
};


