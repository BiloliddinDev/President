import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import React from "react";
import boutiqueImg from "@/public/images/boutique.jpg";
import IconComponent from "@/components/icon/icon-view";
import {contactInfo} from "@/constants/discover-items";
import DiscoverMap from "@/app/[lang]/location/components/discover-map";

const DiscoverLocation = () => {
    return (
        <div className="container max-w-screen-xl mx-auto px-2 md:px-4 mt-16  md:!mt-20">
            <div className="py-4 md:py-8">
                <BreadcrumbDynamic/>
            </div>
            <div className="flex justify-between items-center gap-36 mb-32">
                <div className="max-w-[553px]">
                    <p className="text-lg font-medium mb-5">President Business Gifts</p>
                    <p className="text-zinc-600 font-sm font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div>
                    <Image
                        className="w-[500px] h-[500px] rounded"
                        src={boutiqueImg}
                        alt="a boutique"
                    />
                </div>
            </div>
            <div
                className="-mx-[calc((100vw-100%)/2)] w-screen bg-neutral-100 flex items-center justify-center gap-20 py-5">
                {contactInfo.map((item) => (
                    <a target="_blank" key={item.id} className="block" href={item.href}>
                        <div className="flex gap-4">
                            <IconComponent
                                name={item.icon}
                                className="text-gray-500 hover:text-red-400"
                            />
                            <div className="leading-tight">
                                <p className="text-sm font-medium">{item.title}</p>
                                <p className="text-zinc-500 text-sm font-medium">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <section className="mb-48">
                <DiscoverMap/>
            </section>
        </div>
    );
};

export default DiscoverLocation;
