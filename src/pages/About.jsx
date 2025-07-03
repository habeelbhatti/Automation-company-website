import React from "react";
import "./About.css";
import ceoImg from "../assets/Ceoimage.jpg";
import directorImg from "../assets/director.jpg";
import Sharjeel from "../assets/Sharjeel.jpg";
import Asad from "../assets/Asad.jpg";
import Laiba from "../assets/laiba.jpg";
import Aamir from "../assets/Aamir.jpg";
import Azeem from "../assets/azeem.jpg";
import Tahir from "../assets/tahir.jpg";
import Sagheer from "../assets/Sageer.jpg";
import Ali from "../assets/Ali.jpg";

const youtubeLink = "https://www.youtube.com/channel/UCegs6UIwx6TFJI4GG66jAzA";

const leadership = [
  {
    name: "Zahoor Ahmed Kayani",
    role: "Founder and CEO at Automation Brain Pvt Limited",
    description:
      "Leading skills in finding customized industrial automation solutions and managing the business in a way that valued clients can trust Automation Brain in order to find competitiveness, cost saving while respecting the product quality and productivity.",
    image: ceoImg,
    linkedin: "https://www.linkedin.com/in/zahoor-ahmed-kayani-135122168/",
    whatsapp: "+923004065161",
    facebook: "https://www.facebook.com/Kayani1987",
    badge: "CEO",
  },
  {
    name: "Muhammad Shakeel Bhatti",
    role: "Director of Automation Brain – Leads All Team",
    description:
      "Expert in embedded systems, PLC programming, and machine integration. As Director Technical, he ensures seamless delivery of smart, automated, and industrial-grade solutions for clients across Pakistan and beyond.",
    image: directorImg,
    linkedin: "https://linkedin.com/in/m-shakeel-bhatti-5946a9173",
    whatsapp: "+923098882893",
    facebook: "https://www.facebook.com/shakeel.bhatti.169",
    badge: "Director",
  },
];

const staff = [
  {
    name: "Muhammad Sharjeel Bhatti",
    role: "Sales Executive",
    description:
      "Pakistan's trusted partner for industrial coding, marking, and packaging solutions.",
    image: Sharjeel,
    linkedin: "https://linkedin.com/in/muhammad-sharjeel-bhatti-105395313",
    whatsapp: "+923134435192",
    facebook: "https://www.facebook.com/sharjeel.bhatti.1000",
  },
  {
    name: "Asad Kayani",
    role: "Accounts Executive",
    description:
      "Creating fashion that is stunning, full of personality and confidence.",
    image: Asad,
    linkedin: "https://linkedin.com/in/asad-kayani-844090205",
    facebook: "https://www.facebook.com/asad.kayani.92372",
  },
  {
    name: "Laiba Tariq",
    role: "Customer Service Representative",
    description: "Customer support at Automation Brain.",
    image: Laiba,
    linkedin: "https://linkedin.com/in/laiba-tariq-b5a1962ab",
  },
  {
    name: "Aamir Kiani",
    role: "Admin Manager",
    description:
      "Addressing industrial coding, marking, packaging, inspection & traceability needs.",
    image: Aamir,
    linkedin: "https://linkedin.com/in/aamir-kiani-4a155b2ab",
    facebook: "https://www.facebook.com/profile.php?id=100093008336782",
  },
  {
    name: "Azeem Abid",
    role: "Assistant Manager Technical",
    description:
      "Managing and supporting technical operations within the company.",
    image: Azeem,
    linkedin: "https://linkedin.com/in/azeem-abid-826094253",
    facebook: "https://www.facebook.com/azeemabid901",
  },
  {
    name: "Tahir Islam",
    role: "Service Engineer",
    description:
      "Providing expert-level engineering services for clients at Automation Brain.",
    image: Tahir,
    linkedin: "https://linkedin.com/in/tahir-islam-4887792b0",
  },
  {
    name: "Sagheer Shah",
    role: "Integration & Packaging Specialist",
    description:
      "Facilitating end-to-end coding, packaging and system integration solutions.",
    image: Sagheer,
    linkedin: "https://linkedin.com/in/sagheer-shah-1832a0289",
    facebook: "https://www.facebook.com/sagheershah.vicky",
  },
  {
    name: "Muhammad Ali",
    role: "Senior Sales Representative",
    description:
      "Building strong client relationships and delivering innovative sales solutions to drive company growth and customer satisfaction.",
    image: Ali,
    linkedin: "https://www.linkedin.com/in/muhammad-ali-6b7b92241/",
    facebook:"https://www.facebook.com/muhammad.ali.968382"
  },
];

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-heading">Meet Our Leadership</h2>
      <div className="card-container">
        {leadership.map((person, index) => (
          <div
            key={index}
            className="about-card"
            data-badge={person.badge || "Staff"}
          >
            <img src={person.image} alt={person.name} className="profile-img" />
            <h3>{person.name}</h3>
            <p className="role">{person.role}</p>
            <p className="description">{person.description}</p>
            <div className="social-icons">
              {person.linkedin && (
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
              {person.whatsapp && (
                <a
                  href={`https://wa.me/${person.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              )}
              {person.facebook && (
                <a href={person.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
              )}
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 className="about-heading">Meet Our Team</h2>
      <div className="card-container">
        {staff.map((member, index) => (
          <div key={index} className="about-card" data-badge="Staff">
            <img src={member.image} alt={member.name} className="profile-img" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="description">{member.description}</p>
            <div className="social-icons">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
              {member.whatsapp && (
                <a
                  href={`https://wa.me/${member.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              )}
              {member.facebook && (
                <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
              )}
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
