import VideoBox from "@/components/shared/video-box/video-box";
import { VideoWithTextProps } from "@/interface/discover/video-text";
import React, { FC } from "react";

const CommonWatchSection: FC<VideoWithTextProps> = ({
  productType,
  description,
  textInfo,
  videoSrc,
}) => {
  return (
    <div className="flex flex-col justify-center  gap-7 mb-[150px]">
      <div>
        <h5 className="font-medium">{productType}</h5>
        <p className="leading-7 text-lg mt-2.5">{description}</p>
      </div>
      <div className="max-w-[1200px]">
        <VideoBox videoSrc={videoSrc} width={"full"} height="465px" />
      </div>
      <p className=" text-sm text-[#474B57]">{textInfo}</p>
    </div>
  );
};

export default CommonWatchSection;
