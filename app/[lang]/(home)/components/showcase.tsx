import { FC } from 'react';
import { Button } from "@/components/ui/button";
import { imageLoader } from '@/lib/imageLoader';

export const Showcase: FC = () => {
    const backgroundImageUrl = imageLoader({
        src: "https://www.montblanc.com/content/images/cms/ycm/resource/blob/856100/aa02ab27ae6b90f2e9085bf45059bdf4/global-header-1920x840-data.png/w1349.jpg",
        width: 1250,
        quality: 100,
    });

    return (
        <div
            className="h-[755px] bg-no-repeat bg-cover flex flex-col justify-end pb-[90px]"
            style={{
                backgroundImage: `
          linear-gradient(to bottom, 
            rgba(0,0,0,0.4), 
            rgba(0,0,0,0.1),
            rgba(0,0,0,0.1),
            rgba(0,0,0,0.4)
          ),
          url('${backgroundImageUrl}')
        `
            }}
        >
            <div className="container">
                <h1 className="w-[400px] mb-3 justify-center text-white text-4xl font-semibold">
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
