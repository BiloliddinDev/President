'use client';

import {useEffect, useRef} from 'react';

export function InitGeoCookie() {
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;

        const hasCountryCookie = document.cookie.includes('country');
        if (!hasCountryCookie) {
            hasFetched.current = true;
            fetch('/api/user-country').catch(() => {});
        }
    }, []);

    return null;
}

