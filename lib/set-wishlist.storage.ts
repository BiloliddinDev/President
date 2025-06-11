"use client"

import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {ProductCardProps} from "@/interface/product-card-type";

interface WishlistStore {
    items: ProductCardProps[]
    addToWishlist: (item: ProductCardProps) => void
    removeFromWishlist: (itemId: number) => void
    isInWishlist: (itemId: number) => boolean
    toggleWishlist: (item: ProductCardProps) => void
}

export const useWishlistStore = create<WishlistStore>()(
    persist(
        (set, get) => ({
            items: [],

            addToWishlist: (item) => {
                set((state) => ({
                    items: [...state.items, {...item, isFavorite: true}]
                }))
            },

            removeFromWishlist: (itemId) => {
                set((state) => ({
                    items: state.items.filter((item) => item.id !== itemId)
                }))
            },

            isInWishlist: (itemId) => {
                return get().items.some((item) => item.id === itemId)
            },

            toggleWishlist: (item) => {
                const isItemInWishlist = get().isInWishlist(item.id)
                if (isItemInWishlist) {
                    get().removeFromWishlist(item.id)
                } else {
                    get().addToWishlist(item)
                }
            }
        }),
        {
            name: 'wishlist-storage',
        }
    )
)