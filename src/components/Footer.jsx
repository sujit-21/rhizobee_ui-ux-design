import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '../data/servicesData';
import './Footer.css';

const currentYear = new Date().getFullYear();

export default function Footer({ onOpenConsultation }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="rh-footer">
      <div className="container">
        {/* Top Banner / Call to Action */}
        <div className="rh-footer-cta-card p-4 p-md-5 mb-5 text-center text-md-start">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h3 className="text-dark fw-bold mb-2">Ready to modernise how your business accepts payments?</h3>
              <p className="text-secondary mb-0">
                Join thousands of small business owners, retail CSPs, and fast-growing enterprises scaling with Rhizobee.
              </p>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <button 
                onClick={() => onOpenConsultation('payment-gateway')}
                className="btn-rh-primary px-4 py-3"
              >
                <span>Talk to Our Team</span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="row g-4 mb-5">
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-inline-block mb-3">
              <img src="/images/rhizobee-logo-full.png" alt="Rhizobee Innovations" height="42" />
            </Link>
            <p className="text-secondary small leading-relaxed mb-4">
              Rhizobee Innovations Private Limited delivers secure digital payment solutions — payment gateway, 
              QR, soundbox, POS, and PPI wallets — for businesses of every size, in partnership with leading 
              banks and payment aggregators.
            </p>

            <div className="d-flex flex-column gap-2 small text-secondary">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill text-primary"></i>
                <a href="tel:022-45857049" className="text-secondary text-decoration-none hover-white">
                  022-4585 7049
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill text-primary"></i>
                <a href="mailto:info@rhizobee.com" className="text-secondary text-decoration-none hover-white">
                  info@rhizobee.com
                </a>
              </div>
              <div className="d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt-fill text-primary mt-1"></i>
                <span>101, Wellington Business Park 2, Andheri Kurla Road, Marol, Andheri East, Mumbai 400059</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-shield-check text-success"></i>
                <span>Authorized Bank & Aggregator Distribution Partner</span>
              </div>
            </div>
          </div>

          {/* Individual Service Pages (User Requirement: All services separate page) */}
          <div className="col-lg-3 col-md-6">
            <h5 className="rh-footer-title">Payment Services</h5>
            <ul className="list-unstyled mb-0">
              {servicesList.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className="rh-footer-link">
                    <i className="bi bi-chevron-right"></i>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="rh-footer-title">Retailer & API</h5>
            <ul className="list-unstyled mb-0">
              {servicesList.slice(5).map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className="rh-footer-link">
                    <i className="bi bi-chevron-right"></i>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="rh-footer-link text-primary fw-semibold">
                  <i className="bi bi-grid"></i>
                  <span>All Services Hub</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className="rh-footer-title">Stay Updated</h5>
            <p className="text-secondary small mb-3">
              Subscribe for fintech updates, regulatory circulars, and product launches.
            </p>

            {subscribed ? (
              <div className="alert alert-success small py-2 px-3 rounded-pill text-center mb-4">
                <i className="bi bi-check-circle-fill me-1"></i> Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mb-4">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control rh-newsletter-input" 
                    placeholder="Enter email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className="btn btn-primary rounded-pill ms-2 px-3" type="submit">
                    <i className="bi bi-send-fill"></i>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Official Trust & Compliance Badges Strip */}
        <div className="py-4 my-2 border-top border-bottom border-secondary border-opacity-25">
          <div className="row g-3 align-items-center justify-content-between text-center text-md-start">
            <div className="col-lg-6">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3">
                <span className="badge bg-white text-dark border px-2.5 py-1.5 d-inline-flex align-items-center gap-1.5 shadow-sm">
                  <i className="bi bi-shield-lock-fill text-primary"></i> PCI-DSS v4.0
                </span>
                <span className="badge bg-white text-dark border px-2.5 py-1.5 d-inline-flex align-items-center gap-1.5 shadow-sm">
                  <i className="bi bi-patch-check-fill text-success"></i> ISO 27001
                </span>
                <span className="badge bg-white text-dark border px-2.5 py-1.5 d-inline-flex align-items-center gap-1.5 shadow-sm">
                  <i className="bi bi-lock-fill text-warning"></i> 256-Bit SSL
                </span>
                <span className="badge bg-white text-dark border px-2.5 py-1.5 d-inline-flex align-items-center gap-1.5 shadow-sm">
                  <i className="bi bi-bank2 text-info"></i> RBI Compliant Rails
                </span>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <span className="small text-secondary" style={{ fontSize: '0.73rem' }}>
                Regulated banking rails • Instant T+0 / T+1 settlements • 24/7 Merchant Support
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-secondary small">
          <div>
            © {currentYear} Rhizobee Innovations Private Limited. All rights reserved. · CIN: U72900DL2022PTC393198
          </div>
          
          <div className="d-flex gap-3">
            <Link to="/about" className="text-secondary text-decoration-none hover-primary">About</Link>
            <Link to="/solutions" className="text-secondary text-decoration-none hover-primary">Solutions</Link>
            <Link to="/industries" className="text-secondary text-decoration-none hover-primary">Industries</Link>
            <Link to="/careers" className="text-secondary text-decoration-none hover-primary">Careers</Link>
            <Link to="/contact" className="text-secondary text-decoration-none hover-primary">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
