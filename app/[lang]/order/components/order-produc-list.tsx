"use client";

import Image, {StaticImageData} from "next/image";
import {Trash2} from "lucide-react";

type Product = {
    id: string;
    title: string;
    article: string;
    description: string;
    price: number;
    image: StaticImageData;
};

type Props = {
    products: Product[];
};

export default function OrderedProducts({products}: Props) {
    return (
        <div className="bg-white p-6 rounded-[4px] border mt-4">
            <h2 className="text-xl font-bold mb-4">Заказанные товары</h2>

            <div className="space-y-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center justify-between gap-4 border-b pb-4 last:border-b-0"
                    >
                        <div className="flex items-center gap-4">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={64}
                                height={64}
                                className="rounded-md object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-sm">{product.title}</h3>
                                <p className="text-xs text-muted-foreground">
                                    Артикул: {product.article}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Продукт: {product.description}
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
