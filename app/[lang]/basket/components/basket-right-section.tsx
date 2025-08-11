"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useBasketStore } from "@/lib/set-basket.storage";
import { getCurrencyCode, getPriceFor } from "@/hooks/price-helpers";
import { formatCurrency } from "@/hooks/formatPrice";

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
    detail: {
      quantity: string;
    };
  };
}

export function BasketRightSection({ dictionary }: DictionaryType) {
  const { items } = useBasketStore();

  // const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  // const totalPrice = items.reduce(
  //   (acc, item) => acc + item.quantity * item.price,
  //   0
  // );

  const code = getCurrencyCode();

  const totalQuantity = items.reduce(
    (acc, item) => acc + (item.quantity ?? 0),
    0
  );

  const subtotal = items.reduce((acc, item) => {
    const row = getPriceFor(item.price, code);
    return acc + (row?.price ?? 0) * (item.quantity ?? 1);
  }, 0);

  const formattedSubtotal = formatCurrency({
    currency: { code } as never,
    price: subtotal,
  });

  return (
    <div className="w-full md:max-w-sm max-w-full border rounded-[4px] p-6 space-y-4 text-gray-800">
      <h2 className="text-lg font-semibold">
        {dictionary.basket.order_details}
      </h2>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>{dictionary.basket.product_quantity}</span>
          <span className="font-semibold">{totalQuantity} {dictionary.detail.quantity}</span>
        </div>

        <div className="flex justify-between">
          <span>{dictionary.basket.product_prices}</span>
          <span className="font-semibold">{formattedSubtotal}</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-semibold">
          <span>{dictionary.basket.total_checkout}:</span>
          <span>{formattedSubtotal}</span>
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
