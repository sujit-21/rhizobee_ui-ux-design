import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../components/PartnerMarquee';
import ActualHero from '../components/ActualHero';
import CategoryCards from '../components/CategoryCards';
import TrustStatsStrip from '../components/TrustStatsStrip';
import SecurityCertifications from '../components/SecurityCertifications';
import WhatWeDoShowcase from '../components/WhatWeDoShowcase';
import './Home.css';

export default function Home({ onOpenConsultation }) {
  const [selectedStage, setSelectedStage] = useState('small-business');
  const [activeFaq, setActiveFaq] = useState(0);

  const businessStages = {
    'small-business': {
      title: 'Small Business Owners & Kiranas',
      subtitle: 'Zero hardware hassle with loud payment verification',
      desc: 'Local grocery shops, cafes, clinics, and service counters that need rapid QR payment acceptance, loud voice alerts in their language, and instant daily settlements to restock inventory.',
      solutions: ['Soundbox Solutions (4G)', 'Durable Acrylic QR Standees', 'Zoompe Recharge & Bill Portal'],
      recommendedLink: '/services/soundbox'
    },
    'sme': {
      title: 'SMEs & Growing Retailers',
      subtitle: 'Modernize counter checkout with smart POS',
      desc: 'Specialty stores, multi-counter restaurants, boutique apparel, and electronics retail that need contactless card swiping, integrated thermal receipts, and real-time inventory management.',
      solutions: ['Android Smart POS Terminals', 'Dynamic Billing QR Screens', 'Payment Gateway for Shopify/WooCommerce'],
      recommendedLink: '/services/pos-devices'
    },
    'msme': {
      title: 'MSMEs & Manufacturers',
      subtitle: 'Corporate bank transfers and vendor payouts',
      desc: 'Small and medium manufacturing enterprises, logistics operators, and distributors needing bulk IMPS/NEFT vendor payouts, invoice collection links, and dedicated relationship management.',
      solutions: ['Switch Unified Payment API', 'Virtual Account Collection', 'Vendor Payout Gateway'],
      recommendedLink: '/services/switch-api'
    },
    'enterprise': {
      title: 'Large Enterprises & Retail Chains',
      subtitle: 'Multi-store ERP integration and 99.99% uptime',
      desc: 'National supermarket chains, department stores, and nationwide franchises requiring centralized multi-terminal reconciliation, automated chargeback resolution, and custom MDR rates.',
      solutions: ['High-throughput Gateway Switch', 'Multi-terminal POS Fleet Manager', 'Custom ERP Accounting Webhooks'],
      recommendedLink: '/services/payment-gateway'
    },
    'corporates': {
      title: 'Corporates & Institutions',
      subtitle: 'Programmatic expense cards and employee gifting',
      desc: 'Mid to large corporates looking to eliminate manual employee reimbursements with customized prepaid RuPay/Visa corporate fuel and food cards, plus automated festive gift voucher distribution.',
      solutions: ['PPI Wallet Card Issuance', '500+ Brand Gift Vouchers', 'Bulk Payroll Disbursement API'],
      recommendedLink: '/services/ppi-wallets'
    }
  };

  const currentStage = businessStages[selectedStage];

  const faqs = [
    {
      q: 'What is a PPI wallet, and how can my business use one?',
      a: 'A Prepaid Payment Instrument (PPI) wallet is a digital wallet that can be loaded with funds and used for payments, disbursements, or transfers. Businesses use PPI wallets for customer loyalty and payments, employee or vendor disbursements, and digital-first financial inclusion programs. Our PPI wallet solutions are fully compliant and built on regulated banking infrastructure.'
    },
    {
      q: 'Is Rhizobee Innovations a bank or payment aggregator itself?',
      a: 'Rhizobee Innovations operates as a distribution partner for leading banks and payment aggregators. This means we bring you access to regulated, bank-grade payment infrastructure through our partnerships, combined with dedicated onboarding, device, and support services.'
    },
    {
      q: 'How quickly can my business start accepting payments?',
      a: 'Most merchants can be onboarded and live within a few business days, depending on the solution and documentation required. QR code payments typically have the fastest turnaround, while POS and PPI wallet solutions may involve additional verification steps.'
    },
    {
      q: 'Which businesses can use Rhizobee\'s payment solutions?',
      a: 'Our solutions are designed for small business owners, SMEs, MSMEs, enterprises, and corporates. Whether you\'re a single-counter shop or a multi-location corporate, we have a payment acceptance combination that fits your transaction volume and operations.'
    },
    {
      q: 'Can I use multiple payment methods — QR, POS, and soundbox — together?',
      a: 'Yes. Many of our merchants combine QR, soundbox, and POS under a single merchant account, giving customers flexibility while keeping settlement and reconciliation unified on one dashboard.'
    },
    {
      q: 'How is my business data and transaction security handled?',
      a: 'Security and regulatory compliance are core to how we operate, given our partnerships with banks and payment aggregators. All solutions follow strict verification requirements and industry-standard data protection practices aligned with our partner institutions\' regulatory obligations.'
    }
  ];

  return (
    <div className="rh-home-page">
      {/* Modern Centered Hero with 3D Stage */}
      <ActualHero onOpenConsultation={onOpenConsultation} />

      {/* 4 Pillar Category Cards */}
      <CategoryCards />

      {/* Enterprise Scale & Trust Metrics Strip */}
      <TrustStatsStrip />

      {/* Payment Partners Marquee */}
      <PartnerMarquee />

      {/* What We Do - Sticky Stacking Cards Animation Showcase */}
      <WhatWeDoShowcase onOpenConsultation={onOpenConsultation} />

      {/* Introducing Zoompe Feature Banner */}
      <section className="py-5" style={{ background: '#ffffff' }}>
        <div className="container py-4">
          <div 
            className="rh-card p-4 p-md-5" 
            style={{ 
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', 
              borderColor: '#bae6fd', 
              boxShadow: '0 10px 30px rgba(2, 132, 199, 0.08)' 
            }}
          >
            <div>
              <span className="rh-badge rh-badge-blue mb-3 d-inline-block">
                <i className="bi bi-shop me-1.5"></i> Dedicated Retailer Network
              </span>
              <h2 className="display-6 fw-bold text-dark mb-3">
                Introducing <span style={{ color: 'var(--rh-blue-600, #0284c7)' }}>Zoompe</span> — Our Retailer Portal
              </h2>
              <p className="text-secondary leading-relaxed mb-4" style={{ maxWidth: '850px' }}>
                We are excited to launch Zoompe, our dedicated retailer portal designed to empower 
                businesses and individuals with a complete suite of digital services, all under one platform. 
                Whether you're a small shop owner, a CSP agent, or an entrepreneur looking to expand your 
                service offerings, Zoompe gives you everything you need to serve your customers better and grow your business.
              </p>

              <div className="row g-2 mb-4 text-dark small fw-medium" style={{ maxWidth: '850px' }}>
                <div className="col-6 col-sm-4 d-flex align-items-center gap-2">
                  <i className="bi bi-check2-circle text-primary fs-6"></i> Micro ATM & AEPS
                </div>
                <div className="col-6 col-sm-4 d-flex align-items-center gap-2">
                  <i className="bi bi-check2-circle text-primary fs-6"></i> Mobile & DTH Recharge
                </div>
                <div className="col-6 col-sm-4 d-flex align-items-center gap-2">
                  <i className="bi bi-check2-circle text-primary fs-6"></i> BBPS Bill Payments
                </div>
                <div className="col-6 col-sm-4 d-flex align-items-center gap-2">
                  <i className="bi bi-check2-circle text-primary fs-6"></i> Flight, Train & Hotel
                </div>
                <div className="col-6 col-sm-4 d-flex align-items-center gap-2">
                  <i className="bi bi-check2-circle text-primary fs-6"></i> Insurance & Loans
                </div>
                <div className="col-6 col-sm-4 d-flex align-items-center gap-2">
                  <i className="bi bi-check2-circle text-primary fs-6"></i> Switch Unified API
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/services/zoompe-portal" className="btn-rh-primary px-4 py-2.5">
                  <span>Explore Zoompe Features</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <a 
                  href="https://www.zoompe.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-rh-outline px-4 py-2.5"
                >
                  <span>Visit www.zoompe.in</span>
                  <i className="bi bi-box-arrow-up-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Stages Matrix */}
      <section className="py-5" style={{ background: '#f0f7ff' }}>
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Custom Fit</span>
            <h2>Built for Every Stage of Business</h2>
            <p>From single-counter retail to high-throughput enterprises, we tailor the exact payment mix you need.</p>
          </div>

          <div className="row g-4 align-items-center">
            {/* Stage Selector Tabs */}
            <div className="col-lg-4">
              <div className="d-flex flex-column gap-2">
                {Object.keys(businessStages).map(key => (
                  <button 
                    key={key}
                    onClick={() => setSelectedStage(key)}
                    className={`rh-stage-tab-btn ${selectedStage === key ? 'active' : ''}`}
                  >
                    <span>{businessStages[key].title}</span>
                    <i className="bi bi-chevron-right small"></i>
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Detail Card */}
            <div className="col-lg-8">
              <div className="rh-card p-4 p-md-5">
                <div className="badge small px-3 py-1.5 rounded-pill mb-2" style={{ background: '#e0f2fe', color: '#0284c7', border: '1px solid #bae6fd' }}>
                  {currentStage.subtitle}
                </div>
                <h3 className="text-dark fw-bold fs-3 mb-3">{currentStage.title}</h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  {currentStage.desc}
                </p>

                <div className="p-3 rounded-3 mb-4" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div className="text-dark small fw-bold mb-2">Recommended Setup:</div>
                  <div className="row g-2">
                    {currentStage.solutions.map((sol, idx) => (
                      <div key={idx} className="col-md-4">
                        <div className="small text-dark fw-medium d-flex align-items-center gap-1.5">
                          <i className="bi bi-check-circle-fill text-success"></i>
                          <span>{sol}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <Link to={currentStage.recommendedLink} className="btn-rh-primary">
                    <span>Learn More About This Setup</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                  <button 
                    onClick={() => onOpenConsultation(selectedStage)}
                    className="btn btn-outline-primary rounded-pill px-4"
                  >
                    Get Custom Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Security & Compliance Certifications */}
      <SecurityCertifications />

      {/* Frequently Asked Questions */}
      <section className="py-5" style={{ background: '#ffffff' }}>
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-gold mb-2">Help Center</span>
            <h2>Answers to Common Questions</h2>
            <p>Everything you need to know about partnering with Rhizobee Innovations.</p>
          </div>

          <div className="mx-auto" style={{ maxWidth: '800px' }}>
            <div className="d-flex flex-column gap-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="rh-faq-card"
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="text-dark fw-bold fs-6 mb-0 pe-3">{faq.q}</h5>
                    <i className={`bi bi-chevron-${activeFaq === index ? 'up text-primary' : 'down text-secondary'} fs-5`}></i>
                  </div>
                  
                  {activeFaq === index && (
                    <div className="mt-3 pt-3 border-top border-light-subtle text-secondary small leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
