import { StaticImageData } from "next/image";

export interface VideoWithTextProps {
  videoSrc: string | StaticImageData;
  productType?: string;
  description: string;
  textInfo: string;
  className?: string;
  reverse?: boolean;
}
