"use client";

import { ProductsInterface } from "@/interface/products-interface/products-interface";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { splitNameAndIdFromParam } from "@/hooks/get-breadcrumb";
import { getRecomendProducts } from "@/service/products-service/products-id-category-locale";
import { useEffect, useState } from "react";
import { CollectionCard } from "@/components/shared/collection-card/collection-card";

interface DetailProps {
  dictionary: {
    category: {
      title: string;
      new: string;
      not_found?: string;
      unavailable?: string;
      show_more?: string;
      recomendationProds:string
    };
  };
  category: string;
}

export default function RecomendationProductDetailPage({
  dictionary,
  category,
}: DetailProps) {
  const categoryId = splitNameAndIdFromParam(category);
  const [products, setProducts] = useState<ProductsInterface[]>([]);

  useEffect(() => {
    const fetchInitial = async () => {
      const res = await getRecomendProducts(Number(categoryId.id));
      setProducts(res.data);
    };
    fetchInitial();
  }, [categoryId]);

  return (
    <div className="w-full">
      <h2 className={"mt-20 mb-10 text-xl "}>{dictionary.category.recomendationProds}</h2>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        }}
        className="m-0 p-0 relative w-full text-center"
      >
        <CarouselContent className="m-0 p-0 flex gap-2">
          {products
            // .filter((item) => item.id !== product.id)
            .map((item: ProductsInterface) => (
              <CarouselItem
                key={item.id}
                className="m-0 p-0 min-w-28 mb-16"
                style={{ flex: "0 0 24%" }}
              >
                {/* <ProductsCard productData={item} dictionary={dictionary} className="text-start"/> */}
                <CollectionCard newsItem={item} />
              </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-[-7%]  top-1/2 -translate-y-1/2 translate-x-full z-40" />
        <CarouselNext className="absolute right-[4%]  top-1/2 -translate-y-1/2 translate-x-full z-40" />
      </Carousel>
    </div>
  );
}
