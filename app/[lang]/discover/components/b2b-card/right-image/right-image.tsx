"use client";

import React, {useEffect, useState} from "react";
import Image, {StaticImageData} from "next/image";
import {useWindowSize} from "@/hooks/use-window-size";
import {getResponsiveValue, ResponsiveValue} from "@/hooks/get-responsive-value";
import {getB2bImages} from "@/service/b2b/b2b-upload";
import {useSession} from "next-auth/react";
import {MediaInterface} from "@/interface/products-interface/products-interface";

interface RightImageProps {
    image: StaticImageData;
    size: number;
    top?: ResponsiveValue;
    right?: ResponsiveValue;
}

interface ImageProps {
    "id": null,
    media_file: MediaInterface
}

export default function RightImage({image, size, top, right,}: RightImageProps): React.ReactElement {
    const {width} = useWindowSize();
    const adjustedTop = getResponsiveValue(top, width);
    const adjustedRight = getResponsiveValue(right, width);
    const [images, setImages] = useState<ImageProps>()
    const {data: session} = useSession();

    useEffect(() => {
        const fetchImages = async () => {
            const response = await getB2bImages(`${session?.user.serverData?.id}`)

            if (response && response.media_file && response.media_file.filePath) {
                setImages(response);
            }
        }

        fetchImages().then().catch().finally()
    }, [session?.user.serverData?.id])


    let imageSrc = null;
    if (images?.media_file?.filePath) {
        imageSrc = `${process.env.NEXT_PUBLIC_ADMIN_URL}${images.media_file.filePath}`;
    }

    console.log(images)


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
                {imageSrc && (
                    <Image src={imageSrc} alt="b2b image" width={size} height={size}/>
                )}
            </div>
        </div>
    );
}