import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
// import ServicesImage from "@/public/images/services1.png";
import {ServiceCard} from "@/app/[lang]/shops/components/service-card/service-card";
import {serviceItems} from "@/constants/service";
import Pen from "@/public/images/service.webp";


export default function ServicePage() {


    return (
        <div>
            <div className={"container md:!mt-26 !mt-42"}>
                <BreadcrumbDynamic/>
            </div>
            <Image
                width={"1000"}
                height={330}
                src={Pen.src}
                alt={"ServicesImage"}
                className={"w-full mt-7"}
            />
            <div className={"container !mt-10 !pb-20"}>
                <div className="text-primary text-lg font-medium leading-7 mb-5">
                    {/* Customer Services */}Обслуживание клиентов
                </div>
                <div
                    className={"flex gap-5 justify-between flex-wrap md:flex-nowrap"}
                >
                    {serviceItems.map((service) => (
                        <ServiceCard
                            key={service.id}
                            text={service.text}
                            iconName={service.iconName}
                            link={service.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
