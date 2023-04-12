import "./Home.css";
import React from "react";
import Header from "../components/Header";
import Landing from "./Landing";
import InfoSection from "./InfoSection";
import TimelineSection from "./TimelineSection";
import MapSection from "./MapSection";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Landing />
      <TimelineSection />
      <MapSection />
    </React.Fragment>
  );
}

export default Home;
