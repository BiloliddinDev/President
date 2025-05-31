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
    <div className={"relative "}>
      <SectionTitle className={"container"} text={`${title}`} />
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        }}
        className="m-0 p-0 mt-5 md:mt-12 relative"
      >
        <CarouselContent className="m-0 p-0 relative">
          {productItem.map((item) => (
            <CarouselItem
              key={item.id}
              className="m-0 p-0 basis-[21%] min-w-64"
            >
              <ProductVideoCard productItem={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/*<CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-40" />*/}
        {/*<CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-40" />*/}
      </Carousel>
    </div>
  );
};
