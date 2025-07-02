import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import DownloadSection from './pages/Download';
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/ContactForm";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if loader already shown in this session
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (!hasLoaded) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoaded", "true"); // ✅ only once per session
      }, 6000); // 6 seconds delay
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<DownloadSection />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
