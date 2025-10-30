import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/Testimonials.css';

// Import your images
import slide1 from "../assets/slider1.jpg";
import slide2 from "../assets/slider2.jpg";
import buildingImage from "../assets/building.jpg";
import ongoing1 from "../assets/ongoing1.jpg";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patel",
      location: "Ahmedabad",
      project: "Million Minds Tech City",
      rating: 5,
      text: "Shreeji Housing delivered our dream home before the promised timeline. The quality of construction and attention to detail is exceptional. We've been living here for 2 years and couldn't be happier.",
      image: slide1
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Gandhinagar",
      project: "Premium Residences",
      rating: 5,
      text: "The entire buying process was smooth and transparent. The customer service team was always available to answer our queries. The amenities and facilities are world-class.",
      image: slide2
    },
    {
      id: 3,
      name: "Amit Desai",
      location: "Vadodara",
      project: "Integrated Township",
      rating: 4,
      text: "As an NRI, I was concerned about property investment in India. Shreeji Housing made the process seamless with their professional approach and regular updates.",
      image: buildingImage
    },
    {
      id: 4,
      name: "Sunita Mehta",
      location: "Surat",
      project: "Luxury Apartments",
      rating: 5,
      text: "The after-sales service is outstanding. Any maintenance issues are resolved within hours. Truly a customer-centric real estate developer.",
      image: ongoing1
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Ahmedabad",
      project: "Tech City Phase 2",
      rating: 5,
      text: "The value appreciation of our property has been remarkable. Shreeji Housing not only builds homes but also creates valuable assets for generations.",
      image: slide1
    }
  ];

  const stats = [
    { number: "35K+", label: "Happy Customers" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24+", label: "Projects Delivered" },
    { number: "60+", label: "Years of Trust" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon 
        key={index} 
        icon={faStar} 
        className={index < rating ? "star filled" : "star"} 
      />
    ));
  };

  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="testimonials-hero" style={{ backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url(${buildingImage})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="testimonials-hero-content">
                <h1>What Our Customers Say</h1>
                <p>Discover why thousands of families trust Shreeji Housing for their dream homes. Read genuine testimonials from our satisfied customers.</p>
                <div className="hero-stats">
                  {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      <h3>{stat.number}</h3>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonials-hero-image">
                <img src="/logo.png" alt="Shreeji Housing" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="featured-testimonials">
        <div className="container">
          <div className="section-header text-center">
            <h2>Customer Success Stories</h2>
            <p>Real experiences from our valued customers across Gujarat</p>
          </div>
          
          <div className="testimonial-carousel">
            <div className="testimonial-main">
              <button className="carousel-btn prev-btn" onClick={prevTestimonial}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              
              <div className="testimonial-active">
                <div className="testimonial-card">
                  <div className="testimonial-image" style={{ backgroundImage: `url(${testimonials[currentTestimonial].image})` }}></div>
                  <div className="testimonial-content">
                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                    <div className="rating">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                    <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
                    <div className="testimonial-author">
                      <h4>{testimonials[currentTestimonial].name}</h4>
                      <p>{testimonials[currentTestimonial].location}</p>
                      <span className="project">{testimonials[currentTestimonial].project}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="carousel-btn next-btn" onClick={nextTestimonial}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="all-testimonials">
        <div className="container">
          <div className="section-header text-center">
            <h2>More Happy Customers</h2>
            <p>Read what others are saying about their Shreeji Housing experience</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-grid-item">
                <div className="testimonial-grid-image" style={{ backgroundImage: `url(${testimonial.image})` }}></div>
                <div className="testimonial-grid-content">
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="testimonial-grid-text">"{testimonial.text}"</p>
                  <div className="testimonial-grid-author">
                    <h5>{testimonial.name}</h5>
                    <p>{testimonial.location} • {testimonial.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials-cta" style={{ backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.9), rgba(42, 82, 152, 0.9)), url(${ongoing1})` }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2>Ready to Share Your Experience?</h2>
              <p>Join thousands of satisfied customers and share your Shreeji Housing journey with us.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">Share Your Story</Link>
                <Link to="/contact" className="btn btn-outline">Become a Customer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;