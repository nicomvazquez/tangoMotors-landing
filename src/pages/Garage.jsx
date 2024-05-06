import React from "react";
import {Link} from 'react-router-dom'

import { garaje } from "../database/data.js";

import CarTag from '../components/CarTag.jsx'

function Garage() {
  const limit = garaje.slice(0, 3);

  return (
    <div
      className="bg-cover py-20 text-center"
      style={{ backgroundImage: "url(fondo-servicios.jpg)" }}
    >
      <h1 className="text-7xl text-cyan-200">Garage</h1>
      <div className="flex justify-center gap-10 my-10">
        {limit.map((item) => {
          return (
            <CarTag key={item.id} item={item} />
          );
        })}
      </div>
      <Link to={"/tangoMotors-landing/garaje"} className="bg-cyan-300 py-2 px-4 text-2xl rounded-md">ver mas</Link>
    </div>
  );
}

export default Garage;
