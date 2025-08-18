"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { OrderCardItem } from "../order-item-card/order-item-card";
import { AnimatePresence, motion } from "framer-motion";
import { OrderDataInterface } from "@/interface/order-data/order-data";
import { formatDate } from "@/hooks/format-data";

interface DictionaryProps {
  account: {
    order: {
      title: string;
      emptyMessage: string;
      orderId: string;
      status: string;
      createdAt: string;
      address: string;
      productCount: string;
      total: string;
      hide: string;
      viewMore: string;
      productsSuffix: string;
      viewItem: string;
    };
  };
  detail: { quantity: string };
}

export default function OrderCard({
  orderData,
  dictionary,
  lang,
}: {
  orderData: OrderDataInterface;
  dictionary: DictionaryProps;
  lang?: "uz" | "ru" | "en" | "tj" | "az";
}) {
  const [showAll, setShowAll] = useState(false);

  return (
    <Card className="mx-auto p-4 space-y-4 border border-amber-50 mb-4">
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        {/* Order ID */}
        <p className="text-base font-semibold text-primary">
          {dictionary.account.order.orderId}:{" "}
          <span className="text-primary">{orderData.id}</span>
        </p>

        {/* Status */}
        <div className="flex items-center justify-between">
          <span>{dictionary.account.order.status}</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="w-[90px] p-0" variant="link">
                {orderData.status}
              </Button>
            </TooltipTrigger>
          </Tooltip>
        </div>

        {/* Created */}
        <div className="flex justify-between">
          <span>{dictionary.account.order.createdAt}</span>
          <span>{lang  ? formatDate(orderData.createdAt, lang) : formatDate(orderData.createdAt, "en")}</span>
        </div>

        {/* Address */}
        <div className="flex justify-between">
          <span>{dictionary.account.order.address}</span>
          <span className="font-medium text-right max-w-[60%]">
            {orderData?.address?.location}
          </span>
        </div>

        {/* productCount */}
        <div className="flex justify-between">
          <span>{dictionary.account.order.productCount}</span>
          <span>
            {orderData.items.length} {dictionary.detail.quantity}
          </span>
        </div>

        {/* Total */}
        <div className="flex justify-between font-semibold mb-5 text-black">
          <span>{dictionary.account.order.total} </span>
          <span>{orderData.totalAmount}</span>
        </div>

        {/* Show/hide products */}
        <AnimatePresence initial={false}>
          <motion.div
            key={showAll ? "open" : "closed"}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-200 py-4 space-y-4">
              {orderData.items.map((element, index) => (
                <>
                  {index < 3 && (
                    <OrderCardItem
                      key={index}
                      elementID={element.productId}
                      dictionary={dictionary}
                    />
                  )}
                </>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {orderData.items.length - 3 > 0 && (
          <Button
            variant="outline"
            className="w-full mt-2"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll
              ? dictionary.account.order.hide
              : `${dictionary.account.order.viewMore} (${
                  orderData?.items?.length - 3
                } ${dictionary.account.order.productsSuffix})`}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
