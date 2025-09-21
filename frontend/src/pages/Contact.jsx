// src/pages/Contact.jsx
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
      await axios.post("http://localhost:5000/contact", formData);
      setSuccess("Message sent successfully!");
      setError("");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600">
            We'd love to hear from you. Reach out for inquiries, feedback, or support.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <MapPin size={24} className="text-blue-600" />
              <span>123 Travel Street, Your City</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={24} className="text-blue-600" />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={24} className="text-blue-600" />
              <span>info@travelco.com</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          {success && <p className="text-green-600 mb-4">{success}</p>}
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="border px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
