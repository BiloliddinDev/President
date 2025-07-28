// import VideoBox from "@/components/shared/video-box/video-box";
import { ImageWithTextProps } from "@/interface/discover/video-text";
import Image from "next/image";
import React, { FC } from "react";

const WatchVsText: FC<ImageWithTextProps> = ({
  videoSrc,
  productType,
  description,
  textInfo,
  className,
  reverse,
}) => {
  return (
    <div
      className={`flex flex-wrap items-center justify-between mb-[150px] ${className}`}
    >
      {reverse ? (
        <>
         <Image  width={"500"} height={"500"} src={videoSrc} alt={"videoSrc"} className="w-full  h-full max-w-[500px] max-h-[500px] object-cover rounded" />
          {/* <VideoBox videoSrc={videoSrc} width={"500px"} height={"500px"} /> */}
          <div className="max-w-[34rem] ml-6">
            <h5 className="font-medium">{productType}</h5>
            <p className="leading-7 text-lg mt-2.5 mb-5">{description}</p>
            <p className="text-sm text-[#474B57]">{textInfo}</p>
          </div>
        </>
      ) : (
        <>
          <div className="max-w-[34rem] mr-6">
            <h5 className="font-medium">{productType}</h5>
            <p className="leading-7 text-lg mt-2.5 mb-5">{description}</p>
            <p className="text-sm text-[#474B57]">{textInfo}</p>
          </div>
         <Image  width={"500"} height={"500"} src={videoSrc} alt={"videoSrc"} className="w-full  h-full max-w-[500px] max-h-[500px] object-cover rounded" />

           {/* <VideoBox videoSrc={videoSrc} width={"500px"} height={"500px"} /> */}
        </>
      )}
    </div>
  );
};

export default WatchVsText;
