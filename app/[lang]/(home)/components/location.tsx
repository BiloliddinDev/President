'use client';

import dynamic from 'next/dynamic';
import {useState} from 'react';
import {SectionTitle} from '@/components/ui/sectionTitle';
import MapLocationIcon from "@/components/icon/map-location-icon";
import React from 'react';

const MapComponent = dynamic(() => import('@/components/shared/map-component/map-component'), {
    ssr: false,
});

interface Branch {
    lat: number;
    lng: number;
    name: string;
}

const branches: Branch[] = [
    {lat: 41.2995, lng: 69.2401, name: 'Tashkent, Uzbekistan'},
    {lat: 39.9208, lng: 32.8541, name: 'Ankara, Turkey'},
    {lat: 48.8566, lng: 2.3522, name: 'Paris, France'},
    {lat: 55.7558, lng: 37.6173, name: 'Moscow, Russia'},
];

export default function LocationPage() {
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([branches[0].lat, branches[0].lng]);

    const handleGoTo = (lat: number, lng: number) => {
        setSelectedPosition([lat, lng]);
    };

    return (
        <div className="w-full h-auto flex flex-col gap-4 overflow-x-hidden">
            <div className="w-full max-w-[1200px] m-auto">
                <SectionTitle text="Locations"/>
            </div>

            <div className="w-full max-w-[1200px] h-[400px] m-auto rounded-md overflow-hidden">
                <MapComponent selectedPosition={selectedPosition}/>
            </div>

            <div className="w-full max-w-[1200px] m-auto mt-3 flex flex-col gap-[20px]">
                <h3 className="text-primary text-xl font-medium  capitalize">Branches</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#5C5F6A] w-full max-w-md">
                    {branches.map((branch, index) => (
                        <button
                            key={index}
                            onClick={() => handleGoTo(branch.lat, branch.lng)}
                            className="flex items-center gap-1 font-inter text-[12px]  transition cursor-pointer"
                        >
                            <MapLocationIcon/>
                            {branch.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}