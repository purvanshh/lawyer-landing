import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <span className="logo-icon">⚖</span>
                            <span className="logo-text">Kane Williams</span>
                        </a>
                        <p className="footer-tagline">
                            Trusted Legal Counsel for Growing Businesses. Expert corporate law,
                            contracts, and business strategy.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <FiLinkedin size={18} />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <FiTwitter size={18} />
                            </a>
                            <a href="#" className="social-link" aria-label="Facebook">
                                <FiFacebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-links">
                        <h4 className="footer-heading">Services</h4>
                        <ul>
                            <li><a href="#">Corporate Law</a></li>
                            <li><a href="#">Contract Drafting</a></li>
                            <li><a href="#">M&A Advisory</a></li>
                            <li><a href="#">IP Protection</a></li>
                            <li><a href="#">Compliance</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <h4 className="footer-heading">Contact Us</h4>
                        <div className="contact-item">
                            <FiMail size={16} />
                            <span>contact@kanewilliams.com</span>
                        </div>
                        <div className="contact-item">
                            <FiPhone size={16} />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="contact-item">
                            <FiMapPin size={16} />
                            <span>123 Legal Avenue, Suite 500<br />New York, NY 10001</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Kane Williams Law. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
