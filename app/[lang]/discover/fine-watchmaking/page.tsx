import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import WatchVsText from "./components/watch-text";
import CommonWatchSection from "../components/common-watch";
import CommonHeader from "../components/common-header";
import first from "@/public/images/fine-watchmaking1.webp";
import second from "@/public/images/fine-watchmaking2.webp";
import third from "@/public/images/fine-watchmaking3.webp";

const FineWatchmaking = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4  md:!mt-26 !mt-42">
      <div className="mb-10">
        <BreadcrumbDynamic />
      </div>
      <CommonHeader
        maintextColor="#474B57"
        maintext="В President Business Gifts мы создаём не просто подарки — мы создаём ценности. Каждое изделие проходит путь от идеи до идеального исполнения под контролем нашей команды. 
Мы самостоятельно разрабатываем дизайн, подбираем материалы премиального уровня и контролируем каждый этап производства."
        title="Почитание наследия Minerva"
        rightSideTitle="Мастерство в каждой детали"
        imageUrl={first}
      />
      <WatchVsText
        productType="Мастерство"
        description="Эстетическое и техническое совершенство"
        textInfo="Наши часы оснащаются точнейшими японскими и швейцарскими механизмами, а для кожаных изделий мы используем только отборную натуральную кожу с высоким индексом износостойкости. Каждый шов, каждая гравировка, каждая деталь проходит ручную доработку, чтобы финальный продукт стал отражением качества, престижа и уважения."
        videoSrc={second}
      />
      <WatchVsText
        reverse
        productType="Инженерия"
        description="Механизм, представленный миру"
        textInfo="Мы заказываем детали у проверенных поставщиков, но весь процесс сборки, брендирования и упаковки проходит по нашим уникальным стандартам. Это — продукт, созданный нами, под наш бренд и с нашим контролем качества. В результате — изделия, которые становятся визитной карточкой вашего внимания и вкуса."
        videoSrc={third}
      />
      <CommonWatchSection
        productType="Инновации"
        description="Высокие технологии — в каждой детали"
        textInfo="Мы применяем современные технологии обработки, тестирования и брендирования, чтобы каждая вещь была не просто красивой, но и долговечной. Благодаря точной инженерии, интеграции новых решений и дизайнерской экспертизе — вы получаете продукт, в котором сочетаются традиции, стиль и технологичность."
        videoSrc={"/videos/fin-watching.mp4"}
      />
    </div>
  );
};

export default FineWatchmaking;
