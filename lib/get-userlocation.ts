'use client';

import {useEffect} from 'react';

export default function InitGeoCookie() {
    useEffect(() => {
        const hasCountryCookie = document.cookie.includes('user-country=');
        if (!hasCountryCookie) {
            fetch('/api/user-country');
        }
    }, []);

    return null;
}
