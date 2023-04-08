import Map from "../components/Map";
import { useLoadScript } from "@react-google-maps/api";
import "./Home.css";

function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  console.log("returning new");
  return (
    <div>
      <Map />
    </div>
  );
}

export default Home;
