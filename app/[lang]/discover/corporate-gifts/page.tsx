import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import CommonHeader from "../components/common-header";
import ImageWithText from "./image-with-text";
import CommonWatchSection from "../components/common-watch";
import { SupportForm } from "@/app/[lang]/(home)/components/support-form";
import { getDictionary } from "@/lib/get-dictionary";
import Corporative1 from "@/public/images/CorporateGifts1.jpg";
import Corporative2 from "@/public/images/CorporateGifts2.jpg";
import Corporative3 from "@/public/images/CorporateGifts3.jpg";
import Corporative4 from "@/public/images/CorporateGifts4.webp";

interface CorporateGiftsPageProps {
  params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az"; category: string }>;
}

export default async function CorporateGifts({ params }: CorporateGiftsPageProps) {
  const CorporateGiftsPageParam = await params;
  const dictionary = await getDictionary(CorporateGiftsPageParam.lang);

  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4  md:!mt-26 !mt-42 ">
      <div className="mb-10">
        <BreadcrumbDynamic />
      </div>

      <CommonHeader
        contentLink
        title={dictionary.corporategifts.headerTitle}
        maintextColor="#0E1422"
        maintext={dictionary.corporategifts.headerText}
      />

      <ImageWithText
        orderText="order-1"
        orderImg="order-2"
        margin="-mr-20"
        imgSrc={Corporative1}
        alt="wallet"
        title={dictionary.corporategifts.block1.title}
        subtitle={dictionary.corporategifts.block1.subtitle}
      />

      <ImageWithText
        orderText="order-2"
        orderImg="order-1"
        margin="-ml-20"
        imgSrc={Corporative2}
        alt="souvenir"
        title={dictionary.corporategifts.block2.title}
        subtitle={dictionary.corporategifts.block2.subtitle}
      />

      <ImageWithText
        orderText="order-1"
        orderImg="order-2"
        margin="-mr-20"
        imgSrc={Corporative3}
        alt="president watch"
        title={dictionary.corporategifts.block3.title}
        subtitle={dictionary.corporategifts.block3.subtitle}
      />

      <CommonWatchSection
        videoSrc={Corporative4}
        description={dictionary.corporategifts.block4.title}
        textInfo={dictionary.corporategifts.block4.subtitle}
      />

      <SupportForm dictionary={dictionary} />
    </div>
  );
}
