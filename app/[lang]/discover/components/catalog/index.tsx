"use client";


import Image from "next/image";
import React from "react";
import {bookItems} from "@/constants/books-items";
import MyFlipBook from "@/components/shared/my-flip-book/flip-book";

const Catalog = () => {
    return (
        <MyFlipBook className="mx-auto" startPage={0} width={530} height={790}>
            {bookItems.map((item) => (
                <div key={item.id} className="demoPage">
                    <Image src={item.pageImg.src} alt={item.alt} width={530} height={790}/>
                </div>
            ))}
        </MyFlipBook>
    );
};

export default Catalog;

