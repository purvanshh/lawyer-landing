import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import lawyerImage from '../../assets/Google Gemini Image from Pixelcut.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                {/* Large Background Name - Single Line Above Image */}
                <motion.div
                    className="hero-name-bg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="name-bg-line">KANE WILLIAMS</span>
                </motion.div>

                <div className="hero-content">
                    {/* Left Side - Tagline */}
                    <motion.div
                        className="hero-left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="hero-tagline-box">
                            <h2 className="hero-tagline">
                                TRUSTED LEGAL<br />
                                COUNSEL FOR<br />
                                GROWING<br />
                                BUSINESSES
                            </h2>
                        </div>

                        <a href="#contact" className="btn btn-primary hero-cta">
                            <FiArrowRight className="cta-icon" /> Schedule a Free Consultation
                        </a>
                    </motion.div>

                    {/* Center - Lawyer Image */}
                    <motion.div
                        className="hero-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <div className="hero-image-wrapper">
                            <img
                                src={lawyerImage}
                                alt="Kane Williams - Professional Lawyer"
                                className="lawyer-portrait"
                            />
                            <div className="image-gold-line"></div>
                        </div>
                    </motion.div>

                    {/* Right Side - Empty for balance */}
                    <div className="hero-right"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
