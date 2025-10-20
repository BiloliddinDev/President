import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import SortAndViewToggleWrapper from "@/components/shared/sort-View-toggle/sort-viewtoggle";
import { Button } from "@/components/ui/button";
import CategoryCarousel from "@/app/[lang]/shops/components/category-carusel/category-carusel";
import { CategoryChildServiceUZ } from "@/service/category-service/category.shops.service";
import { CategoryInterface } from "@/interface/category-type/category-interface";
import { ProductChildService } from "@/service/products-service/products.service";
import { ProductsInterface } from "@/interface/products-interface/products-interface";
import { splitNameAndIdFromParam } from "@/hooks/get-breadcrumb";
import { CategoryDetailService } from "@/service/category-service/category-child.service";
import { AlertTriangle } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";
import { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{ lang: "uz" | "ru" | "en"; category: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const categoryParam = await params;
  const categoryId = splitNameAndIdFromParam(categoryParam.category);

  const CategoryDetailData2: CategoryInterface = (await CategoryDetailService(
    categoryId.id || ""
  )) as CategoryInterface;

  return {
    title: CategoryDetailData2.name,
    description: CategoryDetailData2.description,
    openGraph: {
      title: CategoryDetailData2.name,
      description: CategoryDetailData2.description,
      url: `https://presidentgift.com/shops/${categoryParam.category}`,
      siteName: "President Business Gifts",
      locale: categoryParam.lang,
      type: "website",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_ADMIN_URL}${CategoryDetailData2?.mediaFiles?.[0]?.filePath}`,
          width: 1200,
          height: 630,
          alt: CategoryDetailData2.name || "President Business Gifts",
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryParam = await params;
  const categoryId = splitNameAndIdFromParam(categoryParam.category);
  const dictionary = await getDictionary(categoryParam.lang);

  const CategoryChildData: CategoryInterface = (await CategoryChildServiceUZ(
    Number(categoryId.id)
  )) as CategoryInterface;
  const ProductList: { data: ProductsInterface[] } = (await ProductChildService(
    Number(categoryId.id)
  )) as {
    data: ProductsInterface[];
  };
  const CategoryDetailData2: CategoryInterface = (await CategoryDetailService(
    categoryId.id || ""
  )) as CategoryInterface;

  return (
    <div className="container md:!mt-26 !mt-42">
      <BreadcrumbDynamic url={CategoryDetailData2.name || undefined} />
      <div>
        <h2 className="text-primary mt-10 text-xl font-medium leading-loose">
          {CategoryDetailData2.name}
        </h2>
        <p className="text-zinc-700 text-sm font-normal leading-tight mt-4 mb-11">
          {CategoryDetailData2.description}
        </p>

        {CategoryChildData.children.length > 0 && (
          <CategoryCarousel
            categories={CategoryChildData}
            lang={categoryParam.lang}
            dictionary={dictionary}
          />
        )}

        {ProductList.data.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-20 text-center">
            <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {dictionary.category.not_found}
            </h2>
            <p className="text-gray-600 mt-2 max-w-md">
              {dictionary.category.unavailable}
            </p>
          </div>
        ) : (
          <>
            <SortAndViewToggleWrapper
              initialItems={ProductList.data}
              dictionary={dictionary}
            />
            <div className="flex justify-center mt-11">
              {CategoryChildData.children.length > 0 && (
                <Button className="border-primary" variant="outline">
                  {dictionary.category.show_more}
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
