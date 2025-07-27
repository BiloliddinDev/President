import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import SortAndViewToggleWrapper from "@/components/shared/sort-View-toggle/sort-viewtoggle";
import Image from "next/image";
import {productsItem} from "@/components/ui/product-items";
import {Button} from "@/components/ui/button";
import Images from "@/public/images/shops.png"
import {NewProductService} from "@/service/products-service/new-products.service";
import {ProductsInterface} from "@/interface/products-interface/products-interface";
import {ProductsCard} from "@/components/shared/products-cards/products-card";

export default async function NewsPage() {
    const newProducts: ProductsInterface[] = await NewProductService() as ProductsInterface[]

    return (
        <div className={"container md:!mt-26 !mt-42"}>
            <BreadcrumbDynamic/>
            <Image className={"my-10"} width={1200} height={400} src={Images.src} alt={"shops Image section"}/>
            <div>
                <h2 className={"text-primary text-xl font-medium leading-loose"}>Exclusive Novelty Gifts from President
                    Business Gifts</h2>
                <p className=" text-zinc-700 text-sm font-normal leading-tight mt-4 mb-11">Check out our awesome range
                    of
                    alpine-themed pouches and cool fragrances at President Business Gifts! Dive into our unique
                    collection and snag the perfect gift before you buy… Read more</p>
                <SortAndViewToggleWrapper itemLength={productsItem.length}>
                    {newProducts.filter((item) => item.meta._new_product === true).map((product) => (
                        <ProductsCard
                            key={product.id}
                            productData={product}
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