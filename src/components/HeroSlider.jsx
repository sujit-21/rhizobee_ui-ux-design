import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

export default function HeroSlider({ onOpenConsultation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 'soundbox',
      tag: 'Offline Merchant Solutions',
      title: 'Loud Voice Alerts for Instant Payment Verification',
      subtitle: 'Zero hardware hassle with instant daily settlements. Never miss a customer payment during rush hours.',
      accent: '#0284c7',
      gradient: 'radial-gradient(circle at 75% 30%, rgba(2, 132, 199, 0.16) 0%, transparent 60%)',
      ctaText: 'Explore Soundbox 4G',
      ctaLink: '/services/soundbox',
      consultKey: 'soundbox',
      badges: ['4G Dual SIM VoLTE', '10+ Indian Languages', '72-Hour Battery'],
      phoneContent: {
        type: 'soundbox',
        amount: '₹ 500.00',
        payer: 'Ramesh Sharma via UPI',
        time: 'Just now',
        status: 'Audio Announcement Sent'
      },
      floatingCards: [
        { icon: 'bi-volume-up-fill', title: '95dB Speaker', desc: 'Clear in busy markets', pos: 'tl', color: '#0284c7' },
        { icon: 'bi-translate', title: '10+ Languages', desc: 'Hindi, Tamil, Telugu & more', pos: 'bl', color: '#10b981' },
        { icon: 'bi-reception-4', title: '4G Auto-Switch', desc: 'Always connected', pos: 'tr', color: '#6366f1' },
        { icon: 'bi-wallet2', title: 'T+0 Settlements', desc: 'Money in your bank today', pos: 'br', color: '#f59e0b' }
      ]
    },
    {
      id: 'pos',
      tag: 'Retail & Counter Terminals',
      title: 'Modernize Checkout with Android Smart POS',
      subtitle: 'Accept contactless card tap, chip & PIN, and dynamic UPI QR codes on an all-in-one handheld terminal.',
      accent: '#10b981',
      gradient: 'radial-gradient(circle at 75% 30%, rgba(16, 185, 129, 0.16) 0%, transparent 60%)',
      ctaText: 'View POS Devices',
      ctaLink: '/services/pos-devices',
      consultKey: 'pos-devices',
      badges: ['Contactless NFC Tap', 'Thermal Print Receipts', 'PCI-PTS 6.x Certified'],
      phoneContent: {
        type: 'pos',
        amount: '₹ 1,250.00',
        payer: 'Visa Contactless Card',
        time: 'Approved • #9921',
        status: 'Receipt Printed'
      },
      floatingCards: [
        { icon: 'bi-credit-card-2-front-fill', title: 'Tap & Pay', desc: 'Cards & Apple/Google Pay', pos: 'tl', color: '#10b981' },
        { icon: 'bi-receipt', title: 'Thermal Slip', desc: 'Instant paper receipts', pos: 'bl', color: '#0284c7' },
        { icon: 'bi-shield-check', title: 'PCI Certified', desc: 'Bank-grade PIN security', pos: 'tr', color: '#6366f1' },
        { icon: 'bi-graph-up', title: 'Daily Reports', desc: 'Live counter analytics', pos: 'br', color: '#f59e0b' }
      ]
    },
    {
      id: 'gateway',
      tag: 'Enterprise Online Payments',
      title: 'High-Throughput Switch & Developer Gateway',
      subtitle: 'Bank-grade API routing with 99.99% uptime SLA, automated webhook retries, and sub-120ms latency.',
      accent: '#6366f1',
      gradient: 'radial-gradient(circle at 75% 30%, rgba(99, 102, 241, 0.16) 0%, transparent 60%)',
      ctaText: 'Explore Switch API',
      ctaLink: '/services/switch-api',
      consultKey: 'switch-api',
      badges: ['99.99% Switch Uptime', '< 120ms Routing', 'Multi-Bank Redundancy'],
      phoneContent: {
        type: 'gateway',
        amount: '₹ 25,000.00',
        payer: 'Enterprise Checkout API',
        time: 'Latency: 82ms',
        status: 'Webhook 200 OK'
      },
      floatingCards: [
        { icon: 'bi-lightning-charge-fill', title: '< 120ms Latency', desc: 'Ultra-fast API routing', pos: 'tl', color: '#6366f1' },
        { icon: 'bi-arrow-repeat', title: 'Bank Failover', desc: 'Automated smart retry', pos: 'bl', color: '#0284c7' },
        { icon: 'bi-code-slash', title: '1-Day SDK Setup', desc: 'React, Node, PHP & Android', pos: 'tr', color: '#10b981' },
        { icon: 'bi-lock-fill', title: 'PCI-DSS L1', desc: 'Military grade encryption', pos: 'br', color: '#f59e0b' }
      ]
    },
    {
      id: 'zoompe',
      tag: 'Retailer CSP Portal',
      title: 'Empower Your Shop with Complete Banking Services',
      subtitle: 'Earn attractive commissions on AEPS cash withdrawal, Micro ATM, BBPS utility bill payments, and recharges.',
      accent: '#d97706',
      gradient: 'radial-gradient(circle at 75% 30%, rgba(217, 119, 6, 0.16) 0%, transparent 60%)',
      ctaText: 'Discover Zoompe Portal',
      ctaLink: '/services/zoompe-portal',
      consultKey: 'zoompe-portal',
      badges: ['AEPS & Micro ATM', 'BBPS Bill Payments', 'Instant Commissions'],
      phoneContent: {
        type: 'zoompe',
        amount: '₹ 3,420.00',
        payer: 'Electricity Bill Payment',
        time: 'Commission Earned',
        status: 'BBPS Approved'
      },
      floatingCards: [
        { icon: 'bi-fingerprint', title: 'AEPS & ATM', desc: 'Cash withdraw at counter', pos: 'tl', color: '#f59e0b' },
        { icon: 'bi-lightbulb-fill', title: 'BBPS Bills', desc: 'Electricity, Water & Gas', pos: 'bl', color: '#10b981' },
        { icon: 'bi-phone-fill', title: 'Recharges', desc: 'Airtel, Jio, Vi & DTH', pos: 'tr', color: '#0284c7' },
        { icon: 'bi-cash-coin', title: 'Instant Payout', desc: 'Direct to savings account', pos: 'br', color: '#6366f1' }
      ]
    }
  ];

  // Auto advance slide every 5.5s
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const active = slides[currentSlide];

  return (
    <section 
      className="rh-phonepe-hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ backgroundImage: active.gradient }}
    >
      {/* Background Ambient Glow Elements */}
      <div className="rh-pp-ambient-glow glow-1"></div>
      <div className="rh-pp-ambient-glow glow-2"></div>

      <div className="container position-relative py-5">
        <div className="row align-items-center g-5 min-vh-75">
          {/* Left Column: Heading, Subtext, Badges & Dual CTA */}
          <div className="col-lg-6 z-2">
            <div className="rh-pp-hero-text animate-slide-up" key={`text-${currentSlide}`}>
              <div className="d-inline-flex align-items-center gap-2 rh-pp-tag-pill mb-3">
                <span className="rh-pp-pulse-dot" style={{ backgroundColor: active.accent }}></span>
                <span>{active.tag}</span>
              </div>

              <h1 className="rh-pp-hero-headline mb-4">
                {active.title}
              </h1>

              <p className="rh-pp-hero-subtitle mb-4">
                {active.subtitle}
              </p>

              {/* Feature Pill Tags */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {active.badges.map((b, idx) => (
                  <span key={idx} className="rh-pp-badge-chip">
                    <i className="bi bi-check-circle-fill text-success me-1"></i> {b}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link to={active.ctaLink} className="rh-pp-btn-primary">
                  <span>{active.ctaText}</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenConsultation(active.consultKey)}
                  className="rh-pp-btn-outline"
                >
                  <i className="bi bi-telephone me-1.5"></i>
                  <span>Talk to Our Team</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="d-flex flex-wrap align-items-center gap-4 pt-3 border-top border-light-subtle text-secondary small">
                <span className="d-flex align-items-center gap-1.5">
                  <i className="bi bi-shield-fill-check text-primary"></i> Bank Grade Security
                </span>
                <span className="d-flex align-items-center gap-1.5">
                  <i className="bi bi-patch-check-fill text-success"></i> RBI Compliant Rails
                </span>
                <span className="d-flex align-items-center gap-1.5">
                  <i className="bi bi-lightning-charge-fill text-warning"></i> 99.99% Uptime
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: PhonePe-Style 3D Smartphone Mockup with Floating Branching Badges */}
          <div className="col-lg-6 z-2">
            <div className="rh-pp-phone-stage" key={`stage-${currentSlide}`}>
              {/* Central Phone Mockup */}
              <div className="rh-pp-phone-frame">
                {/* Phone Speaker Notch */}
                <div className="rh-pp-phone-notch">
                  <div className="rh-pp-notch-camera"></div>
                  <div className="rh-pp-notch-speaker"></div>
                </div>

                {/* Phone Screen Content */}
                <div className="rh-pp-phone-screen">
                  {/* Status Bar */}
                  <div className="rh-pp-screen-header">
                    <span className="fw-bold">9:41</span>
                    <div className="d-flex gap-1.5 align-items-center">
                      <i className="bi bi-reception-4"></i>
                      <i className="bi bi-wifi"></i>
                      <i className="bi bi-battery-full text-success"></i>
                    </div>
                  </div>

                  {/* App Bar */}
                  <div className="rh-pp-app-bar">
                    <img src="/images/rhizobee-icon.png" alt="Rhizobee" height="24" />
                    <span className="fw-bold small text-dark">Rhizobee Business</span>
                    <span className="badge bg-success-subtle text-success py-1 px-2" style={{ fontSize: '0.65rem' }}>
                      ONLINE
                    </span>
                  </div>

                  {/* Dynamic Content by Slide */}
                  <div className="rh-pp-screen-body">
                    {active.phoneContent.type === 'soundbox' && (
                      <div className="text-center py-3">
                        <div className="rh-pp-soundbox-wave-circle">
                          <div className="wave wave-3"></div>
                          <div className="wave wave-2"></div>
                          <div className="wave wave-1"></div>
                          <div className="core-icon">
                            <i className="bi bi-speaker-fill text-white fs-3"></i>
                          </div>
                        </div>

                        <div className="badge bg-primary-subtle text-primary border border-primary-subtle mb-2">
                          <i className="bi bi-soundwave me-1"></i> Instant Voice Alert Sent
                        </div>

                        <div className="rh-pp-tx-amount">{active.phoneContent.amount}</div>
                        <div className="small text-muted">{active.phoneContent.payer}</div>
                        <div className="small text-success fw-bold mt-1">
                          <i className="bi bi-check-circle-fill"></i> Settled via 4G Soundbox
                        </div>
                      </div>
                    )}

                    {active.phoneContent.type === 'pos' && (
                      <div className="text-center py-2">
                        <div className="rh-pp-receipt-strip">
                          <div className="text-center fw-bold small text-dark">RHIZOBEE SMART POS</div>
                          <div className="text-muted" style={{ fontSize: '0.65rem' }}>MERCHANT ID: RHZ-99120</div>
                          <div className="border-top border-bottom border-light-subtle my-2 py-1 d-flex justify-content-between fw-bold text-dark">
                            <span>TOTAL SALE</span>
                            <span>{active.phoneContent.amount}</span>
                          </div>
                          <div className="badge bg-success text-white py-1 px-2.5">
                            <i className="bi bi-check2-all"></i> CONTACTLESS APPROVED
                          </div>
                        </div>

                        <div className="d-flex justify-content-center gap-2 mt-3">
                          <span className="badge bg-light text-dark border">Visa</span>
                          <span className="badge bg-light text-dark border">Mastercard</span>
                          <span className="badge bg-light text-dark border">RuPay</span>
                        </div>
                      </div>
                    )}

                    {active.phoneContent.type === 'gateway' && (
                      <div className="py-2">
                        <div className="rh-pp-code-box">
                          <div className="d-flex justify-content-between align-items-center mb-1 pb-1 border-bottom border-secondary border-opacity-50">
                            <span className="text-white-50" style={{ fontSize: '0.68rem' }}>POST /api/v1/checkout</span>
                            <span className="badge bg-success" style={{ fontSize: '0.62rem' }}>200 OK</span>
                          </div>
                          <div className="text-white small font-monospace" style={{ fontSize: '0.72rem' }}>
                            <div>{`status: "SUCCESS"`}</div>
                            <div>{`amount: "${active.phoneContent.amount}"`}</div>
                            <div>{`latency: "82ms"`}</div>
                            <div>{`routing: "DIRECT_BANK"`}</div>
                          </div>
                        </div>

                        <div className="mt-2 p-2 bg-light rounded text-center small text-secondary">
                          <i className="bi bi-lightning-fill text-warning me-1"></i>
                          <span>High-speed switch active: <strong>99.99% Uptime</strong></span>
                        </div>
                      </div>
                    )}

                    {active.phoneContent.type === 'zoompe' && (
                      <div className="py-2">
                        <div className="p-3 bg-light rounded-3 text-center mb-2">
                          <div className="small text-muted">Retailer Commission Wallet</div>
                          <div className="fs-3 fw-bold text-success my-1">+ {active.phoneContent.amount}</div>
                          <div className="small text-secondary">{active.phoneContent.payer}</div>
                        </div>

                        <div className="row g-1 text-center" style={{ fontSize: '0.7rem' }}>
                          <div className="col-3 p-1">
                            <div className="p-1 bg-white border rounded">🏧 AEPS</div>
                          </div>
                          <div className="col-3 p-1">
                            <div className="p-1 bg-white border rounded">📱 Mobile</div>
                          </div>
                          <div className="col-3 p-1">
                            <div className="p-1 bg-white border rounded">💡 BBPS</div>
                          </div>
                          <div className="col-3 p-1">
                            <div className="p-1 bg-white border rounded">✈️ Travel</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Phone Bottom Pill bar */}
                  <div className="rh-pp-screen-bottom-bar"></div>
                </div>
              </div>

              {/* PhonePe Signature Branching Floating Cards */}
              {active.floatingCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className={`rh-pp-branch-card rh-pp-card-${card.pos} animate-float-${(idx % 2) + 1}`}
                >
                  <div className="rh-pp-branch-icon" style={{ backgroundColor: `${card.color}18`, color: card.color }}>
                    <i className={`bi ${card.icon}`}></i>
                  </div>
                  <div>
                    <div className="rh-pp-branch-title">{card.title}</div>
                    <div className="rh-pp-branch-desc">{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PhonePe-Style Interactive Slider Pill Indicators */}
        <div className="rh-pp-slider-nav-container mt-4">
          <div className="rh-pp-slider-pills">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                className={`rh-pp-pill-btn ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              >
                <span className="rh-pp-pill-step">{idx + 1}</span>
                <span className="rh-pp-pill-title">
                  {s.id === 'soundbox' && 'Soundbox 4G'}
                  {s.id === 'pos' && 'Smart POS'}
                  {s.id === 'gateway' && 'Switch Gateway'}
                  {s.id === 'zoompe' && 'Zoompe Portal'}
                </span>
                {currentSlide === idx && <span className="rh-pp-pill-progress"></span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
