'use server';

import { cookies } from 'next/headers';

export type FetchHeaders = HeadersInit;
type CurrencyCookie = { code: string; name?: string };

export async function fetcher<T = unknown>(
    url: string,
    headers?: FetchHeaders
): Promise<T> {
    if (!process.env.NEXT_PUBLIC_BASIC_ADMIN) throw new Error('Missing BASIC_ADMIN');
    if (!process.env.NEXT_PUBLIC_BASIC_PASSWORD) throw new Error('Missing BASIC_PASSWORD');
    if (!process.env.NEXT_PUBLIC_BASE_URL) throw new Error('Missing NEXT_PUBLIC_BASE_URL');
    
    const authString = Buffer.from(
        `${process.env.NEXT_PUBLIC_BASIC_ADMIN}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`
    ).toString('base64');

    
    const cookieStore = await cookies();
    const rawCurrency = cookieStore.get('currency')?.value;

    let currency: CurrencyCookie = { code: 'USD', name: 'US Dollar' };
    if (rawCurrency) {
        try {
            const parsed = JSON.parse(rawCurrency) as CurrencyCookie;
            if (parsed?.code) currency = parsed;
        } catch (e) {
            console.warn('Currency cookie parsing error:', e);
        }
    }
    

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authString}`,
            'currencyCode': currency.code,
            ...headers,
        },
        cache: 'no-store',
    });

    if (!res.ok) {
        const message = await res.text().catch(() => 'Something went wrong');
        throw new Error(message);
    }

    return await res.json() as Promise<T>;
}