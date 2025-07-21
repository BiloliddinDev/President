'use server'

import {cookies} from 'next/headers';
import {fetcher} from "@/lib/fetcher";

interface CountryCookie {
    name: string;
    code: string;
}

export async function CategoryChildService(parentId:string) {
    
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

const url=`/api/v1/category/all_child_by_country?parentId=${parentId}&countryCode=${countryCode}`
    return await fetcher(url);
}