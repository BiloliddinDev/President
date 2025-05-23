import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface Props {
  imgSource: string | StaticImageData;
  infoText: string;
  imgAlt: string;
  textStyles?: string;
}
const InformationWithImg: FC<Props> = ({
  imgSource,
  infoText,
  imgAlt,
  textStyles,
}) => {
  return (
    <>
      <p className={`text-sm font-medium my-8 md:my-12 ${textStyles}`}>
        {infoText}
      </p>

      <Image
        src={imgSource}
        alt={imgAlt}
        className="w-full h-auto object-contain"
      />
    </>
  );
};

export default InformationWithImg;
