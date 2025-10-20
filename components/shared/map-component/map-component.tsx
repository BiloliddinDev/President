"use client";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Logo from "@/public/svg/PresidentLogo.svg";
import { branches } from "@/constants/locationsData";

export interface Branch {
  lat: number;
  lng: number;
  name: {
    uz: string;
    ru: string;
    en: string;
    tj: string;
    az: string;
  };
}


const customIcon = L.icon({
  iconUrl: Logo.src,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

function FitMapToBranches() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(
      branches.map((branch) => [branch.lat, branch.lng])
    );
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map]);

  return null;
}

function FlyToLocation({ position }: { position: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 15, {
      animate: true,
      duration: 1.5,
    });
  }, [map, position]);
  return null;
}

const translations = {
  openInYandexMaps: {
    uz: "Yandex xaritada ochish",
    ru: "Открыть в Яндекс Картах",
    en: "Open in Yandex Maps",
    az: "",
    tj: "",
  },
};

export default function MapComponent({
  selectedPosition,
  lang = "uz",
  zoom,
}: {
  selectedPosition: [number, number] | null;
  zoom?: number;
  lang?: "uz" | "ru" | "en" | "tj" | "az";
}) {
  return (
    <MapContainer
      center={[41.2995, 69.2401]}
      zoom={zoom ?? 13}
      scrollWheelZoom={false}
      className="w-full h-full z-0"
    >
      {/* <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            /> */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />

      {branches.map((branch, index) => (
        <Marker
          key={index}
          position={[branch.lat, branch.lng]}
          icon={customIcon}
        >
          <Popup>
            <div className="text-sm">
              {branch.name[lang]}
              <br />
              <a
                href={`https://yandex.com/maps/?ll=${branch.lng},${branch.lat}&z=18`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {translations.openInYandexMaps[lang]}
              </a>
            </div>
          </Popup>
        </Marker>
      ))}

      <FitMapToBranches />
      {selectedPosition && <FlyToLocation position={selectedPosition} />}
    </MapContainer>
  );
}
