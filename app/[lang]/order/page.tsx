'use client'

import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import AddressForm from "@/app/[lang]/order/components/delivery-method";
import OrderSummary from "@/app/[lang]/order/components/order-summary";
import {OrderFormData, OrderSchema} from "@/interface/order-schema/order-schema";
import CheckoutForm from "@/app/[lang]/order/components/checkout-form";
import OrderedProducts from "@/app/[lang]/order/components/order-produc-list";
import {useBasketStore} from "@/lib/set-basket.storage";
import OrderSuccessModal from "@/components/shared/order-modal/Order-success-modal";
import {useState} from "react";

export default function OrderPage() {
    const {items} = useBasketStore();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const methods = useForm<OrderFormData>({
        resolver: zodResolver(OrderSchema),
        defaultValues: {
            address: {
                text: "",
                location: {
                    lat: 41.3,
                    lng: 69.2,
                },
            },
            userInformation: {
                name: "",
                secondment: "",
                phone: "",
                secondPhone: "",
            },
        }
    });

    const onSubmit = (data: OrderFormData) => {
        console.log('All form data:', data, items);
        setIsModalOpen(true);
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
                    <div className="container flex flex-col-reverse md:flex-row justify-between gap-10 !mt-5">
                        <div className={'w-full'}>
                            <AddressForm/>
                            <OrderedProducts products={items}/>
                            <CheckoutForm/>
                        </div>
                        <OrderSummary/>
                    </div>
                </form>
            </FormProvider>

            <OrderSuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </div>
    );
}
