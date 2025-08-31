'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = new L.Icon({
  iconUrl: '/images/marker.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function Map() {
  return (
    <MapContainer center={[40.7128, -74.006]} zoom={13} className="h-full w-full rounded-lg shadow-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.7128, -74.006]} icon={icon}>
        <Popup>Christ Embassy – Royalties Youth Church</Popup>
      </Marker>
    </MapContainer>
  );
}
