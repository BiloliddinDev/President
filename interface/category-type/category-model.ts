import {StaticImageData} from "next/image";

export interface CategoryCardType {
    id: number;
    text: {
        uz : string
        ru : string
        en : string
    };
    images: StaticImageData;
}