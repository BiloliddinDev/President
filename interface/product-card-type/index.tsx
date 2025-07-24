import {StaticImageData} from "next/image";


export interface ProductCardProps {
    id: number,
    name: string,
    price: number,
    sku: string,
    imgUrl: StaticImageData | string,
}

