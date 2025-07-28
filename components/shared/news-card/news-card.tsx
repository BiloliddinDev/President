"use client";
import {FC} from "react";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { NewsItemInterface } from "@/interface/news-home-page/news";
// import {NewsItem} from "@/interface/news-home-page/news";

export const NewsCard: FC<{ newsItem: NewsItemInterface; }> = ({newsItem,}) => {

    return (
        <div className={"w-[100%] h-[100%] text-center"}>
            {newsItem?.image?.filePath && (
                <Image
                    src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${newsItem?.image?.filePath}`}
                    width={1000}
                    height={1000}
                    className={"w-96 md:w-full h-[500px] object-cover"}
                    alt={`${newsItem.title}`}
                />
            )}
            <h4
                className={
                    "self-stretch justify-start text-gray-800 text-xl font-medium mt-2.5 leading-9"
                }
            >
                {newsItem?.title}
            </h4>
            <Link
                href={`/new/${newsItem.title}id${newsItem.id}`}
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
