import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    phone: "",
    destination: "",
    start_date: "",
    people: 1,
    message: ""
  });
  const [status, setStatus] = useState("");

const handleChange = (e) => {
  const value = e.target.name === "people" ? Number(e.target.value) : e.target.value;
  setFormData({ ...formData, [e.target.name]: value });
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData, people: Number(formData.people) };
      const res = await axios.post("http://localhost:5000/api/bookings", payload);
      setStatus(res.data.message);
      setFormData({
        user_name: "",
        email: "",
        phone: "",
        destination: "",
        start_date: "",
        people: 1,
        message: ""
      });
    } catch (err) {
      if (err.response) {
        setStatus(err.response.data.message);
      } else {
        setStatus("Booking failed. Please try again.");
      }
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Book Your Trip</h2>
      {status && <p className="mb-4 text-green-600">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={formData.user_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="people"
          min="1"
          value={formData.people}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
