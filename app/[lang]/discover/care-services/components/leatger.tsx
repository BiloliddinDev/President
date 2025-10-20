import React, { FC } from "react";
import CustomTabs from "@/components/shared/tabs/custom-tabs";
import InstrumentAccordion from "../components/instrument-accordion";
import {
  services,
  writingInstruments,
} from "@/constants/care-services-leather";

interface LeatherProps {
  dictionary: {
    about: {
      title: string; // e.g. "Наша история"
      subtitle: string; // e.g. "President Business Gifts"
      description: string; // e.g. description paragraph
    };
  };
  lang: "uz" | "ru" | "en" | "tj" | "az";
}

export const Leather: FC<LeatherProps> = ({ dictionary, lang }) => {
  console.log(dictionary);

  const myTabs = [
    {
      value: "care-use",
      label: {
        uz: "Parvarish va foydalanish",
        ru: "Уход и использование",
        en: "Care and Use",
        tj: "Нигоҳубин ва истифода",
        az: "Baxım və istifadə",
      },
      content: <InstrumentAccordion data={writingInstruments} lang={lang} />,
    },
    {
      value: "services",
      label: {
        uz: "Ta'mirlash va kafolat",
        ru: "Ремонт и гарантия",
        en: "Repair and Warranty",
        tj: "Таъмир ва кафолат",
        az: "Təmir və zəmanət",
      },
      content: <InstrumentAccordion data={services} lang={lang} />,
    },
    {
      value: "faq",
      label: {
        uz: "Savol-javoblar",
        ru: "Вопросы и ответы",
        en: "FAQ",
        tj: "Саволу ҷавобҳо",
        az: "Tez-tez verilən suallar",
      },
      content: <></>,
    },
  ];
  

  return <CustomTabs className="!my-7 container" tabs={myTabs} lang={lang}/>;
};

