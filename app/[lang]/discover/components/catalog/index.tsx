"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { bookItems } from "@/constants/books-items";
import MyFlipBook from "@/components/shared/my-flip-book/flip-book";


const Catalog = () => {
    const [bookSize, setBookSize] = useState({ width: 550, height: 770 });

    useEffect(() => {
        const updateSize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 765) {
                setBookSize({ width: 360, height: 500 });
            } else if (screenWidth <= 1200) {
                setBookSize({ width: 400, height: 590 });
            } else {
                setBookSize({ width: 550, height: 770 });
            }
        };

        updateSize(); // ilk yuklashda ishlaydi
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <MyFlipBook
            className="mx-auto"
            startPage={0}
            width={bookSize.width}
            height={bookSize.height}
        >
            {bookItems.map((item) => (
                <div key={item.id} className="demoPage">
                    <Image
                        src={item.pageImg}
                        alt={"Journal"}
                        width={1000}
                        height={1590}
                        className="h-full w-full object-cover shadow-lg rounded-sm"
                    />
                </div>
            ))}
        </MyFlipBook>
    );
};

export default Catalog;
