import React from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../../components/PartnerMarquee';
import './POSDevices.css';

export default function POSDevices({ onOpenConsultation }) {
  return (
    <div className="rh-pos-page">
      {/* Hero Section */}
      <section className="rh-pos-hero">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">POS Devices & Terminals</span>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-9">
              <span className="rh-card-swipe-badge mb-3 d-inline-block">
                <i className="bi bi-credit-card-2-front-fill me-1"></i> Smart Retail Terminals
              </span>
              <h1 className="rh-hero-title-oneline mb-3">
                Smart POS Terminals for <span className="rh-gradient-text">Every Checkout Counter</span>
              </h1>
              <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
                Smart, reliable POS hardware that accepts Contactless Tap & Pay, RuPay, Visa, Mastercard, 
                and UPI QR from a single device. Built-in thermal printer, 4G connectivity, and centralized 
                multi-store reporting.
              </p>

              <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check2-circle text-primary"></i>
                  <span className="text-dark small fw-semibold">Contactless NFC Tap & Pay</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check2-circle text-primary"></i>
                  <span className="text-dark small fw-semibold">High-Speed Thermal Printer (80mm/s)</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check2-circle text-primary"></i>
                  <span className="text-dark small fw-semibold">Android 11 OS + Barcode Scanner</span>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button 
                  onClick={() => onOpenConsultation('pos-devices')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-bag-check-fill"></i> Order POS Device
                </button>
                <a href="#specs" className="btn-rh-outline px-4 py-3">
                  <i className="bi bi-shield-check"></i> View Hardware Specs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Hardware Features */}
      <section className="py-5" style={{ background: '#f8fbff' }} id="specs">
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Technical Specifications</span>
            <h2>Certified Enterprise Hardware for Modern Retail</h2>
            <p>Every terminal comes configured out of the box with your merchant account and bank settlement.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-printer fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">High-Speed Thermal Printer</h5>
                <p className="text-secondary small">
                  Prints 58mm paper receipts at 80mm/s with custom store logo branding and QR return receipts.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-shield-check fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Highest Security Standards</h5>
                <p className="text-secondary small">
                  PCI PTS 6.x, EMV L1 & L2, Visa PayWave, Mastercard PayPass, and RuPay qSPARC certified.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-graph-up fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Inventory & Cloud Billing Sync</h5>
                <p className="text-secondary small">
                  Preloaded billing software synchronizes item catalog, barcode scans, and GST invoicing in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />
    </div>
  );
}
