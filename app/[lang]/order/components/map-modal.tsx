"use client";

import {MapContainer, Marker, TileLayer, useMapEvents} from "react-leaflet";
import L, {LatLng} from "leaflet";
import "leaflet/dist/leaflet.css";
import Logo from "@/public/svg/PresidentLogo.svg";

const customIcon = L.icon({
    iconUrl: Logo.src,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});


const LocationSelector = ({onSelect}: { onSelect: (pos: LatLng) => void }) => {
    useMapEvents({
        click(e) {
            onSelect(e.latlng);
        },
    });
    return null;
};

const LeafletMap = ({position, setPosition,}: {
    position: { lat: number; lng: number } | null;
    setPosition: (pos: { lat: number; lng: number }) => void;
}) => {
    const defaultCenter = {
        lat: 41.311081,
        lng: 69.240562,
    };

    return (
        <div className="h-[400px] w-full">
            <MapContainer
                center={position || defaultCenter}
                zoom={13}
                scrollWheelZoom
                style={{height: "100%", width: "100%"}}
            >
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationSelector onSelect={setPosition}/>
                {position && <Marker position={position} icon={customIcon}/>}
            </MapContainer>
        </div>
    );
};

export default LeafletMap;
