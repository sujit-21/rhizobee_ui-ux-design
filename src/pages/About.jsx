import React from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../components/PartnerMarquee';
import './About.css';

export default function About({ onOpenConsultation }) {
  const pillars = [
    {
      title: 'Compliance First',
      desc: 'We operate strictly under RBI distribution frameworks and bank-grade data security protocols (PCI-DSS L1). Compliance is never an afterthought.',
      icon: 'bi-shield-check',
      color: '#1656d6'
    },
    {
      title: 'Financial Inclusion',
      desc: 'Bridging tier-2, tier-3, and rural commerce through AEPS, Micro ATMs, and Zoompe CSP agents to empower every citizen with digital banking.',
      icon: 'bi-people',
      color: '#10b981'
    },
    {
      title: 'Partnership, Not Vendorship',
      desc: 'We do not just ship a soundbox or hand over an API key. We stand behind your transaction growth with proactive reconciliation and dedicated support.',
      icon: 'bi-hand-thumbs-up',
      color: '#f59e0b'
    },
    {
      title: 'Reliability at the Counter',
      desc: 'When a customer is standing at your store counter, a failed payment means lost business. Our multi-bank cascade ensures 99.9% success.',
      icon: 'bi-lightning-charge',
      color: '#06b6d4'
    }
  ];

  return (
    <div className="rh-about-page">
      {/* Hero Section */}
      <section className="rh-about-hero text-center">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">About Us</span>
          </div>

          <span className="rh-badge rh-badge-blue mb-3">
            <i className="bi bi-building"></i> Our Story & Vision
          </span>
          <h1 className="rh-hero-title-oneline mb-3">
            Simplifying Digital Payments for <span className="rh-gradient-text">Every Kind of Business</span>
          </h1>
          <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
            Built to bridge merchants, enterprises, and financial institutions. 
            Rhizobee Innovations operates as a distribution partner for leading Banks and Payment Aggregators, 
            extending advanced payment technologies while ensuring regulatory compliance, reliability, and innovation.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <button 
              onClick={() => onOpenConsultation('about-us')}
              className="btn-rh-primary px-4 py-3"
            >
              Partner with Us
            </button>
            <Link to="/services" className="btn-rh-outline px-4 py-3">
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="py-5" style={{ background: '#f0f7ff' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-6 col-md-3">
              <div className="rh-stat-badge-box">
                <div className="display-5 fw-bold text-primary mb-1">11+</div>
                <div className="text-secondary small fw-medium">Bank & Aggregator Partners</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="rh-stat-badge-box">
                <div className="display-5 fw-bold text-primary mb-1">99.9%</div>
                <div className="text-secondary small fw-medium">Transaction Uptime</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="rh-stat-badge-box">
                <div className="display-5 fw-bold text-primary mb-1">25K+</div>
                <div className="text-secondary small fw-medium">Retail Agents & Merchants</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="rh-stat-badge-box">
                <div className="display-5 fw-bold text-primary mb-1">Pan-India</div>
                <div className="text-secondary small fw-medium">Doorstep Hardware Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-5" style={{ background: '#ffffff' }}>
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Our Foundation</span>
            <h2>The Principles Behind How We Work</h2>
            <p>We believe in building payment relationships that stand the test of high volume and intense rush hours.</p>
          </div>

          <div className="row g-4">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="rh-pillar-card text-center">
                  <div 
                    className="rh-dropdown-icon mx-auto mb-3" 
                    style={{ width: '56px', height: '56px', fontSize: '1.6rem', color: pillar.color, borderColor: `${pillar.color}40`, background: `${pillar.color}15` }}
                  >
                    <i className={`bi ${pillar.icon}`}></i>
                  </div>
                  <h4 className="fs-5 fw-bold text-dark mb-2">{pillar.title}</h4>
                  <p className="text-secondary small mb-0 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="py-5" style={{ background: '#f8fbff' }}>
        <div className="container py-4">
          <div className="rh-card p-4 p-md-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="rh-badge rh-badge-blue mb-3">Regulated Ecosystem</span>
                <h2 className="text-dark fw-bold mb-3">Backed by Leading Banks and Payment Aggregators</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Rhizobee Innovations operates as a distribution partner for leading Banks and Payment Aggregators. 
                  Through these partnerships, the company extends advanced payment technologies to merchants 
                  and corporations while ensuring strict regulatory compliance, reliability, and continuous innovation.
                </p>
                <div className="d-flex flex-column gap-2 text-dark small">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-success"></i> Direct settlement directly into your designated current account
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-success"></i> Strict customer data tokenization and zero credential storage
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-success"></i> Comprehensive daily MIS and reconciliation reports
                  </div>
                </div>
              </div>

              <div className="col-lg-6 text-center">
                <img 
                  src="/images/rhizobee-logo-full.png" 
                  alt="Rhizobee Innovations" 
                  height="50" 
                  className="mb-4" 
                />
                <div className="p-4 rounded-4 text-start" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div className="text-dark fw-bold mb-2">Corporate Information</div>
                  <div className="small text-secondary mb-1">
                    <strong className="text-dark">Legal Entity:</strong> Rhizobee Innovations Private Limited
                  </div>
                  <div className="small text-secondary mb-1">
                    <strong className="text-dark">Domain:</strong> Fintech, Payment Aggregation & Merchant Acquiring
                  </div>
                  <div className="small text-secondary mb-1">
                    <strong className="text-dark">Support:</strong> info@rhizobee.com
                  </div>
                  <div className="small text-secondary">
                    <strong className="text-dark">Compliance:</strong> Aligned with RBI master directions for digital payments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />
    </div>
  );
}
