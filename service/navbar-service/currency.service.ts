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
    let countryCode = "UZ";

    if (countryString) {
        try {
            const parsed: CountryCookie = JSON.parse(countryString);
            if (parsed.code) countryCode = parsed.code;
        } catch {
            // Invalid cookie format, use default
        }
    }

    try {
        const currencies: CurrencyType[] = await fetcherClient(`/api/v1/currency/by_country?countryCode=${countryCode}`);
        if (Array.isArray(currencies) && currencies.length > 0) {
            const defaultCurrency = currencies.find((currency) => currency.default_currency);
            const existingCurrency = Cookies.get("currency");
            if (defaultCurrency && !existingCurrency) {
                Cookies.set("currency", JSON.stringify({
                    code: defaultCurrency.code,
                    name: defaultCurrency.name,
                }));
            }
            return currencies;
        }
    } catch (err) {
        console.warn("Failed to fetch currencies from backend, using fallback", err);
    }

    // Default fallback currencies
    const fallbacks: CurrencyType[] = [
        { code: "UZS", name: "O'zbek so'mi", symbol: "so'm", symbol_position: "AFTER", symbol_space: true, price: 1, default_currency: true },
        { code: "USD", name: "US Dollar", symbol: "$", symbol_position: "BEFORE", symbol_space: false, price: 1, default_currency: false },
        { code: "EUR", name: "Euro", symbol: "€", symbol_position: "BEFORE", symbol_space: false, price: 1, default_currency: false },
        { code: "RUB", name: "Рубль", symbol: "₽", symbol_position: "AFTER", symbol_space: true, price: 1, default_currency: false },
    ];

    const existingCurrency = Cookies.get("currency");
    if (!existingCurrency) {
        Cookies.set("currency", JSON.stringify({ code: "UZS", name: "O'zbek so'mi" }));
    }

    return fallbacks;
};