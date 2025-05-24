"use client";
import LocationIcon from "@/components/icon/locationIcon";
import React from "react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(
  () => import("@/components/shared/map-component/map-component"),
  {
    ssr: false,
  }
);

const DiscoverMap = () => {
  return (
    <div>
      <div className="w-full max-w-[1200px] h-[544px] mt-[130px] rounded-md overflow-hidden">
        <MapComponent
          selectedPosition={[41.266262650575065, 69.24891016111192]}
        />
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <p className="font-medium text-xl">Address</p>
        <div className="flex items-center gap-1.5">
          <LocationIcon width={24} height={24} stroke="#5C5F6A" />
          <p className="text-zinc-500">
            2/A, Kichik xalqa yo`li, 100125, Тоshkent, Toshkent, Uzbekistan
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMap;
