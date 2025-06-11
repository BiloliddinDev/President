import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import {productsItem} from "@/components/ui/product-items";
import SortAndViewToggleWrapper from "@/components/shared/sort-View-toggle/sort-viewtoggle";
import {ProductsCard} from "@/components/shared/products-cards/products-card";
import {Button} from "@/components/ui/button";
import CategoryCarousel from "@/app/[lang]/shops/components/category-carusel/category-carusel";
import {categoryItem} from "@/constants/category-item";

interface CategoryPageProps {
    params: Promise<{ lang: string, category: string }>;

}

export default async function CategoryPage({params}: CategoryPageProps) {

    const categoryParam: { lang: string, category: string } = await params;

    return (
        <div className="container !mt-22">
            <BreadcrumbDynamic/>
            <h4 className="text-primary text-sm font-normal capitalize leading-tight mt-10 mb-2.5">
                {categoryParam.category}
            </h4>
            <div>
                <h2 className="text-primary text-xl font-medium leading-loose">
                    Exclusive Novelty Gifts from President Business Gifts
                </h2>
                <p className="text-zinc-700 text-sm font-normal leading-tight mt-4 mb-11">
                    Check out our awesome range of alpine-themed pouches and cool fragrances at President Business
                    Gifts!
                    Dive into our unique collection and snag the perfect gift before you buy… Read more
                </p>

                <CategoryCarousel categories={categoryItem}/>
                <SortAndViewToggleWrapper itemLength={productsItem.length}>
                    {productsItem.map((product) => (
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