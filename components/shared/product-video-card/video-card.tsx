"use client";

import React, { useRef, useState } from "react";
import { ProductVideoProps } from "@/interface/product-videos-type/product-video";
import Link from "next/link";

const ProductVideoCard: React.FC<{ productItem: ProductVideoProps }> = ({
  productItem,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter: React.MouseEventHandler<
    HTMLDivElement
  > = async () => {
    const video = videoRef.current;
    if (video && video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Video play error:", err);
      }
    }
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
   <Link href={productItem.instaLink} className={"block"} target={"_blank"}>
     <div
         className="relative  overflow-hidden rounded-[4px] cursor-pointer "
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
     >
       <video
           ref={videoRef}
           className="w-full h-[420px] object-cover"
           src={productItem.video}
           muted
           preload="auto"
           playsInline
           suppressHydrationWarning
       />

       {!isPlaying && (
           <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity">
             <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center">
               <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="w-8 h-8 text-white ml-1"
                   fill="currentColor"
                   viewBox="0 0 20 20"
               >
                 <path d="M6 4l10 6-10 6V4z" />
               </svg>
             </div>
           </div>
       )}
     </div>
   </Link>
  );
};

export default ProductVideoCard;
