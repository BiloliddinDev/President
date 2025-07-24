"use client"

import {useEffect, useMemo, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {imageLoader} from "@/lib/imageLoader";
// import img1 from "@/public/images/showcase4.jpg";
// import img2 from "@/public/images/showcase3.jpg";
// import img3 from "@/public/images/showcase2.png";
// import img4 from "@/public/images/showcase1.png";
import images1 from "@/public/images/1.webp";
import images2 from "@/public/images/2.webp";
import images3 from "@/public/images/3.webp";
// import images1 from "@/public/images/clock-show-case.jpg";
// import  images2 from  '@/public/images/souvenir.jpg'
// import  images3 from  '@/public/images/koja-sumka.jpg'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ShowcaseDataFrom} from "@/interface/showcase-type/showcase-type";


const images = [images1, images2, images3];
// const images = [img1, img2, img3, img4];


export default function ShowcaseAnimation({DataLayer}: {
    DataLayer: ShowcaseDataFrom
}) {
    const [current, setCurrent] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const backgroundImageUrl = useMemo(() => {
        return imageLoader({
            src: images[current].src,
            width: 1400,
            quality: 100,
        });
    }, [current]);
console.log("showcase", DataLayer)
    return (
        <div className="relative h-screen shadow-2xl overflow-hidden">
            <AnimatePresence mode="sync">
                <motion.div
                    key={current}
                    initial={{opacity: 0, scale: 1.04}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 1.02}}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${backgroundImageUrl}')`,
                    }}
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]"/>

            <div className="relative z-10 h-full w-full flex flex-col justify-end py-8 px-4 md:pb-[90px]">
                <div className="container">
                    <h1 className=" w-full md:w-[650px] mb-1.5 md:mb-3 text-white text-3xl md:text-6xl font-normal font-title showcase-title">
                        {/* {DataLayer["showcase.title"]} */}Добро пожаловать!
                    </h1>
                    <p className="w-64 md:w-[600px] mb-5 md:mb-12 text-white text-base font-normal tracking-wide">
                        {/* {DataLayer["showcase.description"]} */}В мир эксклюзивных подарков, где каждый предмет — это уважение, статус и безупречный вкус.
                    </p>
                    <Link href="#support">
                        <Button
                            variant="outline"
                            className="w-full sm:w-52 bg-gold hover:bg-gold/90 text-white border-none hover:text-white/90 h-12 rounded-[12px]"
                        >
                            {DataLayer["showcase.button"]}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}