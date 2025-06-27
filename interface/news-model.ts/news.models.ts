import { StaticImageData } from "next/image";

export interface NewsCardProps {
    id: string | number;
    text: {
        uz : string
        ru : string
        en : string
    };
    description: {
        uz : string
        ru : string
        en : string
    };
    images: StaticImageData;
}
