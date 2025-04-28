import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel"
import {SectionTitle} from "@/components/ui/sectionTitle";
import {NewsCard} from "@/components/shared/news-card/news-card";
import {newsItem} from "@/constants/news-item";
import {FC} from "react";

export const News: FC<{title : string}> = ({title}) => {
    return (
        <div className={"relative "}>
            <SectionTitle className={"container"} text={`${title}`}/>
            <Carousel
                opts={{
                    align: "start",
                    slidesToScroll: 1,
                    containScroll: "trimSnaps",
                }}
                className="m-0 p-0 mt-12 relative"
            >
                <CarouselContent className="m-0 p-0 relative">
                    {newsItem.map((newsItem) => (
                        <CarouselItem
                            className={'m-0 p-0'}
                            key={newsItem.id}
                            style={{flex: '0 0 35%'}}
                        >
                            <NewsCard newsItem={newsItem}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/*<CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-40" />*/}
                {/*<CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-40" />*/}
            </Carousel>
        </div>
    )
}