import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import Catalog from "../catalog/catalog";
const JournalPage = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4 mt-16 md:!mt-20">
      <div className="py-4 md:py-8">
        <BreadcrumbDynamic />
      </div>

      <div className="mt-16 mb-48">
        <Catalog />
      </div>
    </div>
  );
};

export default JournalPage;
