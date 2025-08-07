"use client";

import {Carousel, CarouselContent, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import {Input} from "@/components/ui/input";
import {FooterLogo} from "@/components/ui/logo";
import {SheetClose} from "@/components/ui/sheet";
import {categoryModalItems} from "@/constants/category-item";
import Link from "next/link";
import React, {useEffect, useRef, useState} from "react";
import {X} from "lucide-react";
import {ProductsInterface} from "@/interface/products-interface/products-interface";
import {getNewProducts} from "@/service/products-service/new-products-client.service";
import {getSearchProducts} from "@/service/products-service/product-search.service";
import {ProductsCard} from "@/components/shared/products-cards/products-card";

export default function SearchModalData() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [products, setProducts] = useState<ProductsInterface[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const fetchInitial = async () => {
            const res = await getNewProducts();
            setProducts(res);
        };
        fetchInitial();
    }, [searchTerm , setSearchTerm]);

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

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(async () => {
            if (value.trim() === "") return;
            try {
                const res = await getSearchProducts(value);
                if (res?.data?.content) {
                    setProducts(res.data.content);
                }
            } catch (err) {
                console.error("Search error:", err);
            }
        }, 1000);
    };

    return (
        <div className="pb-10 w-full">
            {isDesktop && (
                <div className="container flex flex-wrap items-center justify-between gap-4">
                    <FooterLogo/>
                    <Input
                        className="w-full md:w-[400px]"
                        type="search"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <SheetClose className="cursor-pointer opacity-70 hover:opacity-100 transition">
                        <X className="h-6 w-6"/>
                        {/* <span className="sr-only">Close</span> */}
                    </SheetClose>
                </div>
            )}

            <div className="container mt-6">
                <p className="text-sm sm:text-base md:text-lg mb-4 font-medium my-5">Предложение продукта</p>

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
                                            <ProductsCard className={"w-[200px]"} productData={product}/>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center py-10 w-full">No products found</p>
                                )}
                            </CarouselContent>
                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-40"/>
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-40"/>
                        </Carousel>
                    </div>

                    <div className="w-full md:w-1/3 order-2 md:order-none">
                        <p className="text-gray-900 text-base sm:text-lg font-medium mb-2">
                            Типы продуктов
                        </p>
                        {categoryModalItems.map((item) => (
                            <div
                                key={item.id}
                                className="text-sm font-normal leading-[1.5rem] cursor-pointer my-2.5"
                            >
                                <Link href={item.link}>
                                    <SheetClose className="cursor-pointer transition">
                                        {item.name}
                                    </SheetClose>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
