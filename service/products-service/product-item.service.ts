"use client";

import {fetcherClient} from "@/lib/fetcher-client";
import Cookies from "js-cookie";

interface CountryCookie {
    name: string;
    code: string;
}

export const getProductDetail = async (itemID: string | number) => {
    const countryString = Cookies.get("country");
    let countryCode = null;
    const langString = Cookies.get("lang");

    if (countryString) {
        try {
            const parsed: CountryCookie = JSON.parse(countryString);
            countryCode = parsed.code;
        } catch (error) {
            console.warn("country cookie parsing error:", error);
        }
    }

    if (countryCode) {
        return fetcherClient(`/api/v1/product/by_id_and_locale?productId=${itemID}&language=${langString?.toUpperCase()}&countryCode=${countryCode}`);
    }
}

