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
    

    const fullUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;
    const requestHeaders: HeadersInit = {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authString}`,
        'currencyCode': currency.code,
        ...headers,
    };

    let lastError: any = null;
    const maxRetries = 2;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000);

            const res = await fetch(fullUrl, {
                method: 'GET',
                headers: requestHeaders,
                next: { revalidate: 60 },
                signal: controller.signal,
            });
            clearTimeout(timeoutId);

            if (!res.ok) {
                const message = await res.text().catch(() => 'Something went wrong');
                throw new Error(message);
            }

            return await res.json() as T;
        } catch (err: any) {
            lastError = err;
            const isAbortedOrNetwork =
                err?.name === 'AbortError' ||
                err?.code === 'ECONNABORTED' ||
                err?.code === 'ECONNRESET' ||
                err?.code === 'ETIMEDOUT' ||
                err?.cause?.code === 'ECONNABORTED' ||
                err?.cause?.code === 'ECONNRESET' ||
                err?.cause?.code === 'ETIMEDOUT' ||
                (typeof err?.message === 'string' && err.message.includes('fetch failed'));

            if (attempt < maxRetries && isAbortedOrNetwork) {
                const delay = 400 * Math.pow(2, attempt);
                console.warn(`[fetcher] Request to ${url} failed with ${err?.cause?.code || err?.code || err?.message}. Retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries})...`);
                await new Promise((resolve) => setTimeout(resolve, delay));
                continue;
            }

            throw err;
        }
    }

    throw lastError || new Error(`Request to ${url} failed`);
}