// src/pages/AdminDashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("bookings");

  const [bookings, setBookings] = useState([]);
  const [packages, setPackages] = useState([]);
  const [contacts, setContacts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Modal states
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editData, setEditData] = useState({ id: "", title: "", price: "", duration: "", image: "" });
  const [addData, setAddData] = useState({ title: "", price: "", duration: "", image: "" });

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookRes, pkgRes, contactRes] = await Promise.all([
          axios.get("http://localhost:5000/bookings", { headers: { Authorization: `Bearer ${token}` } }),
          axios.get("http://localhost:5000/packages", { headers: { Authorization: `Bearer ${token}` } }),
          axios.get("http://localhost:5000/contact", { headers: { Authorization: `Bearer ${token}` } }),
        ]);
        setBookings(bookRes.data);
        setPackages(pkgRes.data);
        setContacts(contactRes.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  // --- BOOKING FUNCTIONS ---
  const updateBookingStatus = async (id, status) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/bookings/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBookings(bookings.map((b) => (b.id === id ? { ...b, status } : b)));
    } catch (err) {
      console.error(err);
      alert("Failed to update booking status.");
    }
  };

  // --- PACKAGE FUNCTIONS ---
  const deletePackage = async (id) => {
    if (!confirm("Are you sure you want to delete this package?")) return;
    try {
      await axios.delete(`http://localhost:5000/packages/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      setPackages(packages.filter((pkg) => pkg.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete package.");
    }
  };

  const openEditModal = (pkg) => {
    setEditData(pkg);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const submitEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/packages/${editData.id}`, editData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPackages(packages.map((p) => (p.id === editData.id ? editData : p)));
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert("Failed to update package.");
    }
  };

  const openAddModal = () => {
    setAddData({ title: "", price: "", duration: "", image: "" });
    setIsAdding(true);
  };

  const handleAddChange = (e) => {
    setAddData({ ...addData, [e.target.name]: e.target.value });
  };

  const submitAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/packages`, addData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPackages([...packages, res.data]);
      setIsAdding(false);
    } catch (err) {
      console.error(err);
      alert("Failed to add package.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-6 pb-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          {["bookings", "packages", "contacts"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {/* ------------------ BOOKINGS ------------------ */}
        {activeTab === "bookings" && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-xl">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Destination</th>
                  <th className="px-4 py-2">Start Date</th>
                  <th className="px-4 py-2">People</th>
                  <th className="px-4 py-2">Message</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-2">{b.name}</td>
                    <td className="px-4 py-2">{b.email}</td>
                    <td className="px-4 py-2">{b.phone}</td>
                    <td className="px-4 py-2">{b.destination}</td>
                    <td className="px-4 py-2">{new Date(b.startDate).toLocaleDateString()}</td>
                    <td className="px-4 py-2">{b.people}</td>
                    <td className="px-4 py-2">{b.message}</td>
                    <td className="px-4 py-2">
                      <select
                        value={b.status || "pending"}
                        onChange={(e) => updateBookingStatus(b.id, e.target.value)}
                        className="border px-2 py-1 rounded"
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="canceled">Canceled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ------------------ PACKAGES ------------------ */}
        {activeTab === "packages" && (
          <div>
            <div className="flex justify-end mb-4">
              <button
                onClick={openAddModal}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Add New Package
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                    <p className="text-gray-600 mb-2">Price: {pkg.price}</p>
                    <p className="text-gray-600 mb-4">Duration: {pkg.duration}</p>
                    <div className="flex justify-between">
                      <button
                        onClick={() => openEditModal(pkg)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deletePackage(pkg.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------ CONTACTS ------------------ */}
        {activeTab === "contacts" && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-xl">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Subject</th>
                  <th className="px-4 py-2">Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c.id} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-2">{c.name}</td>
                    <td className="px-4 py-2">{c.email}</td>
                    <td className="px-4 py-2">{c.subject}</td>
                    <td className="px-4 py-2">{c.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ------------------ EDIT MODAL ------------------ */}
        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg relative">
              <button
                onClick={() => setIsEditing(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold"
              >
                X
              </button>
              <h2 className="text-2xl font-bold mb-4">Edit Package</h2>
              <form onSubmit={submitEdit} className="space-y-4">
                <input
                  type="text"
                  name="title"
                  value={editData.title}
                  onChange={handleEditChange}
                  placeholder="Title"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="price"
                  value={editData.price}
                  onChange={handleEditChange}
                  placeholder="Price"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="duration"
                  value={editData.duration}
                  onChange={handleEditChange}
                  placeholder="Duration"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="image"
                  value={editData.image}
                  onChange={handleEditChange}
                  placeholder="Image URL"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ------------------ ADD MODAL ------------------ */}
        {isAdding && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg relative">
              <button
                onClick={() => setIsAdding(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold"
              >
                X
              </button>
              <h2 className="text-2xl font-bold mb-4">Add New Package</h2>
              <form onSubmit={submitAdd} className="space-y-4">
                <input
                  type="text"
                  name="title"
                  value={addData.title}
                  onChange={handleAddChange}
                  placeholder="Title"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="price"
                  value={addData.price}
                  onChange={handleAddChange}
                  placeholder="Price"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="duration"
                  value={addData.duration}
                  onChange={handleAddChange}
                  placeholder="Duration"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="image"
                  value={addData.image}
                  onChange={handleAddChange}
                  placeholder="Image URL"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                  Add Package
                </button>
              </form>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
