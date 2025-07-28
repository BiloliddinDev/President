import VideoBox from "@/components/shared/video-box/video-box";
import { ImageWithTextProps } from "@/interface/discover/video-text";
import Image from "next/image";
import React, { FC } from "react";

const CommonWatchSection: FC<ImageWithTextProps> = ({
  productType,
  description,
  textInfo,
  videoSrc,
}) => {
  return (
    <div className="flex flex-col justify-center  gap-7 mb-[150px]">
      <div>
        {productType && <h5 className="font-medium">{productType}</h5>}
        <p className="leading-7 text-lg mt-2.5">{description}</p>
      </div>
      <div className="max-w-[1200px]">
        {typeof videoSrc === "string" ? (
          <VideoBox videoSrc={videoSrc} width={"full"} height="465px" />
        ) : (
          <Image
            width={1000}
            height={1000}
            src={videoSrc}
            alt={"videoSrc"}
            className="w-full  h-full max-h-[450px] object-cover rounded"
          />
        )}
      </div>
      <p className=" text-sm text-[#474B57]">{textInfo}</p>
    </div>
  );
};

export default CommonWatchSection;
