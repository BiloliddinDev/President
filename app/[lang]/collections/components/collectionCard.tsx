
"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { CollectionResponse } from "../type";

export const CollectionCard: FC<{ newsItem: CollectionResponse; }> = ({
  newsItem,
 
}) => {
  const [hovered, setHovered] = useState(false);

  const imageUrl = (index: number) =>
    `${process.env.NEXT_PUBLIC_ADMIN_URL}${newsItem.mediaFiles[index]?.filePath || ""}`;

  return (
    <div
      className="w-full max-w-[380px] cursor-pointer flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-[300px] overflow-hidden rounded-md shadow-md">
        <div className="w-full h-full">
          <Image
            src={hovered && newsItem.mediaFiles[1] ? imageUrl(1) : imageUrl(0)}
            alt={newsItem.name}
            width={380}
            height={300}
            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              hovered ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      </div>

      <p className="mt-4 text-center text-primary text-sm font-normal">
        {newsItem.name}
      </p>
    </div>
  );
};
