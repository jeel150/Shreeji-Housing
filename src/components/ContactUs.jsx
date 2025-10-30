import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '../Styles/ContactUs.css';


import slide1 from "../assets/slider1.jpg";
import slide2 from "../assets/slider2.jpg";
import slide3 from "../assets/slider3.jpg";
import buildingImage from "../assets/building.jpg";
import ongoing1 from "../assets/ongoing1.jpg";
import ongoing2 from "../assets/ongoing.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: 'Corporate Office',
      details: ['Shreeji Housing Corporation', '123 Business District', 'Ahmedabad, Gujarat - 380051'],
      link: '#'
    },
    {
      icon: faPhone,
      title: 'Phone Numbers',
      details: ['+91 79 2650 1234', '+91 79 2650 1235'],
      link: 'tel:+917926501234'
    },
    {
      icon: faEnvelope,
      title: 'Email Address',
      details: ['info@shreejihousing.com', 'sales@shreejihousing.com'],
      link: 'mailto:info@shreejihousing.com'
    },
    {
      icon: faClock,
      title: 'Office Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      link: '#'
    }
  ];

  const branches = [
    {
      city: 'Ahmedabad',
      address: 'Shreeji Housing, SG Highway, Ahmedabad',
      phone: '+91 79 2650 1001',
      email: 'ahmedabad@shreejihousing.com',
      image: slide1
    },
    {
      city: 'Gandhinagar',
      address: 'Shreeji Housing, Sector 16, Gandhinagar',
      phone: '+91 79 2650 1002',
      email: 'gandhinagar@shreejihousing.com',
      image: slide2
    },
    {
      city: 'Vadodara',
      address: 'Shreeji Housing, Alkapuri, Vadodara',
      phone: '+91 79 2650 1003',
      email: 'vadodara@shreejihousing.com',
      image: slide3
    },
    {
      city: 'Surat',
      address: 'Shreeji Housing, Athwa Lines, Surat',
      phone: '+91 79 2650 1004',
      email: 'surat@shreejihousing.com',
      image: ongoing1
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" style={{ backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url(${buildingImage})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-hero-content">
                <h1>Get In Touch With Us</h1>
                <p>We're here to help you find your dream home. Reach out to us for any inquiries, site visits, or project information.</p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3>24+</h3>
                    <p>Landmark Projects</p>
                  </div>
                  <div className="stat-item">
                    <h3>35K+</h3>
                    <p>Happy Customers</p>
                  </div>
                  <div className="stat-item">
                    <h3>60+</h3>
                    <p>Years Experience</p>
                  </div>
                   <div className="stat-item">
                    <h3>100+</h3>
                    <p>Happy Employee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-hero-image">
                <img src="/logo.png" alt="Shreeji Housing Contact" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Contact Form & Info Section */}
        <section className="contact-main">
            <div className="container">
            <div className="row">
                {/* Contact Information */}
                <div className="col-lg-4">
                <div className="contact-info-section">
                    <h2>Contact Information</h2>
                    <p>Get in touch with us through any of the following channels:</p>
                    
                    <div className="contact-info-list">
                    {contactInfo.map((item, index) => (
                        <div key={index} className="contact-info-item">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon={item.icon} />
                        </div>
                        <div className="contact-details">
                            <h4>{item.title}</h4>
                            {item.details.map((detail, idx) => (
                            <p key={idx}>{detail}</p>
                            ))}
                            {item.link !== '#' && (
                            <a href={item.link} className="contact-link">
                                Contact via {item.title.split(' ')[0]}
                            </a>
                            )}
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="contact-form-section">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and our team will get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="subject">Subject *</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="form-control"
                        >
                          <option value="">Select a subject</option>
                          <option value="project-inquiry">Project Inquiry</option>
                          <option value="site-visit">Schedule Site Visit</option>
                          <option value="investment">Investment Opportunity</option>
                          <option value="customer-support">Customer Support</option>
                          <option value="partnership">Business Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="form-control"
                      placeholder="Please describe your requirements in detail..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary submit-btn">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="project-showcase">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Ongoing Projects</h2>
            <p>Discover our current developments that are shaping the future of urban living</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="showcase-item" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${ongoing1})` }}>
                <div className="showcase-content">
                  <h3>Million Minds Tech City</h3>
                  <p>Ahmedabad's First Integrated Tech City Spanning Across 65 Acres</p>
                  <button className="btn btn-outline">View Project</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="showcase-item" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${ongoing2})` }}>
                <div className="showcase-content">
                  <h3>Premium Residences</h3>
                  <p>Luxury Apartments with World-Class Amenities</p>
                  <button className="btn btn-outline">View Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="branches-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Branches</h2>
            <p>Visit us at any of our conveniently located branches across Gujarat</p>
          </div>
          
          <div className="row">
            {branches.map((branch, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="branch-card">
                  <div className="branch-image" style={{ backgroundImage: `url(${branch.image})` }}></div>
                  <div className="branch-content">
                    <h4>{branch.city}</h4>
                    <p>{branch.address}</p>
                    <div className="branch-contact">
                      <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                      <a href={`mailto:${branch.email}`}>{branch.email}</a>
                    </div>
                    <button className="btn btn-outline">Get Directions</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container-fluid">
          <div className="map-placeholder" style={{ backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.9), rgba(42, 82, 152, 0.9)), url(${slide1})` }}>
            <div className="map-content">
              <h3>Find Us Here</h3>
              <p>Corporate Office: Shreeji Housing, 123 Business District, Ahmedabad, Gujarat - 380051</p>
              <button className="btn btn-primary">Open in Google Maps</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;