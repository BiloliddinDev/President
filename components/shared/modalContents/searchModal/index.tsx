"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { FooterLogo } from "@/components/ui/logo";
import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ProductsInterface } from "@/interface/products-interface/products-interface";
import { getNewProducts } from "@/service/products-service/new-products-client.service";
import { ProductsCard } from "@/components/shared/products-cards/products-card";
import { Category } from "@/interface/category-type/category-interface";

interface NewsProps {
  dictionary: {
    category: {
      title: string;
      new: string;
      not_found: string;
      unavailable: string;
      show_more: string;
    };
  };
  category: Category[]; // yangi qo‘shildi
  lang?: "uz" | "ru" | "en" | "az" | "tj";
}

export default function SearchModalData({ dictionary, category, lang = "uz" }: NewsProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [allProducts, setAllProducts] = useState<ProductsInterface[]>([]);
  const [products, setProducts] = useState<ProductsInterface[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchInitial = async () => {
      const res = await getNewProducts();
      setAllProducts(res);
      setProducts(res);
    };
    fetchInitial();
  }, []);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setProducts(filtered);
    }
  };

  return (
    <div className="pb-10 w-full">
      {isDesktop && (
        <div className="container flex flex-wrap items-center justify-between gap-4">
          <FooterLogo />
          <Input
            className="w-full md:w-[400px]"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SheetClose className="cursor-pointer opacity-70 hover:opacity-100 transition">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>
      )}

      <div className="container mt-6">
        <p className="text-sm sm:text-base md:text-lg mb-4 font-medium my-5">
          Предложение продукта
        </p>

        <div className="flex flex-col md:flex-row gap-28">
          <div className="w-full md:w-2/3 order-1 md:order-none">
            <Carousel
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent className="m-0 p-0 relative gap-4">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div
                      key={product.id}
                      className="!w-[90%] sm:!basis-[80%] md:!basis-[50%] lg:!basis-[33.3%]"
                    >
                      <ProductsCard
                        dictionary={dictionary}
                        className={"w-[200px]"}
                        productData={product}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-center py-10 w-full">
                    {dictionary.category.not_found}
                  </p>
                )}
              </CarouselContent>

              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-40" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-40" />
            </Carousel>
          </div>

          <div className="w-full md:w-1/3 order-2 md:order-none">
            <p className="text-gray-900 text-base sm:text-lg font-medium mb-2">
              Типы продуктов
            </p>

            {category.map((item) => (
              <div
                key={item.id}
                className="text-sm font-normal leading-[1.5rem] cursor-pointer my-2.5"
              >
                <SheetClose className="cursor-pointer transition">
                  <Link href={`/shops/${item.name}id${item.id}`}>
                    <SheetClose className="cursor-pointer transition">
                      {item.name}
                    </SheetClose>
                  </Link>
                </SheetClose>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}