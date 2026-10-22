import React from 'react';
import { Link } from 'react-router-dom';
import './WhatWeDoShowcase.css';

export default function WhatWeDoShowcase() {
  const cards = [
    {
      title: 'Payment Gateway',
      desc: 'Seamless online payment acceptance for your business.',
      path: '/services/payment-gateway',
      tone: 0,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      )
    },
    {
      title: 'QR Code Payments',
      desc: 'Easy-to-use merchant QR solutions for instant payments.',
      path: '/services/qr-code',
      tone: 1,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <path d="M14 14h3v3M21 14v7h-4" />
        </svg>
      )
    },
    {
      title: 'Soundbox Solutions',
      desc: 'Real-time voice confirmations for merchant payments.',
      path: '/services/soundbox',
      tone: 2,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )
    },
    {
      title: 'POS Devices',
      desc: 'Smart point-of-sale terminals for card and digital transactions.',
      path: '/services/pos-devices',
      tone: 0,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      )
    },
    {
      title: 'PPI Wallet Solutions',
      desc: 'Prepaid wallet infrastructure with full regulatory compliance.',
      path: '/services/ppi-wallets',
      tone: 1,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M16 12h.01" />
        </svg>
      )
    },
    {
      title: 'Brand Gift Vouchers',
      desc: 'Flexible gifting solutions for rewards and corporate incentives.',
      path: '/services/gift-cards',
      tone: 2,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12v10H4V12" />
          <path d="M2 7h20v5H2z" />
          <path d="M12 22V7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
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
              className="hx-slab" 
              style={{ '--i': r }}
            >
              <div className="hx-slab-copy">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <Link to={card.path} className="link-arrow">
                  Learn more <span>→</span>
                </Link>
              </div>
              <div className="hx-art" data-tone={card.tone} aria-hidden="true">
                <div className="hx-art-tile">
                  {card.icon}
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
