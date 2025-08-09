'use client';

import Cookies from 'js-cookie';

type CurrencyCookie = { code: string; name?: string };

export const fetcherClient = async (
    url: string,
    options: RequestInit = {},
    currencyOverride?: string
) => {
    const lang = Cookies.get('lang') || 'en';
    const authString = btoa(
        `${process.env.NEXT_PUBLIC_BASIC_ADMIN}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`
    );

    // read cookie just as a default; allow overriding
    let currency: CurrencyCookie = { code: 'USD', name: 'US Dollar' };
    const cookie = Cookies.get('currency');
    if (cookie) {
        try { currency = JSON.parse(cookie); } catch {}
    }
    const currencyCode = currencyOverride || currency.code;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
        ...options,
        method: options.method ?? 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authString}`,
            'Accept-Language': lang,
            'currencyCode': currencyCode,
            ...(options.headers || {}),
        },
        cache: 'no-store',
    });

    if (!res.ok) throw new Error('Request failed');
    return res.json();
};
