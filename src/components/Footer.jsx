// Footer.jsx
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2 className="footer-logo">Automation Brain</h2>
            <p className="footer-tagline">
              We provide cutting-edge industrial automation and smart technology
              solutions, helping businesses grow through innovation and precision.
            </p>
            <p className="footer-contact">
              📍 Address: 106 D, PIA Main Boulevard, M.A Johar Town, Lahore, Pakistan
              <br />
              📞 Phone: +92 300 4065161
              <br />
              ✉️ Email: info@automation-brain.com
            </p>
            <p className="footer-hours">
              🕑 Working Hours:<br />
              Mon - Fri: 9 AM – 6 PM<br />
              Sat: 10 AM – 2 PM<br />
              Sun: Closed
            </p>
          </div>

          <div className="footer-icons">
            <h4>Follow Us</h4>
            <div className="icon-group">
              <a href="https://www.facebook.com/AutomationBrainPvtLtd" target="_blank" rel="noreferrer" className="icon facebook"><FaFacebookF /></a>
              <a href="https://api.whatsapp.com/send?phone=923004065161" target="_blank" rel="noreferrer" className="icon whatsapp"><FaWhatsapp /></a>
              <a href="https://www.linkedin.com/company/automation-brain-pvt-ltd/" target="_blank" rel="noreferrer" className="icon linkedin"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/channel/UCegs6UIwx6TFJI4GG66jAzA" target="_blank" rel="noreferrer" className="icon youtube"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="footer-cta">
          <p>Have a project in mind? Let’s build something great together.</p>
          <a href="/contact" className="cta-btn">Contact Us</a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Automation Brain Pvt Ltd. All rights reserved.</p>
        </div>

        {/* Glowing Strip Instead of Wave */}
        <div className="footer-glow-strip"></div>
      </footer>

      {showScrollTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default Footer;
