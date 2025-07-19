"use client"
import { CategoryDataType } from "@/app/[lang]/(home)/components/category";
import {shopModalItems} from "@/constants/shop-modal-item";
import { getCategoryModal } from "@/service/home-service/category-mobile.service";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface shopModalProps {
    lang: "uz" | "ru" | 'en'
}

const ShopModalContent = ({lang}: shopModalProps) => {
    const [category, setCategory] = useState<CategoryDataType[]>([])
    function getLangKey(lang: "uz" | "ru" | "en"): "UZ" | "RU" | "EN" {
                return lang.toUpperCase() as "UZ" | "RU" | "EN";
            }
    useEffect(() => {
        const fetchCategory = async () => {
            const data:CategoryDataType[] = await getCategoryModal() as CategoryDataType[]
           setCategory(data);
        };
        fetchCategory().then().catch().finally();
    }, []);
    console.log(category)
    return (
        <div>
            {category.map((item) => (
                <div
                    className={`text-sm
                     font-normal leading-[1.5rem] cursor-pointer
                     ${item.id === 9 ? "mt-10" : "my-5"}`}
                    key={item.id}
                >
                    <Link href={`/shops/${item.nameMap[getLangKey(lang)]}${item.id}`}>
                        {item.nameMap[getLangKey(lang)]}
                    </Link>
                </div>
            ))}
            {/* {shopModalItems.map((item) => ( */}
            {shopModalItems.filter((i)=>i.custom===true).map((item) => (
                <div
                    className={`text-sm
                     font-normal leading-[1.5rem] cursor-pointer
                     ${item.id === 9 ? "mt-10" : "my-5"}`}
                    key={item.id}
                >
                    <Link
                        // href={`/shops/${item.id}`}
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
