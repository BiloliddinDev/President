import {StaticImageData} from "next/image";
import {ProductPriceInterface} from "@/interface/products-interface/products-interface";


export interface ProductCardProps {
    id: number,
    name: string,
    price: {
        currency: ProductPriceInterface,
        price: number,
    }[]
    basePriceToUSD: number
    sku: string,
    imgUrl: StaticImageData | string,
}

