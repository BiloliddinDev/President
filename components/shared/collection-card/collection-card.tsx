// import {FC} from "react";
// // import {CollectionType} from "@/interface/collection-type/collection-type";
// import Image from "next/image";
// import { ProductDto } from "@/constants/summer-collections-items";


// export const CollectionCard: FC<{ newsItem: ProductDto, lang: 'uz' | 'ru' | 'en' }> = ({newsItem, lang}) => {
//     return (
//         <div className={"w-48"}>
//             <Image src={`${newsItem.mediaFileDto[2].pathUrl}`} alt={newsItem.translationsNameAsMap.RU} width={1000} height={1000}
//                    className={'w-[300] h-[300] object-contain'}/>
//             <p className={" mt-11 text-primary text-sm font-normal"}>{newsItem.translationsNameAsMap.RU}</p>
//             <p className={"text-gray-600 mt-9 text-sm font-normal"}>{newsItem.basePriceToUSD} $</p>
//         </div>
//     )
// }
"use client"
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { ProductDto } from "@/constants/summer-collections-items";

export const CollectionCard: FC<{ newsItem: ProductDto, lang: 'uz' | 'ru' | 'en' }> = ({ newsItem, lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (hovered) {
      setCurrentIndex(1); // hover bo'lishi bilan 0-rasmni darhol ko'rsatadi
      let next = 1;
      interval = setInterval(() => {
        setCurrentIndex(() => {
          const nextIndex = next % newsItem.mediaFileDto.length;
          next++;
          return nextIndex;
        });
      }, 1500); // keyingi rasm har 1.5 sekundda
    } else {
      setCurrentIndex(0);
    }

    return () => clearInterval(interval);
  }, [hovered, newsItem.mediaFileDto.length]);

  return (
    <div
      className="w-48"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-[300px] h-[300px] overflow-hidden cursor-pointer">
        {newsItem.mediaFileDto.map((img, index) => (
          <Image
            key={index}
            src={img.pathUrl}
            alt={newsItem.translationsNameAsMap[lang.toUpperCase() as keyof typeof newsItem.translationsNameAsMap]}
            fill
            className={`object-contain transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      <p className="mt-4 text-primary text-sm font-normal text-center">
        {newsItem.translationsNameAsMap[lang.toUpperCase() as keyof typeof newsItem.translationsNameAsMap]}
      </p>
      <p className="text-gray-600 mt-2 text-sm font-normal text-center">
        {newsItem.basePriceToUSD} $
      </p>
    </div>
  );
};
