import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import PartnerMarquee from '../../components/PartnerMarquee';
import './ZoompePortal.css';

export default function ZoompePortal({ onOpenConsultation }) {
  const [aepsCount, setAepsCount] = useState(30);
  const [bbpsCount, setBbpsCount] = useState(40);
  const [dmtCount, setDmtCount] = useState(10);

  // Live Commission Calculations (30 days per month)
  const monthlyAeps = aepsCount * 12 * 30; // avg ₹12 per cash withdrawal
  const monthlyBbps = bbpsCount * 3.5 * 30; // avg ₹3.50 per utility bill
  const monthlyDmt = dmtCount * 22 * 30; // avg ₹22 per domestic remittance
  const monthlyTotal = Math.round(monthlyAeps + monthlyBbps + monthlyDmt);
  const annualTotal = monthlyTotal * 12;

  const handleClaim = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 75,
        origin: { y: 0.6 }
      });
    } catch (e) {}
    onOpenConsultation('zoompe-portal');
  };

  return (
    <div className="rh-zoompe-page">
      {/* Hero Section */}
      <section className="rh-zoompe-hero">
        <div className="container position-relative">
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
                  onClick={handleClaim}
                  className="btn-rh-outline px-4 py-3"
                >
                  <i className="bi bi-person-plus me-1"></i> Register as Zoompe Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Live Retailer Commission Calculator */}
      <section className="py-5" style={{ background: '#ffffff' }}>
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Live Earnings Estimator</span>
            <h2>How Much Can Your Shop Earn Every Month?</h2>
            <p>Slide the volume controls below to calculate your estimated recurring retailer commissions.</p>
          </div>

          <div className="rh-calculator-box">
            <div className="row g-5 align-items-center">
              {/* Sliders Column */}
              <div className="col-lg-7">
                {/* Slider 1: AEPS & Micro ATM */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <label className="fw-bold text-dark small">
                      <i className="bi bi-bank text-primary me-2"></i> AEPS Cash Withdrawals / Micro ATM:
                    </label>
                    <span className="badge bg-primary-subtle text-primary border px-3 py-1 fw-bold fs-6">
                      {aepsCount} txns / day
                    </span>
                  </div>
                  <input 
                    type="range" 
                    className="form-range" 
                    min="5" 
                    max="100" 
                    step="5"
                    value={aepsCount}
                    onChange={(e) => setAepsCount(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between text-muted xx-small">
                    <span>5 txns/day</span>
                    <span>50 txns/day</span>
                    <span>100 txns/day</span>
                  </div>
                </div>

                {/* Slider 2: BBPS Utility Bills & Recharges */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <label className="fw-bold text-dark small">
                      <i className="bi bi-phone text-success me-2"></i> Bill Payments & Mobile Recharges:
                    </label>
                    <span className="badge bg-success-subtle text-success border px-3 py-1 fw-bold fs-6">
                      {bbpsCount} bills / day
                    </span>
                  </div>
                  <input 
                    type="range" 
                    className="form-range" 
                    min="10" 
                    max="150" 
                    step="5"
                    value={bbpsCount}
                    onChange={(e) => setBbpsCount(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between text-muted xx-small">
                    <span>10 bills/day</span>
                    <span>75 bills/day</span>
                    <span>150 bills/day</span>
                  </div>
                </div>

                {/* Slider 3: Money Transfer DMT */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <label className="fw-bold text-dark small">
                      <i className="bi bi-send text-info me-2"></i> Domestic Money Transfers (DMT):
                    </label>
                    <span className="badge bg-info-subtle text-info border px-3 py-1 fw-bold fs-6">
                      {dmtCount} transfers / day
                    </span>
                  </div>
                  <input 
                    type="range" 
                    className="form-range" 
                    min="2" 
                    max="50" 
                    step="2"
                    value={dmtCount}
                    onChange={(e) => setDmtCount(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between text-muted xx-small">
                    <span>2 txns/day</span>
                    <span>25 txns/day</span>
                    <span>50 txns/day</span>
                  </div>
                </div>
              </div>

              {/* Earnings Result Card Column */}
              <div className="col-lg-5">
                <div className="rh-earnings-highlight-card text-center">
                  <span className="badge bg-success text-white px-3 py-1 rounded-pill small fw-bold mb-3">
                    <i className="bi bi-graph-up-arrow me-1"></i> Instant Daily Wallet Credit
                  </span>
                  <div className="text-muted small fw-semibold mb-1">ESTIMATED MONTHLY COMMISSION</div>
                  <div className="display-4 fw-extrabold text-primary mb-2">
                    ₹{monthlyTotal.toLocaleString('en-IN')}
                  </div>
                  <div className="badge bg-primary-subtle text-primary border rounded-pill px-3 py-1 mb-4">
                    +₹{annualTotal.toLocaleString('en-IN')} Annual Store Boost
                  </div>

                  <div className="p-3 bg-light rounded-3 text-start small mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-secondary">AEPS / ATM Earnings:</span>
                      <strong className="text-dark">₹{Math.round(monthlyAeps).toLocaleString('en-IN')}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                      <span className="text-secondary">Recharge / BBPS Bills:</span>
                      <strong className="text-dark">₹{Math.round(monthlyBbps).toLocaleString('en-IN')}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="text-secondary">Money Transfers (DMT):</span>
                      <strong className="text-dark">₹{Math.round(monthlyDmt).toLocaleString('en-IN')}</strong>
                    </div>
                  </div>

                  <button 
                    className="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
                    onClick={handleClaim}
                  >
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Apply for Zoompe Agent ID</span>
                  </button>
                </div>
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
