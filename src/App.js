import { useState, } from 'react';
import {TravelContext} from './Context';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import RTP from "./pages/RTP"
import MC from "./pages/MC"

// const TravelContext = createContext();

function App() {
  const [mode,setMode] = useState("");
  const [distance,setDistance] = useState("");
  return (
  <TravelContext.Provider value={{mode,setMode,distance,setDistance}}>
      <Router>
      <Routes>
        <Route path="/" element={<RTP />} />
        <Route path="/mode-of-choice" element={<MC />} />
      </Routes>
    </Router>
    </TravelContext.Provider>
  );
}

export default App;
