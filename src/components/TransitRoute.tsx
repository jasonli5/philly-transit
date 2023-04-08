import { Polyline } from "@react-google-maps/api";
import React, { useMemo } from "react";
import data from "../assets/BSL.json";
import { InfoBox } from "@react-google-maps/api";
import styled from "@emotion/styled";
import { TransitInfoJSON } from "../types";

// Import Transit GeoJSON
import BSL_GEOJSON from "../assets/BSL.json";
import MFL_GEOJSON from "../assets/MFL.json";

const GEOJSON_ROUTES = {
  BSL: BSL_GEOJSON,
  MFL: MFL_GEOJSON,
};

interface TransitRouteProps {
  routeName: keyof typeof GEOJSON_ROUTES;
  clickHandler?: (
    routeName: keyof TransitInfoJSON,
    event: google.maps.MapMouseEvent
  ) => void;
}

export const TransitRoute: React.FC<TransitRouteProps> = ({
  routeName,
  clickHandler,
}) => {
  const geoData = GEOJSON_ROUTES[routeName];
  const geoProperties = geoData["features"][0]["properties"];

  const [options, setOptions] = React.useState({
    strokeColor: geoProperties.stroke,
    strokeOpacity: geoProperties["stroke-opacity"],
    strokeWeight: geoProperties["stroke-width"],
  });

  const [infoBoxCoords, setInfoBoxCoords] =
    React.useState<google.maps.LatLng | null>(null);

  // Convert GeoJSON to Google Maps Path (LatLngLiteral[])
  const pathFromGeoJson = useMemo(() => {
    const path: google.maps.LatLngLiteral[] = [];

    const coordinates = geoData["features"][0]["geometry"]["coordinates"];
    coordinates.forEach((coordinate: number[]) => {
      path.push({
        lat: coordinate[1],
        lng: coordinate[0],
      });
    });

    return path;
  }, []);

  function mouseOverHandler(event: google.maps.MapMouseEvent) {
    // Change stroke color to black on hover
    setOptions({
      ...options,
      strokeWeight: geoProperties["stroke-width"] + 3,
    });

    // Set the InfoBox position to the mouse position
    setInfoBoxCoords(event.latLng);
  }

  function mouseOutHandler() {
    // Change stroke color back to original color
    setOptions({
      ...options,
      strokeWeight: geoProperties["stroke-width"],
    });

    // Remove the InfoBox
    setInfoBoxCoords(null);
  }

  return (
    <React.Fragment>
      <Polyline
        path={pathFromGeoJson}
        options={options}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        onClick={(e: google.maps.MapMouseEvent) => {
          clickHandler && clickHandler(routeName, e);
        }}
      />
      {infoBoxCoords && (
        <InfoBox
          options={{
            closeBoxURL: "",
            enableEventPropagation: true,
          }}
          position={infoBoxCoords}
        >
          <div className="textbox">{geoProperties.title}</div>
        </InfoBox>
      )}
    </React.Fragment>
  );
};

export default TransitRoute;
