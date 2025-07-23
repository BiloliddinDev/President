"use client"

import {create} from "zustand";
import {persist} from "zustand/middleware";
import {ProductsInterface} from "@/interface/products-interface/products-interface";

interface WishlistStore {
    items: ProductsInterface[];
    addToWishlist: (item: ProductsInterface) => void;
    removeFromWishlist: (itemId: number) => void;
    isInWishlist: (itemId: number) => boolean;
    toggleWishlist: (item: ProductsInterface) => void;
}

export const useWishlistStore = create<WishlistStore>()(
    persist(
        (set, get) => ({
            items: [],

            addToWishlist: (item) => {
                if (!get().isInWishlist(item.id)) {
                    set((state) => ({
                        items: [...state.items, item],
                    }));
                }
            },

            removeFromWishlist: (itemId) => {
                set((state) => ({
                    items: state.items.filter((item) => item.id !== itemId),
                }));
            },

            isInWishlist: (itemId) => {
                return get().items.some((item) => item.id === itemId);
            },

            toggleWishlist: (item) => {
                const isFavorite = get().isInWishlist(item.id);
                if (isFavorite) {
                    get().removeFromWishlist(item.id);
                } else {
                    get().addToWishlist(item);
                }
            },
        }),
        {
            name: "wishlist-storage", // localStorage key nomi
        }
    )
);
