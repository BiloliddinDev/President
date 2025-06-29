import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import OrderSummary from "@/app/[lang]/order/components/order-summary";
import {DeliveryMethod} from "@/app/[lang]/order/components/delivery-method";

export default function OrderPage() {


    return (
        <div>
            <div className={"container md:!mt-26 !mt-42"}>
                <BreadcrumbDynamic/>
                <h2 className="text-primary text-4xl font-medium leading-10 my-5">Checkout</h2>
                <h3 className="text-primary text-2xl font-medium leading-10 my-3">Оформить заказ ID: 3213321321</h3>
                <p className=" text-gray-500 text-base font-medium leading-tight tracking-tight ">Создано 26 октября 2024 г. в 1:48</p>
            </div>
            <div className="container  flex justify-between gap-10 !mt-5">
                <div className={'w-full'}>
                    <DeliveryMethod/>
                </div>
                <OrderSummary/>
            </div>
        </div>
    )
}