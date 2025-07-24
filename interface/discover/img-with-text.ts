import { StaticImageData } from "next/image";

export interface ImageWithTextProps {
  imgSrc?: StaticImageData | string;
  title: string;
  subtitle: string;
  alt: string;
  orderText: string;
  orderImg: string;
  video?:string
}
