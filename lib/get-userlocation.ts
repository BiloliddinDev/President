'use client';

import {useEffect} from 'react';

export function InitGeoCookie() {
    useEffect(() => {
        const hasCountryCookie = document.cookie.includes('user-country=');
        if (!hasCountryCookie) {
            fetch('/api/user-country').then(res => res.json());
        }
    }, []);

    return null;
}

export const defaultCountryList = [
    {id: 16, region: "Tashkent", country: "UZ"},
];