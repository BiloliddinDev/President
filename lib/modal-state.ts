import { create } from 'zustand'

interface ModalState {
    hasShown: boolean
    setHasShown: (shown: boolean) => void
}

const isClient = typeof window !== 'undefined'

export const useModalStore = create<ModalState>((set) => ({
    hasShown: isClient ? sessionStorage.getItem('modalShown') === 'true' : false,
    setHasShown: (shown) => {
        if (isClient) {
            sessionStorage.setItem('modalShown', String(shown))
        }
        set({ hasShown: shown })
    },
}))