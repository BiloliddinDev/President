// import ProductVideoCard from "@/components/shared/product-video-card/video-card";
// import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel";
// import {SectionTitle} from "@/components/ui/sectionTitle";
// import {productItem} from "@/constants/product-videos-item";

// interface ProductVideosProps {
//     dictionary: {
//         productVideos: {
//             title: string;
//         };
//     };
// }

// export const ProductVideos = ({dictionary}: ProductVideosProps) => {
//     return (
//         <div className="relative">
//             <SectionTitle className="container" text={dictionary.productVideos.title} />

//             {/* Carousel */}
//             <div className="relative mt-5 md:mt-12 overflow-x-hidden">
//                 <div className="relative w-full max-w-[1400px] mx-auto pl-4 sm:pl-6 md:pl-8 lg:pl-[80px]">
//                     <Carousel
//                         opts={{
//                             align: "start",
//                             slidesToScroll: 1,
//                             containScroll: "trimSnaps",
//                         }}
//                         className="m-0 p-0"
//                     >
//                         <CarouselContent className="m-0 p-0 relative gap-4">
//                             {productItem.map((item) => (
//                                 <CarouselItem
//                                     key={item.id}
//                                     className="
//                     m-0 p-0 
//                     basis-[90%] sm:basis-[45%] 
//                     md:basis-[30%] 
//                     lg:basis-[23%] 
//                     xl:basis-[20%]
//                     min-w-[250px]
//                     h-[450px]
//                   "
//                                 >
//                                     <ProductVideoCard productItem={item}/>
//                                 </CarouselItem>
//                             ))}
//                         </CarouselContent>
//                     </Carousel>
//                 </div>
//             </div>
//         </div>
//     );
// };
import ProductVideoCard from "@/components/shared/product-video-card/video-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionTitle } from "@/components/ui/sectionTitle";
import { productItem } from "@/constants/product-videos-item";

interface ProductVideosProps {
  dictionary: {
    productVideos: {
      title: string;
    };
  };
}

export const ProductVideos = ({ dictionary }: ProductVideosProps) => {
  return (
    <div className="relative w-full bg-white py-8">
      <SectionTitle className="container" text={dictionary.productVideos.title} />

      {/* Carousel container */}
      <div className="relative mt-5 md:mt-12">
        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
            className="relative"
          >
            {/* Arrows */}
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center" />

            {/* Carousel Items */}
            <CarouselContent className="gap-1">
              {productItem.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="
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
