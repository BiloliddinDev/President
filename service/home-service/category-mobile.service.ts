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
        return await fetcherClient(`/api/v1/category/root_by_locale?languageCode=${langString}&countryCode=${countryCode}`);
    } catch (err) {
        console.warn("Failed to fetch categories for mobile navbar, using empty fallback", err);
        return [];
    }
};
