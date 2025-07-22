'use server'

import {cookies} from 'next/headers';
import {fetcher} from "@/lib/fetcher";

interface CountryCookie {
    name: string;
    code: string;
}

export async function SummerCollectionService() {
    
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

const url=`/api/v1/collections/by_id_and_country?collectionId=3&country_code=${countryCode}`

    return await fetcher(url);
}
