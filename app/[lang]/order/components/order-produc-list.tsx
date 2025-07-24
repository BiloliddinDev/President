"use client";

import Image from "next/image";
import {Trash2} from "lucide-react";
import {ProductCardProps} from "@/interface/product-card-type";


export default function OrderedProducts({products}: {
    products: ProductCardProps[],

}) {
    return (
        <div className="bg-white p-6 rounded-[4px] border mt-4">
            <h2 className="text-xl font-bold mb-4">Заказанные товары</h2>

            <div className="space-y-4">
                {products.map((product: ProductCardProps) => (
                    <div
                        key={product.id}
                        className="flex items-center justify-between gap-4 border-b pb-4 last:border-b-0"
                    >
                        <div className="flex items-center gap-4">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${product.imgUrl}`}
                                alt={product.name}
                                width={64}
                                height={64}
                                className="rounded-md object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-sm">{product.name}</h3>
                                <p className="text-xs text-muted-foreground">
                                    Артикул: {product.sku}
                                </p>

                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <p className="font-medium whitespace-nowrap">
                                {product.price.toLocaleString("ru-RU")} сум
                            </p>
                            <button
                                className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full"
                            >
                                <Trash2 className="w-4 h-4"/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
