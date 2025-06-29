import {StaticImageData} from "next/image";

export type CollectionType = {
    id?: number,
    title: {
        uz: string
        ru: string
        en: string
    }
    price: string
    image: StaticImageData
}