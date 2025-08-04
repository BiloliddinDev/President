'use client';

import Cookies from "js-cookie";

export const fetcherClient = async (url: string, options: RequestInit = {}) => {
    const lang = Cookies.get('lang') || 'en';
    const authString = btoa(`${process.env.NEXT_PUBLIC_BASIC_ADMIN}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`);

    // Parse 'currency' cookie
    const currencyCookie = Cookies.get('currency');
    let currency: { code: string; name: string } = {code: 'USD', name: 'US Dollar'};

    if (currencyCookie) {
        try {
            currency = JSON.parse(currencyCookie);
        } catch (error) {
            console.warn("Currency cookie parsing error:", error);
        }
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
        ...options,
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authString}`,
            'Accept-Language': lang,
            'currencyCode': currency.code,
            ...options.headers,
        },
        cache: 'no-store',
    });

    if (!res.ok) throw new Error('Request failed');

    return res.json();
};