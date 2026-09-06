"use client";

import {fetcherClient} from "@/lib/fetcher-client";


import {CountryType} from "@/interface/language&country-type/language-type";

export const getAllCountry = async (): Promise<CountryType[]> => {
    try {
        const data = await fetcherClient(`/api/v1/country/all`);
        if (Array.isArray(data) && data.length > 0) return data;
    } catch (err) {
        console.warn("Failed to fetch countries from backend, using fallback", err);
    }

    return [
        { id: 1, name: "Uzbekistan", code: "UZ", defaultCountry: true },
        { id: 2, name: "Россия", code: "RU", defaultCountry: false },
        { id: 3, name: "Тоҷикистон", code: "TJ", defaultCountry: false },
        { id: 4, name: "Azərbaycan", code: "AZ", defaultCountry: false },
    ];
};