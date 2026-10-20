import React from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../../components/PartnerMarquee';
import './SoundboxSolutions.css';

export default function SoundboxSolutions({ onOpenConsultation }) {
  return (
    <div className="rh-soundbox-page">
      {/* Hero Section */}
      <section className="rh-soundbox-hero">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Soundbox Solutions</span>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-9">
              <span className="rh-badge rh-badge-blue mb-3">
                <i className="bi bi-volume-up-fill"></i> Audible Payment Confirmation
              </span>
              <h1 className="rh-hero-title-oneline mb-3">
                Instant Voice Alerts for <span className="rh-gradient-text">Every Counter Payment</span>
              </h1>
              <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
                Give your cashiers and counter staff immediate, crystal-clear audible confirmation of every 
                payment received — eliminating fake screenshot fraud and screen-checking delays during rush hours.
              </p>

              <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-battery-charging text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">7-Day Battery Backup</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-broadcast text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">Dual 4G SIM + WiFi</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-translate text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">10+ Regional Languages</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-megaphone-fill text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">Ultra-loud 95dB Speaker</span>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button 
                  onClick={() => onOpenConsultation('soundbox')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-box-seam-fill"></i> Order Soundbox for Store
                </button>
                <a href="#specs" className="btn-rh-outline px-4 py-3">
                  <i className="bi bi-cpu-fill"></i> View Hardware Specs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Specs & Advantages */}
      <section className="py-5" style={{ background: '#f8fbff' }} id="specs">
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Hardware Specs</span>
            <h2>Engineered for Demanding Retail Counters</h2>
            <p>Built tough with splash resistance and intelligent acoustic resonance for noisy bazaars.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="rh-card p-4 text-center h-100">
                <i className="bi bi-cpu fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Instant 0.8s Alert</h5>
                <p className="text-secondary small mb-0">High-speed IoT processor connects to partner gateway websockets instantly.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="rh-card p-4 text-center h-100">
                <i className="bi bi-sim fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Pre-activated 4G</h5>
                <p className="text-secondary small mb-0">Includes pre-installed multi-network SIM with lifetime connectivity data.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="rh-card p-4 text-center h-100">
                <i className="bi bi-shield-check fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Anti-Fraud Proof</h5>
                <p className="text-secondary small mb-0">Prevents fraudulent customers from walking away with forged screenshots.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="rh-card p-4 text-center h-100">
                <i className="bi bi-headset fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">24/7 Replacement</h5>
                <p className="text-secondary small mb-0">Doorstep repair and replacement warranty backed by Rhizobee service hubs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />
    </div>
  );
}
