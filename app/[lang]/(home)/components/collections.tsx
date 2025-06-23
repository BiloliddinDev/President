import { FC } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CollectionImage from "@/public/images/colection-left.png";
import { CollectionCard } from "@/components/shared/collection-card/collection-card";
import { CollectionType } from "@/interface/collection-type/collection-type";
import { CollectionItem } from "@/constants/colection-item";
import { SectionTitle } from "@/components/ui/sectionTitle";
import { Button } from "@/components/ui/button";

export const Collections: FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full mt-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={CollectionImage.src}
          alt="Collection Left Image"
          width={500}
          height={500}
          className="object-contain w-full "
        />
      </div>
      <div className="w-full container  md:w-1/2">
        <SectionTitle className={" mb-10 md:mb-[75px]"} text={"Toʻplamlar"} />
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
            containScroll: "trimSnaps",
          }}
          className="m-0 p-0 relative w-full text-center"
        >
          <CarouselContent className="m-0 p-0">
            {CollectionItem.map((item: CollectionType) => (
              <CarouselItem
                key={item.id}
                className="m-0 p-0 min-w-48"
                style={{ flex: "0 0 30%" }}
              >
                <CollectionCard newsItem={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <Button variant={"secondary"} className={"mt-16 w-full md:max-w-52"}>
            Shop now
          </Button>
        </Carousel>
      </div>
    </div>
  );
};
