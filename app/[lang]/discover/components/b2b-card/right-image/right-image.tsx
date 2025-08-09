"use client";

import React from "react";
import Image, {StaticImageData} from "next/image";
import {useWindowSize} from "@/hooks/use-window-size";
import {getResponsiveValue, ResponsiveValue} from "@/hooks/get-responsive-value";
import {useSession} from "next-auth/react";
import {useB2bImage} from "@/hooks/useB2bImage";

interface RightImageProps {
    image: StaticImageData;
    size: number;
    top?: ResponsiveValue;
    right?: ResponsiveValue;
}

export default function RightImage({image, size, top, right}: RightImageProps) {
    const {width} = useWindowSize();
    const adjustedTop = getResponsiveValue(top, width);
    const adjustedRight = getResponsiveValue(right, width);
    const {data: session} = useSession();

    const userId = session?.user?.serverData?.id || "a049f6e0-4162-4173-abd2-e74de8476c0e";
    const {imageUrl} = useB2bImage(userId);

    return (
        <div className="relative" data-aos="fade-left">
            <Image src={image} alt="b2b background image" width={500} height={500} className="relative"/>
            <div
                style={{
                    position: "absolute",
                    top: adjustedTop ? `${adjustedTop}px` : "auto",
                    right: adjustedRight ? `${adjustedRight}px` : "auto",
                    transform: "translate(-50%, -50%)",
                }}
            >
                {imageUrl && <Image src={imageUrl} alt="b2b image" width={size} height={size}/>}
            </div>
        </div>
    );
}
