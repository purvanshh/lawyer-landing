import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './CorporateSupport.css';

const CorporateSupport = () => {
    const stats = [
        { number: '120+', label: 'Happy Clients', description: 'Trusted by leading businesses' },
        { number: '18+', label: 'Years Experience', description: 'Industry expertise' },
        { number: '6000+', label: 'Cases Handled', description: 'Successful outcomes' },
    ];

    return (
        <section className="corporate-section" id="about">
            <div className="corporate-container">
                <div className="corporate-grid">
                    {/* Left Content */}
                    <motion.div
                        className="corporate-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">ABOUT US</span>
                        <h2 className="corporate-title">
                            COMPREHENSIVE CORPORATE LEGAL SUPPORT
                        </h2>
                        <p className="corporate-description">
                            We act as your on-demand legal partner offering strategic advice, contract negotiation,
                            and dispute resolution to help your business navigate complex legal landscapes with confidence.
                        </p>
                        <a href="#services" className="btn btn-outline corporate-cta">
                            Learn More <FiArrowRight />
                        </a>
                    </motion.div>

                    {/* Right Content - Stats */}
                    <motion.div
                        className="corporate-right"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="stats-header">
                            <h3 className="stats-title">WE ACT AS YOUR ON-DEMAND LEGAL PARTNER, OFFERING:</h3>
                        </div>

                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="stat-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                >
                                    <span className="stat-number">{stat.number}</span>
                                    <span className="stat-label">{stat.label}</span>
                                    <span className="stat-description">{stat.description}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CorporateSupport;
