import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import React from "react";
import boutiqueImg from "@/public/images/location.jpg";
import IconComponent from "@/components/icon/icon-view";
import { contactInfo } from "@/constants/discover-items";
import DiscoverMap from "@/app/[lang]/location/components/discover-map";
import { getDictionary } from "@/lib/get-dictionary";

interface LocationProps {
  params: Promise<{
    lang: "uz" | "ru" | "en" | "tj" | "az";
    news: string;
  }>;
}

export default async function DiscoverLocation({ params }: LocationProps) {
  const param = await params.then((params) => params);
  const dictionary = await getDictionary(param.lang);

  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4  md:!mt-26 !mt-42">
      <div className="py-4 md:py-8">
        <BreadcrumbDynamic />
      </div>

      <div className="flex justify-between items-center gap-36 mb-32">
        <div data-aos="fade-up" className="max-w-[553px]">
          <p className="text-lg font-medium mb-5">President Business Gifts</p>

          <p className="text-zinc-600 font-sm font-medium whitespace-pre-line">
            {dictionary.corporategifts.desc}
          </p>
        </div>

        <div>
          <Image
            className="w-[500px] h-[500px] rounded object-cover"
            src={boutiqueImg}
            alt="бутик"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
          />
        </div>
      </div>

      <div className="-mx-[calc((100vw-100%)/2)] w-screen bg-neutral-100 flex items-center justify-center gap-20 py-5 overflow-hidden">
        {contactInfo.map((item, index) => (
          <a
            data-aos="fade-up"
            data-aos-delay={`${index * 300}`}
            target="_blank"
            key={item.id}
            className="block"
            href={item.href}
          >
            <div className="flex gap-4">
              <IconComponent
                name={item.icon}
                className="text-gray-500 hover:text-red-400"
              />
              <div className="leading-tight">
                <p className="text-sm font-medium">{item.title[param.lang]}</p>
                <p className="text-zinc-500 text-sm font-medium">
                  {item.subtitle[param.lang]}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <section className="mb-48">
        <DiscoverMap lang={param.lang} />
      </section>
    </div>
  );
}
