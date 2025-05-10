import { StaticImageData } from "next/image";

export interface ProductCardProps {
  id: number | string;
  imgUrl: string | StaticImageData;
  status: string;
  price: string;
  name: string;
}
