import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash, faArrowRight, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';

// Import your best building image
import buildingImage from "../assets/building.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', formData);
      alert('Login functionality would be implemented here!');
      setIsLoading(false);
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const quickActions = [
    { label: 'Forgot Password?', action: () => alert('Password reset functionality') },
    { label: 'Create Account', action: () => alert('Account creation') },
    { label: 'Need Help?', action: () => alert('Support contact') }
  ];

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side - Login Form */}
        <div className="login-form-section">
          <div className="login-header">
            <div className="logo-container">
              <FontAwesomeIcon icon={faBuilding} className="logo-icon" />
              <div className="logo-text">
                <h2>Shreeji</h2>
                <h3>HOUSING</h3>
              </div>
            </div>
            <h1>Member Login</h1>
            <p>Access your exclusive member portal</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username or Email</label>
              <div className="input-with-icon">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username or email"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="form-input"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#forgot" className="forgot-link">Forgot Password?</a>
            </div>

            <button 
              type="submit" 
              className={`login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="spinner"></div>
              ) : (
                <>
                  Sign In
                  <FontAwesomeIcon icon={faArrowRight} />
                </>
              )}
            </button>

            <div className="quick-actions">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  type="button"
                  className="quick-action-btn"
                  onClick={action.action}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </form>

          <div className="login-footer">
            <p>New to Shreeji Housing? <Link to="/contact">Contact Sales</Link></p>
            <div className="security-note">
              <FontAwesomeIcon icon={faLock} />
              <span>Your information is securely encrypted</span>
            </div>
          </div>
        </div>

        {/* Right Side - Background Image */}
        <div 
          className="login-image-section"
          style={{ backgroundImage: `linear-gradient(rgba(30, 60, 114, 0.7), rgba(42, 82, 152, 0.7)), url(${buildingImage})` }}
        >
          <div className="image-overlay">
            <div className="welcome-content">
              <h2>Welcome Back!</h2>
              <p>Access exclusive member benefits, project updates, and personalized services.</p>
              
              <div className="features-list">
                <div className="feature-item">
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>Project Portfolio</span>
                </div>
                <div className="feature-item">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Personal Dashboard</span>
                </div>
                <div className="feature-item">
                  <FontAwesomeIcon icon={faLock} />
                  <span>Secure Documents</span>
                </div>
              </div>

              <div className="stats">
                <div className="stat">
                  <h3>35K+</h3>
                  <p>Members</p>
                </div>
                <div className="stat">
                  <h3>24+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat">
                  <h3>60+</h3>
                  <p>Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;