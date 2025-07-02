// src/pages/Contact.jsx

import React, { useState } from 'react';
import './ContactForm.css'; // Make sure this path is correct

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all required fields.');
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-wrapper">
      {/* 🌠 Shooting Stars Layer */}
      <div className="shooting-stars"></div>

      {/* Top Heading */}
      <div className="contact-header">
        <h1 className="contact-title">Let’s Connect 🚀</h1>
        <p className="contact-subtitle">
          We’d love to hear from you. Fill the form and we’ll get back shortly.
        </p>
      </div>

      <div className="contact-card">
        <h2 className="card-heading">Contact Form</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message*"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h2>Thank you!</h2>
            <p>Your information has been submitted successfully.</p>
          </div>
        )}
      </div>

      <div className="extra-content">
        <h2>Need More Help?</h2>
        <p>
          Email us at <strong>support@yourcompany.com</strong> or call us at
          <strong> +92-123-4567890</strong>.
        </p>
        <p>We respond quickly and are here to support you!</p>
      </div>
    </div>
  );
};

export default Contact;
