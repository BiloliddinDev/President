'use server'

import {cookies} from 'next/headers';
import {fetcher} from "@/lib/fetcher";

interface CountryCookie {
    name: string;
    code: string;
}

export async function CategoryService() {
    
    const cookieStore = await cookies();

    const lang = cookieStore.get('lang')?.value.toUpperCase() || 'EN';

    let countryCode = 'UZ';

    const countryRaw = cookieStore.get('country')?.value.toUpperCase();

    if (countryRaw) {
        try {
            const country: CountryCookie = JSON.parse(countryRaw);
            countryCode = country.code || 'UZ';
        } catch (err) {
            console.warn('Invalid country cookie format, using default UZ', err);
        }
    }

// const url=`/api/v1/category/all_by_language?languageCode=${lang}&countryCode=${countryCode}&withChildren=false`
const url=`/api/v1/category/all_root_by_country?countryCode=UZ&withChildren=false`

    return await fetcher(url);
}
