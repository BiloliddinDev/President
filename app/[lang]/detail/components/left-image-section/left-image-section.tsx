"use client";

import Image from "next/image";
import {MediaInterface} from "@/interface/products-interface/products-interface";

interface LeftImagesSectionProps {
    mediaData: MediaInterface[] | undefined;
}

export const LeftImagesSection = ({mediaData}: LeftImagesSectionProps) => {
    const images = mediaData?.filter((item) => item?.mediaType === "IMAGE") || [];
    const videos = mediaData?.filter((item) => item?.mediaType === "VIDEO") || [];

    const allItems = [...videos, ...images];
    const total = allItems.length;

    return (
        <div className="h-[1000px] overflow-y-auto pr-1 custom-scroll lg:w-1/2 w-full">
            <div className="flex flex-wrap">
                {allItems.map((item, index) => {
                    const src = `${process.env.NEXT_PUBLIC_ADMIN_URL}${item.filePath}`;
                    const isVideo = item.mediaType === "VIDEO";

                    // Width logic
                    let widthClass = "w-1/2";
                    if (total % 2 === 0) {
                        if (index === 0 || index === total - 1) widthClass = "w-full";
                    } else {
                        if (index === 0) widthClass = "w-full";
                    }

                    return (
                        <div key={item.id} className={`${widthClass} p-[1px]`}>
                            {isVideo ? (
                                <video
                                    src={src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-[450px] object-cover bg-neutral-100 rounded-[4px]"
                                />
                            ) : (
                                <Image
                                    src={src}
                                    alt={"Detail page image"}
                                    width={600}
                                    height={500}
                                    className="w-full h-auto object-cover bg-neutral-100 rounded-[4px]"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
