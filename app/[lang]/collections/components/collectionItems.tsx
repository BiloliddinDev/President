
import SortAndViewToggleWrapper from "@/components/shared/sort-View-toggle/sort-viewtoggle";
import { CollectionResponse } from "../type";
import { ProductsCard } from "@/components/shared/products-cards/products-card";
import { ProductsInterface } from "@/interface/products-interface/products-interface";
import Image from "next/image";

interface CollectionsProps {
  // lang: "uz" | "ru" | "en";
  collection: CollectionResponse[];
  id: number;
}

export async function CollectionItems({
  // lang,
  collection,
  id,
}: CollectionsProps) {
  const selectedCollection = collection.find((collect) => collect.id === id);
  if (!selectedCollection) return null;

  const products: ProductsInterface[] = selectedCollection.products || [];

  // Rasmni qaysi indexda ko‘rsatish (dinamik qiymat) — bu qiymatni siz bazadan ham olib kelishingiz mumkin
  const imageInsertIndex = id % 3 === 0 ? 1 : id % 3 === 1 ? 3 : 2;

  // Media fayl
  const collectionImage = selectedCollection.mediaFiles?.[0]?.filePath;

  // Mahsulotlar va rasmni dinamik tartibda aralashtirish
  const mergedItems: (ProductsInterface | { type: "image" })[] = [];

  products.forEach((item, index) => {
    if (index === imageInsertIndex && collectionImage) {
      mergedItems.push({ type: "image" }); // rasmni shu joyga qo‘shamiz
    }
    mergedItems.push(item); // mahsulotni qo‘shamiz
  });

  return (
    <div className="container mx-auto !mt-32 px-4">
      {products.length > 0 && (
        <>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-3xl font-semibold text-gray-800">
              {selectedCollection.name}
            </h3>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              {selectedCollection.description}
            </p>
          </div>

          <SortAndViewToggleWrapper itemLength={products.length}>
            {mergedItems.map((item, index) => {
              if ("type" in item && item.type === "image") {
                return (
                  <div className="col-span-1 my-8 w-full" key={`image-${index}`}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${collectionImage}`}
                      alt="Collection Image"
                      width={1200}
                      height={600}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                );
              }

              return (
                <ProductsCard
                  key={(item as ProductsInterface).id}
                  productData={item as ProductsInterface}
                />
              );
            })}
          </SortAndViewToggleWrapper>
        </>
       )} 
    </div>
  );
}
