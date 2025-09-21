// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-16 px-6">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-center rounded-2xl"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel,world')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About TravelCo</h1>
          <p className="text-lg md:text-xl">
            Making your dream journeys come true with curated experiences worldwide.
          </p>
        </div>
      </motion.section>

      {/* Company Story */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto mt-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-8">
          TravelCo was founded with a mission to provide seamless, memorable, and exciting travel experiences. 
          Our team of travel enthusiasts and experts curate each package with attention to detail, ensuring comfort, adventure, and cultural immersion.
        </p>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto mt-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {["Alice", "Bob", "Charlie", "Diana"].map((member, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden text-center">
              <img
                src={`https://source.unsplash.com/300x300/?portrait,person,${i}`}
                alt={member}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{member}</h3>
                <p className="text-gray-600">Travel Expert</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
