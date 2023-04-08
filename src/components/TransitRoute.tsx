import { Polyline } from "@react-google-maps/api";
import React, { useMemo } from "react";
import data from "../assets/BSL.json";
import { InfoBox } from "@react-google-maps/api";

interface TransitRouteProps {
  routeName: string;
  routeColor: string;
}

export const TransitRoute: React.FC<TransitRouteProps> = ({
  routeName,
  routeColor,
}) => {
  const [options, setOptions] = React.useState({
    strokeColor: routeColor,
    strokeOpacity: 1,
    strokeWeight: 3,
  });

  const pathFromGeoJson = useMemo(() => {
    const path: google.maps.LatLngLiteral[] = [];

    const coordinates = data["features"][0]["geometry"]["coordinates"];
    coordinates.forEach((coordinate: number[]) => {
      path.push({
        lat: coordinate[1],
        lng: coordinate[0],
      });
    });

    return path;
  }, []);

  function clickHandler() {
    console.log("clicked");
  }

  return (
    <div>
      <Polyline
        path={pathFromGeoJson}
        options={options}
        onMouseOver={(e) =>
          setOptions({
            ...options,
            strokeColor: "blue",
          })
        }
        onMouseOut={(e) =>
          setOptions({
            ...options,
            strokeColor: routeColor,
          })
        }
        onClick={clickHandler}
      />
      <InfoBox
        options={{
          closeBoxURL: "",
          enableEventPropagation: true,
        }}
        position={new google.maps.LatLng(39.952583, -75.165222)}
      >
        <div id="textbox">Helo world</div>
      </InfoBox>
    </div>
  );
};

export default TransitRoute;
