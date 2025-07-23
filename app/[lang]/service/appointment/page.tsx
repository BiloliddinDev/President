import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import  images2 from  '@/public/images/souvenir.jpg'
// import ServicesImage from "@/public/images/Bag.jpg";
// import ServicesImage from "@/public/images/services4.png";
import BoutiqueForm from "@/app/[lang]/shops/components/boutique-form/boutique-form";

export default function AppointmentPage() {
    return (
        <div>
            <div className={"container md:!mt-26 !mt-42"}>
                <BreadcrumbDynamic/>
            </div>
            <Image width={1000} height={1000} className={"w-full h-[500px] object-cover mt-10 mb-20"} src={images2}
                   alt={'ServicesImage'}/>

            <div className="container ">
                <div className="w-[590px] flex flex-col justify-start items-start gap-7">
                    <h2 className="self-stretch justify-start text-primary text-lg font-medium  leading-7">
                    Записаться на визит</h2>
                    <p className=" justify-start text-primary text-sm font-medium leading-tight">Оформите предварительную запись в шоурум “President Business
Gifts”, и наш специалист свяжется с вами для организации
персонального визита в удобное для вас время.</p>
                </div>
            </div>

            <div className={"bg-neutral-100 py-7 mt-12"}>
                <div className={'container'}>
                    <div
                        className="self-stretch justify-start text-gray-900 text-lg font-medium font-['Inter'] leading-7">Выберите шоурум
                    </div>
                    <BoutiqueForm/>
                </div>
            </div>
        </div>
    )
}

