import React from "react";

const Card = ({ image, title, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {price && <p className="font-semibold text-blue-600">{price}</p>}
      </div>
    </div>
  );
};

export default Card;
