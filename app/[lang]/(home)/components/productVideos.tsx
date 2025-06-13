import ProductVideoCard from "@/components/shared/product-video-card/video-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { SectionTitle } from "@/components/ui/sectionTitle";
import { productItem } from "@/constants/product-videos-item";

export const ProductVideos = ({ title }: { title: string }) => {
    return (
        <div className="relative">
            <SectionTitle className="container" text={title} />

            {/* Carousel */}
            <div className="relative mt-5 md:mt-12 overflow-x-hidden">
                <div className="relative w-full max-w-[1400px] mx-auto pl-4 sm:pl-6 md:pl-8 lg:pl-[80px]">
                    <Carousel
                        opts={{
                            align: "start",
                            slidesToScroll: 1,
                            containScroll: "trimSnaps",
                        }}
                        className="m-0 p-0"
                    >
                        <CarouselContent className="m-0 p-0 relative gap-4">
                            {productItem.map((item) => (
                                <CarouselItem
                                    key={item.id}
                                    className="
                    m-0 p-0 
                    basis-[90%] sm:basis-[45%] 
                    md:basis-[30%] 
                    lg:basis-[23%] 
                    xl:basis-[20%]
                    min-w-[250px]
                    h-[450px]
                  "
                                >
                                    <ProductVideoCard productItem={item} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};
