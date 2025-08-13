"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { branches } from "@/constants/locationsData";

const MapComponent = dynamic(
  () => import("@/components/shared/map-component/map-component"),
  {
    ssr: false,
  }
);

const DiscoverMap = ({ lang }: { lang: "uz" | "ru" | "en" | "az" | "tj" }) => {
  const [selectedPosition, setSelectedPosition] = useState<
    [number, number] | null
  >(null);

  const handleGoTo = (lat: number, lng: number) => {
    setSelectedPosition([lat, lng]);
  };
  return (
    <div>
      <div className="w-full max-w-[1200px] h-[544px] mt-[130px] rounded-md overflow-hidden">
        <MapComponent selectedPosition={selectedPosition} />
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <p className="font-medium text-xl">Адрес</p>
        <div className="flex items-center gap-1.5">
          {/* <IconComponent
            name="location"
            height={24}
            width={24}
            classNames="text-gray-500 transition-colors duration-200 "
          /> */}
          <div className="w-full mt-3 flex flex-col gap-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[#5C5F6A] w-full max-w-[1000px]">
              {branches.map((branch, index) => (
                <button
                  key={index}
                  onClick={() => handleGoTo(branch.lat, branch.lng)}
                  className="flex items-center font-inter text-[12px] px-2 transition cursor-pointer"
                >
                  {/* <IconComponent name="mapLocation"/> */}
                  {branch.name[lang]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMap;
