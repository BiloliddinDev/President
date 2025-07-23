import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
// import ShowsNewsIMage from "@/public/images/show-news.png"
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {newsItem} from "@/constants/news-item";
import {NewsCard} from "@/components/shared/news-card/news-card";

interface NewsPageProps {
    params: Promise<
        {
            lang: "uz"|"ru"|"en";
            news: string;
        }
    >
}


export default async function News({params}: NewsPageProps) {

    const News = await params.then((params) => params.news)
    const lang = await params.then((params) => params.lang)
   const NewsText= decodeURIComponent(News);


  const selectedNew= newsItem.find((item)=>item.text[lang]===NewsText)
    return (
        <div>
            <div className={'container !mt-22'}>
                <BreadcrumbDynamic/>
            </div>
           <div className="container "> <Image src={`${selectedNew?.images.src}`} alt={"Showcase Image data"} width={"1000"} height={"100"}
                   className={"w-full mt-7 h-[500px] object-cover "}/></div>

            <div className={"container"}>
                <h2 className={"mt-10 text-primary text-xl font-medium leading-loose"}>
                    {/* President Business Gifts news */}
                     {NewsText}</h2>
                <p className="self-stretch justify-start text-zinc-700 text-sm font-normal font-['Inter'] leading-tight mb-9">{selectedNew?.description.ru}
                    {/* <br/><br/>Check out our awesome
                    range of alpine-themed pouches and cool fragrances at President Business Gifts! Dive into our unique
                    collection and snag the perfect gift before you buy. <br/><br/>Check out our awesome range of
                    alpine-themed pouches and cool fragrances at President Business Gifts! Dive into our unique
                    collection and snag the perfect gift before you buy. */}
                    </p>
                <Link href={"https://www.instagram.com/president_business_gifts/"}>
                    <Button variant={"default"}>
                        Подробнее
                    </Button>
                </Link>
            </div>

            <div className={"container grid grid-cols-3 gap-5 !mt-20 gap-y-10"}>
                {newsItem.map((newsItem) => (
                    <NewsCard key={newsItem.id} newsItem={newsItem} lang={"ru"} />
                    // <NewsCard key={newsItem.id} newsItem={newsItem} lang={"ru"} entitle={""}/>
                ))}
            </div>
        </div>
    )
} 
