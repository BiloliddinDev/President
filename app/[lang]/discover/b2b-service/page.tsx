import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Link from "next/link";
import {B2bCard} from "@/app/[lang]/discover/components/b2b-card/b2b-card";

export default function B2BPage() {
    return (
        <div className={"container !mt-21"}>
            <BreadcrumbDynamic/>
            <div className={"flex justify-between items-center mt-16 "}>
                <h2 className={"text-lg whitespace-pre-wrap"}>President Business Gifts B2B</h2>
                <div className={"w-1/2"}>
                    <p className={"text-sm mb-5"}>Corporate gifts are the perfect opportunity to show appreciation,
                        reward
                        trust or foster
                        encouragement for any business occasion.</p>
                    <Link className={"underline "} href={"#"}>Contact us for enquiries</Link>
                </div>
            </div>

            <div>
                <B2bCard className={"mt-[100px]"}/>
                <B2bCard className={"mt-[100px]"}/>
                <B2bCard className={"mt-[100px]"}/>
            </div>
        </div>
    )
}