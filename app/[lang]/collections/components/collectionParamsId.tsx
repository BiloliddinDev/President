// // app/collections/[id]/page.tsx

// import { CollectionService } from "@/service/collections-service/all-collections";
// import { CollectionResponse } from "../type";
// import { CollectionItems } from "./collectionItems";

// interface PageProps {
//   params: {
//     id: string; // URL dan keladigan id string ko‘rinishida bo‘ladi
//     lang: "uz" | "ru" | "en";
//   };
// }

// export default async function CollectionDetailPage({ params }: PageProps) {
//   const collectionData: CollectionResponse[] = await CollectionService() as CollectionResponse[]

//   const numericId = Number(params.id); // string -> number

//   return (
//     <CollectionItems
//       lang={params.lang}
//       collection={collectionData}
//       id={isNaN(numericId) ? 0 : numericId}
//     />
//   );
// }
