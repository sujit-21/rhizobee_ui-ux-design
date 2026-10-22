import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCards.css';

export default function CategoryCards() {
  const cards = [
    {
      title: 'Payments',
      desc: 'Manage all your online & UPI payments seamlessly',
      link: '/services/payment-gateway',
      color: '#4338ca',
      svg: (
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(15, 10)">
            {/* Back Card */}
            <rect x="15" y="0" width="75" height="48" rx="8" fill="#818CF8" transform="rotate(-6 15 0)"/>
            {/* Front Card */}
            <rect x="5" y="15" width="75" height="48" rx="8" fill="#4338CA"/>
            <rect x="5" y="24" width="75" height="10" fill="#1E1B4B"/>
            <rect x="15" y="44" width="28" height="6" rx="3" fill="#A5B4FC"/>
            {/* Gold Coins Stack */}
            <ellipse cx="65" cy="58" rx="14" ry="6" fill="#D97706"/>
            <ellipse cx="65" cy="53" rx="14" ry="6" fill="#F59E0B"/>
            <ellipse cx="65" cy="48" rx="14" ry="6" fill="#FBBF24"/>
            <circle cx="65" cy="48" r="4" fill="#D97706"/>
          </g>
        </svg>
      )
    },
    {
      title: 'Merchant Solutions',
      desc: 'Soundbox, acrylic QR & smart POS for busy counters',
      link: '/services/soundbox',
      color: '#0284c7',
      svg: (
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(10, 8)">
            {/* Soundbox Body */}
            <rect x="15" y="12" width="46" height="56" rx="10" fill="#0F172A" stroke="#0284C7" strokeWidth="2"/>
            <circle cx="38" cy="38" r="16" fill="#0284C7"/>
            <circle cx="38" cy="38" r="8" fill="#FFFFFF"/>
            <circle cx="25" cy="58" r="2.5" fill="#10B981"/>
            {/* POS Device right */}
            <rect x="58" y="2" width="42" height="68" rx="8" fill="#F8FAFC" stroke="#0284C7" strokeWidth="2"/>
            <rect x="64" y="8" width="30" height="18" rx="4" fill="#0284C7"/>
            <rect x="64" y="32" width="30" height="28" rx="4" fill="#E2E8F0"/>
            <line x1="68" y1="38" x2="88" y2="38" stroke="#64748B" strokeWidth="2" strokeLinecap="round"/>
            <line x1="68" y1="44" x2="82" y2="44" stroke="#64748B" strokeWidth="2" strokeLinecap="round"/>
          </g>
        </svg>
      )
    },
    {
      title: 'Enterprise & APIs',
      desc: 'High-throughput switch gateway, payouts & wallets',
      link: '/services/switch-api',
      color: '#0ea5e9',
      svg: (
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(20, 8)">
            {/* Cloud & Shield */}
            <path d="M40 5L75 18V45C75 68 40 82 40 82C40 82 5 68 5 45V18L40 5Z" fill="#38BDF8"/>
            <path d="M40 10L70 21V43C70 63 40 76 40 76C40 76 10 63 10 43V21L40 10Z" fill="#0284C7"/>
            {/* API Lightning Bolt */}
            <path d="M42 22L28 42H39L36 60L52 38H41L42 22Z" fill="#FDE047"/>
          </g>
        </svg>
      )
    },
    {
      title: 'Retailer CSP Portal',
      desc: 'AEPS cash, Micro ATM, BBPS bills & travel bookings',
      link: '/services/zoompe-portal',
      color: '#10b981',
      svg: (
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(15, 10)">
            {/* Cash Bag */}
            <path d="M38 10C35 4 25 4 22 10H10C5 10 2 15 2 20L8 62C9 66 12 70 17 70H63C68 70 71 66 72 62L78 20C78 15 75 10 70 10H58Z" fill="#10B981"/>
            <circle cx="40" cy="42" r="14" fill="#059669"/>
            <text x="40" y="47" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900">₹</text>
            {/* Currency note */}
            <rect x="42" y="28" width="46" height="26" rx="4" fill="#6EE7B7" stroke="#059669" strokeWidth="1.5" transform="rotate(12 42 28)"/>
          </g>
        </svg>
      )
    }
  ];

  return (
    <section className="rh-phonepe-categories-section">
      <div className="container">
        <div className="row g-4">
          {cards.map((card, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <Link to={card.link} className="rh-pp-cat-card text-decoration-none">
                <div className="rh-pp-cat-illustration">
                  {card.svg}
                </div>
                
                <div className="rh-pp-cat-body">
                  <h3 className="rh-pp-cat-title">{card.title}</h3>
                  <p className="rh-pp-cat-desc">{card.desc}</p>
                </div>

                <div className="rh-pp-cat-arrow">
                  <i className="bi bi-arrow-right"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
