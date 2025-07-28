import {BreadcrumbDynamic} from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
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
        maintext='В 1858 году Шарль-Иван Робер основал мастерскую ("etablisseur") в деревне Виллере, где он закупал компоненты со всего региона и собирал часы вручную. Позже его дети продолжили семейный бизнес по производству высококлассных часов. По сей день, в той же мануфактуре, изделия Minerva славятся своим мастерством и инновациями. Бренд продолжает часовое наследие мануфактуры, создавая уникальные, вручную собранные и отделанные механизмы.'
        title="Почитание наследия Minerva"
        rightSideTitle="БОЛЕЕ 165 ЛЕТ ИСТОРИИ ЧАСОВОГО ИСКУССТВА"
        imageUrl={first}
      />
      <WatchVsText
        productType="Мастерство"
        description="Эстетическое и техническое совершенство"
        textInfo="От собственных механизмов до особых отделок и традиционных материалов — Minerva, названная в честь богини ремесел, из поколения в поколение передаёт лучшее швейцарское часовое мастерство. Часы Minerva олицетворяют мастерство каждого часовщика, создающего исключительные изделия в духе лучших традиций, чтобы вдохновить на смелые путешествия."
        videoSrc={second}
      />
      <WatchVsText
        reverse
        productType="Инновации"
        description="Механизм, представленный миру"
        textInfo="От собственных механизмов до особых отделок и традиционных материалов — Minerva, названная в честь богини ремесел, из поколения в поколение передаёт лучшее швейцарское часовое мастерство. Часы Minerva олицетворяют мастерство каждого часовщика, создающего исключительные изделия в духе лучших традиций, чтобы вдохновить на смелые путешествия."
        videoSrc={third}
      />
      <CommonWatchSection
        productType="Инновации"
        description="Механизм, представленный миру"
        textInfo="От собственных механизмов до особых отделок и традиционных материалов — Minerva, названная в честь богини ремесел, из поколения в поколение передаёт лучшее швейцарское часовое мастерство. Часы Minerva олицетворяют мастерство каждого часовщика, создающего исключительные изделия в духе лучших традиций, чтобы вдохновить на смелые путешествия."
        videoSrc={"/videos/fin-watching.mp4"}
      />
    </div>
  );
};

export default FineWatchmaking;

