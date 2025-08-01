"use client"

import {AccountTitle} from "@/app/[lang]/account/account-title/account-title";
import {OrderCard} from "@/app/[lang]/account/components/order-card/order-card";
import {useEffect, useState} from "react";
import {UserOrderService} from "@/service/order.service/user-order.service";
import {useSession} from "next-auth/react";

export default function OrderPage() {
    const [orderData, setOrderData] = useState()
    const {data: session,} = useSession();

    useEffect(() => {

        const fetchLang = async () => {
            const data = await UserOrderService(session?.user.serverData?.id);
            setOrderData(data);
        };
        fetchLang().then().catch().finally();

    }, [])

    console.log(orderData, "<=== this is order data")

    return (
        <div>
            <AccountTitle text={"Мои заказы"}/>
        
            <p className="text-primary text-sm font-medium leading-tight mt-3">Вы ранее не делали заказ как
            зарегистрированный пользователь.</p>

            <div className={'mt-10'}>
                <OrderCard/>
            </div>
        </div>
    )
}