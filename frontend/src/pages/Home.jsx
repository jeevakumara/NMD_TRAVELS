// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Plane, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel,beach')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Explore the World with Us</h1>
          <p className="text-lg md:text-xl mb-6">
            Discover unforgettable journeys, curated packages, and the best travel experiences.
          </p>
          <Link to="/packages">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-all">
              View Packages
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={`https://source.unsplash.com/400x250/?destination,travel,${i}`}
                alt="Package"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Exciting Destination {i}</h3>
                <p className="text-gray-600 mb-4">
                  Experience breathtaking views, local culture, and adventures of a lifetime.
                </p>
                <Link to={`/packages/${i}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
        <p className="mb-6">Book your journey today and create memories for a lifetime.</p>
        <Link to="/booking">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Book Now
          </button>
        </Link>
      </section>
    </div>
  );
}
