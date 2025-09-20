import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">TravelCo</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link to="/packages" className="hover:text-blue-600 transition">Packages</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-2">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link to="/packages" className="hover:text-blue-600 transition">Packages</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
