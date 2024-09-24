import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact 🦉</h2>
      </header>

      <section className="contact-info">
        <h3 className="h3 info-title">Get in Touch</h3>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <FaPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a>
              <p>Feel free to call or text</p>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaEnvelope />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:your.email@example.com" className="contact-link">your.email@example.com</a>
              <p>I'll respond as soon as possible</p>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Philadelphia, PA, USA</address>
              <p>Let's grab a coffee if you're nearby!</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="mapbox" data-mapbox>
        <h3 className="h3 map-title">Find Me Here</h3>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195601.4862868092!2d-75.4294951007376!3d40.002344183499645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA%2C%20USA!5e0!3m2!1sen!2sbd!4v1718834928858!5m2!1sen!2sbd"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </figure>
      </section>
    </article>
  );
};

export default Contact;