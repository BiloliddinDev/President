import {StaticImageData} from "next/image";

export interface CategoryCardType {
    id: number;
    text: string;
    images: StaticImageData;
}