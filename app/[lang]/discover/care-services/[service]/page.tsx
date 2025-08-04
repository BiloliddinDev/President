import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import leather from "@/public/images/care-leather.webp";
import watch from "@/public/images/care-watch.webp";
import writing from "@/public/images/care-writing.webp";
import Image from "next/image";
import Writing from "../components/writing";
import Leather from "../components/leatger";
import Watches from "../components/watches";

interface ServiceProps {
    params: Promise<{
        service: string
    }>
}

export default async function DiscoverService({params}: ServiceProps) {
    const service: { service: string } = await params;

    let imageSrc = writing;
    if (service.service === "leather") {
        imageSrc = leather;
    } else if (service.service === "watches") {
        imageSrc = watch;
    }


    return (
        <div className="container mx-auto px-2 md:px-4  md:!mt-26 !mt-42">
            <div className="mb-10">
                <BreadcrumbDynamic/>
            </div>
            <div className="-mx-[calc((100vw-100%)/2)] w-screen mb-28">
                <Image src={imageSrc} alt="a pen" width={10000} height={1000}/>
            </div>
            <p className="text-lg font-medium">{imageSrc == writing ? "Письменный инструмент" : imageSrc == leather ? "Кожа" : "Часы"}</p>

            {imageSrc == writing ? <Writing/> : imageSrc == leather ? <Leather/> : <Watches/>}
        </div>
    );
};

