"use client";

import {fetcherClient} from "@/lib/fetcher-client";


export const getAllCountry = async () => {
    return fetcherClient(`/api/v1/country/all`);
}