import Map from "../components/Map";
import { useLoadScript } from "@react-google-maps/api";
import "./Home.css";
import React from "react";
import Header from "../components/Header";
import Landing from "./Landing";
import Intro from "./Intro";
import InfoSection from "./InfoSection";

function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <React.Fragment>
      <Header />
      <Landing />
      <Intro />
      <InfoSection />
    </React.Fragment>
  );
}

export default Home;
