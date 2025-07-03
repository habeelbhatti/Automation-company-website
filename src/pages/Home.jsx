import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

import fatima from '../assets/fatima.jpg';
import nestle from '../assets/nestle.jpg';
import unilever from '../assets/unilever.jpg';
import bigboard from '../assets/bigbird.jpg';
import guard from '../assets/guard.jpg';
import kashmir from '../assets/kashmirghee.jpg';
import mitchells from '../assets/mitchells.jpg';
import engro from '../assets/engro.jpg';

const Home = () => {
  const navigate = useNavigate();

  const clients = [
    { name: 'Fatima Fertilizer', image: fatima, description: 'Leading fertilizer producer in Pakistan supporting agriculture innovation.', link: 'https://www.fatima-group.com/' },
    { name: 'Nestle', image: nestle, description: 'Global leader in food & beverages with strong presence in Pakistan.', link: 'https://www.nestle.pk/' },
    { name: 'Unilever', image: unilever, description: 'Top multinational company in personal care, hygiene, and home products.', link: 'https://www.unilever.pk/' },
    { name: 'BigBird', image: bigboard, description: 'Premium outdoor advertising and digital display network.', link: 'https://bigbirdfoods.com/' },
    { name: 'Guard Rice Limited', image: guard, description: 'Innovative packaging solutions provider for top national brands.', link: 'https://guardgroup.pk/' },
    { name: 'Kashmir Cooking Oil', image: kashmir, description: 'Trusted name in quality edible oils & ghee for decades.', link: 'https://uil.com.pk/kashmir-cooking-oil-and-banaspati' },
    { name: "Mitchell's", image: mitchells, description: 'A trusted household brand in Pakistan offering quality sauces, ketchup & more.', link: 'https://www.mitchells.com.pk/brands-type/ketchup-sauces/' },
    { name: 'Engro Fertilizers', image: engro, description: 'One of the largest fertilizer manufacturers powering Pakistan’s agriculture.', link: 'https://www.engro.com/' }
  ];

  return (
    <div className="hero-modern">
      <div className="shining-stars"></div>

      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            Welcome to <br />
            <span>Automation Brain</span>
          </h1>

          <p className="hero-subheading">
            Pakistan’s No.1 Company for Dealing in Industrial Coding
          </p>

          <h3 className="typewriter-heading">
            <Typewriter
              words={['Industrial Automation', 'Smart Systems', '24/7 Support']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h3>

          <div className="hero-buttons">
            <button onClick={() => navigate('/about')} className="btn-explore">🚀 Explore More</button>
            <button onClick={() => navigate('/contact')} className="btn-contact">📞 Contact Us</button>
          </div>
        </div>
      </div>

      <div className="client-section">
        <h2 className="client-heading">Our Loyal Clients</h2>
        <div className="client-cards">
          {clients.map((client, index) => (
            <a key={index} href={client.link} target="_blank" rel="noreferrer" className="client-card">
              <img src={client.image} alt={client.name} />
              <p className="client-name">{client.name}</p>
              <p className="client-desc">{client.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;