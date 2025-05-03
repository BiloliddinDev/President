import ProductVideoCard from "@/components/shared/product-video-card/video-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SectionTitle } from "@/components/ui/sectionTitle";
import { productItem } from "@/constants/product-videos-item";
import React from "react";
import { FC } from "react";

export const ProductVideos: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="relative">
      <SectionTitle className="container" text={title} />
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        }}
        className="m-0 p-0 mt-12 relative"
      >
        <CarouselContent className="relative container">
          {productItem.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                className={"m-0 p-0"}
                style={{ flex: "0 0 25%" }}
              >
                <ProductVideoCard productItem={item} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {/* <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-40" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-40" /> */}
      </Carousel>
    </div>
  );
};
