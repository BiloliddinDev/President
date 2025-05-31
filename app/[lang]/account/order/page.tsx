import {AccountTitle} from "@/app/[lang]/account/account-title/account-title";
import {OrderCard} from "@/app/[lang]/account/components/order-card/order-card";

export default function OrderPage() {
    return (
        <div>
            <AccountTitle text={"My Orders"}/>

            <p className="text-primary text-sm font-medium leading-tight mt-3">You have not previously ordered as a registered user.</p>
            <div className={'mt-10'}>
                <OrderCard/>
            </div>
        </div>
    )
}