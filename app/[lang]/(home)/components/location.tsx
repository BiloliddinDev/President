'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { locations } from '@/constants/locations';

import Image from 'next/image';
import Image1 from '@/public/svg/locationIcon.svg';
const MapComponent = dynamic(() => import('@/components/shared/MapComponent/page'), {
  ssr: false,
});

export default function Location() {
  const [selectedLocation, setSelectedLocation] = useState<[number, number] | null>(null);

  return (
    <div className="w-full h-auto flex flex-col justify-center gap-10 p-10 items-center">
      <div className="w-[1200px] flex justify-start items-center">
        <h1 className="font-inter font-medium text-2xl leading-none tracking-normal uppercase">
          Location
        </h1>
      </div>

      <div className="w-[1200px] h-[500px]">
        <MapComponent selectedLocation={selectedLocation || undefined} />
      </div>

      <div className="w-[1200px] flex flex-col justify-start  pr-[600px] gap-3">
        <h1 className="font-inter font-medium text-[23px] leading-none tracking-normal capitalize text-[#000000] ml-2">
          Branches
        </h1>
        <div className="grid grid-cols-2 gap-1 mt-2">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => setSelectedLocation(loc.position as [number, number])}
            >
            <Image src={Image1} alt="Location Icon" width={20} height={20} />
              <span className="font-inter font-normal text-base capitalize text-[#5C5F6A]">{loc.name}</span>
              <span className="font-inter font-normal text-base capitalize text-[#5C5F6A]">{loc.position.join(', ')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
