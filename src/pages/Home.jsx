import React from "react";

import Services from "./Services.jsx";
import Garaje from "./Garage.jsx";

function Home() {
  return (
    <div className="w-full">
      <img src="./fondo-home.jpg" className="h-96 w-full object-cover" />
      <Services />
      <Garaje />
    </div>
  );
}

export default Home;
