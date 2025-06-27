import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import ShowsNewsIMage from "@/public/images/show-news.png"
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {newsItem} from "@/constants/news-item";
import {NewsCard} from "@/components/shared/news-card/news-card";

interface NewsPageProps {
    params: Promise<
        {
            lang: string;
            news: string;
        }
    >
}


export default async function News({params}: NewsPageProps) {

    const News = await params.then((params) => params.news)

    return (
        <div>
            <div className={'container !mt-22'}>
                <BreadcrumbDynamic/>
            </div>
            <Image src={ShowsNewsIMage} alt={"Showcase Image data"} width={"1000"} height={600}
                   className={"w-full mt-7"}/>

            <div className={"container"}>
                <h2 className={"mt-10 text-primary text-xl font-medium leading-loose"}>President Business Gifts
                    news {News}</h2>
                <p className="self-stretch justify-start text-zinc-700 text-sm font-normal font-['Inter'] leading-tight mb-9">Check
                    out our awesome range of alpine-themed pouches and cool fragrances at President Business Gifts! Dive
                    into our unique collection and snag the perfect gift before you buy. <br/><br/>Check out our awesome
                    range of alpine-themed pouches and cool fragrances at President Business Gifts! Dive into our unique
                    collection and snag the perfect gift before you buy. <br/><br/>Check out our awesome range of
                    alpine-themed pouches and cool fragrances at President Business Gifts! Dive into our unique
                    collection and snag the perfect gift before you buy.</p>
                <Link href={"https://www.instagram.com/president_business_gifts/"}>
                    <Button variant={"default"}>
                        View on Instagram
                    </Button>
                </Link>
            </div>

            <div className={"container grid grid-cols-3 gap-5 !mt-20 gap-y-10"}>
                {newsItem.map((newsItem) => (
                    <NewsCard key={newsItem.id} newsItem={newsItem} lang={"uz"} entitle={""}/>
                ))}
            </div>
        </div>
    )
} 
