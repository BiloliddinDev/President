"use client";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Logo from "@/public/svg/PresidentLogo.svg";

interface Branch {
  lat: number;
  lng: number;
  name: string;
}

const branches: Branch[] = [
  { lat: 41.2667445, lng: 69.2483314, name: "Tashkent, Kichik halqa yo'li, 2/A" },
  { lat: 41.308340, lng: 69.269253, name: "Toshkent, TSUM, Islam Karimov ko‘chasi, 17", },

];
const customIcon = L.icon({
  iconUrl: Logo.src,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

function FlyToLocation({ position }: { position: [number, number] }) {
  const map = useMap();
  map.flyTo(position, 15, {
    animate: true,
    duration: 1.5,
  });
  return null;
}

export default function MapComponent({
                                       selectedPosition,
                                       zoom,
                                     }: {
  selectedPosition: [number, number] | null;
  zoom?: number;
}) {
  return (
      <MapContainer
          center={[41.2995, 69.2401]}
          zoom={zoom ?? 15}
          scrollWheelZoom={false}
          className="w-full h-full z-0"
      >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {branches.map((branch, index) => (
            <Marker
                key={index}
                position={[branch.lat, branch.lng]}
                icon={customIcon}
            >
              <Popup>{branch.name}</Popup>
            </Marker>
        ))}
        {selectedPosition && <FlyToLocation position={selectedPosition} />}
      </MapContainer>
  );
}
