import React from "react";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.facebook.com/AutomationBrainPvtLtd"
        className="icon facebook"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=923004065161&text=&source=&data="
        className="icon whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://www.linkedin.com/company/automation-brain-pvt-ltd/"
        className="icon linkedin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://www.youtube.com/channel/UCegs6UIwx6TFJI4GG66jAzA"
        className="icon youtube"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialIcons;
