import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionTitle } from "@/components/ui/sectionTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CollectionResponse } from "../../collections/type";
import { CollectionCard } from "@/components/shared/collection-card/collection-card";
import { ProductsInterface } from "@/interface/products-interface/products-interface";
import { CollectionService } from "@/service/collections-service/all-collections";
export interface CollectionsProps {
  dictionary: {
    collections: {
      title: string;
      newArrival: string;
    };
  };
}

export async function Collections({ dictionary }: CollectionsProps) {
  const CollectionsData: CollectionResponse[] =  (await CollectionService()) as CollectionResponse[];
   

  const Collection = CollectionsData.filter(
    (item) => item.is_main_page
  )[0];

  
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full mt-12">
      <div className="w-full md:w-[40%] flex justify-center">
        <Image
          src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${Collection.mediaFiles[0].filePath}`}
          alt="Collection Left Image"
          width={1000}
          height={500}
          className="object-contain w-full"
        />
      </div>
      <div className="w-full container  md:w-[60%]">
        <SectionTitle
          className={" mb-10 md:mb-[75px]"}
          text={`${Collection.name}`}
        />
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
            containScroll: "trimSnaps",
          }}
          className="m-0 p-0 relative w-full text-center"
        >
          <CarouselContent className="m-0 p-0 flex gap-2">
            {Collection.products.map((item: ProductsInterface) => (
              <CarouselItem
                key={item.id}
                className="m-0 p-0 min-w-48 mb-16"
                style={{ flex: "0 0 40%" }}
              >
                <CollectionCard newsItem={item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <Link href={"/collections"}>
            {" "}
            <Button
              variant={"secondary"}
              className={"mt-16 w-full md:max-w-52"}
            >
              {dictionary.collections.newArrival}
            </Button>
          </Link>

          <CarouselPrevious className="absolute left-[-7%]  top-1/2 -translate-y-1/2 translate-x-full z-40" />
          <CarouselNext className="absolute right-[4%]  top-1/2 -translate-y-1/2 translate-x-full z-40" />
        </Carousel>
      </div>
    </div>
  );
}
