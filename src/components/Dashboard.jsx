import React, { useState, useEffect, useRef } from "react";
import "../Styles/App.css";
import housingVideo from "../assets/hero.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser, faEnvelope, faPhone, faComment } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import Footer from './Footer';

import slide1 from "../assets/slider1.jpg";
import slide2 from "../assets/slider2.jpg";
import slide3 from "../assets/slider3.jpg";
import buildingImage from "../assets/building.jpg";
import ongoing1 from "../assets/ongoing.jpg";
import ongoing2 from "../assets/ongoing1.jpg";

const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime = null;
          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            setCount(Math.floor(percentage * end));
            
            if (percentage < 1) {
              requestAnimationFrame(animateCount);
            }
          };
          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedYear, setSelectedYear] = useState(2016);
  const [isLandmarksAutoPlaying, setIsLandmarksAutoPlaying] = useState(true);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });
  const autoPlayRef = useRef(null);
  const landmarksAutoPlayRef = useRef(null);
  const yearsListRef = useRef(null);
  const enquireFormRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleEnquire = () => {
    setIsEnquireOpen(!isEnquireOpen);
  };

  const closeEnquire = () => {
    setIsEnquireOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call or other logic here
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      comment: ''
    });
    closeEnquire();
  };

  // Close enquire form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (enquireFormRef.current && !enquireFormRef.current.contains(event.target)) {
        closeEnquire();
      }
    };

    if (isEnquireOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isEnquireOpen]);

  // Sample slideshow images
  const slides = [slide1, slide2, slide3];

  // Ongoing projects data
  const projects = [
    {
      id: 1,
      image: ongoing1,
      title: "Million Minds Tech City",
      description: "Ahmedabad's First Integrated Tech City Spanning Across 65 Acres",
      buttonText: "VIEW PROJECTS →"
    },
    {
      id: 2,
      image: ongoing2,
      title: "Another Project",
      description: "Description for the second project",
      buttonText: "VIEW PROJECTS →"
    }
  ];

  // Landmarks data
  const landmarksData = {
    2008: {
      title: "MAGNET C.PARK",
      units: "No of Units, 37"
    },
    2010: {
      title: "SUNDARVAN EPITOME", 
      units: "No of Units, 46"
    },
    2012: {
      title: "PROJECT NAME 2012",
      units: "No of Units, 40"
    },
    2014: {
      title: "PROJECT NAME 2014",
      units: "No of Units, 35"
    },
    2016: {
      title: "PROJECT NAME 2016",
      units: "No of Units, 32"
    },
    2018: {
      title: "PROJECT NAME 2018",
      units: "No of Units, 28"
    },
    2020: {
      title: "PROJECT NAME 2020",
      units: "No of Units, 25"
    },
    2022: {
      title: "PROJECT NAME 2022",
      units: "No of Units, 20"
    },
    2024: {
      title: "PROJECT NAME 2024",
      units: "No of Units, 18"
    }
  };

  const years = [2008, 2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024];

  // Auto scroll to selected year
  const scrollToYear = (year) => {
    if (yearsListRef.current) {
      const yearIndex = years.indexOf(year);
      const yearElement = yearsListRef.current.children[yearIndex];
      if (yearElement) {
        const container = yearsListRef.current;
        const yearLeft = yearElement.offsetLeft;
        const yearWidth = yearElement.offsetWidth;
        const containerWidth = container.offsetWidth;
        
        container.scrollTo({
          left: yearLeft - (containerWidth / 2) + (yearWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  };

  // Auto-advance slideshow
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Auto slide functionality for ongoing projects
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, projects.length]);

  // Auto slide functionality for landmarks
  useEffect(() => {
    if (isLandmarksAutoPlaying) {
      landmarksAutoPlayRef.current = setInterval(() => {
        setSelectedYear(prev => {
          const currentIndex = years.indexOf(prev);
          const nextIndex = (currentIndex + 1) % years.length;
          const nextYear = years[nextIndex];
          setTimeout(() => scrollToYear(nextYear), 100);
          return nextYear;
        });
      }, 3000);
    }

    return () => {
      if (landmarksAutoPlayRef.current) {
        clearInterval(landmarksAutoPlayRef.current);
      }
    };
  }, [isLandmarksAutoPlaying, years]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextYear = () => {
    const currentIndex = years.indexOf(selectedYear);
    const nextIndex = (currentIndex + 1) % years.length;
    const nextYear = years[nextIndex];
    setSelectedYear(nextYear);
    setTimeout(() => scrollToYear(nextYear), 100);
  };

  const prevYear = () => {
    const currentIndex = years.indexOf(selectedYear);
    const prevIndex = (currentIndex - 1 + years.length) % years.length;
    const prevYear = years[prevIndex];
    setSelectedYear(prevYear);
    setTimeout(() => scrollToYear(prevYear), 100);
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setTimeout(() => scrollToYear(year), 100);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const handleLandmarksMouseEnter = () => {
    setIsLandmarksAutoPlaying(false);
    if (landmarksAutoPlayRef.current) {
      clearInterval(landmarksAutoPlayRef.current);
    }
  };

  const handleLandmarksMouseLeave = () => {
    setIsLandmarksAutoPlaying(true);
  };

  return (
    <div className="main-container">
      {/* Enquire Now Popup */}
      {isEnquireOpen && (
        <div className="enquire-overlay">
          <div className="enquire-form-container" ref={enquireFormRef}>
            <div className="enquire-form-header">
              <h2>Enquire Now</h2>
              <button className="close-btn" onClick={closeEnquire}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <form className="enquire-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faPhone} className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-with-icon">
                  <FontAwesomeIcon icon={faComment} className="input-icon textarea-icon" />
                  <textarea
                    name="comment"
                    placeholder="Write your comment..."
                    value={formData.comment}
                    onChange={handleInputChange}
                    rows="4"
                  ></textarea>
                </div>
              </div>
              
              <button type="submit" className="submit-btn">
                SUBMIT ENQUIRY
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section with Video */}
      <div className="dashboard-container">
        <video
          className="background-video"
          src={housingVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

       <div className="overlay">
         <nav className="navbar">
          <button className="menu-btn" onClick={toggleMenu}>
           <FontAwesomeIcon icon={faBars} />
           </button>

              <div className="logo-container">
                <img src="/logo.png"  alt="Ganesh Housing Logo" className="logo-image"/>
                <h2 className="logo">SHREEJI HOUSING </h2>
              </div>

          <button className="enquire-btn" onClick={toggleEnquire}>Enquire Now</button>
         </nav>  
         <Sidebar isOpen={isMenuOpen} onClose={closeMenu} />
        </div>
      </div>

      {/* Rest of your existing components remain the same */}
      {/* About Company Section */}
      <section className="about-company">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2>ABOUT COMPANY</h2>
              <h1>BUILDING LIFESTYLE TRENDS SINCE 1960</h1>
              <p>
                When it comes to the real estate landscape in Gujarat,
                <strong> Ganesh Housing Limited</strong> (formerly known as Ganesh Housing
                Corporation Limited) is one of the top real estate developers
                in Ahmedabad and stands tall as the undeniable leader. We
                are the pioneers of Ahmedabad's organized housing and
                construction industry. A legacy that traces its roots back to
                the visionary founder Chairman, Late Shree Govindbhai C.
                Patel, who embarked on this remarkable journey in the 1960s.
              </p>
              <p className="discover-text">
                Discover how we've transformed the art of living in Gujarat!
              </p>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>
            
            <div className="symbol-slideshow">
              <div className="symbol-container">
                <div className="slideshow-wrapper">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`slide ${index === currentSlide ? 'active' : ''}`}
                      style={{ backgroundImage: `url(${slide})` }}
                    />
                  ))}
                  <div className="slideshow-dots">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MILESTONES START ========== */}
      <section className="milestones">
        <div className="milestones-container">
          <div className="milestones-header">
            <h2>MILESTONES ACHIEVED</h2>
            <p>
              With a legacy of delivering landmark projects, we take pride in achieving milestones that reflect trust, quality, and excellence. From creating iconic residential communities to developing large-scale commercial spaces, our journey is marked by innovation and customer satisfaction. Every milestone achieved is a step forward in shaping skylines and enriching lifestyles.
            </p>
          </div>
          
          <div className="milestones-grid">
            <div className="milestone-item">
              <div className="milestone-number">
                <Counter end={24} suffix="+" />
              </div>
              <div className="milestone-divider"></div>
              <div className="milestone-label">LANDMARK PROJECTS</div>
            </div>
            
            <div className="milestone-item">
              <div className="milestone-number">
                <Counter end={35000} suffix="+" />
              </div>
              <div className="milestone-divider"></div>
              <div className="milestone-label">HAPPY CUSTOMERS</div>
            </div>
            
            <div className="milestone-item">
              <div className="milestone-number">
                <Counter end={22} suffix="M SQFT +" />
              </div>
              <div className="milestone-divider"></div>
              <div className="milestone-label">DEVELOPED & SOLD</div>
            </div>
            
            <div className="milestone-item">
              <div className="milestone-number">
                <Counter end={35} suffix="M SQFT +" />
              </div>
              <div className="milestone-divider"></div>
              <div className="milestone-label">UPCOMING DEVELOPMENT</div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== MILESTONES END ========== */}

       {/* ========== BUILDING IMAGE SECTION ========== */}
      <section className="building-image-section">
        <div className="building-image-container">
          <img 
            src={buildingImage} 
            alt="Modern Building Architecture" 
            className="building-image"
          />
        </div>
      </section>
       {/* ========== BUILDING IMAGE SECTION END ========== */}

         {/* ========== ONGOING PROJECTS SECTION ========== */}
      <section className="ongoing-projects">
        <div className="container">
          <div className="ongoing-projects-header text-center mb-5">
            <h2 className="section-title">ONGOING PROJECTS</h2>
          </div>
          
          <div 
            className="ongoing-projects-carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="carousel-container">
              <button className="carousel-arrow carousel-arrow-prev" onClick={prevProject}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="carousel-track">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`carousel-slide ${index === currentProject ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="slide-overlay">
                      <div className="slide-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <button className="view-project-btn">
                          {project.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="carousel-arrow carousel-arrow-next" onClick={nextProject}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentProject ? 'active' : ''}`}
                  onClick={() => setCurrentProject(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ========== ONGOING PROJECTS SECTION  END========== */}

      {/* ========== LANDMARKS SECTION ========== */}
      <section className="landmarks-section">
        <div className="container">
          <div className="landmarks-header text-center mb-5">
            <h2 className="section-title1">LANDMARKS WE CREATED</h2>
          </div>
          
          <div 
            className="landmarks-container"
            onMouseEnter={handleLandmarksMouseEnter}
            onMouseLeave={handleLandmarksMouseLeave}
          >
            {/* Years Timeline */}
            <div className="years-timeline">
              <button className="timeline-arrow timeline-arrow-prev" onClick={prevYear}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="years-list" ref={yearsListRef}>
                {years.map((year) => (
                  <div key={year} className="year-item-wrapper">
                    <button
                      className={`year-item ${year === selectedYear ? 'active' : ''}`}
                      onClick={() => handleYearClick(year)}
                    >
                      {year}
                    </button>
                    {year === selectedYear && (
                      <>
                        <div className="year-indicator-line"></div>
                        <div className="project-card">
                          <h3 className="project-title">{landmarksData[year].title}</h3>
                          <p className="project-units">{landmarksData[year].units}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <button className="timeline-arrow timeline-arrow-next" onClick={nextYear}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ========== LANDMARKS SECTION END ========== */}
         <Footer />        
    </div>
  );
}

export default Dashboard;