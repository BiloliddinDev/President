    import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
    import React from "react";
    import Pen2 from "@/public/images/service-faqs.webp";
    import Image from "next/image";
    import CustomTabs from "@/components/shared/tabs/custom-tabs";
    import InstrumentAccordion from "./components/instrument-accordion";
    import {
    writingInstruments,
    WritingMode,
    repair,
    } from "@/constants/care-services-faqs";

    interface NewsPageProps {
    params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az" }>;
    }
        
    export default async function DiscoverService({ params }: NewsPageProps) {
    const News = await params.then((params) => params);
    // const dictionary = await getDictionary(News.lang);
    const lang = News.lang;
    const myTabs = [
        {
          value: "allinfo",
          label: {
            uz: "Umumiy ma'lumot",
            ru: "Общая информация",
            en: "General Information",
            tj: "Маълумоти умумӣ",
            az: "Ümumi məlumat"
          },
          content: <InstrumentAccordion data={writingInstruments} lang={lang} />,
        },
        {
          value: "my-account",
          label: {
            uz: "Mening akkauntim va buyurtmalarim",
            ru: "Мой аккаунт и заказы",
            en: "My Account and Orders",
            tj: "Ҳисоби ман ва фармоишҳо",
            az: "Hesabım və sifarişlərim"
          },
          content: <InstrumentAccordion data={WritingMode} lang={lang} />,
        },
        // {
        //   value: "consulting",
        //   label: {
        //     uz: "Maslahatlar va mahsulotlarni ta'mirlash",
        //     ru: "Консультации и ремонт по товарам",
        //     en: "Consulting and Product Repair",
        //     tj: "Маслиҳат ва таъмири молҳо",
        //     az: "Məsləhət və məhsul təmiri"
        //   },
        //   content: <InstrumentAccordion data={services} />,
        // },
        {
          value: "cancel",
          label: {
            uz: "Qaytarish va toʻlov",
            ru: "Возврат и оплата",
            en: "Returns and Payment",
            tj: "Бозгардонӣ ва пардохт",
            az: "Qaytarılma və ödəniş"
          },
          content: <InstrumentAccordion data={repair} lang={lang} />,
        },
      ];
      

    return (
        <div className="container md:!mt-26 !mt-42">
        <div className={"container !mt-15"}>
            <BreadcrumbDynamic />
        </div>
        <div className="-mx-[calc((100vw-100%)/2)] mt-10 w-screen mb-28">
            <Image
            src={Pen2}
            alt="a pen"
            width={1000}
            height={350}
            className="h-[400px] w-full"
            />
        </div>
        <p className="text-lg font-medium">Часто задаваемые вопросы</p>

        <CustomTabs className="my-7" tabs={myTabs} lang={lang}/>
        </div>
    ); 
    }
