"use client";

import React, {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Artel from "@/public/images/brand.png";
import {Carousel, CarouselContent, CarouselItem, CarouselNext,} from "@/components/ui/carousel";
import {SectionTitle} from "@/components/ui/sectionTitle";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const images = [
    Artel,
    Artel,
    Artel,
    Artel,
];

export default function BusinessGiftsCarousel() {
    const plugin = useRef(Autoplay({delay: 3000, stopOnInteraction: false}));

    return (
        <div className="w-full ">
            <SectionTitle className={"container !mb-7"} text={"Service for your brand"}/>

            <div className="flex flex-col lg:flex-row gap-20 bg-neutral-100">
                <div className="w-[50%]">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full h-full"
                        onMouseEnter={() => plugin.current.stop()}
                        onMouseLeave={() => plugin.current.reset()}
                    >
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="h-[550px] !border-r-0">
                                        <Image
                                            src={image.src}
                                            alt={`President Business Gift ${index + 1}`}
                                            width={800}
                                            height={500}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselNext className="right-5 w-[45px] h-[45px]"/>
                    </Carousel>
                </div>


                <div className="w-[50%]">
                    <h2 className="text-primary mb-5 text-5xl font-normal font-title mt-[75px]">President Business
                        Gifts</h2>
                    <p className="text-gray-600 text-xl w-[480px]  font-normal font-description mb-5">
                        President Business Gifts is not just a premium gift brand — it is a unique fusion of national
                        identity and contemporary aesthetics. Inspired by the historical heritage, cultural richness,
                        and artisanal traditions of the Uzbek people, we blend them seamlessly with modern design and
                        the highest standards of quality.
                    </p>
                    <Link href={"/discover/b2b-service"} className={'mt-4'}>
                        <Button variant={"secondary"}>Read more</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
