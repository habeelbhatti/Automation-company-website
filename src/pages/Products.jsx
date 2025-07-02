import React from "react";
import "./Products.css";

// 🖼 Image imports
import iqjet from "../assets/iqjet.jpg";
import jet3 from "../assets/jet3.jpg";
import jet2neo from "../assets/jet2neo.jpg";
import rapidwire from "../assets/rapidwire.jpg";
import jet2neoep from "../assets/jet2neoep.jpg";
import jet3up from "../assets/jet3up.jpg";
import jetrapid from "../assets/jetrapid.jpg";

const products = [
  {
    name: "Leibinger IQJET",
    image: iqjet,
    description:
      "World's first intelligent coding & marking system. Plug & Print, 5 years no maintenance.",
    link: "https://leibinger-group.com/printers/iqjet",
  },
  {
    name: "Leibinger JET3 UP",
    image: jet3,
    description: "Advanced, feature-rich printer for complex applications.",
    link: "https://leibinger-group.com/printers/jet3-up",
  },
  {
    name: "Leibinger JET2 NEO",
    image: jet2neo,
    description: "Mid-range continuous inkjet printer for all standard applications.",
    link: "https://leibinger-group.com/printers/jet2-neo",
  },
  {
    name: "Leibinger JET Rapid Wire",
    image: rapidwire,
    description: "CIJ printer that keeps up with cable, pipe & wire production.",
    link: "https://leibinger-group.com/printers/jet-rapid-wire",
  },
  {
    name: "Leibinger JET2 NEO EP",
    image: jet2neoep,
    description: "Designed specifically for egg production environments.",
    link: "https://leibinger-group.com/printers/jet2-neo-ep",
  },
  {
    name: "Leibinger JET3 UP (Duplicate)",
    image: jet3up,
    description: "Feature-rich printer for complex production setups.",
    link: "https://leibinger-group.com/printers/jet3-up",
  },
  {
    name: "Leibinger JET Rapid",
    image: jetrapid,
    description: "Increase production output by 30% – Leibinger’s fastest model.",
    link: "https://leibinger-group.com/printers/jet-rapid",
  },
];

const Products = () => {
  return (
    <section className="products-wrapper">
      <h2 className="products-heading">🖨️ Our Leibinger Printers</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index} style={{ "--i": index }}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <button className="view-btn">🔗 View More</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
