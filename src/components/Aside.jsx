import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import React from 'react';
import rachelImage from '../assets/Rachel_Tan.jpg';


const Aside = () => {
  return (
    <aside className="sidebar" id="customSidebar">
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

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <GiClawSlashes />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:tanhaosmail@gmail.com" className="contact-link">
                  tanhaosmail@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+14452607227" className="contact-link">
                  +1 (445) 260-7227
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="2000-07-11">Jan 3, 2000</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiMayanPyramid/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Philadelphia, Pennsylvania, USA</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
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
          </ul>
        </div>
      </aside>
  )
}

export default Aside;
