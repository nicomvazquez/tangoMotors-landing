import React from "react";

function ServicesTag({ img, text }) {
  return (
    <div className="max-w-sm w-full border-2 border-cyan-100 rounded-3xl">
      <img src={img} alt={text} className="w-full rounded-t-3xl" />
      <h3 className="text-xl text-white py-7 px-5">{text}</h3>
    </div>
  );
}

export default ServicesTag;
