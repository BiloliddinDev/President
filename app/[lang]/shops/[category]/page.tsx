import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import {productsItem} from "@/components/ui/product-items";
import SortAndViewToggleWrapper from "@/components/shared/sort-View-toggle/sort-viewtoggle";
import {ProductsCard} from "@/components/shared/products-cards/products-card";
import {Button} from "@/components/ui/button";
import CategoryCarousel from "@/app/[lang]/shops/components/category-carusel/category-carusel";
// import {categoryItem} from "@/constants/category-item";
import { CategoryDataType } from "../../(home)/components/category";
import { CategoryService } from "@/service/home-service/category.service";
import { CategoryChildService } from "@/service/category-service/category-child.service";
import { CategoryInterface } from "@/interface/category-type/category-interface";
// import ProductPage from "./components/Products";

interface CategoryPageProps {
    // params: { lang: "uz" | "ru" | "en", category: string };
    params: Promise<{ lang: "uz" | "ru" | "en", category: string }>;

}

export default async function CategoryPage({params}: CategoryPageProps) {

    const categoryParam: { lang: "uz" | "ru" | "en", category: string } = await params;

    function splitCategory(category: string): { name: string; id: string } {
        const match = category.match(/^(.+?)(\d+)$/);
        if (!match) {
          return { name: category, id: "" }; // fallback
        }
        return {
          name: match[1], // so‘z qismi
          id: match[2],   // raqam qismi
        };
      }
      
      const parentId=splitCategory(categoryParam.category).id
      const categoryName=splitCategory(categoryParam.category).name
      const CategoryData:CategoryDataType[] = await CategoryService()  as CategoryDataType[]
    
      const CategoryChildData:CategoryInterface[] = await CategoryChildService(parentId)  as CategoryInterface[]
      
      console.log("category",CategoryData, CategoryChildData)
    return (
        <div className="container md:!mt-26 !mt-42">
            <BreadcrumbDynamic url={categoryName}/>
            <h4 className="text-primary text-sm font-normal capitalize leading-tight mt-10 mb-2.5">
                {categoryName}
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

                <CategoryCarousel categories={CategoryChildData} lang={categoryParam.lang}/>
                <SortAndViewToggleWrapper itemLength={productsItem.length}>
                    {productsItem.map((product) => (
                        <ProductsCard
                            key={product.id}
                            productData={product}
                        />
                    ))}
                </SortAndViewToggleWrapper>
                {/* <ProductPage parentId={splitCategory(categoryParam.category).id} lang={categoryParam.lang}/> */}
                <div className="flex justify-center mt-11">
                    <Button className="border-primary" variant="outline">
                        See more
                    </Button>
                </div>
            </div>
        </div>
    );
}