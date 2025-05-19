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
    {id: 1, region: 'Europe', country: 'RU'},
    {id: 16, region: "Tashkent", country: "UZ"},
    {id: 2, region: 'North America', country: 'US'},
    {id: 3, region: 'Asia', country: 'CN'},
    {id: 4, region: 'Asia', country: 'IN'},
    {id: 5, region: 'Europe', country: 'GB'},
    {id: 6, region: 'Europe', country: 'DE'},
    {id: 7, region: 'Asia', country: 'JP'},
    {id: 8, region: 'Europe', country: 'FR'},
    {id: 9, region: 'Europe', country: 'IT'},
    {id: 10, region: 'Europe', country: 'ES'},
    {id: 11, region: 'South America', country: 'BR'},
    {id: 12, region: 'Oceania', country: 'AU'},
    {id: 13, region: 'North America', country: 'CA'},
    {id: 14, region: 'Asia', country: 'KR'},
    {id: 15, region: 'Europe', country: 'NL'},
];