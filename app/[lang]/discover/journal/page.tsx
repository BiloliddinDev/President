import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import Catalog from "../components/catalog";
import {SectionTitle} from "@/components/ui/sectionTitle";
const JournalPage = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4  md:!mt-26 !mt-42 ">
      <div className="mb-10">
        <BreadcrumbDynamic />
          
         <div className={"mt-10"}>
             <SectionTitle text={"Journal"}/>
             <p className={"text-primary text-sm max-w-2xl mt-5"}>
              {/* President Business Gifts is not just a premium gift brand — it is a unique fusion of national identity and contemporary aesthetics. Inspired by the historical heritage, cultural richness, and artisanal traditions of the Uzbek people, we blend them seamlessly with modern design and the highest standards of quality. */}
              President Business Gifts — это не просто бренд премиальных подарков, а уникальное сочетание национальной идентичности и совремённой эстетики. Вдохновляясь историческим наследием, культурным богатством и ремесленными традициями узбекского народа, мы гармонично объединяем их с современным дизайном и высочайшими стандартами качества.
             </p>
         </div>
      </div>

      <div className="mt-16 mb-20">
        <Catalog />
      </div>
    </div>
  );
};

export default JournalPage;
