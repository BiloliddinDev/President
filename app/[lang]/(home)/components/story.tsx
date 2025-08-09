import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import {SectionTitle} from "@/components/ui/sectionTitle";
import {FC} from "react";
import {StoryCard} from "@/components/shared/story-card/story-card";
import {storiesData} from "@/constants/story-static-data";

interface StoryProps {
    dictionary: {
        homepage:{
            more:string
        }, 
        story:{
            story:string
        }
    };
    lang: "uz" | "ru" | "en" |"az"|"tj"
}


export const StorySection: FC<StoryProps> = async ({dictionary,lang}) => {

    return (
        <div className={"relative "}>
            <SectionTitle className={"container"} text={dictionary.story.story}/>
            <Carousel
                opts={{
                    align: "start",
                    slidesToScroll: 1,
                    containScroll: "trimSnaps",
                }}
                className="m-0 p-0 mt-5 md:mt-12 relative"
            >
                <CarouselContent className="m-0 p-0 relative">
                    {storiesData?.map((storyline) => (
                        <CarouselItem
                            className={"m-0 p-0 min-w-96"}
                            key={storyline.id}
                            style={{flex: "0 0 35%"}}
                        >
                            <StoryCard storyItem={storyline} dictionary={dictionary} lang={lang}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[100px] top-1/2 -translate-y-1/2 -translate-x-full z-40"/>
                <CarouselNext className="absolute right-[100px] top-1/2 -translate-y-1/2 translate-x-full z-40"/>
            </Carousel>
        </div>
    );
};