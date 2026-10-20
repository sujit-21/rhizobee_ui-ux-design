import React from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../components/PartnerMarquee';
import './Solutions.css';

export default function Solutions({ onOpenConsultation }) {
  const packages = [
    {
      title: 'Countertop Omnichannel Suite',
      badge: 'Best for Retail Chains',
      featured: true,
      desc: 'Combine Soundbox 4G, Contactless POS, and Dynamic QR under a single merchant ID with unified settlements and daily reports.',
      includes: [
        'Soundbox 4G for audible counter confirmation',
        'Android Smart POS with thermal receipt printer',
        'Dynamic QR standee linked to POS billing register',
        'T+0 instant settlement direct to bank'
      ],
      link: '/services/pos-devices'
    },
    {
      title: 'D2C & E-Commerce Acceleration',
      badge: 'Online Brands',
      featured: false,
      desc: 'High-speed payment gateway with 120+ payment modes, one-click checkout, dynamic multi-aggregator routing, and zero cart drop-offs.',
      includes: [
        'Payment Gateway with cards, UPI, wallets & netbanking',
        'Custom brand checkout overlay and mobile SDKs',
        'AI fraud screening and 3DS 2.0 security',
        'Automated refund and chargeback management'
      ],
      link: '/services/payment-gateway'
    },
    {
      title: 'Corporate Wallets & Gifting Program',
      badge: 'Enterprises & HR',
      featured: false,
      desc: 'Modernize corporate expense allowances and employee rewards with co-branded RuPay/Visa prepaid cards and 500+ brand gift vouchers.',
      includes: [
        'PPI Wallet infrastructure for fuel & food allowances',
        'Merchant Category Code (MCC) spending restrictions',
        'Bulk digital voucher dispatch (Amazon, Flipkart, etc.)',
        'Complete regulatory compliance and tax reporting'
      ],
      link: '/services/ppi-wallets'
    },
    {
      title: 'Rural CSP & Micro-Bank Hub',
      badge: 'Retail Agents & CSPs',
      featured: false,
      desc: 'Transform local kirana stores into full-service digital banks with Zoompe, enabling cash withdrawals, remittances, and utility payments.',
      includes: [
        'Aadhaar Enabled Payment System (AEPS) Biometrics',
        'Bluetooth Micro ATM for debit card cash-outs',
        'BBPS utility bill payments and mobile recharges',
        'Instant high commissions credited to agent wallet'
      ],
      link: '/services/zoompe-portal'
    }
  ];

  return (
    <div className="rh-solutions-page">
      {/* Hero Section */}
      <section className="rh-solutions-hero text-center">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Solutions</span>
          </div>

          <span className="rh-badge rh-badge-blue mb-3">
            <i className="bi bi-boxes"></i> Integrated FinTech Suites
          </span>
          <h1 className="rh-hero-title-oneline mb-3">
            The Complete Payment Solution, <span className="rh-gradient-text">One Merchant Relationship</span>
          </h1>
          <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
            Why juggle five different vendors for your soundbox, POS machine, online gateway, and corporate cards? 
            Rhizobee unifies your entire payment stack under one dashboard with consolidated bank settlements.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <button 
              onClick={() => onOpenConsultation('solutions')}
              className="btn-rh-primary px-4 py-3"
            >
              Get Custom Solution Proposal
            </button>
            <Link to="/contact" className="btn-rh-outline px-4 py-3">
              <i className="bi bi-headset"></i> Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Packages Grid */}
      <section className="py-5" style={{ background: '#f8fbff' }}>
        <div className="container py-4">
          <div className="row g-4">
            {packages.map((pkg, idx) => (
              <div key={idx} className="col-lg-6">
                <div className={`rh-solution-package-card ${pkg.featured ? 'featured' : ''}`}>
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 className="fs-4 fw-bold text-dark mb-0">{pkg.title}</h3>
                      <span className="badge small px-3 py-1.5 rounded-pill" style={{ background: '#e0f2fe', color: '#0284c7', border: '1px solid #bae6fd' }}>
                        {pkg.badge}
                      </span>
                    </div>

                    <p className="text-secondary small leading-relaxed mb-4">
                      {pkg.desc}
                    </p>

                    <div className="p-3 rounded-3 mb-4" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div className="text-dark small fw-bold mb-2">Package Deliverables:</div>
                      <div className="d-flex flex-column gap-2">
                        {pkg.includes.map((inc, i) => (
                          <div key={i} className="small text-secondary d-flex align-items-start gap-2">
                            <i className="bi bi-check2-circle text-success mt-0.5"></i>
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-top border-light-subtle d-flex align-items-center">
                    <Link to={pkg.link} className="btn btn-outline-primary rounded-pill btn-sm px-4">
                      More Details <i className="bi bi-arrow-right ms-1"></i>
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
