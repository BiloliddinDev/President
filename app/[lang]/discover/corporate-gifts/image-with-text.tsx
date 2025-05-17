import { ImageWithTextProps } from "@/interface/discover/img-with-text";
import Image from "next/image";
import React, { FC } from "react";

const ImageWithText: FC<ImageWithTextProps> = ({
  imgSrc,
  title,
  subtitle,
  alt,
  orderText,
  orderImg,
}) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-[150px]">
      <div className={`max-w-[34rem] ${orderText}`}>
        <h6 className="text-lg font-medium leading-7 mb-5">{title}</h6>
        <p className="text-sm text-[#474B57]">{subtitle}</p>
      </div>
      <div className={`max-w-lg ${orderImg}`}>
        <Image src={imgSrc} alt={alt} className="w-full h-full rounded" />
      </div>
    </div>
  );
};

export default ImageWithText;
