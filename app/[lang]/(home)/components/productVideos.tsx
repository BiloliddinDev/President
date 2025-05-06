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
    <div className="container">
      <SectionTitle text={title} />
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        }}
        className="mt-12"
      >
        <CarouselContent>
          {productItem.map((item) => (
            <CarouselItem key={item.id} className="basis-[25%]">
              <ProductVideoCard productItem={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/*<CarouselPrevious className="absolute left-0 top-1/2 translate-y-1/2 translate-x-full z-40" />*/}
        {/*<CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-40" /> */}
      </Carousel>
    </div>
  );
};
