"use client";

import Image from "next/image";
import {Heart} from "lucide-react";
import {ProductsInterface} from "@/interface/products-interface/products-interface";
import {useWishlistStore} from "@/lib/set-wishlist.storage";
import Link from "next/link";

interface ProductsCardProps {
    productData: ProductsInterface;
    className?: string;
}

export const ProductsCard = ({productData, className}: ProductsCardProps) => {
    const {isInWishlist, toggleWishlist} = useWishlistStore();

    const isLiked = isInWishlist(productData.id)
    console.log(isLiked , 'this is isLiked')

    return (
        <div
            className={`${className} group relative flex flex-col rounded-lg transition hover:shadow-md bg-white pb-2`}
        >
            <button
                onClick={() => toggleWishlist(productData.id)}
                className="absolute right-3 top-3 z-40 text-gray-500 cursor-pointer hover:text-primary transition"
            >
                <Heart
                    className={`w-5 h-5 ${isLiked ? "fill-primary text-primary" : ""}`}
                />
            </button>

            <Link href={`/detail/${productData.id}`}>
                <div className="relative w-full pt-[100%] mb-4 bg-neutral-100 rounded-[4px] py-4">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${productData?.media[0]?.filePath}`}
                        alt={productData.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                </div>
            </Link>

            <div className="flex flex-col justify-between h-full p-3">
                {productData.meta._new_product && (
                    <span className="mb-3 w-fit rounded border px-2 py-0.5 text-xs font-medium text-gray-700">
            New Arrival
          </span>
                )}
                <h3 className="text-sm font-medium mb-2 text-gray-900">
                    {productData.name}
                </h3>
                <p className="text-sm text-gray-500">${productData.basePriceToUSD}</p>
            </div>
        </div>
    );
};
