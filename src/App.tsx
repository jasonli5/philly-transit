import "./App.css";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BSLTimeline from "./Timeline/BSLTimeline";
import MFLTimeline from "./Timeline/MFLTimeline";
import TrolleyTimeline from "./Timeline/TrolleyTimeline";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bsl-timeline" element={<BSLTimeline />} />
          <Route path="/mfl-timeline" element={<MFLTimeline />} />
          <Route path="/trolley-timeline" element={<TrolleyTimeline />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
