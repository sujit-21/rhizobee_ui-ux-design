import React from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../../components/PartnerMarquee';
import './GiftCards.css';

export default function GiftCards({ onOpenConsultation }) {
  return (
    <div className="rh-gift-page">
      {/* Hero Section */}
      <section className="rh-gift-hero">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Brand Gift Vouchers & Gift Cards</span>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-9">
              <span className="rh-badge rh-badge-blue mb-3 d-inline-block">
                <i className="bi bi-gift-fill me-1"></i> Corporate Rewards & Gifting
              </span>
              <h1 className="rh-hero-title-oneline mb-3">
                Empower Recipients with <span className="rh-gradient-text">500+ Top Brand Vouchers</span>
              </h1>
              <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
                The modern way to delight employees, reward channel partners, and run festive campaigns. 
                Instant digital delivery via SMS, WhatsApp, and Email with custom corporate branding.
              </p>

              <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check2-circle text-primary"></i>
                  <span className="text-dark small fw-semibold">500+ Retail, Dining & Travel Brands</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check2-circle text-primary"></i>
                  <span className="text-dark small fw-semibold">Bulk CSV & Automated API Dispatch</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check2-circle text-primary"></i>
                  <span className="text-dark small fw-semibold">Zero Expiry Hassle & Online/Offline</span>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button 
                  onClick={() => onOpenConsultation('gift-cards')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-gift"></i> Book Bulk Corporate Order
                </button>
                <a href="#brands" className="btn-rh-outline px-4 py-3">
                  <i className="bi bi-grid-3x3-gap"></i> Supported Brands
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners Showcase */}
      <section className="py-5" style={{ background: '#f8fbff' }} id="brands">
        <div className="container py-4 text-center">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Infinite Choice</span>
            <h2>Supported Categories & Brands</h2>
            <p>From daily grocery essentials to luxury vacations, give your team the power to choose.</p>
          </div>

          <div className="row g-3">
            <div className="col-6 col-md-3">
              <div className="rh-card p-3">
                <i className="bi bi-cart3 fs-2 text-primary mb-2 d-block"></i>
                <h6 className="text-dark fw-bold">E-Commerce & Retail</h6>
                <div className="text-secondary small">Amazon, Flipkart, Myntra, Nykaa, Tata CLiQ</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="rh-card p-3">
                <i className="bi bi-egg-fried fs-2 text-primary mb-2 d-block"></i>
                <h6 className="text-dark fw-bold">Food & Dining</h6>
                <div className="text-secondary small">{"Zomato, Swiggy, Domino's, Starbucks, McDonald's"}</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="rh-card p-3">
                <i className="bi bi-tv fs-2 text-primary mb-2 d-block"></i>
                <h6 className="text-dark fw-bold">Electronics & Appliances</h6>
                <div className="text-secondary small">Croma, Reliance Digital, Vijay Sales, Apple</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="rh-card p-3">
                <i className="bi bi-airplane fs-2 text-primary mb-2 d-block"></i>
                <h6 className="text-dark fw-bold">Travel & Hotels</h6>
                <div className="text-secondary small">MakeMyTrip, Yatra, Taj Hotels, Uber, Ola</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />
    </div>
  );
}
