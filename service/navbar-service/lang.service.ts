"use client";

import {fetcherClient} from "@/lib/fetcher-client";
import Cookies from "js-cookie";

interface CountryCookie {
    name: string;
    code: string;
}

import { LanguageType } from "@/interface/language&country-type/language-type";

export const getAllLanguage = async (): Promise<LanguageType[]> => {
    const countryString = Cookies.get("country");
    let countryCode = "UZ";

    if (countryString) {
        try {
            const parsed: CountryCookie = JSON.parse(countryString);
            if (parsed.code) countryCode = parsed.code;
        } catch {
            // Invalid cookie format
        }
    }

    try {
        const data = await fetcherClient(`/api/v1/language/all_active_by_country?countryCode=${countryCode}`);
        if (Array.isArray(data) && data.length > 0) return data;
    } catch (err) {
        console.warn("Failed to fetch languages from backend, using fallback", err);
    }

    // Default fallback languages for standard countries
    return [
        { name: "O'zbekcha", code: "uz", active: true, defaultLanguage: true },
        { name: "Русский", code: "ru", active: true, defaultLanguage: false },
        { name: "English", code: "en", active: true, defaultLanguage: false },
        { name: "Тоҷикӣ", code: "tj", active: true, defaultLanguage: false },
        { name: "Azərbaycan", code: "az", active: true, defaultLanguage: false },
    ];
};