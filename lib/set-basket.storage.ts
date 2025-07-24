"use client"

import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {ProductCardProps} from "@/interface/product-card-type"

interface BasketItem extends ProductCardProps {
    quantity: number
}

interface BasketStore {
    items: BasketItem[]
    addToBasket: (item: ProductCardProps) => void
    removeFromBasket: (itemId: number) => void
    clearBasket: () => void
    isInBasket: (itemId: number) => boolean
    increaseQuantity: (itemId: number) => void
    decreaseQuantity: (itemId: number) => void
    getProductCountById: (itemId: number) => number
}

export const useBasketStore = create<BasketStore>()(
    persist(
        (set, get) => ({
            items: [],

            addToBasket: (item) => {
                const exists = get().items.find(i => i.id === item.id)
                if (exists) {
                    set((state) => ({
                        items: state.items.map(i =>
                            i.id === item.id ? {...i, quantity: i.quantity + 1} : i
                        )
                    }))
                } else {
                    set((state) => ({
                        items: [...state.items, {...item, quantity: 1}]
                    }))
                }
            },

            removeFromBasket: (itemId) => {
                set((state) => ({
                    items: state.items.filter(item => item.id !== itemId)
                }))
            },

            clearBasket: () => {
                set(() => ({items: []}))
            },

            isInBasket: (itemId) => {
                return get().items.some(item => item.id === itemId)
            },

            increaseQuantity: (itemId) => {
                set((state) => ({
                    items: state.items.map(item =>
                        item.id === itemId ? {...item, quantity: item.quantity + 1} : item
                    )
                }))
            },

            decreaseQuantity: (itemId) => {
                set((state) => ({
                    items: state.items
                        .map(item =>
                            item.id === itemId ? {...item, quantity: item.quantity - 1} : item
                        )
                        .filter(item => item.quantity > 0)
                }))
            },

            getProductCountById: (itemId) => {
                const item = get().items.find(i => i.id === itemId)
                return item ? item.quantity : 0
            }
        }),
        {
            name: 'basket-storage',
        }
    )
)
