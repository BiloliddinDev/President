'use client';

import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {useBasketStore} from "@/lib/set-basket.storage";
import {getCurrencyCode, getPriceFor} from "@/hooks/price-helpers";
import {formatCurrency} from "@/hooks/formatPrice";

export default function BasketRightSection() {
    const {items} = useBasketStore();

    const code = getCurrencyCode();

    const totalQuantity = items.reduce((acc, item) => acc + (item.quantity ?? 0), 0);

    const subtotal = items.reduce((acc, item) => {
        const row = getPriceFor(item.price, code);
        return acc + ((row?.price ?? 0) * (item.quantity ?? 1));
    }, 0);

    const formattedSubtotal = formatCurrency({currency: {code} as never, price: subtotal});

    return (
        <div className="w-full md:max-w-sm max-w-full border rounded-[4px] p-6 space-y-4 text-gray-800">
            <h2 className="text-lg font-semibold">Детали вашего заказа</h2>

            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Количество товара</span>
                    <span className="font-semibold">{totalQuantity} шт.</span>
                </div>

                <div className="flex justify-between">
                    <span>Цены продуктов</span>
                    <span className="font-semibold">{formattedSubtotal}</span>
                </div>

                <hr/>

                <div className="flex justify-between text-lg font-semibold">
                    <span>Итого:</span>
                    <span>{formattedSubtotal}</span>
                </div>
            </div>

            <Link className={cn(buttonVariants({variant: "default"}), "w-full")} href={"/order"}>
                Оформить заказ
            </Link>

            <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Служба доставки в течение 2–3 дней.</span>
            </div>
        </div>
    );
}
