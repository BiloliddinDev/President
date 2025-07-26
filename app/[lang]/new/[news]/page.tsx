// "use client"
// import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// // import {newsItem} from "@/constants/news-item";
// import { NewsCard } from "@/components/shared/news-card/news-card";
// import { useEffect, useState } from "react";
// import { NewsItem } from "@/interface/news-home-page/news";
// import { getNews } from "@/service/home-service/news.service";

// interface NewsPageProps {
//   params: Promise<{
//     lang: "uz" | "ru" | "en";
//     news: string;
//   }>;
// }

// export default async function News({ params }: NewsPageProps) {
//   const News = await params.then((params) => params.news);
//   const lang = await params.then((params) => params.lang);
//   const NewsText = decodeURIComponent(News);

//   const [news, setNews] = useState<NewsItem[]>([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       const data = await getNews();
//       setNews(data);
//     };
//     fetchNews().then().catch().finally();
//   }, []);

//   const selectedNew = news.find((item) => item.title === NewsText);
//   return (
//     <div>
//       <div className={"container !mt-22"}>
//         <BreadcrumbDynamic />
//       </div>
//       <div className="container ">
//         {" "}
//         {selectedNew?.image && (
//           <Image
//             src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${selectedNew?.image.filePath}`}
//             alt={"Showcase Image data"}
//             width={"1000"}
//             height={"100"}
//             className={"w-full mt-7 h-[500px] object-cover "}
//           />
//         )}
//       </div>

//       <div className={"container"}>
//         <h2 className={"mt-10 text-primary text-xl font-medium leading-loose"}>
//           {/* President Business Gifts news */}
//           {NewsText}
//         </h2>
//         <p className="self-stretch justify-start text-zinc-700 text-sm font-normal font-['Inter'] leading-tight mb-9">
//           {selectedNew?.description}
          
//         </p>
//         <Link href={"https://www.instagram.com/president_business_gifts/"}>
//           <Button variant={"default"}>Подробнее</Button>
//         </Link>
//       </div>

//       <div className={"container grid grid-cols-3 gap-5 !mt-20 gap-y-10"}>
//         {news.map((newsItem) => (
//           <NewsCard key={newsItem.id} newsItem={newsItem}/>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/shared/news-card/news-card";
import { useEffect, useState } from "react";
import { NewsItem } from "@/interface/news-home-page/news";
import { getNews } from "@/service/home-service/news.service";
import { useParams } from "next/navigation";

export default function News() {
  const {news } = useParams() as {  news: string };
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  const decodedNewsText = decodeURIComponent(news);
  
  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setNewsList(data);
    };

    fetchNews();
  }, []);

  const selectedNew = newsList.find((item) => item.title === decodedNewsText);

  return (
    <div>
      <div className="container !mt-22">
        <BreadcrumbDynamic />
      </div>
      <div className="container">
        {selectedNew?.image && (
          <Image
            src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${selectedNew?.image.filePath}`}
            alt="Showcase Image"
            width={1000}
            height={500}
            className="w-full mt-7 h-[500px] object-cover"
          />
        )}
      </div>

      <div className="container">
        <h2 className="mt-10 text-primary text-xl font-medium leading-loose">
          {decodedNewsText}
        </h2>
        <p className="self-stretch justify-start text-zinc-700 text-sm font-normal leading-tight mb-9">
          {selectedNew?.description}
        </p>
        <Link href="https://www.instagram.com/president_business_gifts/">
          <Button variant="default">Подробнее</Button>
        </Link>
      </div>

      <div className="container grid grid-cols-3 gap-5 !mt-20 gap-y-10">
        {newsList.map((newsItem) => (
          <NewsCard key={newsItem.id} newsItem={newsItem} />
        ))}
      </div>
    </div>
  );
}
