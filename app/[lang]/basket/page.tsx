"use client"

import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useBasketStore } from "@/lib/set-basket.storage";
import {ProductsCard} from "@/components/shared/products-cards/products-card"; // basket hook

export default function BasketPage() {
    const basketItems = useBasketStore(state => state.items);


    console.log(basketItems, "This is basket items")

    return (
        <div>
            <div className={"container md:!mt-26 !mt-42"}>
                <BreadcrumbDynamic/>
                <h2 className="text-primary text-4xl font-medium leading-10 my-5">Shopping bag</h2>

                {basketItems.length === 0 ? (
                    <>
                        <div className="text-primary text-sm font-medium leading-tight mb-12">
                            Your shopping bag is empty
                        </div>
                        <Button variant={"secondary"}>Continue shopping</Button>
                    </>
                ) : (
                    <div className="text-primary text-sm font-medium leading-tight mb-12">
                        You have {basketItems.length} item(s) in your bag
                    </div>
                )}
            </div>

            {basketItems.length > 0 && (
                <div className="container">
                    <Carousel
                       
                    >
                        <CarouselContent >
                            {basketItems.map((item) => (
                                <CarouselItem key={item.id}>
                                    <ProductsCard
                                         className={"w-[300px] "}
                                        key={item.id}
                                        productData={item}
                                        
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            )}
        </div>
    );
}
