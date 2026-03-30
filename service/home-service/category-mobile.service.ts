"use client";

import {fetcherClient} from "@/lib/fetcher-client";
import Cookies from "js-cookie";

interface CountryCookie {
    name: string;
    code: string;
}

export const getCategoryModal = async () => {
    const countryString = Cookies.get("country");
    const langString = Cookies.get("lang")?.toUpperCase() || "EN";
    let countryCode = null;

    if (countryString) {
        try {
            const parsed: CountryCookie = JSON.parse(countryString);
            countryCode = parsed.code;
        } catch {
            // Invalid cookie format
        }
    }

    if (countryCode) {
        return fetcherClient(`/api/v1/category/root_by_locale?languageCode=${langString}&countryCode=${countryCode}`);
    }

    return [];
};
