import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import PartnerMarquee from '../../components/PartnerMarquee';
import './POSDevices.css';

export default function POSDevices({ onOpenConsultation }) {
  const [posState, setPosState] = useState('idle'); // 'idle' | 'tapping' | 'approved'
  const [activeCard, setActiveCard] = useState('rupay'); // 'rupay' | 'visa' | 'mastercard'
  const [amount, setAmount] = useState('2,450.00');

  const handleTapToPay = () => {
    if (posState !== 'idle') return;
    setPosState('tapping');

    setTimeout(() => {
      setPosState('approved');
      try {
        confetti({
          particleCount: 55,
          spread: 70,
          origin: { y: 0.65 }
        });
      } catch (e) {
        // Fallback gracefully
      }
    }, 900);
  };

  const handleReset = () => {
    setPosState('idle');
  };

  return (
    <div className="rh-pos-page">
      {/* Hero Section with Interactive Live POS Simulator */}
      <section className="rh-pos-hero">
        <div className="container position-relative">
          <div className="rh-breadcrumb justify-content-center mb-4">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">POS Devices & Terminals</span>
          </div>

          <div className="row align-items-center g-5">
            {/* Left Column: Heading & Value Prop */}
            <div className="col-lg-6 text-start">
              <span className="rh-card-swipe-badge mb-3 d-inline-block">
                <i className="bi bi-credit-card-2-front-fill me-1"></i> Smart Retail Terminals
              </span>
              <h1 className="rh-hero-title mb-3">
                Smart POS Terminals for <span className="rh-gradient-text">Every Counter</span>
              </h1>
              <p className="lead text-secondary mb-4">
                Smart, high-speed POS hardware that accepts Contactless Tap & Pay, RuPay, Visa, Mastercard, 
                and UPI QR from a single device. Built-in thermal printer, 4G VoLTE, and real-time cloud reporting.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white shadow-sm border">
                  <i className="bi bi-wifi text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">NFC Tap & Pay (0.4s)</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white shadow-sm border">
                  <i className="bi bi-printer text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">80mm/s Thermal Printer</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white shadow-sm border">
                  <i className="bi bi-shield-check text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">PCI PTS 6.x Certified</span>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <button 
                  onClick={() => onOpenConsultation('pos-devices')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-bag-check-fill me-2"></i> Order POS Device
                </button>
                <a href="#specs" className="btn-rh-outline px-4 py-3">
                  <i className="bi bi-gear-fill me-2"></i> View Hardware Specs
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Live Tap-to-Pay POS Simulator */}
            <div className="col-lg-6">
              <div className="rh-pos-simulator-container">
                <div className="rh-pos-interactive-badge">
                  <span className="rh-live-dot"></span> Interactive 3D Simulator • Click Card to Tap
                </div>

                <div className="rh-pos-device-body">
                  {/* Printer Slot & Dynamic Roll-Out Receipt */}
                  <div className="rh-pos-printer-housing">
                    <div className="rh-pos-printer-slit"></div>
                    {posState === 'approved' && (
                      <div className="rh-thermal-receipt-slip animate-receipt-drop">
                        <div className="text-center pb-2 border-bottom border-dashed">
                          <strong className="text-dark d-block">RHIZOBEE MART</strong>
                          <span className="text-muted xx-small">GSTIN: 07AAACR1234F1Z5</span>
                        </div>
                        <div className="py-2 text-start xx-small">
                          <div className="d-flex justify-content-between">
                            <span>TRANS ID:</span>
                            <span className="fw-bold">#RHZ-98421</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>CARD:</span>
                            <span>{activeCard.toUpperCase()} •••• 4242</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>METHOD:</span>
                            <span>CONTACTLESS NFC</span>
                          </div>
                          <div className="d-flex justify-content-between border-top pt-1 mt-1 fw-bold text-dark">
                            <span>TOTAL PAID:</span>
                            <span>₹{amount}</span>
                          </div>
                        </div>
                        <div className="text-center pt-1 border-top border-dashed text-success fw-bold xx-small">
                          <i className="bi bi-check-circle-fill me-1"></i> APPROVED • T+0 SETTLED
                        </div>
                      </div>
                    )}
                  </div>

                  {/* High-Resolution Color Touch Screen */}
                  <div className={`rh-pos-screen-panel ${posState}`}>
                    {posState === 'idle' && (
                      <div className="rh-screen-idle text-center animate-fade-in">
                        <div className="d-flex justify-content-between align-items-center mb-2 px-1 text-muted xx-small">
                          <span><i className="bi bi-reception-4 me-1 text-primary"></i>4G Airtel</span>
                          <span><i className="bi bi-battery-charging me-1 text-success"></i>94%</span>
                        </div>
                        <div className="rh-screen-logo-badge mb-1">
                          <i className="bi bi-shield-lock-fill text-primary me-1"></i> Secure Counter
                        </div>
                        <div className="rh-screen-sale-label text-muted x-small">TOTAL SALE AMOUNT</div>
                        <div className="rh-screen-sale-val fw-bold text-dark mb-3">₹{amount}</div>
                        
                        <div className="rh-screen-nfc-pulse" onClick={handleTapToPay}>
                          <i className="bi bi-wifi rh-nfc-signal-icon"></i>
                          <div className="x-small fw-bold text-primary mt-1">Tap Card or Click Here</div>
                          <span className="xx-small text-muted">Visa • Mastercard • RuPay</span>
                        </div>
                      </div>
                    )}

                    {posState === 'tapping' && (
                      <div className="rh-screen-tapping text-center animate-fade-in py-3">
                        <div className="spinner-border text-primary mb-3" role="status" style={{ width: '2.5rem', height: '2.5rem' }}></div>
                        <h6 className="fw-bold text-dark mb-1">Reading Chip...</h6>
                        <p className="xx-small text-muted mb-0">Authorizing via NPCI Switch Gateway</p>
                      </div>
                    )}

                    {posState === 'approved' && (
                      <div className="rh-screen-approved text-center animate-fade-in py-2">
                        <div className="rh-approved-check-ring mb-2">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <h5 className="fw-bold text-success mb-1">Payment Confirmed</h5>
                        <div className="fs-5 fw-bold text-dark mb-1">₹{amount}</div>
                        <p className="xx-small text-muted mb-2">Auth Code: #849202 • Instant SMS Sent</p>
                        <button className="btn btn-sm btn-outline-primary py-1 px-3 rounded-pill xx-small" onClick={handleReset}>
                          <i className="bi bi-arrow-repeat me-1"></i> Tap Next Customer
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Physical Keypad with Soft Lighting */}
                  <div className="rh-pos-hardware-base">
                    <div className="rh-pos-card-slot-indicator">
                      <i className="bi bi-arrow-down-short me-1"></i> Chip Card Insert Slot
                    </div>
                  </div>
                </div>

                {/* Floating Contactless Smart Card (Interactive) */}
                <div 
                  className={`rh-floating-smart-card ${activeCard} ${posState === 'tapping' ? 'card-tapping' : ''}`}
                  onClick={handleTapToPay}
                  title="Click to Tap this Card on POS!"
                >
                  <div className="rh-card-top-row d-flex justify-content-between align-items-center">
                    <span className="rh-card-chip"></span>
                    <i className="bi bi-wifi text-white fs-6"></i>
                  </div>
                  <div className="rh-card-number text-white font-monospace">•••• 4242</div>
                  <div className="rh-card-bot-row d-flex justify-content-between align-items-center">
                    <span className="rh-card-holder text-white-50 x-small">RHIZOBEE PREFERRED</span>
                    <span className="rh-card-brand-label fw-bold text-white small">
                      {activeCard.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Card Type Selector Pills */}
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <button 
                    className={`btn btn-sm ${activeCard === 'rupay' ? 'btn-primary' : 'btn-light border'} rounded-pill px-3 py-1 x-small`}
                    onClick={() => setActiveCard('rupay')}
                  >
                    RuPay
                  </button>
                  <button 
                    className={`btn btn-sm ${activeCard === 'visa' ? 'btn-primary' : 'btn-light border'} rounded-pill px-3 py-1 x-small`}
                    onClick={() => setActiveCard('visa')}
                  >
                    Visa
                  </button>
                  <button 
                    className={`btn btn-sm ${activeCard === 'mastercard' ? 'btn-primary' : 'btn-light border'} rounded-pill px-3 py-1 x-small`}
                    onClick={() => setActiveCard('mastercard')}
                  >
                    Mastercard
                  </button>
                </div>
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
