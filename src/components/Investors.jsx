import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDollarSign, faUsers, faAward, faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/Investors.css';

// Import your images
import slide1 from "../assets/slider1.jpg";
import buildingImage from "../assets/building.jpg";
import ongoing1 from "../assets/ongoing1.jpg";

const Investors = () => {
  const financialHighlights = [
    { icon: faChartLine, value: "₹2,500 Cr", label: "Market Capitalization" },
    { icon: faDollarSign, value: "₹850 Cr", label: "Annual Revenue" },
    { icon: faUsers, value: "35,000+", label: "Customer Base" },
    { icon: faAward, value: "24+", label: "Successful Projects" }
  ];

  const reports = [
    { title: "Annual Report 2024", type: "PDF", size: "2.5 MB", date: "Mar 31, 2024" },
    { title: "Quarterly Results Q1 2024", type: "PDF", size: "1.8 MB", date: "Jun 30, 2024" },
    { title: "Investor Presentation", type: "PDF", size: "3.2 MB", date: "Jul 15, 2024" },
    { title: "Corporate Governance Report", type: "PDF", size: "1.2 MB", date: "Mar 31, 2024" }
  ];

  const keyMetrics = [
    { metric: "ROE", value: "18.5%", change: "+2.1%" },
    { metric: "Revenue Growth", value: "25.3%", change: "+5.2%" },
    { metric: "Profit Margin", value: "22.8%", change: "+1.8%" },
    { metric: "Debt to Equity", value: "0.45", change: "-0.12" }
  ];

  const upcomingEvents = [
    { date: "Aug 15, 2024", event: "Quarterly Earnings Call", type: "Virtual" },
    { date: "Sep 5, 2024", event: "Investor Meet", type: "Ahmedabad" },
    { date: "Oct 20, 2024", event: "Annual General Meeting", type: "Hybrid" },
    { date: "Nov 10, 2024", event: "Project Launch Event", type: "Gandhinagar" }
  ];

  return (
    <div className="investors-page">
      {/* Hero Section */}
      <section className="investors-hero" style={{ backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), url(${buildingImage})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="investors-hero-content">
                <h1>Investor Relations</h1>
                <p>Building value for our stakeholders through sustainable growth and transparent governance. Discover why Shreeji Housing is a preferred investment choice.</p>
                <div className="hero-stats">
                  {financialHighlights.map((item, index) => (
                    <div key={index} className="stat-item">
                      <FontAwesomeIcon icon={item.icon} className="stat-icon" />
                      <h3>{item.value}</h3>
                      <p>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="investors-hero-image">
                <img src="/logo.png" alt="Shreeji Housing" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Performance */}
      <section className="financial-performance">
        <div className="container">
          <div className="section-header text-center">
            <h2>Financial Performance</h2>
            <p>Strong fundamentals driving consistent growth and shareholder value</p>
          </div>
          
          <div className="metrics-grid">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <div className="metric-value">
                  <h3>{metric.value}</h3>
                  <span className={`metric-change ${metric.change.startsWith('+') ? 'positive' : 'negative'}`}>
                    {metric.change}
                  </span>
                </div>
                <h4>{metric.metric}</h4>
                <p>Year-over-Year Change</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Resources */}
      <section className="investor-resources">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="reports-section">
                <h2>Investor Resources</h2>
                <p>Access our latest financial reports and investor presentations</p>
                
                <div className="reports-list">
                  {reports.map((report, index) => (
                    <div key={index} className="report-item">
                      <div className="report-icon">
                        <FontAwesomeIcon icon={faFilePdf} />
                      </div>
                      <div className="report-details">
                        <h4>{report.title}</h4>
                        <div className="report-meta">
                          <span>{report.type}</span>
                          <span>{report.size}</span>
                          <span>{report.date}</span>
                        </div>
                      </div>
                      <button className="download-btn">
                        <FontAwesomeIcon icon={faDownload} />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="events-section">
                <h3>Upcoming Events</h3>
                <div className="events-list">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="event-item">
                      <div className="event-date">
                        <strong>{event.date}</strong>
                      </div>
                      <div className="event-details">
                        <h5 className="event">{event.event}</h5>
                        <span className="event-type">{event.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Story */}
      <section className="growth-story">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Growth Story</h2>
            <p>From a visionary beginning to becoming Gujarat's trusted real estate developer</p>
          </div>
          
          <div className="row">
            <div className="col-lg-6">
              <div className="growth-content">
                <h3>Building Legacy Since 1960</h3>
                <p>Shreeji Housing has been at the forefront of Gujarat's real estate evolution, consistently delivering value to customers and investors alike.</p>
                
                <div className="growth-highlights">
                  <div className="highlight-item">
                    <FontAwesomeIcon icon={faChartLine} />
                    <div>
                      <h4>Consistent Growth</h4>
                      <p>20% CAGR over the last decade</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <FontAwesomeIcon icon={faAward} />
                    <div>
                      <h4>Industry Recognition</h4>
                      <p>Multiple awards for excellence</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <FontAwesomeIcon icon={faUsers} />
                    <div>
                      <h4>Stakeholder Trust</h4>
                      <p>35,000+ satisfied families</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="growth-image" style={{ backgroundImage: `url(${ongoing1})` }}>
                <div className="growth-overlay">
                  <h4>Million Minds Tech City</h4>
                  <p>Our flagship 65-acre integrated development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Performance */}
      <section className="stock-performance" style={{ backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.9), rgba(42, 82, 152, 0.9)), url(${slide1})` }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2>Stock Performance</h2>
              <p>Track our market performance and investment opportunities</p>
              
              <div className="stock-metrics">
                <div className="stock-metric">
                  <h3>₹1,250</h3>
                  <p>Current Price</p>
                </div>
                <div className="stock-metric">
                  <h3>+15.2%</h3>
                  <p>YTD Return</p>
                </div>
                <div className="stock-metric">
                  <h3>2.5%</h3>
                  <p>Dividend Yield</p>
                </div>
              </div>
              
              <div className="cta-buttons">
                <button className="btn btn-primary">View Stock Chart</button>
                <Link to="/contact" className="btn btn-outline">Contact Investor Relations</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="investors-cta">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2>Stay Connected with Shreeji Housing</h2>
              <p>Get the latest updates on our performance, projects, and investment opportunities.</p>
            </div>
            <div className="col-lg-4 text-end">
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary">Subscribe to Updates</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;