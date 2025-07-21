"use client";


import Image from "next/image";
import React from "react";
// import {bookItems} from "@/constants/books-items";
import MyFlipBook from "@/components/shared/my-flip-book/flip-book";
import image from "@/public/images/Journal.jpg";

const Catalog = () => {
    return (
        <MyFlipBook className="mx-auto" startPage={0} width={1000} height={590}>
            {/* {bookItems.map((item) => (
                <div key={item.id} className="demoPage"> */}
                    <Image src={image.src} alt={"journal"} width={1000} height={790}/>
                {/* </div> */}
            {/* ))} */}
        </MyFlipBook>
    );
};

export default Catalog;

