import React from 'react';
import "../../assets/css/ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-container">
        <div className="form-container">
          <h2 className="form-title">DROP US A LINE</h2>
          <form className="contact-form">
            <div className="form-group">
              <label for="name">Your Name (required)</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label for="email">Your Email (required)</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="phone">Your Phone Number</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>

        <div className="contact-info">
          <div>
            <h3 className="info-title">Telephone</h3>
            <p><a href="tel:+922138227000">FashionOrbit Helpline: +9221 38227292</a></p>
            <p><a href="https://wa.me">WhatsApp: +92 300 7807290</a></p>
          </div>
          <div className='contact_us_div'>
            <h3 className="info-title">Time</h3>
            <p>Mon - Fri: 9:00 AM to 6:00 PM</p>
            <p>Saturday: 9:00 AM to 4:00 PM</p>
          </div>
          <div className='contact_us_div'>
            <h3 className="info-title">Email</h3>
            <p>FOR WHOLESALE INQUIRY</p>
            <p><a href="mailto:Wholesale@FashionOrbit.pk">Email: Wholesale@FashionOrbit.pk</a></p>
            <p>FOR ORDER QUERIES</p>
            <p><a href="mailto:sale@FashionOrbit.pk">Email: sale@FashionOrbit.pk</a></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default ContactUs