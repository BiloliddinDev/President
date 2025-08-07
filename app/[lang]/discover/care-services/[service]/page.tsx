import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import leather from "@/public/images/care-leather.webp";
import watch from "@/public/images/care-watch.webp";
import writing from "@/public/images/care-writing.webp";
import Image from "next/image";
import {Leather} from "../components/leatger";
import {Watches} from "../components/watches";
import { getDictionary } from "@/lib/get-dictionary";
import { Writing } from "../components/writing";

interface DiscoverServiceProps {
  params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az"; service: string }>;
}

export default async function DiscoverService({
  params,
}: DiscoverServiceProps) {
  const param = await params;
  const dictionary = await getDictionary(param.lang);
  const t = dictionary.careServices;

  const serviceName = param.service === "writing%20instrument" ? "writing" :param.service ; // "writing", "leather", "watches"
  console.log(serviceName);
  let imageSrc = writing;
  if (serviceName === "leather") {
    imageSrc = leather;
  } else if (serviceName === "watches") {
    imageSrc = watch;
  }

  return (
    <div className="container mx-auto px-2 md:px-4  md:!mt-26 !mt-42">
      <div className="mb-10">
        <BreadcrumbDynamic url={t[serviceName as keyof typeof t]} />
      </div>
      <div className="-mx-[calc((100vw-100%)/2)] w-screen mb-28">
        <Image src={imageSrc} alt={t[serviceName as keyof typeof t]} width={10000} height={1000} />
      </div>
      <p className="text-lg font-medium">{t[serviceName as keyof typeof t]}</p>

      {serviceName === "writing" ? (
        <Writing lang={param.lang} dictionary={dictionary}/>
      ) : serviceName === "leather" ? (
        <Leather lang={param.lang} dictionary={dictionary}/>
      ) : (
        <Watches lang={param.lang} dictionary={dictionary}/>
      )}
    </div>
  );
}
