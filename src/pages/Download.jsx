import React from 'react';
import { Download } from 'lucide-react';
import './Download.css';

const files = [
  {
    title: 'Company Profile',
    description: 'Download the official company profile of Automation Brain.',
    link: 'https://automation-brain.com/01_profile_final_5_02_21.pdf',
    downloads: '5,200+',
    updated: 'May 2025',
    label: 'Popular',
  },
  {
    title: 'MACSA Coding & Marketing',
    description: 'Explore affordable marking and coding solutions by MACSA.',
    link: 'https://automation-brain.com/02_macsa_k_1000.pdf',
    downloads: '3,800+',
    updated: 'April 2025',
    label: 'Updated',
  },
  {
    title: 'Leibinger Family',
    description: 'Detailed document on the Leibinger printers distributed by AB.',
    link: 'https://automation-brain.com/3_ab_leibinger_family.pdf',
    downloads: '2,900+',
    updated: 'March 2025',
    label: 'New',
  },
  {
    title: 'Food Safety Catalog',
    description: 'Our food-safe coding solutions for the food industry.',
    link: 'https://automation-brain.com/4_ab_catalog_for_food_safety_ver1.pdf',
    downloads: '4,100+',
    updated: 'Feb 2025',
    label: 'Popular',
  },
];

const DownloadSection = () => {
  return (
    <section className="download-wrapper">
      {/* Galaxy stars layer only in this section */}
      <div className="stars-layer"></div>

      <h2 className="download-heading">
        📥 Pro-Level Downloads by <span className="brand">Automation Brain</span>
      </h2>

      <div className="download-grid">
        {files.map((file, index) => (
          <div className="modern-card pro-card bounce-in" key={index}>
            <div className="ribbon">{file.label}</div>
            <h3>📄 {file.title}</h3>
            <p>{file.description}</p>
            <div className="meta">
              <span>📈 {file.downloads} downloads</span>
              <span>🕒 Updated: {file.updated}</span>
            </div>
            <a href={file.link} download target="_blank" rel="noopener noreferrer">
              <button className="download-btn pro-btn">
                <Download size={18} />
                <span className="slide-text">Download</span>
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DownloadSection;
