import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  useEffect(() => {
    emailjs.init('n1CxyCoBR0KKpae9w'); // public key
  }, []);


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_7aw6a76", "template_7hm1u4p", e.target)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        alert('🎉 Boom! Your message has been sent successfully. Sit tight, I’ll get back to you soon!');
      }, (error) => {
        console.log('FAILED...', error.text);
        alert('😕 Oops, something went wrong. Maybe the email gods are angry. Please try again in a bit~');
      });
    e.target.reset(); // Reset the form after submission
  };
  


  return (

    <section className="contact" data-page="contact">
      
      <header>
        <h2 className="h2 article-title">Contact 🦉</h2>
      </header>


      <section className="contact-form">
      <h3 className="h3">Meet Me Up</h3>
      <div className="text">
      <p>I’m currently living in Philadelphia — if you’re nearby (like NJ, New York), I'm more than happy to meet up. </p>
      <p>Not around? No worries! You can always shoot me an email or a text. Feel free to reach out. 📱✉️</p>
      </div>
      </section>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195601.4862868092!2d-75.4294951007376!3d40.002344183499645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA%2C%20USA!5e0!3m2!1sen!2sbd!4v1718834928858!5m2!1sen!2sbd"
            width="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </figure>
      </section>





      <section className="contact-form">
      <h3 className="h3 form-title">Leave Me a Message</h3>
      <div className="text">
        <p>This service is powered by EmailJS and set to be totally anonymous — if you want me to hit you back, don’t forget to leave your email or phone. Otherwise, I’ll just assume you’re a secret admirer. 😉 </p>
      </div>
      
        <form id="contact_form" onSubmit={sendEmail} style={{ paddingTop: '10px' }}>

          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
          
          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>





    </section>
  );
};

export default Contact;
