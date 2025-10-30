import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/App.css';

function Sidebar({ isOpen, onClose }) {
  const handleMenuClick = () => {
    onClose(); // Close sidebar when menu item is clicked
  };

  return (
    <>
      {/* Overlay when menu is open */}
      {isOpen && <div className="menu-overlay" onClick={onClose}></div>}
      
      {/* Sliding Sidebar Menu */}
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          {/* Company Logo and Name */}
          <div className="sidebar-company">
            <img src="/logo.png" alt="Shreeji Housing" className="company-logo" />
            <div className="company-name">
              <h3>Shreeji</h3>
              <h4>HOUSING</h4>
            </div>
          </div>
          
          <button className="close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <div className="menu-content">
          <div className="menu-section">
            <Link to="/" className="menu-item" onClick={handleMenuClick}>
              HOME →
            </Link>
            <Link to="" className="menu-item" onClick={handleMenuClick}>
              PROJECTS →
            </Link>
            <Link to="" className="menu-item" onClick={handleMenuClick}>
              ABOUT SHREEJI →
            </Link>
            <Link to="/contact" className="menu-item" onClick={handleMenuClick}>
              CONTACT US →
            </Link>
            <Link to="/login" className="menu-item" onClick={handleMenuClick}>
              MEMBER LOGIN →
            </Link>
            <Link to="/investors" className="menu-item" onClick={handleMenuClick}>
              INVESTOR RELATIONS →
            </Link>
            <Link to="/testimonials" className="menu-item" onClick={handleMenuClick}>
              TESTIMONIALS →
            </Link>
            <Link to="/faq" className="menu-item" onClick={handleMenuClick}>
              FAQ →
            </Link>
          </div>
          
          <div className="contact-section">
            <h3>CONTACT US</h3>
            <p>100 FT. Hebatpur- Thaltej Road,<br />
               Nr. Sola Bridge, Off. S.G. Highway,<br />
               Ahmedabad 380</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;