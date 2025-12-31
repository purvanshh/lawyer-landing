import React from 'react';
import { motion } from 'framer-motion';
import './Expertise.css';

const Expertise = () => {
    return (
        <section className="expertise-section">
            <div className="expertise-container">
                <motion.div
                    className="expertise-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="expertise-content">
                        <h2 className="expertise-title">
                            BUSINESS LAW BACKED BY REAL-WORLD EXPERTISE
                        </h2>
                        <p className="expertise-description">
                            We don't just understand the law—we understand business. Our team brings decades
                            of experience working with startups, scale-ups, and established corporations.
                            We've seen what works and what doesn't, allowing us to provide practical,
                            outcome-focused advice that helps you achieve your goals.
                        </p>
                        <div className="expertise-highlights">
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Strategic Legal Planning</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Risk Assessment & Mitigation</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Growth-Focused Counsel</span>
                            </div>
                        </div>
                    </div>

                    <div className="expertise-image">
                        <img
                            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=400&fit=crop"
                            alt="Scales of Justice"
                            className="scales-image"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Expertise;
