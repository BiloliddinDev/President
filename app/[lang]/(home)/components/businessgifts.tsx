"use client";

import React, {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Artel from "@/public/svg/artel.svg";
import {Carousel, CarouselContent, CarouselItem, CarouselNext,} from "@/components/ui/carousel";
import {SectionTitle} from "@/components/ui/sectionTitle";
import {Button} from "@/components/ui/button";

const images = [
    Artel,
    Artel,
    Artel,
    Artel,
];

export default function BusinessGiftsCarousel() {
    const plugin = useRef(Autoplay({delay: 3000, stopOnInteraction: false}));

    return (
        <div className="w-full">
            <SectionTitle className={"container !mb-7"} text={"Service for your brand"}/>

            <div className="flex flex-col lg:flex-row gap-15">
                <div className="">
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
                                            src={image}
                                            alt={`President Business Gift ${index + 1}`}
                                            width={800}
                                            height={500}
                                            className="rounded-lg object-cover w-full h-full"
                                            style={{objectFit: "cover"}}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselNext className="right-5 w-[45px] h-[45px]"/>
                    </Carousel>
                </div>


                <div className="">
                   <h2 className="text-primary mb-5 text-5xl font-normal font-title">President Business Gifts</h2>
                    <p className="text-gray-600 text-xl font-normal font-description ">
                        President Business Gifts is not just a premium gift brand — it is a unique fusion of national
                        identity and contemporary aesthetics. Inspired by the historical heritage, cultural richness,
                        and artisanal traditions of the Uzbek people, we blend them seamlessly with modern design and
                        the highest standards of quality.
                    </p>
                   <Button variant={"secondary"}>Read more</Button>
                </div>
            </div>
        </div>
    );
}
