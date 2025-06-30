'use client'

import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import AddressForm from "@/app/[lang]/order/components/delivery-method";
import OrderSummary from "@/app/[lang]/order/components/order-summary";
import {OrderFormData, OrderSchema} from "@/interface/order-schema/order-schema";


export default function OrderPage() {
    const methods = useForm<OrderFormData>({
        resolver: zodResolver(OrderSchema),
        defaultValues: {
            address: "",
        }
    });

    const onSubmit = (data: OrderFormData) => {
        console.log('All form data:', data);
    };

    return (
        <div>
            <div className={"container md:!mt-26 !mt-42"}>
                <BreadcrumbDynamic/>
                <h2 className="text-primary text-4xl font-medium leading-10 my-5">Checkout</h2>
                <h3 className="text-primary text-2xl font-medium leading-10 my-3">Оформить заказ ID: 3213321321</h3>
                <p className="text-gray-500 text-base font-medium leading-tight tracking-tight">
                    Создано 26 октября 2024 г. в 1:48
                </p>
            </div>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="container flex justify-between gap-10 !mt-5">
                        <div className={'w-full'}>
                            <AddressForm/>
                        </div>
                        <OrderSummary/>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}