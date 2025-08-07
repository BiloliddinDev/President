"use client";
import {FC} from "react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { NewsItemInterface } from "@/interface/news-home-page/news";
// import {NewsItem} from "@/interface/news-home-page/news";

export const NewsCard: FC<{ newsItem: NewsItemInterface; }> = ({newsItem,}) => {

    return (
        <div data-aos="fade-up" className={"w-[100%] h-[100%] text-center mb-14 flex flex-col relative"}>
            {newsItem?.image?.filePath && (
                <Image
                    src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${newsItem?.image_page?.filePath}`}
                    width={1000}
                    height={1000}
                    className={"w-96 md:w-full h-[500px] object-cover"}
                    alt={`${newsItem.title}`}
                />
            )}
            <h4
                className={
                    "self-stretch justify-start text-gray-800 text-xl font-medium mt-2.5 leading-7 line-clamp-2 px-3"
                }
            >
                {newsItem?.title}
            </h4>
            <Link
                href={`/new/${newsItem.title}id${newsItem.id}`}
                passHref={true}
                className={` absolute -bottom-0  w-full`}
            >
                <Button variant={"secondary"} className={" w-[90%] mt-5 md:max-w-52"}>
                    Подробнее
                </Button>
            </Link>
        </div>
    );
};
