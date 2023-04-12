import "./App.css";
import Home from "./home/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import BSLTimeline from "./Timeline/BSLTimeline";
import MFLTimeline from "./Timeline/MFLTimeline";
import TrolleyTimeline from "./Timeline/TrolleyTimeline";
import ScrollToTop from "./components/ScrollToTop";
import MapPage from "./map/MapPage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bsl-timeline" element={<BSLTimeline />} />
          <Route path="/mfl-timeline" element={<MFLTimeline />} />
          <Route path="/trolley-timeline" element={<TrolleyTimeline />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
