import { StaticImageData } from "next/image";

export interface NewsCardProps {
    id: string | number;
    text: string;
    description: string;
    images: StaticImageData;
}
