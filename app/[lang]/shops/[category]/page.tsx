import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import SortAndViewToggleWrapper from "@/components/shared/sort-View-toggle/sort-viewtoggle";
import {ProductsCard} from "@/components/shared/products-cards/products-card";
import {Button} from "@/components/ui/button";
import CategoryCarousel from "@/app/[lang]/shops/components/category-carusel/category-carusel";
import {CategoryChildServiceUZ} from "@/service/category-service/category.shops.service";
import {CategoryInterface} from "@/interface/category-type/category-interface";
import {ProductChildService} from "@/service/products-service/products.service";
import {ProductsInterface} from "@/interface/products-interface/products-interface";
import {splitNameAndIdFromParam} from "@/hooks/get-breadcrumb";
import {CategoryDetailService} from "@/service/category-service/category-child.service";

interface CategoryPageProps {

    params: Promise<{ lang: "uz" | "ru" | "en", category: string }>;

}

export default async function CategoryPage({params}: CategoryPageProps) {
    const categoryParam: { lang: "uz" | "ru" | "en", category: string } = await params;
    const categoryId = splitNameAndIdFromParam(categoryParam.category)

    const CategoryChildData: CategoryInterface = await CategoryChildServiceUZ(Number(categoryId.id)) as CategoryInterface
    const ProductList: { data: ProductsInterface[] } = await ProductChildService(Number(categoryId.id)) as {
        data: ProductsInterface[]
    }
    const CategoryDetailData2: CategoryInterface = await CategoryDetailService(Number(categoryId.id)) as CategoryInterface



    return (
        <div className="container md:!mt-26 !mt-42">
            <BreadcrumbDynamic url={categoryId?.name}/>
            <div>
                <h2 className="text-primary mt-10 text-xl font-medium leading-loose">
                    {CategoryDetailData2.name}
                </h2>
                <p className="text-zinc-700 text-sm font-normal leading-tight mt-4 mb-11">
                    {CategoryDetailData2.description}
                </p>
                {CategoryChildData.children.length > 0 &&
                    <CategoryCarousel categories={CategoryChildData} lang={categoryParam.lang}/>}
                <SortAndViewToggleWrapper itemLength={ProductList?.data?.length}>
                    {ProductList.data.map((product) => (
                        <ProductsCard key={product.id} productData={product}/>
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