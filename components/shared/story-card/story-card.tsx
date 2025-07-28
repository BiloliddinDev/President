"use client";
import {FC} from "react";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

interface StoryCardProps {
    storyItem: {
        id: number;
        name: {
            uz: string;
            ru: string;
            en: string;
        };
        link: string;
        image: StaticImageData;
    };
}


export const StoryCard: FC<StoryCardProps> = ({storyItem}) => {

    return (
        <div className={"w-[100%] h-[100%] text-center"}>

            <Image
                src={storyItem.image}
                width={1000}
                height={1000}
                className={"w-96 md:w-full h-[500px] object-cover"}
                alt={`${storyItem.name["ru"]}`}
            />
            <h4
                className={
                    "self-stretch justify-start text-gray-800 text-xl font-medium mt-2.5 leading-9"
                }
            >
                {storyItem?.name.ru}
            </h4>
            <Link
                href={storyItem.link}
                passHref={true}
                className={`self-stretch justify-start`}
            >
                <Button variant={"secondary"} className={" w-full mt-5 md:max-w-52"}>
                    Подробнее
                </Button>
            </Link>
        </div>
    );
};
