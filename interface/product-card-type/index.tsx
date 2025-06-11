import {StaticImageData} from "next/image";

export interface ProductCardProps {
    id: number;
    title: string;
    price: number;
    imgUrl: StaticImageData;
    isNewArrival: boolean;
    isFavorite: boolean;
}

