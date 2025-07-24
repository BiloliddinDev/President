import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import {productsItem} from "@/components/ui/product-items";
import SortAndViewToggleWrapper from "@/components/shared/sort-View-toggle/sort-viewtoggle";
import {ProductsCard} from "@/components/shared/products-cards/products-card";
import {Button} from "@/components/ui/button";
import CategoryCarousel from "@/app/[lang]/shops/components/category-carusel/category-carusel";
import {CategoryChildServiceUZ} from "@/service/category-service/category.shops.service";
import {CategoryInterface} from "@/interface/category-type/category-interface";
import {ProductChildService} from "@/service/products-service/products.service";
import {ProductsInterface} from "@/interface/products-interface/products-interface";

interface CategoryPageProps {

    params: Promise<{ lang: "uz" | "ru" | "en", category: string }>;

}

export default async function CategoryPage({params}: CategoryPageProps) {
    const categoryParam: { lang: "uz" | "ru" | "en", category: string } = await params;
    const CategoryChildData: CategoryInterface = await CategoryChildServiceUZ(Number(categoryParam.category)) as CategoryInterface
    const ProductList: { data: ProductsInterface[] } = await ProductChildService(Number(categoryParam.category)) as {
        data: ProductsInterface[]
    }


    return (
        <div className="container md:!mt-26 !mt-42">
            <BreadcrumbDynamic/>
            <div>
                <h2 className="text-primary mt-10 text-xl font-medium leading-loose">
                    Exclusive Novelty Gifts from President Business Gifts
                </h2>
                <p className="text-zinc-700 text-sm font-normal leading-tight mt-4 mb-11">
                    Check out our awesome range of alpine-themed pouches and cool fragrances at President Business
                    Gifts!
                    Dive into our unique collection and snag the perfect gift before you buy… Read more
                </p>

                {CategoryChildData.children.length > 0 &&
                    <CategoryCarousel categories={CategoryChildData} lang={categoryParam.lang}/>}
                <SortAndViewToggleWrapper itemLength={productsItem.length}>
                    {ProductList.data.map((product) => (
                        <ProductsCard
                            key={product.id}
                            productData={product}
                        />
                    ))}
                </SortAndViewToggleWrapper>
                <div className="flex justify-center mt-11">
                    <Button className="border-primary" variant="outline">
                        See more
                    </Button>
                </div>
            </div>
        </div>
    );
}