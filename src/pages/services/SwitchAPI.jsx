import React from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../../components/PartnerMarquee';
import './SwitchAPI.css';

export default function SwitchAPI({ onOpenConsultation }) {
  return (
    <div className="rh-switch-page">
      {/* Hero Section */}
      <section className="rh-switch-hero">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Switch & Unified Payments API</span>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-9">
              <span className="rh-badge rh-badge-blue mb-3">
                <i className="bi bi-cpu-fill me-1"></i> Core Payment Infrastructure
              </span>
              <h1 className="rh-hero-title-oneline mb-3">
                One Switch API Across <span className="rh-gradient-text">UPI, IMPS, NEFT & BBPS</span>
              </h1>
              <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
                Connect your platform to India's fastest payment routing switch. Automatic multi-bank cascade, 
                sub-second latency, and unified reconciliation for high-frequency financial disbursements 
                and collections.
              </p>

              <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">99.99% Host Availability SLA</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">10,000+ TPS Throughput</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">Zero Single Points of Failure</span>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button 
                  onClick={() => onOpenConsultation('switch-api')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-file-code-fill"></i> Get Switch API Credentials
                </button>
                <a href="#architecture" className="btn-rh-outline px-4 py-3">
                  <i className="bi bi-layers-half"></i> Explore Architecture
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Switch Architecture Capabilities */}
      <section id="architecture" className="py-5" style={{ background: '#f8fbff' }}>
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Architectural Highlights</span>
            <h2>Why Fintechs Build on Rhizobee Switch</h2>
            <p>Direct banking pipes engineered for lightning throughput, auto-failover, and zero transaction drops.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-lightning-charge fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Sub-50ms Latency</h5>
                <p className="text-secondary small">
                  Direct leased line and private cloud connectivity to partner bank nodes ensures ultra-low network roundtrips.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-arrow-repeat fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Smart Cascade Failover</h5>
                <p className="text-secondary small">
                  If Bank A's host fails, the switch auto-retries via Bank B in under 30ms without failing the customer checkout.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-journal-check fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Automated NPCI Reconciliation</h5>
                <p className="text-secondary small">
                  Daily automated reconciliation reports (MIS), dispute chargeback management, and T+0 settlement tracking.
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
