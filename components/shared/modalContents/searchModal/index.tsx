import {Carousel, CarouselContent, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import {Input} from "@/components/ui/input";
import {FooterLogo} from "@/components/ui/logo";
import {SheetClose} from "@/components/ui/sheet";
import {categoryModalItems} from "@/constants/category-item";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {X} from "lucide-react";

const SearchModalData = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div className="pb-10 w-full">
            {isDesktop && (
                <div className="container flex flex-wrap items-center justify-between gap-4">
                    <FooterLogo/>
                    <Input className="w-full md:w-[400px]" type="search" placeholder="Search"/>
                    <SheetClose className="cursor-pointer opacity-70 hover:opacity-100 transition">
                        <X className="h-6 w-6"/>
                        <span className="sr-only">Close</span>
                    </SheetClose>
                </div>
            )}

            {/* Main Content */}
            <div className="container mt-6">
                <p className="text-sm sm:text-base md:text-lg mb-4 font-medium">Product suggestion</p>

                {/* Product First, Category Below on mobile */}
                <div className="flex flex-col md:flex-row gap-8">

                    {/* PRODUCT SECTION */}
                    <div className="w-full md:w-2/3 order-1 md:order-none">
                        <Carousel
                            opts={{
                                align: "start",
                                slidesToScroll: 1,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="m-0 p-0 relative">
                                {/*{productsItem.map((product) => (*/}
                                {/*    <CarouselItem*/}
                                {/*        key={product.id}*/}
                                {/*        className="!w-[90%] sm:!basis-[80%] md:!basis-[50%] lg:!basis-[33.3%]"*/}
                                {/*    >*/}
                                {/*        <ProductsCard productData={product} />*/}
                                {/*    </CarouselItem>*/}
                                {/*))}*/}
                                <div></div>
                            </CarouselContent>

                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-40"/>
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-40"/>
                        </Carousel>

                    </div>

                    <div className="w-full md:w-1/3 order-2 md:order-none">
                        <p className="text-gray-900 text-base sm:text-lg font-medium mb-2">
                            Categories
                        </p>
                        {categoryModalItems.map((item) => (
                            <div
                                key={item.id}
                                className="text-sm font-normal leading-[1.5rem] cursor-pointer my-2.5"
                            >
                                <Link href="/">{item.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModalData;
