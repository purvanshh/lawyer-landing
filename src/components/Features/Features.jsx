import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiShield, FiLayers, FiBriefcase } from 'react-icons/fi';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: FiFileText,
            title: 'Legal Consultation',
            description: 'Expert guidance on complex legal matters with personalized solutions for your business.'
        },
        {
            icon: FiShield,
            title: 'Corporate Compliance',
            description: 'Ensure your business meets all regulatory requirements and industry standards.'
        },
        {
            icon: FiLayers,
            title: 'Intellectual Property',
            description: 'Protect your innovations, trademarks, and creative assets with comprehensive IP services.'
        },
        {
            icon: FiBriefcase,
            title: 'M&A Support',
            description: 'Navigate mergers and acquisitions with strategic legal support from due diligence to closing.'
        }
    ];

    return (
        <section className="features-section" id="services">
            <div className="features-container">
                <motion.div
                    className="features-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="features-title">
                        NOT JUST LEGAL ADVICE — BUSINESS STRATEGY WITH LEGAL CLARITY
                    </h2>
                    <p className="features-subtitle">
                        We combine deep legal expertise with strategic business thinking to help you
                        make informed decisions that drive growth.
                    </p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="feature-icon">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
