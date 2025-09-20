import React from "react";

const PackageCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-blue-500 font-semibold text-lg">{price}</p>
      </div>
    </div>
  );
};

export default PackageCard;
