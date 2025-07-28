import {StaticImageData} from "next/image";

export interface VideoBoxProps {
    videoSrc?: string | StaticImageData | undefined;
    width: string;
    height: string;
    poster?: string;
    className?: string;
}
