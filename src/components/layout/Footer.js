import React from "react";
import "../../assets/css/Footer.css";
import { NavLink, Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!isSubscribed) {
      toast.success("Congratulations! You've subscribed to FashionOrbit");
      setIsSubscribed(true);
    } else {
      toast.info("You've unsubscribed from FashionOrbit");
      setIsSubscribed(false);
      setEmail("");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="margin"></div>
      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            <div className="footer-column">
              <h4>Links</h4>
              <ul className="navbar-nav nav_elements">
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/shoes"
                  >
                    Shoes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/clothes"
                  >
                    Clothes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/bags"
                  >
                    Bags
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Customer Care</h4>
              <ul className="navbar-nav nav-elements">
                <li className="nav-item">
                  <Link
                    activeClassName="active"
                    className="nav-link"
                    to="/faqs"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClassName="active"
                    className="nav-link"
                    to="/about_us"
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/contact_us"
                  >
                    Contact us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/privacy_policy"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/terms_of_use"
                  >
                    Terms of Use
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Subscribe to FashionOrbit</h4>
              <p>Monthly digest of what's new and exciting from us.</p>
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder={isSubscribed ? email : "Email address"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubscribed}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: isSubscribed ? "red" : "#007bff",
                    color: "white",
                  }}
                >
                  {isSubscribed ? "Unsubscribe" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} <i>FashionOrbit</i>, Inc. All
            rights reserved.
          </p>
          <div className="social-icons">
            <a className="twit" href="https://x.com/fashion?lang=en">
              <FaTwitter />
            </a>
            <a className="insta" href="https://www.instagram.com/orbit.vtg/git">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/fashionorbitbd/">
              <FaFacebook />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
