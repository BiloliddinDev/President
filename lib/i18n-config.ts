export const i18n = {
    defaultLocale: "uz",
    locales: ["en", "uz", "ru", 'tj', 'az'],
} as const;

export type Locale = (typeof i18n)["locales"][number];
