import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import {SectionTitle} from "@/components/ui/sectionTitle";
import {NewsCard} from "@/components/shared/news-card/news-card";
import {FC} from "react";
import {NewsItemInterface} from "@/interface/news-home-page/news";
import {NewsListService} from "@/service/home-service/newslist.service";

interface NewsProps {
    dictionary?: {
        news: {
            title: string;
            newArrival: string;
        };
    };
    lang?: "uz" | "ru" | "en"
}


export const News: FC<NewsProps> = async ({dictionary}) => {

    const NewData: NewsItemInterface = await NewsListService() as NewsItemInterface


    return (
        <div className={"relative "}>
            <SectionTitle className={"container"} text={`${dictionary?.news.title}`}/>
            <Carousel
                opts={{
                    align: "start",
                    slidesToScroll: 1,
                    containScroll: "trimSnaps",
                }}
                className="m-0 p-0 mt-5 md:mt-12 relative"
            >
                <CarouselContent className="m-0 p-0 relative">
                    {NewData.map((newsItem) => (
                        <CarouselItem
                            className={"m-0 p-0 min-w-96"}
                            key={newsItem.id}
                            style={{flex: "0 0 35%"}}
                        >
                            <NewsCard newsItem={newsItem}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[100px] top-1/2 -translate-y-1/2 -translate-x-full z-40"/>
                <CarouselNext className="absolute right-[100px] top-1/2 -translate-y-1/2 translate-x-full z-40"/>
            </Carousel>
        </div>
    );
};