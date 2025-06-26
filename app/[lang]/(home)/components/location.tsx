"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { SectionTitle } from "@/components/ui/sectionTitle";
import IconComponent from "@/components/icon/icon-view";

const MapComponent = dynamic(
  () => import("@/components/shared/map-component/map-component"),
  {
    ssr: false,
  }
);

interface Branch {
  lat: number;
  lng: number;
  name: string;
}

const branches: Branch[] = [
  { lat: 41.2667445, lng: 69.2483314, name: "Tashkent, Kichik halqa yo'li, 2/A" },
  { lat: 41.308340, lng: 69.269253, name: "Toshkent, TSUM, Islam Karimov ko‘chasi, 17", },
 
];

export default function LocationPage() {
  const [selectedPosition, setSelectedPosition] = useState<
    [number, number] | null
  >(null);

  const handleGoTo = (lat: number, lng: number) => {
    setSelectedPosition([lat, lng]);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4 overflow-x-hidden container">
      <div className="w-full max-w-[1200px] m-auto ">
        <SectionTitle text="Filiallar" />
      </div>

      <div className="w-full max-w-[1200px] h-[400px] m-auto rounded-md overflow-hidden">
        <MapComponent selectedPosition={selectedPosition} />
      </div>

      <div className="w-full max-w-[1200px] m-auto mt-3 flex flex-col gap-[20px]">
        <h3 className="text-primary text-xl font-medium  capitalize">
            Manzillar
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#5C5F6A] w-full max-w-lg">
          {branches.map((branch, index) => (
            <button
              key={index}
              onClick={() => handleGoTo(branch.lat, branch.lng)}
              className="flex items-center gap-1 font-inter text-[12px]  transition cursor-pointer"
            >
              <IconComponent name="mapLocation" />
              {branch.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
