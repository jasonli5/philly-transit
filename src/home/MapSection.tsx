import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { center, mapOptions } from "../components/Map";
import transitInfo from "../assets/TransitInfo.json";
import StationStop from "../components/StationStop";
import TransitRoute from "../components/TransitRoute";
import { TransitInfoJSON } from "../types";
import { Link } from "react-router-dom";

export const MapSection = () => {
  return (
    <section className="map-home-section" id="map-section">
      <div className="map-home-container">
        <h1 className="map-home-heading" id="map-home-heading">
          Map
        </h1>

        <img id="google_map-section" src="images/map.png" />
        <Link reloadDocument to="map" className="map-button">
          Explore the map!
        </Link>
      </div>
    </section>
  );
};

export default MapSection;
