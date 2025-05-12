import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { SheetTitle } from "@/components/ui/sheet";
import { categoryModalItems } from "@/constants/category-item";
import { productCardItems } from "@/constants/product-card-item";
import Link from "next/link";
import React from "react";
import ProductCard from "../../product-card";

const SearchModal = () => {
  return (
    <div className="pb-20">
      <div className="flex gap-[204px]">
        <Logo />
        <Input className="w-xl" type="search" placeholder="Search" />
      </div>
      <div className="my-5 py-5 px-2.5">
        <SheetTitle className="text-lg mb-8">Product suggestion</SheetTitle>
        <div className="flex justify-between gap-[160px] container">
          <Carousel
            className="max-w-4xl"
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className="m-0 p-0 relative">
              {productCardItems.map((item) => (
                <CarouselItem className="basis-[33%]" key={item.id}>
                  <ProductCard
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    status={item.status}
                    imgUrl={item.imgSrc}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-40" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-40" />
          </Carousel>
          <div className="basis-1/3 ">
            <SheetTitle>Categories</SheetTitle>
            {categoryModalItems.map((item) => (
              <div
                key={item.id}
                className={`text-sm
                font-normal leading-[1.5rem] cursor-pointer my-2.5
             `}
              >
                <Link href="/"> {item.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
