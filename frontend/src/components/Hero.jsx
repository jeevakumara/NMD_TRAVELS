import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white h-screen flex items-center justify-center">
      <div className="text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">Explore Amazing Destinations</h1>
        <p className="text-lg md:text-2xl mb-8 animate-fadeIn delay-200">Travel the world with comfort and style</p>
        <a href="#booking" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
          Book Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
