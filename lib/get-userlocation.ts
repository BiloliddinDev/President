'use client';

import {useEffect} from 'react';

export function InitGeoCookie() {
    useEffect(() => {
        const hasCountryCookie = document.cookie.includes('country');


        console.log(hasCountryCookie)
        if (!hasCountryCookie) {
            fetch('/api/user-country').then(res => res.json());
        }
    }, []);

    return null;
}

