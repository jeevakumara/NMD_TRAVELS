// src/pages/BookingForm.jsx
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    startDate: "",
    people: 1,
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/bookings", formData);
      setSuccess("Booking successful! We will contact you soon.");
      setError("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        startDate: "",
        people: 1,
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Book Your Trip</h1>

        {success && <p className="text-green-600 mb-4">{success}</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="number"
              name="people"
              min="1"
              value={formData.people}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Additional Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Booking
          </button>
        </form>
      </motion.div>
    </div>
  );
}
