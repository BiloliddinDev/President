import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import WatchVsText from "./components/watch-text";
import CommonWatchSection from "../components/common-watch";
const FineWatchmaking = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4 mt-16 md:!mt-20">
      <div className="py-4 md:py-8">
        <BreadcrumbDynamic />
      </div>
      <div className="flex flex-wrap justify-between mb-24">
        <p className="text-lg font-medium">Celebrating the minerva legacy</p>
        <div className="max-w-[582px]">
          <p className="font-medium mb-4">
            HONOURING OVER 165 YEARS OF WATCHMAKING HISTORY
          </p>
          <p className="text-sm text-gray-[#474B57]">
            In 1858, Charles-Ivan Robert set up as an &quot;etablisseur&quot; in
            the village of Villeret, where he bought components from all over
            the region and assembled them by hand. His children later took over
            the family-run Manufacture de Haute Horlogerie business. To this
            day, in the same manufacture, Minerva timepieces have been
            celebrated for their commitment to craftsmanship and innovation. The
            Maison continues the Manufacture&apos;s watchmaking legacy with our
            unique, handmade, and hand-finished calibres.
          </p>
        </div>
      </div>
      <WatchVsText
        productType="Craftsmanship"
        description="Aesthetic and technical excellence"
        textInfo="From in-house movements to special finishings and traditional materials  Minerva, whose name comes from the goddess of craftsmanship, has conveyed, generation after generation, the best-kept know-how of Swiss watchmaking. Minerva watches embody the expertise of each watchmaker, placed at the service of exceptional timepieces in the purest horological tradition to inspire bold journeys."
        videoSrc={"/videos/watch-video.mp4"}
      />
      <WatchVsText
        reverse
        productType="Innovation"
        description="The calibre, revelated to the world"
        textInfo="From in-house movements to special finishings and traditional materials  Minerva, whose name comes from the goddess of craftsmanship, has conveyed, generation after generation, the best-kept know-how of Swiss watchmaking. Minerva watches embody the expertise of each watchmaker, placed at the service of exceptional timepieces in the purest horological tradition to inspire bold journeys."
        videoSrc={"/videos/watch-video.mp4"}
      />
      <CommonWatchSection
        productType="Innovation"
        description="The calibre, revelated to the world"
        textInfo="From in-house movements to special finishings and traditional materials  Minerva, whose name comes from the goddess of craftsmanship, has conveyed, generation after generation, the best-kept know-how of Swiss watchmaking. Minerva watches embody the expertise of each watchmaker, placed at the service of exceptional timepieces in the purest horological tradition to inspire bold journeys."
        videoSrc={"/videos/watch-video.mp4"}
      />
    </div>
  );
};

export default FineWatchmaking;
