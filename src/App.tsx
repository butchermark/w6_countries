import CountriesData from "./components/Pages/CountriesData";
import Country from "./components/Pages/Country";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
  Router,
} from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/countries" />} />
          <Route path="/countries/:country" element={<Country />} />
          <Route path="/countries" element={<CountriesData />} />
          <Route path="*" element={<Navigate to="/countries" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
