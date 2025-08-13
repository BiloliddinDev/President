import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import {NewsCard} from "@/components/shared/news-card/news-card";
import {NewsItemInterface} from "@/interface/news-home-page/news";
import {NewsListService} from "@/service/home-service/newslist.service";
import {splitNameAndIdFromParam} from "@/hooks/get-breadcrumb";
import { getDictionary } from "@/lib/get-dictionary";

interface NewsPageProps {
    params: Promise<{
        lang: "uz" | "ru" | "en" |"tj"|"az";
        news: string;
    }>;
}

export default async function News({params}: NewsPageProps) {
    const News = await params.then((params) => params);
    const NewsItem = splitNameAndIdFromParam(News.news)
    const NewList: NewsItemInterface[] = await NewsListService() as NewsItemInterface[]
    const dictionary = await getDictionary(News.lang);
    return (
        <div>
            <div className={"container !mt-22"}>
                <BreadcrumbDynamic url={NewsItem?.name || undefined}/>
            </div>

            <div className={"container grid grid-cols-3 gap-5 !mt-20 gap-y-10"}>
                {NewList.map((newsItem) => (
                    <NewsCard key={newsItem.id} newsItem={newsItem} dictionary={dictionary}/>
                ))}
            </div>
        </div>
    );
}
