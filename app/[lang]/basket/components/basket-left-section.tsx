"use client";

import Image from "next/image";
import { ShoppingBasket, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBasketStore } from "@/lib/set-basket.storage";
import Link from "next/link";
import {getCurrencyCode, getPriceFor} from "@/hooks/price-helpers";
import {formatCurrency} from "@/hooks/formatPrice";
import { DictionaryType } from "./basket-right-section";

export function BasketLeftSection({ dictionary }: DictionaryType) {
    const {
        items,
        increaseQuantity,
        decreaseQuantity,
        removeFromBasket
    } = useBasketStore();
    // console.log(items)
    const code = getCurrencyCode();
    return (
        <div className="w-full lg:w-[70%] pr-4 space-y-4">
            {items.length === 0 ? (
                <div className="w-full flex flex-col items-center justify-center py-5 md:py-24 text-center">
                    <ShoppingBasket className="w-20 h-20 text-gray-400 mb-4"/>
                    <h2 className="text-2xl font-semibold text-gray-600">{dictionary.basket.empty_title}</h2>
                    <p className="text-gray-500 mt-2 text-sm">{dictionary.basket.empty_subtitle}</p>
                </div>
            ) : (
                items.map((item) => {
                        const p = getPriceFor(item.price, code);
                        const total = (p?.price ?? 0) * (item.quantity ?? 1);
                        return (
                            <div key={item.id}
                                 className="flex flex-col sm:flex-row items-center justify-between gap-4 border rounded-[4px] p-4">
                                <Link href={`/detail/${item.id}`} className="w-full flex items-center gap-4 ">
                                    <div className="relative w-24 h-24 shrink-0">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${item.imgUrl}`}
                                            alt={'This is image for ' + item.name + ' product'}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-500"> {item.sku || dictionary.basket.description_unavailable}</p>
                                        <p className="text-sm text-gray-600 mt-1">{dictionary.basket.price}:
                                            <span> {p ? formatCurrency({currency: p.currency, price: p.price}) : "-"}</span>
                                        </p>
                                        <p className="text-sm text-gray-600">
                                          {dictionary.basket.total}:{" "}
                                            <span className="font-semibold">   {p ? formatCurrency({
                                                currency: p.currency,
                                                price: total
                                            }) : "-"}</span>
                                        </p>
                                    </div>
                                </Link>
                                <div className="flex flex-row justify-start w-full  sm:flex-col  items-end gap-2">
                                    <div className="flex  items-center gap-2">
                                        <Button variant="outline" size="icon" onClick={() => decreaseQuantity(item.id)}>
                                            -
                                        </Button>
                                        <span className="px-2 font-medium">{item.quantity}</span>
                                        <Button className="bg-primary text-white" size="icon"
                                                onClick={() => increaseQuantity(item.id)}>
                                            +
                                        </Button>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => removeFromBasket(item.id)}>
                                        <Trash2 className="w-5 h-5"/>
                                    </Button>
                                </div>
                            </div>
                        )
                    }
                )
            )}
        </div>
  );
}
