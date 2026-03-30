"use client";

import {fetcherClient} from "@/lib/fetcher-client";
import Cookies from "js-cookie";

interface CountryCookie {
    name: string;
    code: string;
}

export const getAllLanguage = async () => {
    const countryString = Cookies.get("country");
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
        return fetcherClient(`/api/v1/language/all_active_by_country?countryCode=${countryCode}`);
    }

    return [];
};