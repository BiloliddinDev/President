'use client';

import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {useBasketStore} from "@/lib/set-basket.storage";

export default function BasketRightSection() {
    const {items} = useBasketStore();

    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <div className="w-full  md:max-w-sm max-w-full border rounded-[4px] p-6 space-y-4 text-gray-800">
            <h2 className="text-lg font-semibold">Детали вашего заказа</h2>

            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Количество товара</span>
                    <span className="font-semibold">{totalQuantity} шт.</span>
                </div>
                <div className="flex justify-between">
                    <span>Цены продуктов</span>
                    <span className="font-semibold">{totalPrice.toLocaleString()} USD</span>
                </div>
                {/*<div className="flex justify-between">*/}
                {/*    <span>Стоимость доставки</span>*/}
                {/*    <span className="font-semibold">{deliveryFee.toLocaleString()} сум</span>*/}
                {/*</div>*/}
                {/*<div className="flex justify-between">*/}
                {/*    <span>Скидка</span>*/}
                {/*    <span className="font-semibold">{discount.toLocaleString()} сум</span>*/}
                {/*</div>*/}
                <hr/>
                <div className="flex justify-between text-lg font-semibold">
                    <span>Итого:</span>
                    <span>{totalPrice.toLocaleString()} USD</span>
                </div>
            </div>

            <Link className={cn(buttonVariants({variant: 'default'}), 'w-full')} href={"/order"}>
                Оформить заказ
            </Link>

            <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Служба доставки в течение 2–3 дней.</span>
            </div>
        </div>
    );
}
