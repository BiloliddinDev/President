"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface AutoplayCarouselProps {
  images: { src: string }[];
}

export default function AutoplayCarousel({ images }: AutoplayCarouselProps) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
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
    </Carousel>
  );
}
