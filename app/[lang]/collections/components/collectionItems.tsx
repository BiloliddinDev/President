import { CollectionResponse } from "../type";
import { ProductsCard } from "@/components/shared/products-cards/products-card";
import { ProductsInterface } from "@/interface/products-interface/products-interface";
import Image from "next/image";

interface CollectionsProps {
  collection: CollectionResponse[];
  id: number;
  dictionary:{    category: {
    title: string;
    new: string;
    not_found: string;
    unavailable: string;
    show_more: string;
  };}
}

export async function CollectionItems({ collection, id ,dictionary}: CollectionsProps) {
  const selectedCollection = collection.find((collect) => collect.id === id);
  if (!selectedCollection) return null;

  const products: ProductsInterface[] = selectedCollection.products || [];
  const collectionImage = selectedCollection.mediaFiles?.[0]?.filePath;

  // Dynamic rasm joylashadigan index
  let insertionIndex = 0; // default
  if (products.length === 4 || products.length ===6) {
    insertionIndex = 0
  } else if (products.length === 5|| products.length ===6) {
    insertionIndex =0
  } else if (products.length >=8) {
    insertionIndex = 0
  }else if (products.length <= 2) {
    insertionIndex = 0
  }

  // Productlar va image ni birlashtirib chiqamiz
  const mergedItems: (ProductsInterface | { type: "image" })[] = [];

  products.forEach((product, index) => {
    if (index === insertionIndex && collectionImage) {
      mergedItems.push({ type: "image" });
    }
    mergedItems.push(product);
  });


  console.log(mergedItems)
  return (
    <div className=" mx-auto !mt-40">
      {products.length > 0 && (
        <>
          <div className="text-center mb-12 mx-auto">
            <h3 className="text-xl sm:text-3xl font-semibold text-gray-800">
              {selectedCollection.name}
            </h3>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              {selectedCollection.description}
            </p>
          </div>

          {/* Grid system */}
          <div className="grid grid-cols-5 auto-rows-[400px] gap-6">
            {mergedItems.map((item, index) => {
              if ("type" in item && item.type === "image") {
                return (
                  <div
                    key={`collection-image-${index}`}
                    className="col-span-2 row-span-2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${collectionImage}`}
                      alt={`collection-image-${index}`}
                      width={1200}
                      height={1200}
                      className="w-full h-full object-cover "
                    />
                  </div>
                );
              }

              return (
                <div key={(item as ProductsInterface).id} className="col-span-1 row-span-1">
                  <ProductsCard productData={item as ProductsInterface} dictionary={dictionary}/>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
