import {
  GoogleMap,
  LoadScript,
  Polygon,
  Polyline,
  InfoBox,
} from "@react-google-maps/api";
import TransitRoute from "./TransitRoute";

const containerStyle = {
  width: "70%",
  height: "100vh",
};

const center = {
  lat: 39.952583,
  lng: -75.165222,
};

const options = {
  disableDefaultUI: true,
  clickableIcons: false,
  mapId: "994286d5df0529d2",
};

const infoBoxOptions = {
  closeBoxURL: "",
  enableEventPropagation: true,
};

function Map() {
  return (
    <div id="container">
      <GoogleMap
        id="map"
        zoom={10}
        heading={9}
        center={center}
        mapContainerStyle={containerStyle}
        options={options}
      >
        <TransitRoute routeName="BSL" routeColor="orange" />
      </GoogleMap>
      <div id="sidebar"></div>
    </div>
  );
}

export default Map;
