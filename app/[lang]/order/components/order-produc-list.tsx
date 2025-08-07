"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Trash2 } from "lucide-react";
import { ProductCardProps } from "@/interface/product-card-type";
import { useBasketStore } from "@/lib/set-basket.storage";

export default function OrderedProducts({ products }: { products: ProductCardProps[] }) {
    const router = useRouter();
    const { removeFromBasket } = useBasketStore();

    useEffect(() => {
        if (products.length === 0) {
            router.push("/"); // home sahifaga redirect
        }
    }, [products.length, router]);

    return (
        <div className="bg-white p-4 sm:p-6 rounded-[4px] border mt-4">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Заказанные товары</h2>
            <div className="space-y-4">
                {products.map((product: ProductCardProps) => (
                    <div
                        key={product.id}
                        className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 border-b pb-4 last:border-b-0"
                    >
                        <div className="flex items-center gap-4 min-w-0">
                            <div className="shrink-0">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${product.imgUrl}`}
                                    alt={`product name ${product.name}`}
                                    width={64}
                                    height={64}
                                    className="rounded-md object-cover"
                                />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-semibold text-sm truncate">{product.name}</h3>
                                <p className="text-xs text-muted-foreground truncate">
                                    Артикул: {product.sku}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
                            <p className="font-medium text-sm whitespace-nowrap">
                                {product.price.toLocaleString("ru-RU")} сум
                            </p>
                            <button
                                className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full shrink-0"
                                onClick={() => removeFromBasket(product.id)}
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
