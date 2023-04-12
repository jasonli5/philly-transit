import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/Map";
import Header from "../components/Header";

const MapPage = () => {
  // Make sure Google Maps API is loaded before rendering the map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Map />
    </>
  );
};

export default MapPage;
