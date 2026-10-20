import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '../data/servicesData';
import PartnerMarquee from '../components/PartnerMarquee';
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
      {/* Hero Section */}
      <section className="rh-home-hero position-relative">
        <div className="rh-hero-orb-blue"></div>
        <div className="rh-hero-orb-gold"></div>

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="rh-badge rh-badge-blue mb-3">
                <span className="rh-pulse-dot me-1"></span> Fintech & Digital Payment Solutions
              </span>

              <h1 className="display-4 fw-bold text-dark mb-4 leading-tight">
                Secure payments. <br />
                <span className="rh-gradient-text">Smart solutions.</span>
              </h1>

              <p className="lead text-secondary mb-4 leading-relaxed" style={{ maxWidth: '620px' }}>
                Rhizobee Innovations equips small business owners, SMEs, MSMEs, enterprises, and corporates 
                with secure, scalable digital payment technology — payment gateway, QR, soundbox, POS, 
                and PPI wallet solutions, delivered through our partnerships with leading banks and payment aggregators.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-5">
                <button 
                  onClick={() => onOpenConsultation('payment-gateway')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <span>Talk to Our Team</span>
                  <i className="bi bi-arrow-right"></i>
                </button>
                <Link to="/services" className="btn-rh-outline px-4 py-3">
                  <span>Explore Services</span>
                  <i className="bi bi-grid"></i>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="d-flex flex-wrap gap-4 text-secondary small pt-2 border-top border-light-subtle">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-shield-check text-primary fs-5"></i>
                  <span className="text-dark fw-semibold">Secure & Reliable</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-lightning-charge-fill text-warning fs-5"></i>
                  <span className="text-dark fw-semibold">Fast & Seamless</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-graph-up-arrow text-success fs-5"></i>
                  <span className="text-dark fw-semibold">Built for Growth</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual: Mark Card + Quick Services + Live Activity */}
            <div className="col-lg-5">
              <div className="rh-hero-interactive-card text-center">
                <img 
                  src="/images/rhizobee-icon.png" 
                  alt="Rhizobee Innovations" 
                  height="160" 
                  className="mb-4 animate-float"
                  style={{ filter: 'drop-shadow(0 15px 30px rgba(2, 132, 199, 0.25))' }}
                />

                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <Link to="/services/payment-gateway" className="rh-service-chip d-block text-decoration-none">
                      <i className="bi bi-credit-card-2-front text-primary me-1"></i> Payment Gateway
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link to="/services/qr-code" className="rh-service-chip d-block text-decoration-none">
                      <i className="bi bi-qr-code text-info me-1"></i> QR Code Payments
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link to="/services/soundbox" className="rh-service-chip d-block text-decoration-none">
                      <i className="bi bi-speaker text-warning me-1"></i> Soundbox 4G
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link to="/services/pos-devices" className="rh-service-chip d-block text-decoration-none">
                      <i className="bi bi-calculator text-success me-1"></i> POS Devices
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Partners Marquee */}
      <PartnerMarquee />

      {/* Featured Services Showcase Grid */}
      <section className="py-5" style={{ background: '#f8fbff' }}>
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Our Solutions</span>
            <h2>Payment Solutions Built for Every Counter & Checkout</h2>
            <p>From instant UPI voice announcements to enterprise developer APIs, explore our specialized services.</p>
          </div>

          <div className="row g-4">
            {servicesList.slice(0, 6).map(service => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="rh-card p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div 
                        className="rh-feature-icon-box"
                        style={{ color: service.color, background: `${service.color}15`, border: `1px solid ${service.color}35` }}
                      >
                        <i className={`bi ${service.icon}`}></i>
                      </div>
                      <span className="badge small px-2.5 py-1" style={{ background: '#e0f2fe', color: '#0284c7', border: '1px solid #bae6fd' }}>
                        {service.badge}
                      </span>
                    </div>

                    <h4 className="fs-5 fw-bold text-dark mb-2">{service.title}</h4>
                    <p className="text-secondary small mb-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-top border-light-subtle d-flex align-items-center">
                    <Link to={service.path} className="small text-primary fw-bold text-decoration-none d-flex align-items-center gap-1">
                      <span>More Details</span> <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/services" className="btn-rh-primary px-5 py-3">
              <span>View All 9 Payment Services</span>
              <i className="bi bi-grid-3x3-gap"></i>
            </Link>
          </div>
        </div>
      </section>

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
