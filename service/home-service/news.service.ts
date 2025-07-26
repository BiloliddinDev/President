"use client";

import {fetcherClient} from "@/lib/fetcher-client";
import Cookies from "js-cookie";

interface CountryCookie {
    name: string;
    code: string;
}

export const getNews = async () => {
    const countryString = Cookies.get("country");
    const langString = Cookies.get("lang");
    let countryCode = null;

    if (countryString) {
        try {
            const parsed: CountryCookie = JSON.parse(countryString);
            countryCode = parsed.code;
        } catch (error) {
            console.warn("country cookie parsing error:", error);
        }
    }

    if (countryCode) {
        return fetcherClient(`/api/v1/news/by_locale?languageCode=${langString?.toUpperCase()}&countryCode=${countryCode}&withMedia=true`);
             }

}

