"use client";

import {useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Tooltip, TooltipTrigger,} from "@/components/ui/tooltip";
import {OrderCardItem} from "../order-item-card/order-item-card";
import {AnimatePresence, motion} from "framer-motion";
import {OrderDataInterface} from "@/interface/order-data/order-data";
import {formatDate} from "@/hooks/format-data";

export default function OrderCard({orderData}: { orderData: OrderDataInterface }) {
    const [showAll, setShowAll] = useState(false);

    return (
        <Card className="mx-auto p-4 space-y-4 border border-amber-50 mb-4">
            <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p className="text-base font-semibold text-primary">
                    Order ID: <span className="text-primary">{orderData.id}</span>
                </p>

                <div className="flex items-center justify-between">
                    <span>Статус заказа</span>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button className={"w-[90px] p-0"} variant="link">
                                {orderData.status}
                            </Button>
                        </TooltipTrigger>
                    </Tooltip>
                </div>

                <div className="flex justify-between">
                    <span>Заказ создан</span>
                    <span>{formatDate(orderData.createdAt, "ru")}</span>
                </div>

                <div className="flex justify-between">
                    <span>Адрес</span>
                    <span className="font-medium text-right max-w-[60%]">{orderData?.address?.location}</span>
                </div>

                <div className="flex justify-between">
                    <span>Количество товара</span>
                    <span>{orderData.items.length} шт.</span>
                </div>

                <div className="flex justify-between font-semibold mb-5 text-black">
                    <span>Итого:</span>
                    <span>{orderData.totalAmount}</span>
                </div>

                <AnimatePresence initial={false}>
                    <motion.div
                        key={showAll ? "open" : "closed"}
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        className="overflow-hidden"
                    >
                        <div className="border-t border-gray-200 py-4 space-y-4">
                            {orderData.items.map((element, index) => (
                                <OrderCardItem key={index} elementID={element.productId}/>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <Button
                    variant="outline"
                    className="w-full mt-2"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll
                        ? "Скрыть"
                        : `Посмотреть ещё (${orderData?.items?.length - 1} продукты)`}
                </Button>
            </CardContent>
        </Card>
    );
}
