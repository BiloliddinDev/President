"use client";

import useSWR, {Key as SWRKey, mutate as globalMutate, SWRResponse} from "swr";
import {getB2bImages} from "@/service/b2b/b2b-upload";
import type {MediaInterface} from "@/interface/products-interface/products-interface";

export interface B2BImageResponse {
    id: string | null;
    media_file: MediaInterface | null;
    updatedAt?: string | number;
}

type GetB2bImages = (userId: string) => Promise<B2BImageResponse>;
const getB2bImagesTyped = getB2bImages as GetB2bImages;

type B2BKey = readonly ["b2b-image", string];

const swrKey = (userId?: string): B2BKey | null =>
    userId ? (["b2b-image", userId] as const) : null;

export function useB2bImage(userId?: string): {
    imageUrl: string | null;
    data: B2BImageResponse | undefined;
    error: unknown;
    isLoading: boolean;
    mutate: SWRResponse<B2BImageResponse, unknown>["mutate"];
    key: B2BKey | null;
    refresh: () => Promise<B2BImageResponse | undefined> | undefined;
} {
    const key = swrKey(userId);

    const {data, error, isLoading, mutate} = useSWR<B2BImageResponse>(
        key as SWRKey,
        () => getB2bImagesTyped(userId!),
        {revalidateOnFocus: false}
    );

    const filePath = data?.media_file?.filePath ?? null;
    const version = data?.updatedAt ?? (data ? Date.now() : "0");
    const base = process.env.NEXT_PUBLIC_ADMIN_URL ?? "";
    const imageUrl = filePath ? `${base}${filePath}?v=${version}` : null;

    return {
        imageUrl,
        data,
        error,
        isLoading,
        mutate,
        key,
        refresh: () => (key ? globalMutate<B2BImageResponse>(key) : undefined),
    };
}

export const mutateB2bImage = (userId?: string) => {
    const key = swrKey(userId);
    return key ? globalMutate<B2BImageResponse>(key) : undefined;
};
