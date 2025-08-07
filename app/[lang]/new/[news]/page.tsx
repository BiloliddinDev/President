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
    const NewData: NewsItemInterface = await NewsService(Number(NewsItem.id)) as NewsItemInterface
    const NewList: NewsItemInterface[] = await NewsListService() as NewsItemInterface[]

    return (
        <div>
            <div className={"container !mt-22"}>
                <BreadcrumbDynamic url={NewData?.title || undefined}/>
            </div>
            <div className="container ">
                {NewData.image_page?.filePath && (
                    <Image
                        src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${NewData?.image_page.filePath}`}
                        alt={"Showcase Image data"}
                        width={"1000"}
                        height={"100"}
                        className={"w-full mt-7 h-[500px] object-cover "}
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="0"
                        data-aos-offset="0"
                    />
                )}
            </div>

            <div className={"container"}>
                <h2 className={"mt-10 text-primary text-xl font-medium leading-loose"}>

                    {NewData.title}
                </h2>
                {/*<p className="self-stretch justify-start text-zinc-700 text-sm font-normal font-['Inter'] leading-tight mb-9">*/}
                <FormattedText input={NewData.description}/>
                {/*</p>*/}
                <Link href={`${NewData.instagramLink}`}>
                    <Button variant={"default"} className={'mt-7'}>Подробнее</Button>
                </Link>
            </div>

            <div className={"container grid grid-cols-3 gap-5 !mt-20 gap-y-10"}>
                {NewList.map((newsItem) => (
                    <NewsCard key={newsItem.id} newsItem={newsItem}/>
                ))}
            </div>
        </div>
    );
}
