"use client"

import {shopModalItems} from "@/constants/shop-modal-item";
import Link from "next/link";
import React from "react";
import {Category} from "../../navbar/navbar";

interface shopModalProps {
    lang: "uz" | "ru" | 'en',
    category: Category[]
}

const ShopModalContent = ({lang, category}: shopModalProps) => {

    return (
        <div>
            {category.map((item) => (
                <div
                    className={`text-sm
                     font-normal leading-[1.5rem] cursor-pointer
                     ${item.id === 9 ? "mt-10" : "my-5"}`}
                    key={item.id}
                >
                    <Link href={`/shops/${item.id}`}>
                        {item.name}
                    </Link>
                </div>
            ))}
            {shopModalItems.filter((i) => i.custom).map((item) => (
                <div
                    className={`text-sm
                     font-normal leading-[1.5rem] cursor-pointer
                     ${item.id === 9 ? "mt-10" : "my-5"}`}
                    key={item.id}
                >
                    <Link
                        href={`/${item.link}/${item.custom ? "" : item.name[lang].toLowerCase()}`}
                    >
                        {item.name[lang]}
                    </Link>
                </div>
            ))}
        </div>
    );
};
export default ShopModalContent;
