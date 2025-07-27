'use server'

import {cookies} from 'next/headers';
import {fetcher} from "@/lib/fetcher";

interface CountryCookie {
    name: string;
    code: string;
}

export async function NewsService(newsId : number) {

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


    return await fetcher(`/api/v1/news/by_id_and_locale_with_media?news_id=${newsId}&languageCode=${lang.toUpperCase()}&countryCode=${countryCode}`);

}
