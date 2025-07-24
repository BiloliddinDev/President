"use client";

import React from "react";
import Image, {StaticImageData} from "next/image";
import {useWindowSize} from "@/hooks/use-window-size";
import {getResponsiveValue, ResponsiveValue} from "@/hooks/get-responsive-value";
import logo from "@/public/backend-image/no-bg.png"

interface RightImageProps {
    // backgroundImage: StaticImageData;
    image: StaticImageData;
    size: number;
    top?: ResponsiveValue;
    right?: ResponsiveValue;
}

export default function RightImage({ image, size, top, right}: RightImageProps): React.ReactElement {
    const {width} = useWindowSize();

    const adjustedTop = getResponsiveValue(top, width);
    const adjustedRight = getResponsiveValue(right, width);

console.log(size)
    return (
        <div className="relative">
            <Image src={image} alt="b2b background image" width={500} height={500} className="relative"/>
            <div
                style={{
                    position: "absolute",
                    top: adjustedTop ? `${adjustedTop}px` : "auto",
                    right: adjustedRight ? `${adjustedRight}px` : "auto",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Image src={logo} alt="b2b image" width={size} height={size}/>
            </div>
        </div>
    );
}
