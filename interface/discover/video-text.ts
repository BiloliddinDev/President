import { StaticImageData } from "next/image";

export interface VideoWithTextProps {
  videoSrc: string ;
  productType?: string;
  description: string;
  textInfo: string;
  className?: string;
  reverse?: boolean;
}
export interface ImageWithTextProps {
  videoSrc: string | StaticImageData ;
  productType?: string;
  description: string;
  textInfo: string;
  className?: string;
  reverse?: boolean;
}