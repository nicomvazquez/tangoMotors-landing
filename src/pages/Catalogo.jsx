import React from "react";

import CarTag from '../components/CarTag.jsx'

import { garaje } from "../database/data.js";

function Catalogo() {
  return (
    <div className="bg-slate-900 py-10 pt-36 px-40">
      <h1 className="text-7xl text-cyan-200 pb-10">Garaje</h1>
      <div className="grid grid-cols-3 gap-10">{garaje.map(car => (
        <CarTag key={car.id} item={car} />
      ))}</div>
    </div>
  );
}

export default Catalogo;
