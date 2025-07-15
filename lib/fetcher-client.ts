'use client';

import Cookies from "js-cookie";

export const fetcherClient = async (url: string, options: RequestInit = {}) => {
    const lang = Cookies.get('lang') || 'en';
    const authString = btoa(`${process.env.NEXT_PUBLIC_BASIC_ADMIN}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
        ...options,
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authString}`,
            'Accept-Language': lang,
            ...options.headers,
        },
        cache: 'no-store',
    });

    if (!res.ok) throw new Error('Request failed');

    return res.json();
};
