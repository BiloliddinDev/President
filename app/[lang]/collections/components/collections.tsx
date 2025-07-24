
// // // import { CollectionService } from "@/service/collections-service/all-collections";
// // // import { CollectionResponse } from "../type";
// // // import { CollectionCard } from "./collectionCard";
// // // import { CollectionItems } from "./collectionItems";

// // // interface CollectionsProps {
// // //   lang: "uz" | "ru" | "en";
// // // }

// // // export async function Collections({ lang }: CollectionsProps) {
// // //   const CollectionsData: CollectionResponse[] =
// // //     (await CollectionService()) as CollectionResponse[];
// // //     const id=

// // //   return (
// // //     <div className="container mx-auto mt-[500px] px-4">
// // //       <div className="text-center mb-12 max-w-2xl mx-auto">
// // //         <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
// // //           Вся коллекция President Business Gifts
// // //         </h3>
// // //         <p className="mt-4 text-gray-600 text-sm sm:text-base">
// // //           Откройте для себя изысканную подборку корпоративных подарков, идеально сочетающих в себе
// // //           традиции и современные тенденции.
// // //         </p>
// // //       </div>

// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //         {CollectionsData.map((item: CollectionResponse) => (
// // //           <CollectionCard key={item.id} lang={lang} newsItem={item} />
// // //         ))}
// // //       </div>
// // //       <CollectionItems lang={lang} collection={CollectionsData} id={id}/>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useState } from "react";
// // import { CollectionService } from "@/service/collections-service/all-collections";
// // import { CollectionResponse } from "../type";
// // import { CollectionCard } from "./collectionCard";
// // import { CollectionItems } from "./collectionItems";

// // interface CollectionsProps {
// //   lang: "uz" | "ru" | "en";
// // }

// // export async function Collections({ lang }: CollectionsProps) {
// //   const CollectionsData: CollectionResponse[] =
// //     (await CollectionService()) as CollectionResponse[];

// //   return <CollectionsClient lang={lang} data={CollectionsData} />;
// // }

// // // Client Component (interaktivlik uchun)
// // function CollectionsClient({
// //   lang,
// //   data,
// // }: {
// //   lang: "uz" | "ru" | "en";
// //   data: CollectionResponse[];
// // }) {
// //   const [selectedId, setSelectedId] = useState<number>(0);

// //   return (
// //     <div className="container mx-auto mt-[100px] px-4">
// //       <div className="text-center mb-12 max-w-2xl mx-auto">
// //         <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
// //           Вся коллекция President Business Gifts
// //         </h3>
// //         <p className="mt-4 text-gray-600 text-sm sm:text-base">
// //           Откройте для себя изысканную подборку корпоративных подарков, идеально сочетающих в себе
// //           традиции и современные тенденции.
// //         </p>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {data.map((item: CollectionResponse) => (
// //           <div
// //             key={item.id}
// //             onClick={() => setSelectedId(item.id)} // Tanlangan ID
// //             className={`cursor-pointer transition-transform hover:scale-105 ${
// //               selectedId === item.id ? "border border-gray-400 shadow-lg" : ""
// //             }`}
// //           >
// //             <CollectionCard lang={lang} newsItem={item} />
// //           </div>
// //         ))}
// //       </div>

// //       {/* Tanlangan ID orqali mahsulotlar */}
// //       <CollectionItems lang={lang} collection={data} id={selectedId} />
// //     </div>
// //   );
// // }
// import { CollectionService } from "@/service/collections-service/all-collections";
// import { CollectionResponse } from "../type";
// import { CollectionCard } from "./collectionCard";
// import { CollectionItems } from "./collectionItems";

// interface CollectionsProps {
//   lang: "uz" | "ru" | "en";
//   selectedId?: number; // optional ID
// }

// export async function Collections({ lang, selectedId = 0 }: CollectionsProps) {
//   // Serverda ma'lumotlarni olish
//   const CollectionsData: CollectionResponse[] =
//     (await CollectionService()) as CollectionResponse[];

//   return (
//     <div className="container mx-auto mt-[100px] px-4">
//       <div className="text-center mb-12 max-w-2xl mx-auto">
//         <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
//           Вся коллекция President Business Gifts
//         </h3>
//         <p className="mt-4 text-gray-600 text-sm sm:text-base">
//           Откройте для себя изысканную подборку корпоративных подарков, идеально сочетающих в себе
//           традиции и современные тенденции.
//         </p>
//       </div>

//       {/* Kolektsiyalar */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {CollectionsData.map((item: CollectionResponse) => (
//           <CollectionCard key={item.id} lang={lang} newsItem={item} />
//         ))}
//       </div>

//       {/* Tanlangan ID orqali mahsulotlar */}
//       <CollectionItems lang={lang} collection={CollectionsData} id={selectedId} />
//     </div>
//   );
// }
import { CollectionService } from "@/service/collections-service/all-collections";
import { CollectionResponse } from "../type";
import { CollectionCard } from "./collectionCard";
import { CollectionItems } from "./collectionItems";

interface CollectionsProps {
  lang: "uz" | "ru" | "en";
  selectedId?: number; // Tanlangan ID URL orqali kelishi mumkin
}

export async function Collections({ lang, selectedId = 0 }: CollectionsProps) {
  const CollectionsData: CollectionResponse[] =
    (await CollectionService()) as CollectionResponse[];
console.log(lang)
  return (
    <div className="container mx-auto mt-[100px] px-4">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Вся коллекция President Business Gifts
        </h3>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Откройте для себя изысканную подборку корпоративных подарков, идеально сочетающих в себе
          традиции и современные тенденции.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CollectionsData.map((item: CollectionResponse) => (
          <CollectionCard key={item.id}  newsItem={item} />
        ))}
      </div>
      


      {/* Tanlangan ID orqali mahsulotlar */}
      <CollectionItems  collection={CollectionsData} id={selectedId} />
    </div>
  );
}
