import { FC } from "react";
import { NewsCardProps } from "@/interface/news-model.ts/news.models";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NewsCard: FC<{ newsItem: NewsCardProps }> = ({ newsItem }) => {
  return (
    <div className={"w-[100%] h-[100%] text-center"}>
      <Image
        src={newsItem.images.src}
        width={500}
        height={500}
        className={"w-96 md:w-full h-[430px] object-cover"}
        alt={newsItem.text}
      />
      <h4
        className={
          "self-stretch justify-start text-gray-800 text-xl font-medium mt-2.5 leading-9"
        }
      >
        {newsItem?.text}
      </h4>
      <p
        className={
          "self-stretch justify-start text-gray-600 text-base font-medium leading-7 mb-6"
        }
      >
        {newsItem?.description}
      </p>
      <Link
        href={`new/${newsItem.text}`}
        passHref={true}
        className={`self-stretch justify-start`}
      >
        <Button variant={"secondary"}>Hoziroq sotib olish</Button>
      </Link>
    </div>
  );
};
