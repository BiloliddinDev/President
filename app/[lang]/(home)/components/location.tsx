'use client';

import { useEffect, useRef } from 'react';
import Logo from '@/public/svg/PresidentLogo.svg';
import MapMarker from '@/public/svg/mapmarker.svg';
import Image from 'next/image';

interface Branch {
  lat: number;
  lng: number;
  name: string;
}

export default function LocationPage() {
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any>([]);

  const branches: Branch[] = [
    { lat: 41.2995, lng: 69.2401, name: 'Tashkent, Uzbekistan' },
    { lat: 39.9208, lng: 32.8541, name: 'Ankara, Turkey' },
    { lat: 48.8566, lng: 2.3522, name: 'Paris, France' },
    { lat: 55.7558, lng: 37.6173, name: 'Moscow, Russia' },
  ];

  useEffect(() => {
    // Add Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
    document.head.appendChild(link);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js';
    script.onload = () => {
      const L = window.L;

      const map = L.map('map', {
        zoomControl: false,
      }).setView([41.2995, 69.2401], 3);
      mapRef.current = map;

      L.control.zoom({ position: 'topright' }).addTo(map);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
      }).addTo(map);

      map.attributionControl.remove();

      const customIcon = L.icon({
        iconUrl: Logo.src,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });

      markersRef.current = branches.map((loc) =>
        L.marker([loc.lat, loc.lng], { icon: customIcon })
          .addTo(map)
          .bindPopup(loc.name)
      );

      // Fix resize issue
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    };

    document.body.appendChild(script);
  }, []);

  const goToLocation = (index: number) => {
    const map = mapRef.current;
    const marker = markersRef.current[index];

    if (map && marker) {
      map.setView(marker.getLatLng(), 6);
      marker.openPopup();
    }
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4 overflow-x-hidden">
      <div className="w-full max-w-[1200px] m-auto ">
        <h2 className="text-xl font-bold mb-4">LOCATION</h2>
      </div>

      <div
        id="map"
        className="w-full max-w-[1200px] h-[400px] sm:h-[400px] bg-[#F6F6F6] m-auto rounded-md overflow-hidden"
      />

      <div className="w-full max-w-[1200px] m-auto mt-3 flex flex-col gap-[20px]">
        <h3 className="font-inter font-medium text-[20px]  tracking-normal capitalize text-[#000000]">Branches</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-[#5C5F6A] w-full max-w-md">
          {branches.map((branch, index) => (
            <button
              key={index}
              onClick={() => goToLocation(index)}
              className="flex items-center gap-[5px] font-inter font-normal text-[16px] leading-[100%] tracking-normal  hover:text-blue-600 transition cursor-pointer"
            >
              <Image src={MapMarker} alt="Map Marker" />
              {branch.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
