"use client";

import { FC, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";



export const CollectionCard: FC<{ newsItem:  {
    id: number;
    title: {
        uz: string;
        ru: string;
        en: string;
    };
    price: string;
    image: StaticImageData[];
}, lang: "uz" | "ru" | "en" }> = ({
  newsItem,
  lang,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (hovered && newsItem.image.length > 1) {
      let next = 1;
      interval = setInterval(() => {
        setCurrentIndex(() => {
          const nextIndex = next % newsItem.image.length;
          next++;
          return nextIndex;
        });
      }, 1500);
    } else {
      setCurrentIndex(0);
    }

    return () => clearInterval(interval);
  }, [hovered, newsItem.image.length]);

  return (
    <div
      className="w-48"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-[300px] h-[300px] overflow-hidden cursor-pointer">
        {newsItem.image.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={newsItem.title[lang]}
            fill
            className={`object-contain transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      <p className="mt-4 text-primary text-sm font-normal text-center">{newsItem.title[lang]}</p>
      <p className="text-gray-600 mt-2 text-sm font-normal text-center">{newsItem.price} $</p>
    </div>
  );
};
