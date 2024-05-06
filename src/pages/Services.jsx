import React from "react";

import ServiceTag from "../components/ServicesTag.jsx";

function Services() {
  return (
    <div className="bg-gray-950 text-center py-20 px-60 border-t-2 border-t-cyan-300">
      <h1 className="text-7xl font-thin text-cyan-200">TangoMotors</h1>
      <p className="text-xl text-slate-400 mt-10">
          TangoMotors es una concesionaria de autos de alta calidad que se
          enorgullece de ofrecer una amplia selección de vehículos nuevos y
          usados. Nos dedicamos a proporcionar a nuestros clientes una
          experiencia excepcional, desde la compra hasta el mantenimiento de sus
          vehículos.
        </p>
      <div className="flex justify-center gap-10 mt-20">
        <ServiceTag
          img={"./venta-autos.jpg"}
          text={"venta de autos nuevos y usados certificados con garantia"}
        />
        <ServiceTag
          img={"./financiamiento.jpeg"}
          text={"Financiamiento flexible y opciones de leasing"}
        />
        <ServiceTag
          img={"./mantenimiento.jpeg"}
          text={
            "Servicio de mantenimiento y reparación realizado por técnicos expertos"
          }
        />
      </div>
    </div>
  );
}

export default Services;
