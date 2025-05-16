import {FC} from 'react';
import {Button} from "@/components/ui/button";
import {imageLoader} from "@/lib/imageLoader";
import  showcaseImage from "@/public/images/showcase-image.png";

export const Showcase: FC = () => {
    const backgroundImageUrl = imageLoader({
        src: `${showcaseImage.src}`,
        width: 1250,
        quality: 100,
    });

    return (
        <div
            className="h-[755px] bg-no-repeat bg-cover flex flex-col justify-end pb-[90px]"
            style={{
                backgroundImage: `
          linear-gradient(to bottom, 
                     rgba(0,0,0,0.7),  
                     rgba(0,0,0,0.3),  
                     rgba(0,0,0,0.3),  
                     rgba(0,0,0,0.7)     
),
          url('${backgroundImageUrl}')
        `
            }}
        >
            <div className="container">
                <h1 className="w-[400px] mb-3 justify-center text-white text-6xl font-normal font-title">
                    Bags & Leather Goods
                </h1>
                <p className="w-64 mb-12 justify-start text-white text-base font-normal tracking-wide">
                    New Styles In Refined Colours
                </p>
                <Button aria-busy={true} variant={"outline"}>Shop now</Button>
            </div>
        </div>
    );
};