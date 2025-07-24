"use client";

import {create} from "zustand";
import {persist} from "zustand/middleware";

interface WishlistStore {
    items: number[];
    addToWishlist: (itemId: number) => void;
    removeFromWishlist: (itemId: number) => void;
    isInWishlist: (itemId: number) => boolean;
    toggleWishlist: (itemId: number) => void;
}

export const useWishlistStore = create<WishlistStore>()(
    persist(
        (set, get) => ({
            items: [],

            addToWishlist: (itemId) => {
                if (!get().isInWishlist(itemId)) {
                    set((state) => ({
                        items: [...state.items, itemId],
                    }));
                }
            },

            removeFromWishlist: (itemId: number) =>
                set((state) => ({
                    items: state.items.filter((item) => item !== itemId),
                })),


            isInWishlist: (itemId) => {
                return get().items.includes(itemId);
            },

            toggleWishlist: (itemId) => {
                const exists = get().isInWishlist(itemId);
                if (exists) {
                    get().removeFromWishlist(itemId);
                } else {
                    get().addToWishlist(itemId);
                }
            },
        }),
        {
            name: "wishlist-storage",
        }
    )
);
