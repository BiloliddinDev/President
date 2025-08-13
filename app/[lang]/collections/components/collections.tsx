import { CollectionService } from "@/service/collections-service/all-collections";
import { CollectionResponse } from "../type";
import { CollectionItems } from "./collectionItems";
import { Metadata } from "next";

export interface CollectionsProps {
  lang: "uz" | "ru" | "en";
  dictionary: {
    category: {
      title: string;
      new: string;
      not_found: string;
      unavailable: string;
      show_more: string;
    };
  };
}



export const metadata: Metadata = {
  title: "Collection | President",
  description: "Discover our premium gift collections...",
  openGraph: {
    title: "Collection | President",
    description: "Discover our premium gift collections...",
    url: "https://presidentgift.com/collection",
    siteName: "President",
    locale: "en",
    type: "website",
    // images: [
    //   {
    //     url: "https://presidentgift.com/og-collection.jpg", // To‘liq URL
    //     width: 1200,
    //     height: 630,
    //     alt: "President premium gift collection"
    //   }
    // ]
  }
};

export async function Collections({ lang ,dictionary}: CollectionsProps) {
  const CollectionsData: CollectionResponse[] =
    (await CollectionService()) as CollectionResponse[];
  console.log(lang);
  const ids = CollectionsData.map((item) => item.id);
  return (
    <div className=" mx-auto mt-[100px]">
     

      {ids.map((id: number) => (
        <CollectionItems
          collection={CollectionsData}
          id={id}
          key={id}
          dictionary={dictionary}
        />
      ))}
    </div>
  );
}
