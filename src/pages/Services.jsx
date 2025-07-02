import React, { useEffect, useState } from "react";
import "./Services.css";
import company from "../assets/company.jpg";
import {
  FaCogs,
  FaBarcode,
  FaLightbulb,
  FaWrench,
  FaChalkboardTeacher,
  FaShippingFast,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCogs />,
    title: "Industrial Automation",
    description: "Custom automation for packaging and industrial workflows.",
  },
  {
    icon: <FaBarcode />,
    title: "Batch Coding Solutions",
    description: "Inkjet, laser and thermal printing for product marking.",
  },
  {
    icon: <FaLightbulb />,
    title: "Product Marketing",
    description: "Complete industrial marketing and product branding.",
  },
  {
    icon: <FaWrench />,
    title: "Machine Repair & Maintenance",
    description: "Repair services for various coding and industrial systems.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Installation & Training",
    description: "Employee training and equipment setup support.",
  },
  {
    icon: <FaShippingFast />,
    title: "Supply Chain & Logistics",
    description: "Logistics & supply support for equipment and parts.",
  },
  {
    icon: <FaTools />,
    title: "Laser Coding Solutions",
    description: "High-speed and eco-friendly laser printers for marking.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Labeling Systems",
    description: "Automated labeling machines for every product shape.",
  },
];

const AnimatedCounter = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="stat-box">
      {label.includes("+") ? `${count}+ ${label.replace(/[0-9+]/g, "").trim()}` : `${count} ${label}`}
    </div>
  );
};

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="blur-wave top-right"></div>
      <div className="blur-wave bottom-left"></div>

      <div className="services-container">
        <div className="company-image-wrapper glow-banner">
          <img src={company} alt="Automation Brain" className="company-image" />
        </div>

        <h2>Our Services</h2>
        <p className="services-intro">
          We empower industries with expert solutions in automation, coding, consultancy & marketing.
        </p>

        <div className="services-stats">
          <AnimatedCounter value="150" label="🏭 Clients" />
          <AnimatedCounter value="20" label="💡 Years Experience" />
          <AnimatedCounter value="1000" label="🔧 Machines Installed" />
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index} style={{ "--i": index }}>
              <div className="icon-wrapper">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
