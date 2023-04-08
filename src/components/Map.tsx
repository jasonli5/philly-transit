import React, { useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Polygon,
  Polyline,
} from "@react-google-maps/api";
import data from "../assets/BSL.json";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 39.952583,
  lng: -75.165222,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        heading={9}
        options={{
          mapId: "994286d5df0529d2",
          disableDefaultUI: true,
        }}
      >
        <Polyline
          path={[
            { lat: 39.952583, lng: -75.165222 },
            { lat: 39.852583, lng: -75.165222 },
          ]}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
