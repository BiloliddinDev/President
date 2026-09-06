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

    // Use relative URL in the browser to route through the Next.js API proxy and eliminate CORS
    const baseUrl = typeof window !== 'undefined' ? '' : (process.env.NEXT_PUBLIC_BASE_URL || 'https://api.presidentgift.com');
    const finalUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

    const res = await fetch(finalUrl, {
        ...options,
        method: options.method ?? 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authString}`,
            'Accept-Language': lang,
            'currencyCode': currencyCode,
            ...(options.headers || {}),
        },
    });

    if (!res.ok) {
        const errorText = await res.text().catch(() => 'Request failed');
        throw new Error(errorText || `Request failed with status ${res.status}`);
    }
    return res.json();
};
