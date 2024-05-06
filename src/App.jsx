import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Catalogo from './pages/Catalogo.jsx'

import Navbar from "./components/Navbar.jsx";
import Futher from "./components/Futher.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/tangoMotors-landing/" element={<Home />} />
        <Route path="/tangoMotors-landing/garaje" element={<Catalogo />} />
      </Routes>
      <Futher />
    </BrowserRouter>
  );
}

export default App;


