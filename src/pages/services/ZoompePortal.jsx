import React from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../../components/PartnerMarquee';
import './ZoompePortal.css';

export default function ZoompePortal({ onOpenConsultation }) {
  return (
    <div className="rh-zoompe-page">
      {/* Hero Section */}
      <section className="rh-zoompe-hero">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Zoompe Retailer Portal</span>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-9">
              <span className="rh-zoompe-badge mb-3 d-inline-block">
                <i className="bi bi-shop me-1"></i> Retailer & CSP Network
              </span>
              <h1 className="rh-hero-title-oneline mb-3">
                Introducing <span className="rh-gradient-text">Zoompe</span> — Our Retailer Portal
              </h1>
              <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
                We are excited to launch Zoompe, our dedicated retailer portal designed to empower 
                businesses and individuals with a complete suite of digital financial services, all under one platform. 
                Turn your shop into a digital mini-bank and earn attractive recurring commissions.
              </p>

              <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-shield-fill-check text-primary"></i>
                  <span className="text-dark small fw-semibold">Instant KYC</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-lightning-charge-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">Real-time Wallet Payouts</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-people-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">25,000+ Active Agents</span>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap gap-3">
                <a 
                  href="https://www.zoompe.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i> Visit www.zoompe.in
                </a>
                <button 
                  onClick={() => onOpenConsultation('zoompe-portal')}
                  className="btn-rh-outline px-4 py-3"
                >
                  <i className="bi bi-person-plus"></i> Register as Zoompe Agent
                </button>
                <a href="#services-grid" className="btn-rh-outline px-4 py-3">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid on Zoompe */}
      <section id="services-grid" className="py-5" style={{ background: '#f8fbff' }}>
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-zoompe-badge mb-2 d-inline-block">Full Suite</span>
            <h2>What You Get on Zoompe</h2>
            <p>A single retailer login powers over 30+ digital banking, bill payment, and travel services.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-bank fs-2 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Banking & Cash Services</h5>
                <ul className="list-unstyled text-secondary small mb-0 d-flex flex-column gap-2">
                  <li><i className="bi bi-check text-primary me-1"></i> Micro ATM Swiping</li>
                  <li><i className="bi bi-check text-primary me-1"></i> AEPS Cash Withdrawal</li>
                  <li><i className="bi bi-check text-primary me-1"></i> Aadhaar Pay</li>
                  <li><i className="bi bi-check text-primary me-1"></i> Bank CSP Point Setup</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-phone fs-2 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Recharge & Bill Payments</h5>
                <ul className="list-unstyled text-secondary small mb-0 d-flex flex-column gap-2">
                  <li><i className="bi bi-check text-primary me-1"></i> Prepaid Mobile (Jio, Airtel, Vi)</li>
                  <li><i className="bi bi-check text-primary me-1"></i> DTH Satellite Recharge</li>
                  <li><i className="bi bi-check text-primary me-1"></i> Electricity & Water Bills (BBPS)</li>
                  <li><i className="bi bi-check text-primary me-1"></i> FASTag Toll Top-up</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-airplane fs-2 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Travel & Booking</h5>
                <ul className="list-unstyled text-secondary small mb-0 d-flex flex-column gap-2">
                  <li><i className="bi bi-check text-primary me-1"></i> IRCTC Train Bookings</li>
                  <li><i className="bi bi-check text-primary me-1"></i> Domestic & International Flights</li>
                  <li><i className="bi bi-check text-primary me-1"></i> Intercity Bus Reservations</li>
                  <li><i className="bi bi-check text-primary me-1"></i> Hotel Bookings Nationwide</li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-shield-lock fs-2 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Financial Services</h5>
                <ul className="list-unstyled text-secondary small mb-0 d-flex flex-column gap-2">
                  <li><i className="bi bi-check text-primary me-1"></i> 2-Wheeler & Auto Insurance</li>
                  <li><i className="bi bi-check text-primary me-1"></i> Health & Term Insurance</li>
                  <li><i className="bi bi-check text-primary me-1"></i> Personal & Business Loans</li>
                  <li><i className="bi bi-check text-primary me-1"></i> Gold Loan Referrals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />
    </div>
  );
}
