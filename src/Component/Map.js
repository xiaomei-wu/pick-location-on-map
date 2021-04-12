import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from './LocationMarker'

export const Map = () => {

  const defaultPosition = { lat: 52.5200, lng: 13.4050};
  return (
    <>
    <h1>Prototype: Pick a Loction on Map</h1>
    <span>
      <p>Maps Layer and Interface</p>
      <a href="https://react-leaflet.js.org/">Leaflet React</a>
      <p>Geocoding and Reverse Geocoding</p>
      <a href="https://nominatim.org/release-docs/develop/">Nominatim API</a>
    </span>

    <MapContainer
     center={defaultPosition} 
     zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
    </MapContainer>
    </>
  );
}