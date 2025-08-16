import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import SortAndViewToggleWrapper from "@/components/shared/sort-View-toggle/sort-viewtoggle";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NewProductService } from "@/service/products-service/new-products.service";
import { ProductsInterface } from "@/interface/products-interface/products-interface";
import ShopBanner from "@/public/images/shop-news.webp";
import { AlertTriangle } from "lucide-react";
import { getDictionary } from "@/lib/get-dictionary";

interface NewsPageProps {
  params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az"; category: string }>;
}

export default async function NewsPage({ params }: NewsPageProps) {
  const ShopsNewPageParam: {
    lang: "uz" | "ru" | "en" | "tj" | "az";
    category: string;
  } = await params;
  const newProducts: ProductsInterface[] =
    (await NewProductService()) as ProductsInterface[];
  const filteredProducts = newProducts.filter(
    (item) => item?.meta?._new_product === true
  );
  const dictionary = await getDictionary(ShopsNewPageParam.lang);

  return (
    <div className="container md:!mt-26 !mt-42">
      <BreadcrumbDynamic />

      <Image
        className="my-10 w-full object-cover rounded-xl"
        width={1200}
        height={400}
        src={ShopBanner}
        alt="Shops Image"
      />

      <div>
        <h2 className="text-primary text-xl font-medium leading-loose">
          {dictionary.newproducts.title}
        </h2>
        <p className="text-zinc-700 text-sm font-normal leading-tight mt-4 mb-11">
          {dictionary.newproducts.description}
        </p>

        {filteredProducts.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-20 text-center">
            <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800">
              {dictionary.newproducts.notfound.title}
            </h2>
            <p className="text-gray-600 mt-2 max-w-md">
              {dictionary.newproducts.notfound.description}
            </p>
          </div>
        ) : (
          <>
            {/* <SortAndViewToggleWrapper
              dictionary={dictionary}
              itemLength={filteredProducts.length}
            >
              {filteredProducts.map((product) => (
                <ProductsCard
                  key={product.id}
                  productData={product}
                  dictionary={dictionary}
                />
              ))}
            </SortAndViewToggleWrapper> */}
          <SortAndViewToggleWrapper
  initialItems={filteredProducts}
  dictionary={dictionary}
/>

            <div className="flex justify-center mt-11">
              <Button className="border-primary" variant="outline">
                {dictionary.newproducts.showMore}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
