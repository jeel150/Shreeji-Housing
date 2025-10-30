import React from 'react';
import '../Styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Sections */}
        <div className="footer-sections">
          {/* Company Info Section */}
          <div className="footer-section company-section">
            <div className="company-header">
              <div className="logo-container">
                <img src="/logo.png" alt="Ganesh Housing Logo" className="logo-image"/>
                <div className="company-name">
                  <h2 className="company-line">Shreeji</h2>
                  <h2 className="company-line">HOUSING</h2>
                  <h2 className="company-line">LIMITED</h2>
                </div>
              </div>
            </div>
            <p className="company-description">
              Shreeji Housing Limited is the leading real estate developers in the Gujarat state with a legacy that spans more than six decades. Known as the pioneers of organized housing and construction.
            </p>
          </div>

          {/* About Shreeji Section */}
          <div className="about-section">
            <h3 className="about-title">ABOUT SHREEJI</h3>
            <ul className="about-links">
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="about-arrow" />
                <a href="#vision">Vision / Mission</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="about-arrow" />
                <a href="#accolades">Accolades</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="about-arrow" />
                <a href="#quality">Quality Commitment</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="about-arrow" />
                <a href="#sustainability">Implementing Sustainable Practices</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="about-arrow" />
                <a href="#csr">CSR Initiatives</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="links-section">
            <h3 className="Quick-title">QUICK LINKS</h3>
            <ul className="Quick-links">
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="Quick-arrow" />
                <a href="/testimonials">Testimonials</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="Quick-arrow" />
                <a href="/login">Member Login</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="Quick-arrow" />
                <a href="/investors">Investor Relations</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="Quick-arrow" />
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="Quick-arrow" />
                <a href="/contact">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="contactus-section">
            <h3 className="contact-title">CONTACT US</h3>
            <div className="contact-info">
              <p className="address">
                Ganesh Corporate House,<br />
                100 FT, Hebatpur-Thaltej Road, Nr. Sola Bridge,<br />
                Off. S.G. Highway, Ahmedabad 380 054, Gujarat, India.
              </p>
              <p className="email">
                <FontAwesomeIcon icon={faEnvelope} className="contact" />
                <a href="mailto:ganesh@ganeshhousing.com">ganesh@ganeshhousing.com</a>
              </p>
              <p className="phone">
                <FontAwesomeIcon icon={faPhone} className="contact" />
                <a href="tel:+917987776222">+91 79877 76222</a>
              </p>
               <h3 className="connect-title">CONNECT WITH US</h3>
                <div className="social-icons">
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
          </div>
            </div>
          </div>
        </div>

      

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Ganesh Housing Limited (formerly known as Ganesh Housing Corporation Limited). All Rights Reserved.
            </p>
            <div className="footer-links-bottom">
              <a href="#disclaimer">Disclaimer</a>
              <span className="separator">|</span>
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <span className="design-credit">Designed By [YYY]</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;