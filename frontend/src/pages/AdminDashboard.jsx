import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token"); // make sure admin token is stored
      const res = await axios.get("http://localhost:5000/api/bookings/admin", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();

    // Optional: live updates every 5 seconds
    const interval = setInterval(fetchBookings, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p className="text-center mt-8">Loading bookings...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard - Bookings</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Destination</th>
            <th className="border px-4 py-2">Start Date</th>
            <th className="border px-4 py-2">People</th>
            <th className="border px-4 py-2">Package</th>
            <th className="border px-4 py-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{booking.user_name}</td>
              <td className="border px-4 py-2">{booking.email}</td>
              <td className="border px-4 py-2">{booking.phone}</td>
              <td className="border px-4 py-2">{booking.destination}</td>
              <td className="border px-4 py-2">{booking.start_date}</td>
              <td className="border px-4 py-2">{booking.people}</td>
              <td className="border px-4 py-2">{booking.package_title || "-"}</td>
              <td className="border px-4 py-2">{booking.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
