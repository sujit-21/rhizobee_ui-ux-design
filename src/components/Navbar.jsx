import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { servicesList } from '../data/servicesData';
import './Navbar.css';

export default function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
  }

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <>
      <header className={`rh-navbar-wrapper ${scrolled ? 'rh-navbar-scrolled' : ''}`}>
        <div className="container-fluid px-lg-5 py-2 py-lg-3">
          <div className="d-flex align-items-center justify-content-between">
            {/* Brand Logo */}
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
              <img 
                src="/images/rhizobee-logo-full.png" 
                alt="Rhizobee Innovations" 
                height="38" 
                className="d-inline-block"
                onError={(e) => {
                  // Fallback in case of image load delay
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline-block';
                }}
              />
              <span className="fw-bold fs-4 text-white" style={{ display: 'none' }}>
                <span className="text-primary">Rhizo</span>bee
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="d-none d-xl-flex align-items-center gap-1">
              <NavLink to="/" className={({ isActive }) => `rh-nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
              
              <NavLink to="/about" className={({ isActive }) => `rh-nav-link ${isActive ? 'active' : ''}`}>
                About Us
              </NavLink>

              {/* Services Mega Dropdown */}
              <div className="rh-services-dropdown">
                <Link 
                  to="/services" 
                  className={`rh-nav-link ${isServicesActive ? 'active' : ''}`}
                >
                  Services <i className="bi bi-chevron-down ms-1 small"></i>
                </Link>

                <div className="rh-dropdown-menu">
                  <div className="d-flex align-items-center justify-content-between pb-2 mb-2 border-bottom border-secondary border-opacity-25">
                    <span className="small text-muted fw-bold text-uppercase">Payment Services & Tools</span>
                    <Link to="/services" className="small text-primary fw-semibold text-decoration-none">
                      View All Services <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                  
                  <div className="row g-2">
                    {servicesList.map((service) => (
                      <div key={service.id} className="col-6">
                        <Link to={service.path} className="rh-dropdown-item">
                          <div className="rh-dropdown-icon">
                            <i className={`bi ${service.icon}`}></i>
                          </div>
                          <div>
                            <div className="fw-semibold text-dark small d-flex align-items-center gap-1">
                              {service.title}
                            </div>
                            <div className="text-secondary" style={{ fontSize: '0.75rem', lineHeight: '1.3' }}>
                              {service.category}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink to="/solutions" className={({ isActive }) => `rh-nav-link ${isActive ? 'active' : ''}`}>
                Solutions
              </NavLink>

              <NavLink to="/industries" className={({ isActive }) => `rh-nav-link ${isActive ? 'active' : ''}`}>
                Industries
              </NavLink>

              <NavLink to="/careers" className={({ isActive }) => `rh-nav-link ${isActive ? 'active' : ''}`}>
                Careers
              </NavLink>

              <NavLink to="/contact" className={({ isActive }) => `rh-nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </nav>

            {/* Right Action Buttons */}
            <div className="d-none d-lg-flex align-items-center gap-2.5">
              <a 
                href="https://www.zoompe.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-secondary d-flex align-items-center gap-1.5 px-3 py-2 rounded-pill fw-semibold"
                style={{ fontSize: '0.82rem', borderColor: '#cbd5e1', color: '#0f172a' }}
              >
                <i className="bi bi-person-lock text-primary"></i>
                <span>Merchant Portal</span>
              </a>

              <button 
                onClick={() => onOpenConsultation('payment-gateway')}
                className="btn-rh-primary"
                style={{ padding: '0.55rem 1.35rem', fontSize: '0.86rem' }}
              >
                <i className="bi bi-lightning-charge-fill text-warning"></i> Get in Touch
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="d-flex d-xl-none align-items-center gap-2">
              <button 
                onClick={() => onOpenConsultation('payment-gateway')}
                className="btn-rh-primary d-none d-sm-inline-flex"
                style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
              >
                Get in Touch
              </button>
              
              <button 
                className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center" 
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Toggle Navigation Menu"
                style={{ width: '42px', height: '42px', borderColor: '#cbd5e1', color: '#0f172a' }}
              >
                <i className="bi bi-list fs-5"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Drawer */}
      {mobileMenuOpen && (
        <div 
          className="offcanvas offcanvas-end show rh-offcanvas text-dark d-xl-none" 
          tabIndex="-1" 
          style={{ visibility: 'visible', width: '320px' }}
        >
          <div className="offcanvas-header border-bottom border-light-subtle p-3">
            <img src="/images/rhizobee-logo-full.png" alt="Rhizobee" height="32" />
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close"
            ></button>
          </div>
          
          <div className="offcanvas-body p-3 overflow-y-auto">
            <div className="d-flex flex-column gap-1">
              <NavLink to="/" className={({ isActive }) => `rh-mobile-link ${isActive ? 'active' : ''}`}>
                <span><i className="bi bi-house me-2"></i> Home</span>
                <i className="bi bi-chevron-right small"></i>
              </NavLink>

              <NavLink to="/about" className={({ isActive }) => `rh-mobile-link ${isActive ? 'active' : ''}`}>
                <span><i className="bi bi-info-circle me-2"></i> About Us</span>
                <i className="bi bi-chevron-right small"></i>
              </NavLink>

              {/* Mobile Services Accordion */}
              <div>
                <div 
                  className="rh-mobile-link cursor-pointer"
                  onClick={() => setServicesAccordionOpen(!servicesAccordionOpen)}
                  style={{ cursor: 'pointer' }}
                >
                  <span><i className="bi bi-grid-fill me-2 text-primary"></i> All Services</span>
                  <i className={`bi bi-chevron-${servicesAccordionOpen ? 'up' : 'down'} small`}></i>
                </div>

                {servicesAccordionOpen && (
                  <div className="ps-3 py-2 border-start border-secondary border-opacity-50 ms-3 d-flex flex-column gap-1">
                    <Link to="/services" className="small text-primary fw-semibold py-1 mb-1 text-decoration-none">
                      → Overview Services Hub
                    </Link>
                    {servicesList.map(s => (
                      <Link 
                        key={s.id} 
                        to={s.path} 
                        className="small text-secondary py-1 text-decoration-none d-flex align-items-center gap-2 hover-white"
                      >
                        <i className={`bi ${s.icon} text-primary small`}></i>
                        <span>{s.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to="/solutions" className={({ isActive }) => `rh-mobile-link ${isActive ? 'active' : ''}`}>
                <span><i className="bi bi-boxes me-2"></i> Solutions</span>
                <i className="bi bi-chevron-right small"></i>
              </NavLink>

              <NavLink to="/industries" className={({ isActive }) => `rh-mobile-link ${isActive ? 'active' : ''}`}>
                <span><i className="bi bi-building me-2"></i> Industries</span>
                <i className="bi bi-chevron-right small"></i>
              </NavLink>

              <NavLink to="/careers" className={({ isActive }) => `rh-mobile-link ${isActive ? 'active' : ''}`}>
                <span><i className="bi bi-briefcase me-2"></i> Careers</span>
                <i className="bi bi-chevron-right small"></i>
              </NavLink>

              <NavLink to="/contact" className={({ isActive }) => `rh-mobile-link ${isActive ? 'active' : ''}`}>
                <span><i className="bi bi-telephone me-2"></i> Contact Us</span>
                <i className="bi bi-chevron-right small"></i>
              </NavLink>
            </div>

            <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
              <a 
                href="https://www.zoompe.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary w-100 justify-content-center d-flex align-items-center gap-2 mb-2 rounded-pill fw-semibold"
                style={{ fontSize: '0.85rem' }}
              >
                <i className="bi bi-person-lock"></i> Merchant Portal Sign In
              </a>

              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('payment-gateway');
                }}
                className="btn-rh-primary w-100 justify-content-center mb-3"
              >
                Talk to Our Team
              </button>
              
              <div className="small text-secondary text-center">
                <i className="bi bi-envelope text-primary me-1"></i> info@rhizobee.com
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for mobile offcanvas */}
      {mobileMenuOpen && (
        <div 
          className="offcanvas-backdrop fade show d-xl-none"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
