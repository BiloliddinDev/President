import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import Image from "next/image";
import { ServiceCard } from "@/app/[lang]/shops/components/service-card/service-card";
import { serviceItems } from "@/constants/service";
import Pen from "@/public/images/service.webp";
import { getDictionary } from "@/lib/get-dictionary";

interface NewsPageProps {
  params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az" }>;
}

export default async function ServicePage({ params }: NewsPageProps) {
  const News = await params.then((params) => params);
  const dictionary = await getDictionary(News.lang);
  const lang = News.lang;
  return (
    <div>
      <div className={"container md:!mt-26 !mt-42"}>
        <BreadcrumbDynamic />
      </div>
      <Image
        width={"1000"}
        height={330}
        src={Pen.src}
        alt={"ServicesImage"}
        className={"w-full mt-7"}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="0"
        data-aos-offset="0"
      />
      <div className={"container !mt-10 !pb-20"}>
        <div className="text-primary text-lg font-medium leading-7 mb-5">
          {dictionary.service.title}
        </div>
        <div className={"flex gap-5 justify-between flex-wrap md:flex-nowrap"}>
          {serviceItems.map((service) => (
            <ServiceCard
              key={service.id}
              text={service.text[lang]}
              iconName={service.iconName}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
