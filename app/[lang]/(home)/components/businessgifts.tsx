"use client";

import React, {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import image1 from "@/public/images/corparative-image.jpg"

import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel";
import {SectionTitle} from "@/components/ui/sectionTitle";
import {SupportFormModal} from "@/components/shared/form-modal/form.modal";

const images = [image1];

interface BusinessGiftsCarouselProps {
    dictionary: {
        corporategifts: {
            title: string;
            text: string
            btn: string
        };
    };
    lang?: "uz" | "ru" | "en";
}

export default function BusinessGiftsCarousel({dictionary}: BusinessGiftsCarouselProps) {
    const plugin = useRef(Autoplay({delay: 3000, stopOnInteraction: false}));

    return (
        <div className="w-full ">
            <SectionTitle
                className={"container !mb-7"}
                text={dictionary.corporategifts.title}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20  bg-neutral-100">
                <div className="">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full h-full"
                        inert={true}
                        onMouseEnter={() => plugin.current.stop()}
                        onMouseLeave={() => plugin.current.reset()}
                    >
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="!h-72 md:!h-[550px] !border-r-0">
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

                        {/*<CarouselNext className="right-5 w-[45px] h-[45px]"/>*/}
                    </Carousel>
                </div>

                <div className="">
                    <div className="w-full">
                        <h2 className="text-primary mb-5 text-lg md:text-5xl font-normal font-title mt-5 md:mt-[75px]">
                            {dictionary.corporategifts.title}
                        </h2>
                        <p className="text-gray-600 text-base md:text-xl max-w-[353px] md:w-[500]  font-normal font-description mb-5">
                            {dictionary.corporategifts.text}
                        </p>
                        {/*<Link href={"/discover/b2b-service"} className={"mt-4"}>*/}
                        {/*    <Button variant={"secondary"} className="mb-10 md:mb-0 max-w-44">*/}
                        {/*        {dictionary.corporategifts.btn}*/}
                        {/*    </Button>*/}
                        {/*</Link>*/}
                        <div className="mb-10 md:mb-0 max-w-44">
                            <SupportFormModal btnText={dictionary.corporategifts.btn}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
