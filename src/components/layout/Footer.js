import React from 'react'
import "../../assets/css/Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>

            <div className='margin'></div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="row">
                        <div className="footer-column">
                            <h4>Links</h4>
                            {/* <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Clothes</a></li>
                                <li><a href="/">Shoes</a></li>
                                <li><a href="/">Bags</a></li>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Contact us</a></li>
                            </ul> */}

                            <ul className="navbar-nav nav_elements">
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link " to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link " to="/shoes">Shoes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link " to="/clothes">Clothes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link " to="/bags">Bags</NavLink>
                                </li>
                                
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Customer Care</h4>
                            <ul>
                                <li><a href=".././pages/AboutUs.js">About us</a></li>
                                <li><a href="../pages/ContactUs.js">Contact us</a></li>
                                <li><a href="/">Terms od Use</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Subscribe to FashionOrbit</h4>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <form>
                                <input type="email" placeholder="Email address" required />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>


                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Company, Inc. All rights reserved.</p>
                    <div className="social-icons">
                        <a href="/"><FaTwitter /></a>
                        <a href="/"><FaInstagram /></a>
                        <a href="/"><FaFacebook /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
