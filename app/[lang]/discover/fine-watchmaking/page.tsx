import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import WatchVsText from "./components/watch-text";
import CommonWatchSection from "../components/common-watch";
import CommonHeader from "../components/common-header";
import first from "@/public/images/fine-watchmaking1.webp";
import second from "@/public/images/fine-watchmaking2.webp";
import third from "@/public/images/fine-watchmaking3.webp";
import { getDictionary } from "@/lib/get-dictionary";

interface FineWatchmakingProps {
  params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az" }>;
}

export default async function FineWatchmaking({ params }: FineWatchmakingProps) {
  const param = await params;
  const dictionary = await getDictionary(param.lang);
  const t = dictionary.finewatch;

  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4  md:!mt-26 !mt-42">
      <div className="mb-10">
        <BreadcrumbDynamic />
      </div>
      <CommonHeader
        maintextColor="#474B57"
        maintext={t.maintext}
        title={t.title}
        rightSideTitle={t.rightSideTitle}
        imageUrl={first}
      />
      <WatchVsText
        productType={t.craftsmanship.productType}
        description={t.craftsmanship.description}
        textInfo={t.craftsmanship.textInfo}
        videoSrc={second}
      />
      <WatchVsText
        reverse
        productType={t.engineering.productType}
        description={t.engineering.description}
        textInfo={t.engineering.textInfo}
        videoSrc={third}
      />
      <CommonWatchSection
        productType={t.innovation.productType}
        description={t.innovation.description}
        textInfo={t.innovation.textInfo}
        videoSrc="/videos/fin-watching.mp4"
      />
    </div>
  );
}
