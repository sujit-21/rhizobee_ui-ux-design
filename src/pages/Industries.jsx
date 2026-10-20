import React from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../components/PartnerMarquee';
import './Industries.css';

export default function Industries({ onOpenConsultation }) {
  const industries = [
    {
      title: 'Small Business Owners',
      icon: 'bi-shop',
      tagline: 'Simple, fraud-free counter acceptance',
      desc: 'Neighbourhood grocery stores, quick-service cafes, local medical stores, and retail boutiques that need instant UPI payments without maintaining costly complex hardware.',
      benefits: ['Durable QR standees', 'Soundbox voice verification', 'Zero maintenance overhead', 'Direct bank settlement'],
      targetLink: '/services/soundbox'
    },
    {
      title: 'SMEs & Retail Chains',
      icon: 'bi-bag-check',
      tagline: 'Speed up checkout and delight shoppers',
      desc: 'Multi-counter supermarkets, apparel showrooms, and restaurants needing contactless card tap-to-pay, integrated thermal receipts, and real-time sales reporting across stores.',
      benefits: ['Android Smart POS terminals', 'Contactless NFC & QR integration', 'Multi-cashier sales tracking', 'Inventory & GST billing'],
      targetLink: '/services/pos-devices'
    },
    {
      title: 'MSMEs & Manufacturers',
      icon: 'bi-gear-wide-connected',
      tagline: 'Streamlined vendor payouts and working capital',
      desc: 'Regional manufacturing plants, wholesalers, and agricultural supply hubs requiring automated high-value vendor disbursements, instant NEFT/IMPS transfers, and transparent accounting.',
      benefits: ['Switch Unified Payment API', 'Automated vendor payment runs', 'Sub-second bank clearing', 'Consolidated tax MIS reports'],
      targetLink: '/services/switch-api'
    },
    {
      title: 'Enterprises & Large Corporates',
      icon: 'bi-building-check',
      tagline: 'High-throughput payment gateway and expense control',
      desc: 'Nationwide brands, e-commerce giants, and corporate organizations looking for branded PPI expense cards, automated festive gift card dispatch, and custom multi-bank gateway routing.',
      benefits: ['PCI-DSS Level 1 Gateway', 'Co-branded corporate prepaid cards', '500+ Brand gift vouchers', 'Dedicated key account manager'],
      targetLink: '/services/ppi-wallets'
    },
    {
      title: 'Rural CSP & Digital Entrepreneurs',
      icon: 'bi-people',
      tagline: 'Empower communities with last-mile financial services',
      desc: 'CSP agents and rural business owners using Zoompe to deliver doorstep Aadhaar ATM cash withdrawals, bill collections, money transfers, and insurance services.',
      benefits: ['AEPS Aadhaar biometrics', 'Portable Bluetooth Micro ATM', 'High transaction commissions', '30+ Essential digital services'],
      targetLink: '/services/zoompe-portal'
    }
  ];

  return (
    <div className="rh-industries-page">
      {/* Hero Section */}
      <section className="rh-industries-hero text-center">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Industries</span>
          </div>

          <span className="rh-badge rh-badge-cyan mb-3">
            <i className="bi bi-buildings"></i> Tailored Sector Solutions
          </span>
          <h1 className="rh-hero-title-oneline mb-3">
            Digital Payment Solutions for <span className="rh-gradient-text">Every Stage of Business</span>
          </h1>
          <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
            Whether you operate a single street-corner storefront or a nationwide corporate enterprise, 
            Rhizobee delivers the exact hardware, gateway APIs, and settlement speed your industry requires.
          </p>

          <button 
            onClick={() => onOpenConsultation('industries')}
            className="btn-rh-primary px-4 py-3"
          >
            Schedule an Industry Consultation
          </button>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="py-5" style={{ background: '#f8fbff' }}>
        <div className="container py-4">
          <div className="row g-4">
            {industries.map((ind, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="rh-industry-card d-flex flex-column justify-content-between">
                  <div>
                    <div className="rh-feature-icon-box mb-3" style={{ background: '#e0f2fe', color: '#0284c7', border: '1px solid #bae6fd' }}>
                      <i className={`bi ${ind.icon}`}></i>
                    </div>

                    <h3 className="fs-5 fw-bold text-dark mb-1">{ind.title}</h3>
                    <div className="text-primary small fw-semibold mb-3">{ind.tagline}</div>
                    
                    <p className="text-secondary small leading-relaxed mb-3">
                      {ind.desc}
                    </p>

                    <div className="p-3 rounded-3 mb-3" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div className="text-dark small fw-bold mb-2">Key Advantages:</div>
                      <div className="d-flex flex-column gap-1.5">
                        {ind.benefits.map((b, i) => (
                          <div key={i} className="small text-secondary d-flex align-items-center gap-1.5">
                            <i className="bi bi-check2 text-primary"></i>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-top border-light-subtle">
                    <Link to={ind.targetLink} className="small text-primary fw-bold text-decoration-none d-flex align-items-center justify-content-between">
                      <span>Explore Sector Hardware & APIs</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerMarquee />
    </div>
  );
}
