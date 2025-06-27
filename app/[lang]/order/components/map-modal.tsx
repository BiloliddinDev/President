// "use client";
//
// import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
// import {useEffect, useRef, useState} from "react";
// import {MapContainer, Marker, TileLayer, useMapEvents} from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
//
// const markerIcon = new L.Icon({
//     iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
// });
//
// function LocationSelector({onSelect}: { onSelect: (lat: number, lng: number) => void }) {
//     useMapEvents({
//         click(e) {
//             onSelect(e.latlng.lat, e.latlng.lng);
//         },
//     });
//     return null;
// }
//
// export function MapModal({
//                              open,
//                              setOpen,
//                              onLocationSelect,
//                          }: {
//     open: boolean;
//     setOpen: (val: boolean) => void;
//     onLocationSelect: (lat: number, lng: number) => void;
// }) {
//     const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(null);
//     const mapRef = useRef<any>(null);
//
//     const handleSelect = (lat: number, lng: number) => {
//         setMarker({lat, lng});
//         onLocationSelect(lat, lng);
//         setOpen(false);
//     };
//
//     // Bu useEffect modal ochilgandan keyin Leafletga "resize" signal yuboradi
//     useEffect(() => {
//         if (open && mapRef.current) {
//             setTimeout(() => {
//                 mapRef.current.invalidateSize();
//             }, 200); // biroz kutib, modal ochilganidan keyin
//         }
//     }, [open]);
//
//     return (
//         <Dialog open={open} onOpenChange={setOpen}>
//             <DialogContent className="p-0 overflow-hidden max-w-4xl w-full h-[600px] flex flex-col">
//                 <DialogHeader className="p-4 border-b">
//                     <DialogTitle>Выберите местоположение</DialogTitle>
//                 </DialogHeader>
//
//                 <div className="flex-1 relative">
//                     <MapContainer
//                         center={[41.3111, 69.2797]}
//                         zoom={13}
//                         scrollWheelZoom={true}
//                         className="h-full w-full z-0"
//                         whenCreated={(mapInstance) => {
//                             mapRef.current = mapInstance;
//                         }}
//                     >
//                         <TileLayer
//                             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
//                             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         />
//                         <LocationSelector onSelect={handleSelect}/>
//                         {marker && <Marker position={[marker.lat, marker.lng]} icon={markerIcon}/>}
//                     </MapContainer>
//                 </div>
//             </DialogContent>
//         </Dialog>
//     );
// }
