import React from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../../components/PartnerMarquee';
import './BankingCashServices.css';

export default function BankingCashServices({ onOpenConsultation }) {
  return (
    <div className="rh-banking-page">
      {/* Hero Section */}
      <section className="rh-banking-hero">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Banking & Cash Services</span>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-9">
              <span className="rh-badge rh-badge-blue mb-3 d-inline-block">
                <i className="bi bi-bank2 me-1"></i> Financial Inclusion & CSP
              </span>
              <h1 className="rh-hero-title-oneline mb-3">
                Doorstep Mini Banking with <span className="rh-gradient-text">AEPS & Micro ATM</span>
              </h1>
              <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
                Bring branchless banking to every corner of India. Enable Aadhaar biometric cash withdrawals, 
                Micro-ATM debit card cash-outs, balance enquiries, and official Bank Customer Service Point 
                (CSP) centers with instant commission settlements.
              </p>

              <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-fingerprint text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">UIDAI RD Certified Biometric</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-credit-card-2-front text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">Bluetooth Micro ATM Swiping</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-cash-stack text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">Direct Bank CSP Agent Authorization</span>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button 
                  onClick={() => onOpenConsultation('banking-aeps')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-shop-window"></i> Apply for Bank CSP Center
                </button>
                <a href="#csp-hardware" className="btn-rh-outline px-4 py-3">
                  <i className="bi bi-shield-check"></i> Explore CSP Hardware
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSP Package Benefits */}
      <section id="csp-hardware" className="py-5" style={{ background: '#f8fbff' }}>
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">CSP Agent Ecosystem</span>
            <h2>Complete Hardware & Certification Kit</h2>
            <p>Everything you need to launch a full-scale Banking Customer Service Point at your shop.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-fingerprint fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Mantra / Morpho Biometric Scanner</h5>
                <p className="text-secondary small">
                  STQC certified optical fingerprint reader with plug-and-play USB & Bluetooth driver support.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-credit-card-2-back fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Micro ATM mPOS Terminal</h5>
                <p className="text-secondary small">
                  Portable card reader supporting all EMV chip cards and RuPay debit cards with instant digital receipt.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-file-earmark-check fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Bank CSP Agent Certificate</h5>
                <p className="text-secondary small">
                  Official authorized CSP certificate and store branding glow-sign board provided upon verification.
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
