import {
  GoogleMap,
  LoadScript,
  Polygon,
  Polyline,
  InfoBox,
  Marker,
} from "@react-google-maps/api";
import TransitRoute from "./TransitRoute";
import React from "react";
import transitInfo from "../assets/TransitInfo.json";
import { TransitInfoJSON, TransitModeOptionsType } from "../types";
import SelectOption from "./SelectOption";

const containerStyle = {
  width: "70%",
};

const center = {
  lat: 39.952583,
  lng: -75.165222,
};

const mapOptions = {
  disableDefaultUI: true,
  clickableIcons: false,
  mapId: import.meta.env.VITE_GOOGLE_MAPS_MAP_ID,
};

const transitModeOptions: TransitModeOptionsType = {
  Subway: ["BSL", "MFL"],
  Regional: [],
  Bus: [],
};

function Map() {
  const [selectedRoute, setSelectedRoute] =
    React.useState<keyof TransitInfoJSON>("BSL");

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const [mode, setMode] =
    React.useState<keyof typeof transitModeOptions>("Subway");

  function onRouteClick(
    routeName: keyof TransitInfoJSON,
    event: google.maps.MapMouseEvent
  ) {
    setSelectedRoute(routeName);

    if (map && event.latLng) {
      map.panTo(event.latLng);
    }
  }

  function onModeChange(event: any, value: string | null) {
    if (value) {
      setMode(value as keyof typeof transitModeOptions);
    }
  }

  console.log("RENDERED");

  return (
    <div className="map-container">
      <GoogleMap
        id="map"
        zoom={12}
        heading={9}
        center={center}
        mapContainerStyle={containerStyle}
        options={mapOptions}
        onLoad={(map) => setMap(map)}
      >
        {transitModeOptions[mode].map((routeName, key) => (
          <div key={key} className="route-container">
            <TransitRoute
              key={key}
              routeName={routeName}
              clickHandler={onRouteClick}
            />
            {transitInfo[routeName].stops.map((stop, index) => (
              <Marker
                key={index}
                position={
                  new google.maps.LatLng(stop.position[0], stop.position[1])
                }
                icon={"https://cdn-icons-png.flaticon.com/16/50/50724.png"}
              />
            ))}
          </div>
        ))}
      </GoogleMap>
      <div id="sidebar">
        <div className="title-container">
          <h1>Transit Map</h1>
          <h2>
            Current selection:{" "}
            <span className="selectedRouteText">
              {transitInfo[selectedRoute].name}
            </span>
          </h2>
          <h2>Mode of transit: {transitInfo[selectedRoute].mode}</h2>
          <h3>Daily ridership: {transitInfo[selectedRoute].dailyRidership}</h3>
        </div>
        <div className="options-container">
          <SelectOption
            label="Filter by mode"
            options={Object.keys(transitModeOptions)}
            onModeChange={onModeChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Map;
