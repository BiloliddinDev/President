"use client";

import { AccountTitle } from "@/app/[lang]/account/account-title/account-title";
import OrderCard from "@/app/[lang]/account/components/order-card/order-card";
import { useEffect, useState } from "react";
import { UserOrderService } from "@/service/order.service/user-order.service";
import { useSession } from "next-auth/react";
import { OrderDataInterface } from "@/interface/order-data/order-data";
import { AccountProps } from "../account";

interface OrderInterface {
  content: OrderDataInterface[];
  first: boolean;
  last: boolean;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}



export default function OrderPage({ dictionary,lang }: AccountProps) {
  const [orderData, setOrderData] = useState<OrderInterface>();
  const { data: session } = useSession();

  useEffect(() => {
    const fetchLang = async () => {
      const data = await UserOrderService(session?.user.serverData?.id);
      setOrderData(data);
    };
    fetchLang().then().catch().finally();
  }, [session?.user.serverData?.id]);

  return (
    <div>
      <AccountTitle text={dictionary.account.order.title} />

      {(!orderData?.content || orderData.content.length === 0) && (
        <p className="text-primary text-sm font-medium leading-tight mt-3">
          {dictionary.account.order.emptyMessage}
        </p>
      )}

      <div className={"mt-10"}>
        {orderData?.content?.map((item: OrderDataInterface) => (
          <OrderCard key={item.id} orderData={item} dictionary={dictionary} lang={lang}/>
        ))}
      </div>
    </div>
  );
}
