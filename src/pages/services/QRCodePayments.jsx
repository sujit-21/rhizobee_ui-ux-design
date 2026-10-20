import React from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../../components/PartnerMarquee';
import './QRCodePayments.css';

export default function QRCodePayments({ onOpenConsultation }) {
  return (
    <div className="rh-qr-page">
      {/* Hero Section */}
      <section className="rh-qr-hero">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">QR Code Payments</span>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-9">
              <span className="rh-qr-badge-pill mb-3 d-inline-block">
                <i className="bi bi-qr-code-scan me-1"></i> Zero Hardware Acceptance
              </span>
              <h1 className="rh-hero-title-oneline mb-3">
                Accept Instant UPI Payments at <span className="rh-gradient-text">Zero Cost</span>
              </h1>
              <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
                Give every merchant, from a neighbourhood grocery store to a multi-counter supermarket, 
                a simple and lightning-fast way to accept UPI payments with 0% transaction fee and instant 
                bank settlement.
              </p>

              <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">All Apps: GPay, PhonePe, Paytm, BHIM</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">Static & Dynamic QR</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">Instant Audio/SMS Confirmation</span>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button 
                  onClick={() => onOpenConsultation('qr-code')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-qr-code"></i> Order Free QR Standee
                </button>
                <a href="#comparison" className="btn-rh-outline px-4 py-3">
                  <i className="bi bi-grid-3x3-gap-fill"></i> View QR Options
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-5" style={{ background: '#f8fbff' }} id="comparison">
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">QR Options</span>
            <h2>Choose the Right QR for Your Counter</h2>
            <p>From simple tabletop stickers to dynamic ERP-integrated billing monitors.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="rh-card p-4 h-100 text-center">
                <div className="rh-dropdown-icon mx-auto mb-3" style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}>
                  <i className="bi bi-aspect-ratio"></i>
                </div>
                <h4 className="text-dark fw-bold fs-5 mb-2">Static Countertop QR</h4>
                <p className="text-secondary small mb-3">
                  Heavy-duty weather-proof acrylic standee placed at cash counter. Customers enter amount manually on their phone.
                </p>
                <span className="badge small px-2.5 py-1" style={{ background: '#e0f2fe', color: '#0284c7', border: '1px solid #bae6fd' }}>Ideal for Kirana & Cafes</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100 text-center" style={{ borderColor: '#7dd3fc' }}>
                <div className="rh-dropdown-icon mx-auto mb-3" style={{ width: '50px', height: '50px', fontSize: '1.5rem', background: '#e0f2fe', color: '#0284c7' }}>
                  <i className="bi bi-display"></i>
                </div>
                <h4 className="text-dark fw-bold fs-5 mb-2">Dynamic Billing QR</h4>
                <p className="text-secondary small mb-3">
                  Generates an exact amount QR on your customer-facing screen or printed bill. Prevents short payments and human cashier error.
                </p>
                <span className="badge small px-2.5 py-1" style={{ background: '#e0f7fa', color: '#00838f', border: '1px solid #b2ebf2' }}>Ideal for Retail & Supermarkets</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100 text-center">
                <div className="rh-dropdown-icon mx-auto mb-3" style={{ width: '50px', height: '50px', fontSize: '1.5rem', background: '#fef3c7', color: '#b45309' }}>
                  <i className="bi bi-speaker"></i>
                </div>
                <h4 className="text-dark fw-bold fs-5 mb-2">Soundbox-Integrated QR</h4>
                <p className="text-secondary small mb-3">
                  Combines high-definition QR standee with voice announcement speaker for simultaneous visual and audio validation.
                </p>
                <span className="badge small px-2.5 py-1" style={{ background: '#fef3c7', color: '#b45309', border: '1px solid #fde68a' }}>Most Popular Retail Combo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />
    </div>
  );
}
