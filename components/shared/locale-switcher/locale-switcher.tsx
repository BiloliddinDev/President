"use client";

import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Check} from "lucide-react";
import {LanguageType} from "@/interface/language&country-type/language-type";

interface Props {
    languages: LanguageType[];
}

export default function LocaleSwitcher({languages}: Props) {
    const pathName = usePathname();
    const [activeLocale, setActiveLocale] = useState<string>("");

    const normalizedLanguages = languages.map((lang) => ({
        ...lang,
        code: lang.code.toLowerCase(),
    }));

    useEffect(() => {
        const cookieLocale = Cookies.get("lang")?.toLowerCase();
        if (cookieLocale && ["uz", "ru", "en", 'tj', 'az'].includes(cookieLocale)) {
            
            setActiveLocale(cookieLocale);
            
        } else {
            const segments = pathName.split("/");
            const urlLocale = segments[1]?.toLowerCase();
            if (["uz", "ru", "en", "tj", "az"].includes(urlLocale)) {
                setActiveLocale(urlLocale);
                Cookies.set("lang", urlLocale, {expires: 365});
            }
        }
    }, [pathName]);

    const redirectedPathName = (locale: string) => {
        const segments: string[] = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    const handleLocaleChange = (locale: string) => {
        const lower = locale.toLowerCase();
        Cookies.set("lang", lower, {expires: 365});
        setActiveLocale(lower);
        window.location.href = redirectedPathName(lower);
    };

    return (
        <ul className="flex flex-col w-full gap-7">
            {normalizedLanguages.map((lang) => (
                <li
                    key={lang.code}
                    onClick={() => handleLocaleChange(lang.code)}
                    className="text-primary px-4 md:px-0 md:w-[220px] text-base font-normal leading-normal flex items-center justify-between cursor-pointer hover:text-zinc-500 transition"
                >
                    {lang.name} ({lang.code})
                    <span>{activeLocale === lang.code && <Check size={18}/>}</span>
                </li>
            ))}
        </ul>
    );
}