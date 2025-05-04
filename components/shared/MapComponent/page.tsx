'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { locations } from '@/constants/locations';
import Image from '@/public/images/location.png';


const icon = L.icon({
  iconUrl: Image.src,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


function ChangeView({ position }: { position: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 5);
    }
  }, [position]);

  return null;
}

export default function MapComponent({ selectedLocation }: { selectedLocation?: [number, number] }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <MapContainer
      center={[41.3111, 69.2797]}
      zoom={3}
      style={{ height: '500px', width: '100%', borderRadius: '10px' }}
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ZoomControl position="topright" />
      
     
      {selectedLocation && <ChangeView position={selectedLocation} />}

      {locations.map((loc, idx) => (
        <Marker key={idx} position={loc.position as [number, number]} icon={icon}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
