import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import React, { useState } from 'react';
import rachelImage from '../assets/Rachel_Tan.jpg';

import './Aside.css';


const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };



  return (
      <aside className={`sidebar ${isOpen ? 'active' : ''}`} id="customSidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={rachelImage}
              alt="Rachel Tan"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Rachel Tan">
              Rachel Tan
            </h1>
            <p className="title">Software Engineer</p>
          </div>

          <button className="info_more-btn" onClick={toggleSidebar}>
            <span>{isOpen ? 'Hide Contacts' : 'Show Contacts'}</span>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>


          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box"><FaEnvelope /></div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:tanhaosmail@gmail.com" className="contact-link">tanhaosmail@gmail.com</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box"><FaPhone/></div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+14452607227" className="contact-link">+1 (445) 260-7227</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box"><FaCalendar/></div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="2000-07-11">Jan 3, 2000</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box"><FaMapMarkerAlt/></div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Philadelphia, PA, USA</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          {/* <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul> */}

        </div>
      </aside>
  )
}

export default Aside;
