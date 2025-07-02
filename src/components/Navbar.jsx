import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // ✅ Search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    const page = searchQuery.toLowerCase().trim();

    const routes = {
      home: "/",
      about: "/about",
      services: "/services",
      products: "/products",
      contact: "/contact",
      downloads: "/download",
    };

    if (routes[page]) {
      navigate(routes[page]);
    } else {
      alert("Page not found. Try: Home, About, Services, Products, Contact, Downloads");
    }

    setSearchQuery("");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Automation Brain" />
        </Link>

        <form className="nav-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search:"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <div className="hamburger" onClick={handleToggle}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isMobileMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/download" onClick={closeMenu}>Downloads</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
