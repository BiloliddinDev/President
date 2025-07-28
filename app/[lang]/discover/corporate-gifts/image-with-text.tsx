import VideoBox from "@/components/shared/video-box/video-box";
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
  video
}) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-[100px]">
      <div className={`max-w-[34rem] ${orderText}`}>
        <h6 className="text-lg font-medium leading-7 mb-5">{title}</h6>
        <p className="text-sm text-[#474B57]">{subtitle}</p>
      </div>
      <div className={`max-w-[800px] ${orderImg}`}>
        {video ? 
        <VideoBox videoSrc={video} width={"full"} height="300px" />
: imgSrc ? 
        <Image width={1000} height={1000} src={imgSrc} alt={alt} className="w-full max-w-[550px] h-[400px] object-cover rounded" />
:<></>}
      </div>
    </div>
  );
};

export default ImageWithText;
