"use client";

import Image from "next/image";
import {Heart} from "lucide-react";
import {useWishlistStore} from "@/lib/set-wishlist.storage";
import {ProductsInterface} from "@/interface/products-interface/products-interface";

interface ProductsCardProps {
    productData: ProductsInterface;
    className?: string;
}

export const ProductsCard = ({productData, className}: ProductsCardProps) => {
    const {toggleWishlist, isInWishlist} = useWishlistStore();
    const isFavorite = isInWishlist(productData.id);

    return (
        <div
            className={`${className} group relative flex flex-col rounded-lg transition hover:shadow-md bg-white pb-2`}
        >
            <button
                onClick={() => toggleWishlist({productData})}
                className="absolute right-3 top-3 z-40 text-gray-500 cursor-pointer hover:text-primary transition"
            >
                <Heart
                    className={`w-5 h-5 ${
                        isFavorite ? "fill-primary text-primary" : ""
                    }`}
                />
            </button>

            <div className="relative w-full pt-[100%] mb-4 bg-neutral-100 rounded-[4px] py-4">
                <Image
                    src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${productData?.media[0]?.filePath}`}
                    alt={productData.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 25vw"
                />
            </div>

            <div className="flex flex-col justify-between h-full p-3">
                {productData.meta._new_product && (
                    <span className="mb-3 w-fit rounded border px-2 py-0.5 text-xs font-medium text-gray-700">
            New Arrival
          </span>
                )}
                <h3 className="text-sm font-medium mb-2 text-gray-900">
                    {productData.name}
                </h3>
                <p className="text-sm text-gray-500">${productData.prices[0].price}</p>
            </div>
        </div>
    );
};
