export const i18n = {
    defaultLocale: "uz",
    locales: ["en", "uz", "ru"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
