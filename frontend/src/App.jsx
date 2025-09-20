import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookingForm from "./pages/BookingForm";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Home />
          </>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<BookingForm />} /> {/* <- new route */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
