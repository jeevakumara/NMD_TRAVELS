import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p>© 2025 TravelCo. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
