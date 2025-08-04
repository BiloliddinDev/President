import { StaticImageData } from "next/image";

export interface ImageWithTextProps {
  imgSrc?: StaticImageData | string;
  title: string;
  subtitle: string;
  alt: string;
  orderText: string;
  orderImg: string;
  margin: string;
  video?:string
}
