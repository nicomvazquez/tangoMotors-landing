import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black bg-opacity-80 fixed w-full flex justify-between items-center px-40 py-5 border-b-2 border-b-cyan-200">
      <Link to={"/tangoMotors-landing/"} className="text-4xl text-cyan-200">TangoMotors</Link>
      <div className="text-xl flex text-white gap-10">
        <Link to={"/tangoMotors-landing/garaje"}>garaje</Link>
        <h1>whatsapp</h1>
      </div>
    </div>
  );
}

export default Navbar;
