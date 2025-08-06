import Image from "next/image";
import React from "react";
import Pen from "@/public/images/care-service.webp";
import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import {careServicesItems} from "@/constants/care-services-items";
import Link from "next/link";
import IconComponent from "@/components/icon/icon-view";

const CareAndServices = () => {
    return (
        <div className="relative">
            <div className="container max-w-screen-xl mx-auto px-2 md:px-4 md:!mt-26 !mt-42">
                <div className="mb-10">
                    <BreadcrumbDynamic/>
                </div>
            </div>
            <div className="w-screen">
                <Image
                    src={Pen}
                    alt="a pen"
                    width={2000}
                    height={350}
                    className="w-full  object-cover"
                />
            </div>

            <div className="container max-w-screen-xl mx-auto px-2 md:px-4 md:!mt-26 !mt-42">
                <div className="mt-[100px] mb-[200px]">
                    <h5 className="text-gray-900 text-lg font-medium leading-7 mb-7">
                        Уход за изделиями и сервис
                    </h5>
                    <div className="flex gap-5 justify-between flex-wrap md:flex-nowrap">
                        {careServicesItems.map((item) => (
                            <Link
                                className="block w-full hover:shadow-md"
                                key={item.id}
                                href={`/discover/care-services/${item.serviceType.toLowerCase()}`}
                            >
                                <div
                                    className="px-9 py-7 min-h-[7.25rem] flex items-center justify-between rounded gap-6 outline-1 outline-offset-[-1px] outline-gray-200">
                                    <p className="text-sm font-medium leading-tight">
                                        {item.name}
                                    </p>
                                    <IconComponent name={item.iconName}/>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareAndServices;
