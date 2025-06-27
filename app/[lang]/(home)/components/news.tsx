import {Carousel, CarouselContent, CarouselItem, CarouselNext,} from "@/components/ui/carousel";
import {SectionTitle} from "@/components/ui/sectionTitle";
import {NewsCard} from "@/components/shared/news-card/news-card";
import {newsItem} from "@/constants/news-item";
import {FC} from "react";

interface NewsProps {
    dictionary: {
        news: {
            title: string;
            newArrival: string;
        };
    };
    lang: "uz" | "ru" | "en";
}


export const News: FC<NewsProps> = ({dictionary, lang}) => {
    return (
        <div className={"relative "}>
            <SectionTitle className={"container"} text={`${dictionary.news.title}`}/>
            <Carousel
                opts={{
                    align: "start",
                    slidesToScroll: 1,
                    containScroll: "trimSnaps",
                }}
                className="m-0 p-0 mt-5 md:mt-12 relative"
            >
                <CarouselContent className="m-0 p-0 relative">
                    {newsItem.map((newsItem) => (
                        <CarouselItem
                            className={"m-0 p-0 min-w-96"}
                            key={newsItem.id}
                            style={{flex: "0 0 35%"}}
                        >
                            <NewsCard  newsItem={newsItem} entitle={dictionary.news.newArrival} lang={lang}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/*<CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-40" />*/}
                <CarouselNext className="absolute right-[100px] top-1/2 -translate-y-1/2 translate-x-full z-40"/>
            </Carousel>
            {/*<div className={"container grid grid-cols-3 gap-5 !mt-20 gap-y-10"}>*/}
            {/*    {newsItem.map((newsItem) => (*/}
            {/*        <NewsCard*/}
            {/*            key={newsItem.id}*/}
            {/*            newsItem={newsItem}*/}
            {/*            entitle="News"*/}
            {/*            lang={lang}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
};