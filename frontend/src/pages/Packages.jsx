import React from "react";
import PackageCard from "../components/PackageCard";

const Packages = () => {
  const packages = [
    {
      image: "https://source.unsplash.com/800x600/?beach,maldives",
      title: "Maldives Beach Getaway",
      description: "Enjoy sun, sand, and sea in a luxury resort.",
      price: "$1,200"
    },
    {
      image: "https://source.unsplash.com/800x600/?mountains,himalayas",
      title: "Himalayan Adventure",
      description: "Trek the majestic mountains with guided tours.",
      price: "$900"
    },
    {
      image: "https://source.unsplash.com/800x600/?paris,city",
      title: "Paris City Lights",
      description: "Experience romance and culture in the city of love.",
      price: "$1,500"
    },
    {
      image: "https://source.unsplash.com/800x600/?egypt,pyramids",
      title: "Egyptian Heritage Tour",
      description: "Explore ancient wonders and pyramids.",
      price: "$1,100"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Featured Packages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            image={pkg.image}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Packages;
