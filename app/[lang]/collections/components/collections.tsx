import { CollectionService } from "@/service/collections-service/all-collections";
import { CollectionResponse } from "../type";
import { CollectionItems } from "./collectionItems";

export interface CollectionsProps {
  lang: "uz" | "ru" | "en";
}

// export async function Collections({ lang }: CollectionsProps) {
  export async function Collections() {
  const CollectionsData: CollectionResponse[] =
    (await CollectionService()) as CollectionResponse[];
  // console.log(lang);
  const ids=CollectionsData.map((item)=>item.id)
  return (
    <div className="container mx-auto mt-[100px] px-4">
      {/* <div className="text-center mb-12 max-w-2xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Вся коллекция President Business Gifts
        </h3>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Откройте для себя изысканную подборку корпоративных подарков, идеально
          сочетающих в себе традиции и современные тенденции.
        </p>
      </div> */}

      {/* Tanlangan ID orqali mahsulotlar */}
      {ids.map((id:number)=>
      <CollectionItems  collection={CollectionsData} id={id} key={id} />
    )}
    </div>
  );
}
