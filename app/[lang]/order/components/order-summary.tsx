"use client";

import { Button } from "@/components/ui/button";
import { useBasketStore } from "@/lib/set-basket.storage";
import { getCurrencyCode, getPriceFor } from "@/hooks/price-helpers";
import { formatCurrency } from "@/hooks/formatPrice";
import { OrderProps } from "./order";

export default function OrderSummary({ dictionary }: OrderProps) {
  const { items } = useBasketStore();

  const code = getCurrencyCode();

  const totalQuantity = items.reduce((acc, item) => acc + (item.quantity ?? 0), 0);

  const subtotal = items.reduce((acc, item) => {
    const row = getPriceFor(item.price as never, code);
    return acc + ((row?.price ?? 0) * (item.quantity ?? 1));
  }, 0);

  const formattedSubtotal = formatCurrency({
    currency: { code } as never,
    price: subtotal,
  });

  return (
    <div className="w-full md:max-w-sm max-w-full border rounded-[4px] p-6 space-y-4 h-[350px] text-gray-800 sticky top-20 right-0">
      <h2 className="text-lg font-semibold">
        {dictionary.order.summary.title}
      </h2>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>{dictionary.order.summary.totalProducts}</span>
          <span className="font-semibold">
            {totalQuantity} {dictionary.order.summary.unit}
          </span>
        </div>

        <div className="flex justify-between">
          <span>{dictionary.order.summary.productPrices}</span>
          <span className="font-semibold">{formattedSubtotal}</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-semibold">
          <span>{dictionary.order.summary.total}</span>
          <span>{formattedSubtotal}</span>
        </div>
      </div>

      <Button variant="default" type="submit" className="w-full">
        {dictionary.order.summary.checkoutButton}
      </Button>
    </div>
  );
}
