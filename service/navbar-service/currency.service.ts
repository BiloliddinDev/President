"use client";

import {fetcherClient} from "@/lib/fetcher-client";
import Cookies from "js-cookie";
import {CurrencyType} from "@/interface/currency-type/currency-type";

interface CountryCookie {
    name: string;
    code: string;
}

export const getAllCurrency = async () => {
    const countryString = Cookies.get("country");
    let countryCode = null;

    if (countryString) {
        try {
            const parsed: CountryCookie = JSON.parse(countryString);
            countryCode = parsed.code;
        } catch {
            // Invalid cookie format, use default
        }
    }

    if (countryCode) {
        const currencies: CurrencyType[] = await fetcherClient(`/api/v1/currency/by_country?countryCode=${countryCode}`);
        const defaultCurrency = currencies.find((currency) => currency.default_currency);

        // Only set cookie if not already set to avoid infinite re-fetches
        const existingCurrency = Cookies.get("currency");
        if (defaultCurrency && !existingCurrency) {
            Cookies.set("currency", JSON.stringify({
                code: defaultCurrency.code,
                name: defaultCurrency.name,
            }));
        }

        return currencies;
    }

    return [];
};