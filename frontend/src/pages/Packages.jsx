// src/pages/Packages.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setPackages(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load packages.");
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  if (loading) return <p className="text-center mt-20 text-xl">Loading packages...</p>;
  if (error) return <p className="text-center mt-20 text-red-600">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Travel Packages</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold mb-2">{pkg.title}</h2>
                <p className="text-gray-600 mb-4">Duration: {pkg.duration}</p>
                <p className="text-gray-700 font-medium mb-4">Price: {pkg.price}</p>
                <button
                  onClick={() => navigate(`/packages/${pkg.id}`)}
                  className="mt-auto bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
