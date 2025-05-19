'use client';

import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Logo from '@/public/svg/PresidentLogo.svg';

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

const customIcon = L.icon({
    iconUrl: Logo.src,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

function FlyToLocation({position}: { position: [number, number] }) {
    const map = useMap();
    map.flyTo(position, 6, {
        animate: true,
        duration: 1.5,
    });
    return null;
}

export default function MapComponent({selectedPosition}: { selectedPosition: [number, number] | null }) {
    return (
        <MapContainer
            center={[41.2995, 69.2401]}
            zoom={3}
            scrollWheelZoom={false}
            className="w-full h-full z-0"
        >
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
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
            {selectedPosition && <FlyToLocation position={selectedPosition}/>}
        </MapContainer>
    );
}
