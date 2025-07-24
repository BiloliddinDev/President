'use client';

import Image from "next/image";
import {ShoppingBasket, Trash2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useBasketStore} from "@/lib/set-basket.storage";

export function BasketLeftSection() {
    const {
        items,
        increaseQuantity,
        decreaseQuantity,
        removeFromBasket
    } = useBasketStore();

    return (
        <div className="w-full lg:w-[70%] pr-4 space-y-4">
            {items.length === 0 ? (
                <div className="w-full flex flex-col items-center justify-center py-24 text-center">
                    <ShoppingBasket className="w-20 h-20 text-gray-400 mb-4"/>
                    <h2 className="text-2xl font-semibold text-gray-600">Корзина пуста</h2>
                    <p className="text-gray-500 mt-2 text-sm">Вы еще не добавили товары в корзину.</p>
                </div>
            ) : (
                items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4 border rounded-[4px] p-4">
                        <div className="flex items-center gap-4">
                            <div className="relative w-24 h-24 shrink-0">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_ADMIN_URL}${item.imgUrl}`}
                                    alt={item.name}
                                    fill
                                    className="object-cover rounded-md"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.sku || "Описание недоступно"}</p>
                                <p className="text-sm text-gray-600 mt-1">Цена:
                                    <span
                                        className="font-semibold"> {item.price} сум</span>
                                </p>
                                <p className="text-sm text-gray-600">Общая сумма:
                                    <span className="font-semibold">
                                        {(item.price * item.quantity).toLocaleString()} сум
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-2">
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
                ))
            )}
        </div>
    );
}
