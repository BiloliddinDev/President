"use client";

import { shopModalItems } from "@/constants/shop-modal-item";
import Link from "next/link";
import React from "react";
import { Category } from "@/interface/category-type/category-interface";

interface shopModalProps {
  lang: "uz" | "ru" | "en";
  category: Category[];
}

const ShopModalContent = ({ lang, category }: shopModalProps) => {
  return (
    <div className="">
      {shopModalItems
        .filter((i) => i.custom)
        .map((item) => (
          <div
            className={`text-sm font-normal leading-[1.5rem] cursor-pointer ${
              item.id === 9 ? "mt-10" : "my-5"
            }`}
            key={item.id}
          >
            <Link
              href={`/${item.link}/${
                item.custom ? "" : item.name[lang].toLowerCase()
              }`}
              className="group inline-flex items-center gap-1"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full bg-black opacity-0 transition-opacity group-hover:opacity-100`}
              />
              {item.name[lang]}
            </Link>
          </div>
        ))}

      {category.map((item) => (
        <div
          className={`text-sm font-normal leading-[1.5rem] cursor-pointer ${
            item.id === 9 ? "mt-10" : "my-5"
          }`}
          key={item.id}
        >
          <Link
            href={`/shops/${item.name}id${item.id}`}
            className="group inline-flex items-center gap-1"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full bg-black opacity-0 transition-opacity group-hover:opacity-100`}
            />
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
export default ShopModalContent;
