// frontend/src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // adjust if needed
  withCredentials: true,
});

// Packages & content
export const getPackages = (params) => API.get("/packages", { params });
export const getPackageDetails = (id) => API.get(`/packages/${id}`);
export const createBooking = (data) => API.post("/bookings", data);
export const sendContact = (data) => API.post("/contact", data);

// New home content endpoints
export const getHomeContent = () => API.get("/home");
export const getFeaturedPackages = (limit = 6) =>
  API.get("/packages", { params: { featured: true, limit } });
export const getTopDestinations = (limit = 6) =>
  API.get("/packages", { params: { top: true, limit } });
export const getTestimonials = () => API.get("/testimonials");

export default API;
