import {StaticImageData} from "next/image";


export interface ProductCardProps {
    id: number,
    name: string,
    price: number,
    basePriceToUSD : number
    sku: string,
    imgUrl: StaticImageData | string,
}

