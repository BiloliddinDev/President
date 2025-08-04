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
  params: Promise<{ lang: "uz" | "ru" | "en"; category: string }>;
}

export default async function CorporateGifts({
  params,
}: CorporateGiftsPageProps) {
  const CorporateGiftsPageParam: {
    lang: "uz" | "ru" | "en";
    category: string;
  } = await params;

  const dictionary = await getDictionary(CorporateGiftsPageParam.lang);
  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4  md:!mt-26 !mt-42 ">
      <div className="mb-10">
        <BreadcrumbDynamic />
      </div>
      <CommonHeader
        contentLink
        title="Искусство корпоративного подарка"
        maintextColor="#0E1422"
        maintext="Корпоративные подарки с логотипом компании — это не просто формальность. Это мощный инструмент деловой коммуникации и укрепления имиджа. В President Business Gift мы создаём подарки для бизнесменов, руководителей и корпоративных клиентов, которые выражают уважение, внимание и статус от лица вашей компании."
      />
      <ImageWithText
        orderText="order-1"
        orderImg="order-2"
        margin="-mr-20"
        imgSrc={Corporative1}
        alt="wallet"
        title="Подарки с фирменным стилем вашей компании"
        subtitle={`<ul>
                <li>Наручные часы с логотипом вашей организации или гербом</li>
                <li>Кожаные изделия (портмоне, клатчи, визитницы, сумки) с тиснением логотипа</li>
                <li>Персонализированные блокноты и ручки с гравировкой</li>
                <li>Подарочные наборы для руководителей и VIP-гостей</li>
                <li>Плакеты и сувенирные изделия с национальной символикой</li>
              </ul>
              `}
      />
      <ImageWithText
        orderText="order-2"
        orderImg="order-1"
        margin="-ml-20"
        imgSrc={Corporative2}
        alt="souviner"
        title="Индивидуальный подход и персонализация"
        subtitle="Каждое изделие можно адаптировать под ваш фирменный стиль. Мы используем технологии лазерной гравировки, тиснения и золочения. Это придаёт подарку эксклюзивность и делает его личным. Корпоративные подарки с индивидуальным дизайном — это знак особого внимания к вашим партнёрам, клиентам или сотрудникам."
      />
      <ImageWithText
        orderText="order-1"
        orderImg="order-2"
        margin="-mr-20"
        imgSrc={Corporative3}
        alt="president watch"
        title="Когда дарить корпоративные подарки?"
        subtitle={`<ul>
  <li>На юбилеи компании</li>
  <li>По итогам успешной сделки</li>
  <li>На государственные и национальные праздники</li>
  <li>Для мотивации сотрудников и ключевых клиентов</li>
  <li>В честь назначений, награждений и переходов на новую должность</li>
</ul>`}
      />
      <CommonWatchSection
        videoSrc={Corporative4}
        description="Почему выбирают President Business Gift?"
        textInfo={`<ul>
  <li>Более 8 лет опыта в премиум-сегменте B2B-подарков</li>
  <li>Надёжный партнёр для банков, госструктур, крупных корпораций</li>
  <li>Доставка по всей Центральной Азии и индивидуальное сопровождение</li>
  <li>Производство по европейским технологиям и высокий контроль качества</li>
  <li>Подарки, которые вызывают восхищение, уважение и доверие</li>
</ul>
`}
      />
      <SupportForm dictionary={dictionary} />
    </div>
  );
}
