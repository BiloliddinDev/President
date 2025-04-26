import {StaticImageData} from "next/image";

export type CollectionType = {
    id?: number,
    title: string
    price: string
    image: StaticImageData
}