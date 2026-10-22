import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import PartnerMarquee from '../../components/PartnerMarquee';
import './QRCodePayments.css';

export default function QRCodePayments({ onOpenConsultation }) {
  const [scanState, setScanState] = useState('ready'); // 'ready' | 'scanning' | 'success'
  const [selectedApp, setSelectedApp] = useState('GPay');

  const handleSimulateScan = () => {
    if (scanState !== 'ready') return;
    setScanState('scanning');

    setTimeout(() => {
      setScanState('success');
      try {
        confetti({
          particleCount: 50,
          spread: 65,
          origin: { y: 0.65 }
        });
      } catch (e) {}
    }, 1000);
  };

  const handleReset = () => {
    setScanState('ready');
  };

  return (
    <div className="rh-qr-page">
      {/* Hero Section with Interactive Live UPI QR Scanner */}
      <section className="rh-qr-hero">
        <div className="container position-relative">
          <div className="rh-breadcrumb justify-content-center mb-4">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">QR Code Payments</span>
          </div>

          <div className="row align-items-center g-5">
            {/* Left Column: Heading & Value Prop */}
            <div className="col-lg-6 text-start">
              <span className="rh-qr-badge-pill mb-3 d-inline-block">
                <i className="bi bi-qr-code-scan me-1"></i> Zero Hardware Acceptance
              </span>
              <h1 className="rh-hero-title mb-3">
                Accept Instant UPI at <span className="rh-gradient-text">Zero Cost</span>
              </h1>
              <p className="lead text-secondary mb-4">
                Give every merchant, from a neighbourhood store to a multi-counter supermarket, 
                a simple and lightning-fast way to accept UPI payments with 0% transaction fee and instant 
                bank settlement.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white shadow-sm border">
                  <i className="bi bi-phone text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">All Apps: GPay, Paytm, BHIM</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white shadow-sm border">
                  <i className="bi bi-percent text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">0% MDR on UPI</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white shadow-sm border">
                  <i className="bi bi-clock-history text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">Direct T+0 Bank Settlement</span>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <button 
                  onClick={() => onOpenConsultation('qr-code')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-qr-code me-2"></i> Order Free QR Standee
                </button>
                <a href="#comparison" className="btn-rh-outline px-4 py-3">
                  <i className="bi bi-grid-3x3-gap-fill me-2"></i> View QR Options
                </a>
              </div>
            </div>

            {/* Right Column: Interactive UPI Scanner Standee */}
            <div className="col-lg-6">
              <div className="rh-qr-interactive-stage">
                <div className="rh-pos-interactive-badge">
                  <span className="rh-live-dot"></span> Interactive Standee • Click to Scan UPI QR
                </div>

                <div className="rh-acrylic-standee">
                  {/* Standee Header */}
                  <div className="rh-standee-header text-center">
                    <span className="rh-rhizobee-chip mb-1">RHIZOBEE UPI</span>
                    <h6 className="fw-bold text-dark mb-0">Merchant All-in-One QR</h6>
                    <span className="xx-small text-muted">Scan with Any Banking / UPI App</span>
                  </div>

                  {/* QR Core with Animated Laser Scan Beam */}
                  <div className={`rh-qr-code-box ${scanState === 'scanning' ? 'scanning' : ''}`} onClick={handleSimulateScan}>
                    {/* Laser Scan Line */}
                    {scanState === 'scanning' && <div className="rh-laser-beam"></div>}
                    
                    {/* High-Contrast Stylized SVG QR */}
                    <div className="rh-qr-matrix">
                      <svg viewBox="0 0 100 100" width="160" height="160" className="rh-qr-svg">
                        <rect width="100" height="100" fill="#ffffff" rx="10" />
                        {/* Position Markers */}
                        <rect x="10" y="10" width="25" height="25" fill="#0284c7" rx="4" />
                        <rect x="15" y="15" width="15" height="15" fill="#ffffff" rx="2" />
                        <rect x="18" y="18" width="9" height="9" fill="#0284c7" rx="1" />

                        <rect x="65" y="10" width="25" height="25" fill="#0284c7" rx="4" />
                        <rect x="70" y="15" width="15" height="15" fill="#ffffff" rx="2" />
                        <rect x="73" y="18" width="9" height="9" fill="#0284c7" rx="1" />

                        <rect x="10" y="65" width="25" height="25" fill="#0284c7" rx="4" />
                        <rect x="15" y="70" width="15" height="15" fill="#ffffff" rx="2" />
                        <rect x="18" y="73" width="9" height="9" fill="#0284c7" rx="1" />

                        {/* QR Data Dots */}
                        <rect x="42" y="12" width="6" height="6" fill="#0f172a" rx="1" />
                        <rect x="52" y="18" width="6" height="6" fill="#0f172a" rx="1" />
                        <rect x="42" y="28" width="6" height="6" fill="#0f172a" rx="1" />
                        <rect x="12" y="42" width="6" height="6" fill="#0f172a" rx="1" />
                        <rect x="24" y="48" width="6" height="6" fill="#0f172a" rx="1" />
                        <rect x="42" y="42" width="16" height="16" fill="#0284c7" rx="4" />
                        <rect x="64" y="42" width="6" height="6" fill="#0f172a" rx="1" />
                        <rect x="76" y="48" width="6" height="6" fill="#0f172a" rx="1" />
                        <rect x="42" y="65" width="6" height="6" fill="#0f172a" rx="1" />
                        <rect x="52" y="72" width="6" height="6" fill="#0f172a" rx="1" />
                        <rect x="65" y="65" width="6" height="6" fill="#0f172a" rx="1" />
                        <rect x="76" y="76" width="6" height="6" fill="#0f172a" rx="1" />
                      </svg>
                    </div>

                    {/* Scan State Overlay Banner */}
                    {scanState === 'success' && (
                      <div className="rh-qr-success-overlay animate-scale-in">
                        <div className="rh-approved-check-ring mb-1" style={{ width: '42px', height: '42px' }}>
                          <i className="bi bi-check-lg fs-5"></i>
                        </div>
                        <strong className="text-success x-small d-block">₹350.00 Received!</strong>
                        <span className="xx-small text-muted">{selectedApp} • 0% Fee</span>
                      </div>
                    )}
                  </div>

                  {/* Supported Apps Footer Pill */}
                  <div className="d-flex justify-content-center align-items-center gap-2 pt-2 border-top">
                    <span className="badge bg-light text-dark border xx-small">Google Pay</span>
                    <span className="badge bg-light text-dark border xx-small">PhonePe</span>
                    <span className="badge bg-light text-dark border xx-small">Paytm</span>
                    <span className="badge bg-light text-dark border xx-small">BHIM</span>
                  </div>
                </div>

                {/* Scan Action Controls */}
                <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
                  {scanState === 'ready' && (
                    <button 
                      className="btn btn-primary rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2 shadow-sm"
                      onClick={handleSimulateScan}
                    >
                      <i className="bi bi-qr-code-scan"></i>
                      <span>Scan QR with {selectedApp}</span>
                    </button>
                  )}
                  {scanState === 'scanning' && (
                    <button className="btn btn-warning rounded-pill px-4 py-2 fw-bold text-dark" disabled>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Scanning QR Code...
                    </button>
                  )}
                  {scanState === 'success' && (
                    <button 
                      className="btn btn-outline-primary rounded-pill px-4 py-2 fw-bold"
                      onClick={handleReset}
                    >
                      <i className="bi bi-arrow-repeat me-1"></i> Scan Another Payment
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-5" style={{ background: '#f8fbff' }} id="comparison">
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Flexible Form Factors</span>
            <h2>Static vs. Dynamic QR: Choose What Fits Your Store</h2>
            <p>From counter standees to POS integrated invoice QR codes, we have you covered.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="rh-card p-4 h-100">
                <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-1 rounded-pill mb-3">
                  Most Popular for Small Retail
                </span>
                <h4 className="fw-bold text-dark">Durable Acrylic Standee (Static QR)</h4>
                <p className="text-secondary small">
                  Printed on premium UV-resistant acrylic with your merchant name and verified UPI VPA. 
                  Customer enters the amount on their phone, and you receive instant confirmation via Soundbox or SMS.
                </p>
                <ul className="list-unstyled text-secondary small">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Zero electricity or charging needed</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Waterproof and scratch-proof coating</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Free replacement within 24 hours if damaged</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="rh-card p-4 h-100">
                <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-1 rounded-pill mb-3">
                  Best for Supermarkets & POS
                </span>
                <h4 className="fw-bold text-dark">Dynamic Bill QR (Screen / Receipt)</h4>
                <p className="text-secondary small">
                  The exact checkout bill amount is encoded directly into the QR code shown on the POS screen or printed 
                  on the invoice. The customer simply scans and pays — no manual typing, zero risk of underpayment.
                </p>
                <ul className="list-unstyled text-secondary small">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Pre-filled amount prevents human cashier error</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Auto-reconciliation with POS inventory</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Instant invoice ledger settlement webhook</li>
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
