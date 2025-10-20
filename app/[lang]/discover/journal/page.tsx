import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import Catalog from "../components/catalog";
import { SectionTitle } from "@/components/ui/sectionTitle";
import { getDictionary } from "@/lib/get-dictionary";

interface JournalPageProps {
  params: Promise<{ lang: "uz" | "ru" | "en" | "tj" | "az" }>;
}

export default async function JournalPage({ params }: JournalPageProps) {
  const param = await params;
  const dictionary = await getDictionary(param.lang);

  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4 md:!mt-26 !mt-42 overflow-hidden">
      <div className="mb-10">
        <BreadcrumbDynamic />

        <div data-aos="fade-up" className="mt-10">
          <SectionTitle text={dictionary.catalog.title} />
          <p className="text-primary text-sm max-w-2xl mt-5 ">
            {dictionary.catalog.description}
        </p>
        </div>
      </div>

      <div
        className="mt-16 mb-20 relative lg:h-[90vh] h-[50vh]"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="0"
        data-aos-offset="0"
        
      >
        <p className="lg:block hidden text-primary text-sm max-w-2xl mt-5 absolute top-[30%] left-0 h-[10%] w-[90%] lg:w-[35%]">
          {dictionary.catalog.aboutJournalDesc1} <br />
          {dictionary.catalog.aboutJournalDesc2} <br />
          {dictionary.catalog.aboutJournalDesc3} <br />
          {dictionary.catalog.aboutJournalDesc4} 
        </p>
        <Catalog />
        <p className=" lg:block hidden text-primary text-sm max-w-2xl mt-5 absolute top-[35%] right-28 h-[10%] w-[90%] lg:w-[35%] textcenter">
          {dictionary.catalog.aboutJournalDesc4} 
        </p>
        {/* <Catalog fileUrl="@/public/images/Каталог продукции PBG 2025-2026.pdf" /> */}
      </div>
      <a href="public/pdf/journal1.pdf" className="underline" download={"juornal.pdf"}>{dictionary.catalog.download}</a>
      {/* <div>
        <h2>Ushbu jurnalni o'zingiz uchun yuklab olishingiz mumkin!</h2><br />
        <a href="public/images/Journal.jpg" download={"juornal.jpg"} className="underline cursor-pointer">Yuklab olish</a>
      </div> */}
    </div>
  );
}
