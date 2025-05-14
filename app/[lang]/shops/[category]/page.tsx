import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import Images from "@/public/images/shops.png"
import {productsItem} from "@/components/ui/product-items";
import SortAndViewToggleWrapper from "@/components/shared/sort-View-toggle/sort-viewtoggle";
import {ProductsCard} from "@/components/shared/products-cards/products-card";
import {Button} from "@/components/ui/button";

export default function CategoryPage() {
    return (
        <div className={"container !mt-22"}>
            <BreadcrumbDynamic/>
            <Image className={"my-8"} src={Images.src} alt={"shops Image section"}/>
            <div>
                <h2 className={"text-primary text-xl font-medium leading-loose"}>Exclusive Novelty Gifts from President
                    Business Gifts</h2>
                <p className=" text-zinc-700 text-sm font-normal leading-tight mt-4 mb-11">Check out our awesome range
                    of
                    alpine-themed pouches and cool fragrances at President Business Gifts! Dive into our unique
                    collection and snag the perfect gift before you buy… Read more</p>
                <SortAndViewToggleWrapper itemLength={productsItem.length}>
                    {productsItem.map((product) => (
                        <ProductsCard
                            key={product.id}
                            image={product.image.src}
                            text={product.title}
                            like={product.isFavorite}
                            isNewArrival={product.isNewArrival}
                            price={product.price}
                        />
                    ))}
                </SortAndViewToggleWrapper>
                <div className={"flex justify-center mt-11"}>
                    <Button className={"border-primary"} variant={"outline"}>See more</Button>
                </div>
            </div>
        </div>
    )
}



  