import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import ServicesImage from "@/public/images/services4.png";
import BoutiqueForm from "@/app/[lang]/shops/components/boutique-form/boutique-form";

export default function AppointmentPage() {
    return (
        <div>
            <div className={"container !mt-22"}>
                <BreadcrumbDynamic/>
            </div>
            <Image width={1000} height={330} className={"w-full h-[330px] object-cover mt-8 mb-20"} src={ServicesImage}
                   alt={'ServicesImage'}/>

            <div className="container ">
                <div className="w-[590px] flex flex-col justify-start items-start gap-7">
                    <h2 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">Book an
                        appointment </h2>
                    <p className=" justify-start text-primary text-sm font-medium leading-tight">Book an appointment now
                        at a Montblanc boutique and our staff will get in touch to arrange your personal visit to your
                        preferred boutique.</p>
                </div>
            </div>

            <div className={"bg-neutral-100 py-7 mt-12"}>
                <div className={'container'}>
                    <div
                        className="self-stretch justify-start text-gray-900 text-lg font-medium font-['Inter'] leading-7">Select
                        a boutique
                    </div>
                    <BoutiqueForm/>
                </div>
            </div>
        </div>
    )
}

