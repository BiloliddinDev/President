import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Link from "next/link";
import image1 from '@/public/images/b2b-image1.png'
import image2 from '@/public/images/b2b-image2.png'
import image3 from '@/public/images/b2b-image3.png'
import {B2bCard} from "@/app/[lang]/discover/components/b2b-card/b2b-card";


export default function B2BPage() {
    return (
        <div className={"container md:!mt-26 !mt-42"}>
            <BreadcrumbDynamic/>
            <div className={"md:flex  justify-between flex-col  mt-10 "}>
                <h2 className={"text-lg whitespace-pre-wrap mb-5"}>President Business Gifts B2B</h2>
                <div className={"md:w-1/2 w-full"}>
                    <p className={"text-sm mb-5"}>Corporate gifts are the perfect opportunity to show appreciation,
                        reward
                        trust or foster
                        encouragement for any business occasion.</p>
                    <Link className={"underline "} href={"#"}>Contact us for enquiries</Link>
                </div>
            </div>

            <div>
                <B2bCard
                    top={{base: 140, md: 210, lg: 190}}
                    right={{base: 150, md: 240, lg: 230}}
                    size={45}
                    image={image2}
                    className="mt-[100px] flex-col lg:flex-row gap-10"
                />
                <B2bCard
                    top={{base: 150, md: 200, lg: 180}}
                    right={{base: 90, md: 180, lg: 185}}
                    size={70}
                    image={image1}
                    className="mt-[100px] flex-col lg:flex-row-reverse gap-10"
                />
                <B2bCard
                    top={{base: 86, md: 135, lg: 130}}
                    right={{base: 142, md: 235, lg: 235}}
                    size={30}
                    image={image3}
                    className="mt-[100px] flex-col lg:flex-row gap-10"
                />

            </div>
        </div>
    )
}