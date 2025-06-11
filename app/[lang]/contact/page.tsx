import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import ServicesImage from "@/public/images/services5.png";
import FaqsForm from "@/app/[lang]/shops/components/faqs-form/faqs-form";

export default function FaqsPage() {
    return (
        <div>
            <div className={"container !mt-32"}>
                <BreadcrumbDynamic/>
            </div>
            <Image width={1000} height={330} className={"w-full h-[330px] object-cover mt-8 mb-20"} src={ServicesImage}
                   alt={'ServicesImage'}/>

            <div className="container ">
                <div className="w-[590px] flex flex-col justify-start items-start gap-7">
                    <h2 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">Contact
                        us</h2>
                    <p className=" justify-start text-primary text-sm font-medium leading-tight">Book an appointment now
                        Need some help? You can reach out to us by filling out the contact form below. For immediate
                        answers please check our helpful FAQs or our Product Care Guide. You can track your order here
                        and your return here.</p>
                </div>
            </div>

            <div className={"bg-neutral-100 py-7 mt-12"}>
                <div className={'container'}>
                    <div
                        className="self-stretch justify-start text-gray-900 text-lg font-medium font-['Inter'] leading-7">Select
                        a boutique
                    </div>
                    <FaqsForm/>
                </div>
            </div>
        </div>
    )
}
