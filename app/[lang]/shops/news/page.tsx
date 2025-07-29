import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import SortAndViewToggleWrapper from "@/components/shared/sort-View-toggle/sort-viewtoggle";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ProductsCard} from "@/components/shared/products-cards/products-card";
import {NewProductService} from "@/service/products-service/new-products.service";
import {ProductsInterface} from "@/interface/products-interface/products-interface";
import ShopBanner from "@/public/images/shops.png";
import {AlertTriangle} from "lucide-react";

export default async function NewsPage() {
    const newProducts: ProductsInterface[] = await NewProductService() as ProductsInterface[];
    const filteredProducts = newProducts.filter(item => item?.meta?._new_product === true);

    return (
        <div className="container md:!mt-26 !mt-42">
            <BreadcrumbDynamic/>

            <Image
                className="my-10 w-full object-cover rounded-xl"
                width={1200}
                height={400}
                src={ShopBanner}
                alt="Shops Image"
            />

            <div>
                <h2 className="text-primary text-xl font-medium leading-loose">
                    Новые продукты
                </h2>
                <p className="text-zinc-700 text-sm font-normal leading-tight mt-4 mb-11">
                    Откройте для себя новинки President Business Gifts — эксклюзивные изделия, только поступившие в
                    коллекцию. Статусные подарки, которые подчёркивают актуальность и вкус.
                </p>

                {filteredProducts.length === 0 ? (
                    <div className="w-full flex flex-col items-center justify-center py-20 text-center">
                        <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4"/>
                        <h2 className="text-2xl font-semibold text-gray-800">Товар не найден</h2>
                        <p className="text-gray-600 mt-2 max-w-md">
                            К сожалению, данный товар в данный момент недоступен. Мы скоро добавим его в каталог.
                            Пожалуйста, загляните позже.
                        </p>
                    </div>
                ) : (
                    <>
                        <SortAndViewToggleWrapper itemLength={filteredProducts.length}>
                            {filteredProducts.map(product => (
                                <ProductsCard key={product.id} productData={product}/>
                            ))}
                        </SortAndViewToggleWrapper>

                        <div className="flex justify-center mt-11">
                            <Button className="border-primary" variant="outline">
                                Показать ещё
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
