'use server'

import {cookies} from 'next/headers';
import {fetcher} from "@/lib/fetcher";

interface CountryCookie {
    name: string;
    code: string;
}

export async function CategoryChildServiceUZ(parentId: number) {

    const cookieStore = await cookies();

    const lang = cookieStore.get('lang')?.value || 'en';

    let countryCode = 'UZ';

    const countryRaw = cookieStore.get('country')?.value;

    if (countryRaw) {
        try {
            const country: CountryCookie = JSON.parse(countryRaw);
            countryCode = country.code || 'UZ';
        } catch (err) {
            console.warn('Invalid country cookie format, using default UZ', err);
        }
    }

    const url = `/api/v1/category/by_id_and_locale_with_media?categoryId=${parentId}&languageCode=${lang.toUpperCase()}&countryCode=${countryCode}&withChildren=true`
    return await fetcher(url);
}