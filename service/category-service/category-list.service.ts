"use client";

import {fetcherClient} from "@/lib/fetcher-client";


export const getAllCountry = async () => {
    return fetcherClient(`https://api.presidentgift.com/api/v1/category/all_by_country?countryId=2&withChildren=false`);
}