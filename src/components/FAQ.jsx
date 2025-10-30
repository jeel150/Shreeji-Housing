import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faHome, faBuilding, faHandshake, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/FAQ.css';

// Import your images
import slide1 from "../assets/slider1.jpg";
import slide2 from "../assets/slider2.jpg";
import slide3 from "../assets/slider3.jpg";
import buildingImage from "../assets/building.jpg";
import ongoing1 from "../assets/ongoing1.jpg";


const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});

  const faqData = {
    general: [
      {
        question: "What is Shreeji Housing's experience in the real estate industry?",
        answer: "Shreeji Housing has been building lifestyle trends since 1960. With over 60 years of experience, we have delivered 24+ landmark projects, served 35,000+ happy customers, and developed 22+ million square feet of property across Gujarat."
      },
      {
        question: "Where are Shreeji Housing's projects located?",
        answer: "Our projects are primarily located in Ahmedabad and surrounding areas in Gujarat. We specialize in developing integrated townships, residential complexes, and commercial spaces in prime locations with excellent connectivity and amenities."
      },
      {
        question: "What types of properties does Shreeji Housing develop?",
        answer: "We develop a diverse portfolio including residential apartments, villas, integrated townships, commercial spaces, and tech cities like our flagship project 'Million Minds Tech City' spanning 65 acres."
      },
      {
        question: "Is Shreeji Housing a registered real estate developer?",
        answer: "Yes, Shreeji Housing is a registered and certified real estate developer under RERA (Real Estate Regulatory Authority). We maintain complete transparency and compliance with all regulatory requirements."
      }
    ],
    buying: [
      {
        question: "What payment plans do you offer?",
        answer: "We offer flexible payment plans including construction-linked plans, down payment options, and easy EMI facilities. We also provide home loan assistance through our partner banks and financial institutions."
      },
      {
        question: "What documents are required for booking a property?",
        answer: "Basic documents include identity proof, address proof, passport-sized photographs, and income proof for loan applications. Our sales team will guide you through the entire documentation process."
      },
      {
        question: "Do you provide possession certificates?",
        answer: "Yes, we provide all necessary documents including possession certificate, occupancy certificate, and property papers upon full payment and project completion as per regulatory guidelines."
      },
      {
        question: "Can I visit the project site before booking?",
        answer: "Absolutely! We encourage site visits and provide guided tours of our ongoing projects. You can schedule a site visit through our sales office or website."
      }
    ],
    construction: [
      {
        question: "What construction quality standards do you follow?",
        answer: "We adhere to international construction standards using premium quality materials, advanced construction technologies, and stringent quality control measures. All our projects undergo multiple quality checks at every stage."
      },
      {
        question: "Do you use earthquake-resistant construction methods?",
        answer: "Yes, all our structures are designed and constructed to be earthquake-resistant as per Indian Standard codes. We employ seismic-resistant design principles to ensure safety and structural integrity."
      },
      {
        question: "What amenities are typically included in your projects?",
        answer: "Our projects include modern amenities like clubhouse, swimming pool, gymnasium, landscaped gardens, children's play area, security systems, power backup, and dedicated parking spaces."
      },
      {
        question: "How long does it take to complete a typical project?",
        answer: "Project timelines vary based on scale and complexity. Typically, residential projects take 24-36 months from commencement to possession. We provide detailed project timelines and regular progress updates."
      }
    ],
    after_sales: [
      {
        question: "Do you provide after-sales service?",
        answer: "Yes, we have a dedicated customer care team that provides comprehensive after-sales service including maintenance support, complaint resolution, and assistance with any post-possession requirements."
      },
      {
        question: "What is your property maintenance policy?",
        answer: "We provide maintenance services for the first year after possession. Thereafter, we assist in forming resident welfare associations and provide guidance for smooth maintenance operations."
      },
      {
        question: "How do I report issues after possession?",
        answer: "You can report any issues through our customer care helpline, email support, or by visiting our customer service center. We have a structured process for timely resolution of concerns."
      },
      {
        question: "Do you help with property registration?",
        answer: "Yes, we provide complete assistance with property registration, documentation, and legal formalities. Our legal team guides you through the entire registration process."
      }
    ]
  };

  const categories = [
    { id: 'general', name: 'General Questions', icon: faHome },
    { id: 'buying', name: 'Buying Process', icon: faHandshake },
    { id: 'construction', name: 'Construction', icon: faBuilding },
    { id: 'after_sales', name: 'After Sales', icon: faFileContract }
  ];

  const toggleItem = (category, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  return (
    <div className="faq-page">
      {/* Hero Section with Background Image */}
      <section className="faq-hero" style={{ backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url(${buildingImage})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="faq-hero-content">
                <h1>Frequently Asked Questions</h1>
                <p>Find answers to common questions about Shreeji Housing projects, buying process, construction quality, and after-sales services.</p>
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
            <div className="col-lg-4">
              <div className="faq-hero-image">
                <img src="/logo.png" alt="Shreeji Housing" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="container">
          <div className="row">
            {/* Categories Sidebar */}
            <div className="col-lg-3">
              <div className="faq-categories">
                <h3>Categories</h3>
                <div className="category-list">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <FontAwesomeIcon icon={category.icon} />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="col-lg-9">
              <div className="faq-items">
                <h2 className="category-title">
                  <FontAwesomeIcon icon={categories.find(cat => cat.id === activeCategory)?.icon} />
                  {categories.find(cat => cat.id === activeCategory)?.name}
                </h2>
                
                <div className="accordion">
                  {faqData[activeCategory].map((item, index) => (
                    <div key={index} className="accordion-item">
                      <button
                        className="accordion-header"
                        onClick={() => toggleItem(activeCategory, index)}
                      >
                        <span>{item.question}</span>
                        <FontAwesomeIcon 
                          icon={openItems[`${activeCategory}-${index}`] ? faChevronUp : faChevronDown} 
                        />
                      </button>
                      {openItems[`${activeCategory}-${index}`] && (
                        <div className="accordion-content">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="faq-gallery">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Premium Projects</h2>
            <p>Explore some of our landmark developments that redefine luxury living</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="gallery-item" style={{ backgroundImage: `url(${slide1})` }}>
                <div className="gallery-overlay">
                  <h4>Modern Residences</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallery-item" style={{ backgroundImage: `url(${slide2})` }}>
                <div className="gallery-overlay">
                  <h4>Luxury Apartments</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallery-item" style={{ backgroundImage: `url(${slide3})` }}>
                <div className="gallery-overlay">
                  <h4>Integrated Townships</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="faq-cta" style={{ backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.9), rgba(42, 82, 152, 0.9)), url(${ongoing1})` }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2>Still Have Questions?</h2>
              <p>Can't find the answer you're looking for? Our team is here to help you with all your real estate queries.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                <a href="tel:+917987776222" className="btn btn-outline">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;