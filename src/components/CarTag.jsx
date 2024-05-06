import React from "react";

function CarTag({item}) {
  return (
    <div key={item.id} className="rounded-md max-w-md bg-white text-black p-5 text-left">
      <img src={item.img} alt={item.auto} className="rounded-md mb-5" />
      <h2 className="text-3xl font-semibold">{item.auto}</h2>
      <p className="my-3">modelo: {item.modelo}</p>
      <p className="bg-cyan-200 inline-block py-2 px-3 text-xl font-semibold">${item.precio}</p>
    </div>
  );
}

export default CarTag;
