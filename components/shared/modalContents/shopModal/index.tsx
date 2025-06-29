import {shopModalItems} from "@/constants/shop-modal-item";
import Link from "next/link";
import React from "react";

interface shopModalProps {
    lang: "uz" | "ru" | 'en'
}

const ShopModalContent = ({lang}: shopModalProps) => {
    return (
        <div>
            {shopModalItems.map((item) => (
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
