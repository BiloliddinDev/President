"use client";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Logo from "@/public/svg/PresidentLogo.svg";

interface Branch {
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

const branches: Branch[] = [
  {
    lat: 41.2667445,
    lng: 69.2483314,
    name: {
      uz: "Toshkent, Kichik halqa yo'li, 2/A",
      ru: "Ташкент, Малая кольцевая дорога, 2/A",
      en: "Tashkent, Small Ring Road, 2/A",
      az: "",
      tj: "",
    },
  },
  {
    lat: 41.30834,
    lng: 69.269253,
    name: {
      uz: "Toshkent, TSUM, Islam Karimov ko'chasi, 17",
      ru: "Ташкент, ЦУМ, улица Ислама Каримова, 17",
      en: "Tashkent, TSUM, Islam Karimov Street, 17",
      az: "",
      tj: "",
    },
  },
];
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
