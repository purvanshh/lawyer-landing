import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What types of businesses do you typically work with?',
            answer: 'We work with businesses of all sizes, from early-stage startups to established corporations. Our expertise spans technology, healthcare, manufacturing, retail, and professional services sectors. We tailor our approach to meet the unique needs of each client.'
        },
        {
            question: 'How do you structure your legal fees?',
            answer: 'We offer flexible fee arrangements including hourly rates, fixed fees for specific projects, and retainer arrangements for ongoing support. During our initial consultation, we\'ll discuss your needs and recommend the most cost-effective structure for your situation.'
        },
        {
            question: 'What is included in your corporate legal support package?',
            answer: 'Our comprehensive support includes contract drafting and review, corporate governance, regulatory compliance, employment matters, intellectual property protection, and strategic business advice. We act as your outsourced legal department.'
        },
        {
            question: 'How quickly can you respond to urgent legal matters?',
            answer: 'We understand that business doesn\'t wait. For retained clients, we offer 24/7 availability for urgent matters. For project-based clients, we typically respond within 4-6 business hours during normal working days.'
        },
        {
            question: 'Do you handle international business matters?',
            answer: 'Yes, we have extensive experience with cross-border transactions, international contracts, and multi-jurisdictional compliance. We\'ve helped clients expand into markets across North America, Europe, and Asia.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <motion.div
                    className="faq-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">FAQ</span>
                    <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
                </motion.div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">
                                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
