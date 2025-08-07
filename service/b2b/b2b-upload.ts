"use client";

import {fetcherClient} from "@/lib/fetcher-client";


export const getB2bImages = async (clientID: string) => {
    return fetcherClient(`/api/v1/b2b/by_client_id?clientId=${clientID}`);

}