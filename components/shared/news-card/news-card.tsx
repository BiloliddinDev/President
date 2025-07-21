import {FC} from "react";
import {NewsCardProps} from "@/interface/news-model.ts/news.models";
import Image from "next/image";
// import {SupportFormModal} from "@/components/shared/form-modal/form.modal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const NewsCard: FC<{ newsItem: NewsCardProps, lang: "uz" | "ru" | 'en' }> = ({
                                                                                                         newsItem,
                                                                                                        //  entitle,
                                                                                                         lang
                                                                                                     }) => {
    return (
        <div className={"w-[100%] h-[100%] text-center"}>
            <Image
                src={newsItem.images.src}
                width={500}
                height={500}
                className={"w-96 md:w-full h-[500px] object-cover"}
                alt={newsItem.text[lang]}
            />
            <h4
                className={
                    "self-stretch justify-start text-gray-800 text-xl font-medium mt-2.5 leading-9"
                }
            >
                {newsItem?.text[lang]}
            </h4>
            <p
                className={
                    "self-stretch justify-start text-gray-600 text-base font-medium leading-7 mb-6"
                }
            >
                {newsItem?.description[lang]}
            </p>
            <Link
              href={`/new/${newsItem.text[lang]}`}
              passHref={true}
              className={`self-stretch justify-start`}
            > 
            <Button variant={"secondary"} className={" w-full md:max-w-52"}>Подробнее</Button>
            {/* <SupportFormModal autoOpen lang={lang} btnText={entitle}/> */}
            </Link>
        </div>
    );
};
