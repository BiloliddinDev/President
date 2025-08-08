"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useBasketStore } from "@/lib/set-basket.storage";

export interface DictionaryType {
  dictionary: {
    basket: {
      empty_title: string;
      empty_subtitle: string;
      price: string;
      total: string;
      description_unavailable: string;
      shoppingCart: string;

      order_details: string;
      product_quantity: string;
      product_prices: string;
      total_checkout: string;
      checkout: string;
      delivery_info: string;
    };
  };
}

export function BasketRightSection({ dictionary }: DictionaryType) {
  const { items } = useBasketStore();

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="w-full  md:max-w-sm max-w-full border rounded-[4px] p-6 space-y-4 text-gray-800">
      <h2 className="text-lg font-semibold">
        {dictionary.basket.order_details}
      </h2>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>{dictionary.basket.product_quantity}</span>
          <span className="font-semibold">{totalQuantity} шт.</span>
        </div>
        <div className="flex justify-between">
          <span>{dictionary.basket.product_prices}</span>
          <span className="font-semibold">
            {totalPrice.toLocaleString()} USD
          </span>
        </div>
        {/*<div className="flex justify-between">*/}
        {/*    <span>Стоимость доставки</span>*/}
        {/*    <span className="font-semibold">{deliveryFee.toLocaleString()} сум</span>*/}
        {/*</div>*/}
        {/*<div className="flex justify-between">*/}
        {/*    <span>Скидка</span>*/}
        {/*    <span className="font-semibold">{discount.toLocaleString()} сум</span>*/}
        {/*</div>*/}
        <hr />
        <div className="flex justify-between text-lg font-semibold">
          <span>{dictionary.basket.total_checkout}</span>
          <span>{totalPrice.toLocaleString()} USD</span>
        </div>
      </div>

      <Link
        className={cn(buttonVariants({ variant: "default" }), "w-full")}
        href={"/order"}
      >
        {dictionary.basket.checkout}
      </Link>

      {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{dictionary.basket.delivery_info}</span>
            </div> */}
    </div>
  );
}
