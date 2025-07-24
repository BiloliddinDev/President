
// import SortAndViewToggleWrapper from "@/components/shared/sort-View-toggle/sort-viewtoggle";
// import { CollectionResponse } from "../type";
// import { ProductsCard } from "@/components/shared/products-cards/products-card";
// import { SummerCollectionService } from "@/service/home-service/summer-collection.service";

// interface CollectionsProps {
//   lang: "uz" | "ru" | "en";
//   collection:CollectionResponse[] 
//   id:number
// }

// export async function CollectionItems({ lang,collection ,id}: CollectionsProps) {
   
   
// let SummerCollectionsData
// id!==0 ?  collection = await SummerCollectionService(id) as CollectionResponse[] : ""
// console.log("summerCollections",SummerCollectionsData)
// const allProducts = collection.map(item => item.products).flat();
// console.log(allProducts)
// return (
//     <div className="container mx-auto !mt-32 px-4 ">
      
// <SortAndViewToggleWrapper itemLength={allProducts?.length}>
// {allProducts && allProducts.map((item) => (
//            <ProductsCard key={item.id} productData={item}/>
//         ))}
//                 </SortAndViewToggleWrapper>
//     </div>
//   );
// }
import { CollectionResponse } from "../type";
import { ProductsCard } from "@/components/shared/products-cards/products-card";

interface CollectionsProps {
  collection: CollectionResponse[];
  id: number;
}

export async function CollectionItems({  collection, id,}: CollectionsProps) {
  const allProducts = id
    ? collection.find((item) => item.id === String(id))?.products || []
    : collection.map((item) => item.products).flat();

  if (!allProducts.length) return null;

  return (
    <div className="container mx-auto mt-24 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          {id ? "Продукция выбранной коллекции" : "Вся продукция из коллекций"}
        </h3>
        <p className="text-gray-600 text-sm md:text-base">
          {id
            ? "Просмотрите продукцию выбранной коллекции, отражающую её уникальный стиль."
            : "Ознакомьтесь со всем ассортиментом, представленным в различных коллекциях."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {allProducts.map((item) =>
  "name" in item ? (
    <ProductsCard key={item.id} productData={item} />
  ) : null
)}
      </div>
    </div>
  );
}
