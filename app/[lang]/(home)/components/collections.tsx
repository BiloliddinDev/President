import {FC} from "react";
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import CollectionImage from "@/public/images/colection-left.png";
import {CollectionCard} from "@/components/shared/collection-card/collection-card";
import {CollectionType} from "@/interface/collection-type/collection-type";
import {CollectionItem} from "@/constants/colection-item";
import {SectionTitle} from "@/components/ui/sectionTitle";
import {SupportFormModal} from "@/components/shared/form-modal/form.modal";

interface CollectionsProps {
    dictionary: {
        collections: {
            title: string,
            "newArrival": string
        };
    };
    lang: "uz" | "ru" | "en";
}

export const Collections: FC<CollectionsProps> = ({dictionary, lang}) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full mt-12">
            <div className="w-full md:w-1/2 flex justify-center">
                <Image
                    src={CollectionImage.src}
                    alt="Collection Left Image"
                    width={500}
                    height={500}
                    className="object-contain w-full "
                />
            </div>
            <div className="w-full container  md:w-1/2">
                <SectionTitle className={" mb-10 md:mb-[75px]"} text={dictionary.collections.title}/>
                <Carousel
                    opts={{
                        align: "start",
                        slidesToScroll: 1,
                        containScroll: "trimSnaps",
                    }}
                    className="m-0 p-0 relative w-full text-center"
                >
                    <CarouselContent className="m-0 p-0 flex gap-8">
                        {CollectionItem.map((item: CollectionType) => (
                            <CarouselItem
                                key={item.id}
                                className="m-0 p-0 min-w-48 mb-16"
                                style={{flex: "0 0 40%"}}
                            >
                                <CollectionCard lang={lang} newsItem={item}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/*<Button variant={"secondary"} className={"mt-16 w-full md:max-w-52"}>*/}
                    {/*    {dictionary.collections.newArrival}*/}
                    {/*</Button>*/}
                    <SupportFormModal lang={lang} btnText={dictionary.collections.newArrival}/>
                    <CarouselPrevious
                        className="absolute right-[100px] top-1/2 -translate-y-1/2 translate-x-full z-40"/>
                    <CarouselNext className="absolute right-[100px] top-1/2 -translate-y-1/2 translate-x-full z-40"/>
                </Carousel>
            </div>
        </div>
    );
};
