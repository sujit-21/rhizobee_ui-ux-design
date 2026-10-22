import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './WhatWeDoShowcase.css';

export default function WhatWeDoShowcase() {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalized -1 to 1
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;

    // Tilt angles (max 10 degrees)
    const tiltX = -normY * 9;
    const tiltY = normX * 9;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
    card.style.setProperty('--spotlight-opacity', '1');
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.style.setProperty('--spotlight-opacity', '0');
  };

  const cards = [
    {
      id: 'gateway',
      title: 'Payment Gateway',
      desc: 'Seamless online payment acceptance with instant checkout rails.',
      path: '/services/payment-gateway',
      tone: 0,
      renderScene: () => (
        <div className="hx-micro-scene gateway-scene">
          {/* Holographic Card Mock */}
          <div className="holo-card">
            <div className="holo-card-chip"></div>
            <div className="holo-card-contactless">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M8.5 7.5a6 6 0 0 1 0 9" />
                <path d="M12 4.5a10 10 0 0 1 0 15" />
              </svg>
            </div>
            <div className="holo-card-dots">•••• 8824</div>
            <div className="holo-card-shine"></div>
          </div>
          {/* Real-time Settled Pill */}
          <div className="micro-badge badge-settled">
            <span className="live-pulse-dot"></span>
            <span>₹4,950 Settled Instant</span>
          </div>
        </div>
      )
    },
    {
      id: 'qr',
      title: 'QR Code Payments',
      desc: 'Easy-to-use merchant QR solutions for instant, contactless payments.',
      path: '/services/qr-code',
      tone: 1,
      renderScene: () => (
        <div className="hx-micro-scene qr-scene">
          <div className="qr-box">
            {/* Corner Targeting Reticles */}
            <span className="qr-reticle top-left"></span>
            <span className="qr-reticle top-right"></span>
            <span className="qr-reticle bottom-left"></span>
            <span className="qr-reticle bottom-right"></span>
            {/* Glowing Laser Scan Bar */}
            <div className="qr-laser-line"></div>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <path d="M14 14h3v3M21 14v7h-4" />
            </svg>
          </div>
          {/* Radiating Sonar Ring */}
          <div className="sonar-ring"></div>
          {/* Floating Zero MDR Tag */}
          <div className="micro-badge badge-scan">
            <span className="live-pulse-dot green"></span>
            <span>Scan & Pay • 0 MDR</span>
          </div>
        </div>
      )
    },
    {
      id: 'soundbox',
      title: 'Soundbox Solutions',
      desc: 'Real-time loud voice confirmations for high-traffic merchant counters.',
      path: '/services/soundbox',
      tone: 2,
      renderScene: () => (
        <div className="hx-micro-scene soundbox-scene">
          <div className="soundbox-speaker">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
            {/* Concentric Audio Ripples */}
            <span className="voice-wave wave-1"></span>
            <span className="voice-wave wave-2"></span>
          </div>
          {/* Animated Equalizer Bars */}
          <div className="audio-eq-bars" aria-hidden="true">
            <span className="eq-bar bar-1"></span>
            <span className="eq-bar bar-2"></span>
            <span className="eq-bar bar-3"></span>
            <span className="eq-bar bar-4"></span>
            <span className="eq-bar bar-5"></span>
          </div>
          {/* Voice Notification Pill */}
          <div className="micro-badge badge-voice">
            <span className="voice-ico">🔊</span>
            <span>"₹500 Prapt Hue!"</span>
          </div>
        </div>
      )
    },
    {
      id: 'pos',
      title: 'POS Devices',
      desc: 'Smart 4G point-of-sale terminals with integrated receipt printing.',
      path: '/services/pos-devices',
      tone: 0,
      renderScene: () => (
        <div className="hx-micro-scene pos-scene">
          <div className="pos-terminal-screen">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="7" y="2" width="10" height="20" rx="2" />
              <path d="M11 18h2" />
            </svg>
            {/* NFC Wireless Aura */}
            <div className="nfc-pulse-arc arc-1"></div>
            <div className="nfc-pulse-arc arc-2"></div>
          </div>
          {/* Animated Printed Thermal Receipt Tape */}
          <div className="receipt-tape">
            <span className="receipt-line"></span>
            <span className="receipt-line short"></span>
            <span className="receipt-tick">✓ APPROVED</span>
          </div>
          {/* Tap / Dip / Swipe Badge */}
          <div className="micro-badge badge-pos">
            <span>Tap • Dip • Swipe</span>
          </div>
        </div>
      )
    },
    {
      id: 'ppi',
      title: 'PPI Wallet Solutions',
      desc: 'Prepaid wallet infrastructure with full regulatory compliance and RuPay cards.',
      path: '/services/ppi-wallets',
      tone: 1,
      renderScene: () => (
        <div className="hx-micro-scene ppi-scene">
          <div className="wallet-vault">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M16 12h.01" />
            </svg>
            {/* Card Peek Animation */}
            <div className="vault-slider-card">
              <span className="vault-chip"></span>
              <span className="vault-brand">RuPay</span>
            </div>
          </div>
          {/* Floating Currency Orbs */}
          <div className="floating-coin coin-1">₹</div>
          <div className="floating-coin coin-2">%</div>
          {/* Security Compliance Badge */}
          <div className="micro-badge badge-ppi">
            <span className="live-shield-dot">🛡️</span>
            <span>RBI Compliant PPI</span>
          </div>
        </div>
      )
    },
    {
      id: 'gift',
      title: 'Brand Gift Vouchers',
      desc: 'Flexible gifting solutions for rewards, corporate perks, and festive incentives.',
      path: '/services/gift-cards',
      tone: 2,
      renderScene: () => (
        <div className="hx-micro-scene gift-scene">
          <div className="gift-box-glow">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 12v10H4V12" />
              <path d="M2 7h20v5H2z" />
              <path d="M12 22V7" />
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
            {/* Sparkle Twinkles */}
            <span className="sparkle spark-1">✦</span>
            <span className="sparkle spark-2">★</span>
            <span className="sparkle spark-3">✦</span>
          </div>
          {/* 500+ Top Brands Pill */}
          <div className="micro-badge badge-gift">
            <span>🎁 500+ Top Brands</span>
          </div>
          <div className="gift-tag-floating">
            <span>Instant E-Voucher</span>
          </div>
        </div>
      )
    }
  ];

  const miniServices = [
    {
      h: 'Switch',
      p: 'One API across UPI, IMPS, NEFT, RTGS and BBPS.'
    },
    {
      h: 'Banking & Cash',
      p: 'Micro ATM, AEPS Cash Withdrawal and Bank CSP.'
    },
    {
      h: 'Recharge & Bills',
      p: 'Mobile/DTH Recharge and Bill Payments.'
    },
    {
      h: 'Travel & Booking',
      p: 'Hotel Booking, Bus Booking and Flight Booking.'
    },
    {
      h: 'Financial Services',
      p: 'Insurance and Loans.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Payment solutions built for<br />every counter and checkout</h2>
          <p>From a single QR code at a small shop to enterprise payment APIs, every service is built to get merchants and corporates accepting payments quickly and reliably.</p>
        </div>

        <div className="hx-stack">
          {cards.map((card, r) => (
            <article 
              key={card.title} 
              ref={(el) => (cardRefs.current[r] = el)}
              className="hx-slab" 
              style={{ '--i': r }}
              onMouseMove={(e) => handleMouseMove(e, r)}
              onMouseLeave={() => handleMouseLeave(r)}
            >
              {/* Dynamic Mouse Spotlight Glare (Concept B) */}
              <div className="hx-slab-spotlight" aria-hidden="true" />

              <div className="hx-slab-copy">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <Link to={card.path} className="link-arrow">
                  Learn more <span>→</span>
                </Link>
              </div>

              {/* 3D Depth Visual Container with Service Micro-Animations (Concept A + B) */}
              <div className="hx-art" data-tone={card.tone} aria-hidden="true">
                <div className="hx-art-stage">
                  {/* Central Frosted Glass Showcase Badge */}
                  <div className="hx-art-tile">
                    {card.renderScene()}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mini-grid">
          {miniServices.map((m) => (
            <div key={m.h} className="mini-card">
              <h4>{m.h}</h4>
              <p>{m.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
