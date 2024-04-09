import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import "../Publications/FraterDepartment.css"
import shower from "../../../assets/Img/Shower.png";
import wifi from "../../../assets/Img/Wifi.png";
import workspace from "../../../assets/Img/Workspace.png";

const FraterDepartment = ({ imageUrl, title, description }) => {
    return (
      <div className="frater-department">
        <img src={imageUrl} alt={title} className="frater-image" />
        <div className="description">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="amenities">
        <div className="amenity">
          <img src={shower} alt="Baño" />
          <span>Baño</span>
        </div>
        <div className="amenity">
          <img src={wifi} alt="WiFi" />
          <span>WiFi</span>
        </div>
        <div className="amenity">
          <img src={workspace} alt="Amueblado" />
          <span>Amueblado</span>
        </div>
        </div>
        <div className="social-links">
          <a href="#" className="social-link">
            <FaFacebook />
          </a>
          <a href="#" className="social-link">
            <FaWhatsapp />
          </a>
          <a href="#" className="social-link">
            <FaInstagram />
          </a>
        </div>
      </div>
    );
  };
  
  export default FraterDepartment;