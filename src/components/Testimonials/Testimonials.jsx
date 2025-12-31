import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import './Testimonials.css';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Mitchell',
            role: 'CEO, TechVentures Inc.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
            rating: 5,
            text: 'Kane Williams has been instrumental in navigating our company through complex M&A transactions. His strategic approach and attention to detail have saved us from potential legal pitfalls multiple times.'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Founder, GrowthStart Capital',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
            rating: 5,
            text: 'Outstanding legal counsel. The team understands the fast-paced nature of startups and provides practical advice that aligns with our business objectives. Highly recommend for any growing business.'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'COO, Global Enterprises',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
            rating: 5,
            text: 'We\'ve worked with many law firms, but the level of personalized attention and business acumen we receive here is unmatched. They truly become an extension of your team.'
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="testimonials-container">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">TESTIMONIALS</span>
                    <h2 className="testimonials-title">WHAT OUR CLIENTS SAY</h2>
                    <p className="testimonials-subtitle">
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                    </p>
                </motion.div>

                <div className="testimonials-carousel">
                    <button
                        className="carousel-btn prev-btn"
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <FiChevronLeft size={24} />
                    </button>

                    <div className="testimonials-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="testimonial-card"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="testimonial-content">
                                    <div className="testimonial-rating">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <FiStar key={i} className="star-icon" />
                                        ))}
                                    </div>
                                    <p className="testimonial-text">
                                        "{testimonials[currentIndex].text}"
                                    </p>
                                    <div className="testimonial-author">
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="author-image"
                                        />
                                        <div className="author-info">
                                            <span className="author-name">{testimonials[currentIndex].name}</span>
                                            <span className="author-role">{testimonials[currentIndex].role}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        className="carousel-btn next-btn"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <FiChevronRight size={24} />
                    </button>
                </div>

                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
