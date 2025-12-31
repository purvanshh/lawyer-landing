import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import './Blog.css';

const Blog = () => {
    const posts = [
        {
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop',
            date: 'December 15, 2024',
            title: 'Essential Contract Clauses Every Business Should Include',
            excerpt: 'Protect your business with these critical contract provisions that can save you from costly disputes.',
            link: '#'
        },
        {
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop',
            date: 'December 10, 2024',
            title: 'Navigating Corporate Compliance in 2025',
            excerpt: 'New regulations are coming. Here\'s what your business needs to know to stay compliant.',
            link: '#'
        },
        {
            image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=300&fit=crop',
            date: 'December 5, 2024',
            title: 'How to Protect Your Startup\'s Intellectual Property',
            excerpt: 'From trademarks to trade secrets, learn the strategies that safeguard your innovations.',
            link: '#'
        }
    ];

    return (
        <section className="blog-section" id="blog">
            <div className="blog-container">
                <motion.div
                    className="blog-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">INSIGHTS</span>
                    <h2 className="blog-title">LATEST BLOG POSTS</h2>
                    <p className="blog-subtitle">
                        Stay informed with our latest insights on business law and corporate strategy.
                    </p>
                </motion.div>

                <div className="blog-grid">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.title}
                            className="blog-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} />
                                <div className="blog-image-overlay"></div>
                            </div>

                            <div className="blog-content">
                                <div className="blog-meta">
                                    <FiCalendar size={14} />
                                    <span>{post.date}</span>
                                </div>

                                <h3 className="blog-card-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>

                                <a href={post.link} className="blog-link">
                                    Read More <FiArrowRight />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
