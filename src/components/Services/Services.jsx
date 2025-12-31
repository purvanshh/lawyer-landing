import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
    const services = [
        'Company Formation',
        'Contracts',
        'Investment Deals',
        'Mergers',
        'Legal Counsel',
        'Compliance'
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <motion.div
                    className="services-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="services-label">TRUSTED. EXPERIENCED. STRATEGIC.</span>
                    <p className="services-description">
                        With over 18 years of experience in corporate law, we provide comprehensive legal services
                        tailored to help businesses thrive in competitive markets. Our approach combines legal
                        expertise with business acumen.
                    </p>
                </motion.div>

                <motion.div
                    className="services-tags"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {services.map((service, index) => (
                        <motion.span
                            key={service}
                            className="service-tag"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <span className="tag-dot"></span>
                            {service}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
