import React from "react";

const Card = ({ top, middle, bottom }) => {
  return (
    <div className="font-figtrees text-white font-bold border-l-2 px-2">
      <h3 className="text-[#b8b8b8]  font-light tracking-[0.5px] mb-2 uppercase">
        {top}
      </h3>
      <h3 className="leading-none mt-2">{middle}</h3>
      <h3 className="leading-none mt-2">{bottom}</h3>
    </div>
  );
};

export default Card;
