import React from "react";
import ServiceCard from "../components/ServiceCard";
import { FaPlane, FaHotel, FaMapMarkedAlt } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaPlane />,
      title: "Flight Booking",
      description: "Book domestic and international flights at the best prices.",
    },
    {
      icon: <FaHotel />,
      title: "Hotel Stays",
      description: "Find and book comfortable hotels worldwide with ease.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Tour Packages",
      description: "Explore pre-designed tour packages for your favorite destinations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
