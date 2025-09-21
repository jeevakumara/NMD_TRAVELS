// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Plane } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="text-blue-600" size={28} />
            <span className="text-2xl font-bold text-blue-600">TravelCo</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                <Link to={link.path}>{link.name}</Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
