"use client";

import {fetcherClient} from "@/lib/fetcher-client";


export const UserOrderService = async (itemID: string | undefined) => {

    return fetcherClient(`/api/v1/orders/by_customer_id?customerId=${itemID}&page=0&size=10`);
}
