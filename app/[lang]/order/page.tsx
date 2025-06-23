import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import CheckoutForm from "./components/checkout-form";
import { Button } from "@/components/ui/button";
import PaymentMethod from "./components/payment-method";
import OrderSummary from "@/app/[lang]/order/components/order-summary";

export default function OrderPage() {
    return (
        <div>
            <div className={"container md:!mt-26 !mt-42"}>
                <BreadcrumbDynamic/>
                <h2 className="text-primary text-4xl font-medium leading-10 my-5">Checkout</h2>
            </div>
            <div className="container grid md:grid-cols-2 gap-10 my-10">
                <div className="space-y-6">
                    <CheckoutForm />
                    <PaymentMethod />
                    <Button className="w-full">Place Order</Button>
                </div>
                <OrderSummary />
            </div>
        </div>
    )
}