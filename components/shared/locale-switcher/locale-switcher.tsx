"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {i18n} from "@/lib/i18n-config";
import {useEffect} from "react";
import Cookies from "js-cookie";

export default function LocaleSwitcher() {
    const pathName = usePathname();

    const saveLang = async (lang: "uz" | "ru" | "en") => {
        Cookies.set("NEXT_LOCALE", lang, { expires: 365 });
    };

    const redirectedPathName = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    useEffect(() => {
        const segments = pathName.split("/");

        if (segments[1] === "uz" || segments[1] === "ru") {
            const f = async () => {
                await saveLang(segments[1] as "uz" | "ru" | "en");
            };
            f();
        }
    }, [pathName]);

    const handleClick = async (lang: "uz" | "ru" | "en") => {
        await saveLang(lang);
    };

    return (
        <div>
            {i18n.locales.map((locale) => (
                <div className="cursor-pointer p-0" key={locale}>
                    <Link
                        className="px-2 py-1.5 w-full block"
                        href={redirectedPathName(locale)}
                        onClick={() => handleClick(locale)}
                    >
                        {locale.toUpperCase()}
                    </Link>
                </div>
            ))}
        </div>
    );
}