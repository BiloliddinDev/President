"use client";

import {fetcherClient} from "@/lib/fetcher-client";
import Cookies from "js-cookie";

interface CountryCookie {
    name: string;
    code: string;
}

export const getLocation = async () => {
    try {
        const countryString = Cookies.get("country");
        const langString = Cookies.get("lang") || "en";
        let countryCode = "UZ";

        if (countryString) {
            try {
                const parsed: CountryCookie = JSON.parse(countryString);
                if (parsed?.code) countryCode = parsed.code;
            } catch (error) {
                console.warn("country cookie parsing error:", error);
            }
        }

        return await fetcherClient(`/api/v1/translations/page/LOCATION?language=${langString.toUpperCase()}&country=${countryCode}`);
    } catch (err) {
        console.warn("Failed to fetch location translation:", err);
        return null;
    }
};

