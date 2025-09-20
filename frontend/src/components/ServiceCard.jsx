import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300">
      <div className="text-4xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
