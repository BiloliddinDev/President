"use client";

import {fetcherClient} from "@/lib/fetcher-client";
import Cookies from "js-cookie";

interface CountryCookie {
    name: string;
    code: string;
}

export const getRecomendProducts = async (parentId:number) => {
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
        const url = `/api/v1/category/product_page_by_category_id_and_locale?categoryId=${parentId}&languageCode=${langString?.toUpperCase()}&countryCode=${countryCode}&page=0&size=10`
        return fetcherClient(url);
             }

}

