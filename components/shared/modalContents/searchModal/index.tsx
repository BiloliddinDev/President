import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { FooterLogo } from "@/components/ui/logo";
import { SheetClose } from "@/components/ui/sheet";
import { categoryModalItems } from "@/constants/category-item";
import { productCardItems } from "@/constants/product-card-item";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/shared/product-card";
import { X } from "lucide-react";

const SearchModalData = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Ekran o‘lchamini tekshirish
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen(); // sahifa yuklanganda
    window.addEventListener("resize", checkScreen); // o‘lcham o‘zgarganda

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="pb-20">
      {isDesktop && (
        <div className="container flex flex-wrap items-center justify-between">
          <FooterLogo />
          <Input className="w-xl" type="search" placeholder="Search" />

          <SheetClose className="rounded-sm cursor-pointer opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>
      )}

      <div className="md:container">
        <p className="text-base  md:text-lg mt-5 md:my-8 font-medium ">
          Product suggestion
        </p>
        <div className="flex flex-wrap justify-between gap-10 md:gap-[160px] md:container">
          <Carousel
            className=" md:max-w-4xl"
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className="m-0 p-0 relative">
              {productCardItems.map((item) => (
                <CarouselItem
                  className="basis-[40%] md:basis-[33%]"
                  key={item.id}
                >
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
            <CarouselPrevious className=" hidden md:block  absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-40" />
            <CarouselNext className="hidden md:block  absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-40" />
          </Carousel>
          <div className="md:basis-1/3">
            <p className="text-gray-900 text-lg font-medium">Categories</p>
            {categoryModalItems.map((item) => (
              <div
                key={item.id}
                className="text-sm font-normal leading-[1.5rem] cursor-pointer my-2.5"
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

export default SearchModalData;
