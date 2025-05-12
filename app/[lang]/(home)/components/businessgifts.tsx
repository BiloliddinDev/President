"use client";

import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Artel from "@/public/svg/artel.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  
} from "@/components/ui/carousel";

const images = [
  Artel,
  Artel,
  Artel,
  Artel,
];

export default function BusinessGiftsCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <div className="w-full h-auto ">
      <h2 className="font-inter font-medium text-2xl md:text-3xl uppercase text-[#0E1422] mb-8 ml-5">
        Service for your brand
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-15">
        
        <div className="lg:w-[50%] h-[550px]"> 
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-full" 
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.reset()}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-2 h-[550px]"> 
                    <Image
                      src={src}
                      alt={`President Business Gift ${index + 1}`}
                      width={800}
                      height={500}
                      className="rounded-lg object-cover w-full h-full" 
                      style={{ objectFit: "cover" }} 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
           
            <CarouselNext className="right-5 w-[45px] h-[45px]" />
          </Carousel>
        </div>
        
        
        <div className="lg:w-[50%] flex flex-col justify-center gap-3 pr-1 2xl:pr-[200px]">
          <h3 className="font-inter font-semibold text-2xl md:text-3xl lg:text-4xl text-[#0E1422] mb-4">
            President Business Gifts
          </h3>
          <p className="font-inter font-normal text-base md:text-lg lg:text-xl text-[#5C5F6A] mb-6 leading-relaxed">
            President Business Gifts is not just a premium gift brand — it is a unique fusion of national identity and contemporary aesthetics. Inspired by the historical heritage, cultural richness, and artisanal traditions of the Uzbek people, we blend them seamlessly with modern design and the highest standards of quality.
          </p>
          <button className="w-[180px] h-[50px] border border-[#0E1422] hover:bg-[#0E1422] hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer">
            <span className="font-inter font-medium">Read more</span>
          </button>
        </div>
      </div>
    </div>
  );
}
