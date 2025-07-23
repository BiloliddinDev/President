"use client"
// import { CategoryDataType } from "@/app/[lang]/(home)/components/category";
import {shopModalItems} from "@/constants/shop-modal-item";
// import { getCategoryModal } from "@/service/home-service/category-mobile.service";
import Link from "next/link";
import React from "react";
import { Category } from "../../navbar/navbar";

interface shopModalProps {
    lang: "uz" | "ru" | 'en',
    category:Category[]
}

const ShopModalContent = ({lang,category}: shopModalProps) => {
 
    console.log("SHOPMODALCATEGORY",category)

    return (
        <div>
            {category.map((item) => (
                <div
                    className={`text-sm
                     font-normal leading-[1.5rem] cursor-pointer
                     ${item.id === 9 ? "mt-10" : "my-5"}`}
                    key={item.id}
                >
                    {/* <Link href={`/shops/${item.nameMap.EN}${item.id}`}> */}
                        {item.name}
                    {/* </Link> */}
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
