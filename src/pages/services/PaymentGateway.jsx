import React from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../../components/PartnerMarquee';
import './PaymentGateway.css';

export default function PaymentGateway({ onOpenConsultation }) {
  return (
    <div className="rh-payment-gateway-page">
      {/* Hero Section */}
      <section className="rh-pg-hero">
        <div className="rh-pg-glow"></div>
        <div className="container position-relative">
          {/* Breadcrumb */}
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Payment Gateway Solutions</span>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-9">
              <span className="rh-badge rh-badge-blue mb-3">
                <i className="bi bi-credit-card-2-front-fill"></i> Flagship Gateway
              </span>
              <h1 className="rh-hero-title-oneline mb-3">
                Accept Payments Online with <span className="rh-gradient-text">Zero Friction</span>
              </h1>
              <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
                Accept payments online with a fast, secure gateway that supports cards, net banking, 
                UPI, and wallets through a single unified integration. Engineered for high-volume 
                checkout flows with real-time settlement visibility.
              </p>

              {/* Key Highlights */}
              <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">99.9% Uptime Guarantee</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">T+0 Same-Day Settlement</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">120+ Payment Modes</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">Bank-Grade PCI-DSS L1</span>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button 
                  onClick={() => onOpenConsultation('payment-gateway')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-key-fill text-warning"></i> Get API Keys & Onboard
                </button>
                <a href="#features" className="btn-rh-outline px-4 py-3">
                  <i className="bi bi-layers-fill"></i> Technical Specifications
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-5" style={{ background: '#f8fbff' }} id="features">
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Technical Capabilities</span>
            <h2>Built for High Volumes and 100% Reliability</h2>
            <p>Every layer of our payment gateway is optimized for maximum checkout conversions and zero dropped carts.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <div className="rh-dropdown-icon mb-3" style={{ width: '48px', height: '48px', fontSize: '1.4rem' }}>
                  <i className="bi bi-shuffle"></i>
                </div>
                <h4 className="fs-5 text-dark fw-bold mb-2">Dynamic Multi-Aggregator Routing</h4>
                <p className="text-secondary small">
                  Never suffer when a specific bank gateway goes down. Our AI smart router switches between 
                  top aggregators (PayU, Razorpay, Zaakpay, Easebuzz) dynamically in under 20ms.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <div className="rh-dropdown-icon mb-3" style={{ width: '48px', height: '48px', fontSize: '1.4rem', color: '#d97706', borderColor: '#fde68a', background: '#fef3c7' }}>
                  <i className="bi bi-clock-history"></i>
                </div>
                <h4 className="fs-5 text-dark fw-bold mb-2">Instant T+0 Settlements</h4>
                <p className="text-secondary small">
                  Tired of waiting 48 hours for your funds? Configure instant T+0 or twice-daily settlement cycles 
                  directly into your current bank account to optimize working capital.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <div className="rh-dropdown-icon mb-3" style={{ width: '48px', height: '48px', fontSize: '1.4rem', color: '#059669', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
                  <i className="bi bi-shield-lock-fill"></i>
                </div>
                <h4 className="fs-5 text-dark fw-bold mb-2">PCI-DSS L1 & AI Fraud Shield</h4>
                <p className="text-secondary small">
                  Tokenized card vault, 3D Secure 2.0 authentication, velocity checks, and automated chargeback 
                  dispute management built in to keep payments secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Marquee */}
      <PartnerMarquee />
    </div>
  );
}
