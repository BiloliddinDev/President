import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {NewsCard} from "@/components/shared/news-card/news-card";
import {NewsItemInterface} from "@/interface/news-home-page/news";
import {NewsService} from "@/service/news-service/news.service";
import {NewsListService} from "@/service/home-service/newslist.service";
import FormattedText from "@/components/shared/formatted-text/formatted-text";
import {splitNameAndIdFromParam} from "@/hooks/get-breadcrumb";

interface NewsPageProps {
    params: Promise<{
        lang: "uz" | "ru" | "en";
        news: string;
    }>;
}

export default async function News({params}: NewsPageProps) {
    const News = await params.then((params) => params);
    const NewsItem = splitNameAndIdFromParam(News.news)
    // const NewData: NewsItemInterface = await NewsService(Number(NewsItem.id)) as NewsItemInterface
    const NewList: NewsItemInterface[] = await NewsListService() as NewsItemInterface[]

    return (
        <div>
            <div className={"container !mt-22"}>
                <BreadcrumbDynamic url={NewsItem?.name || undefined}/>
            </div>
            

            <div className={"container grid grid-cols-3 gap-5 !mt-20 gap-y-10"}>
                {NewList.map((newsItem) => (
                    <NewsCard key={newsItem.id} newsItem={newsItem}/>
                ))}
            </div>
        </div>
    );
}
