"use client";

import {usePathname} from "next/navigation";
import {i18n} from "@/lib/i18n-config";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Check} from "lucide-react";

export default function LocaleSwitcher() {
    const pathName = usePathname();
    const [activeLocale, setActiveLocale] = useState<string>();

    const saveLang = async (lang: "uz" | "ru" | "en") => {
        Cookies.set("NEXT_LOCALE", lang, { expires: 365 });
        setActiveLocale(lang);
    };

    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    useEffect(() => {
        const segments = pathName.split("/");
        if (segments[1] === "uz" || segments[1] === "ru" || segments[1] === "en") {
            setActiveLocale(segments[1]);
        }
    }, [pathName]);

    const handleLocaleChange = async (locale: "uz" | "ru" | "en") => {
        await saveLang(locale);
        window.location.href = redirectedPathName(locale);
    };

    return (
        <ul className="flex flex-col w-full gap-7">
            {i18n.locales.map((locale) => (
                <li
                    key={locale}
                    onClick={() => handleLocaleChange(locale)}
                    className="text-primary w-[220px] text-base font-normal leading-normal flex items-center justify-between cursor-pointer"
                >
                    {locale.toUpperCase()}
                    <span>{activeLocale === locale && <Check />}</span>
                </li>
            ))}
        </ul>
    );
}