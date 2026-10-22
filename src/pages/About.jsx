import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../components/PartnerMarquee';
import './About.css';

export default function About({ onOpenConsultation }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ partners: 0, uptime: 0, agents: 0 });
  const statsRef = useRef(null);

  // Smooth Count-Up Animation when Scrolled into View
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTimestamp = null;
          const duration = 1800; // 1.8s

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease-out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts({
              partners: Math.floor(ease * 11),
              uptime: (ease * 99.9).toFixed(1),
              agents: Math.floor(ease * 25000)
            });

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

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
              <i className="bi bi-chat-dots-fill me-2"></i> Partner With Us
            </button>
            <Link to="/services" className="btn-rh-outline px-4 py-3">
              <i className="bi bi-grid-fill me-2"></i> Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Row with Smooth Dynamic Counter Animation */}
      <section className="py-5" style={{ background: '#f0f7ff' }} ref={statsRef}>
        <div className="container">
          <div className="row g-4">
            <div className="col-6 col-md-3">
              <div className="rh-stat-badge-box">
                <div className="display-5 fw-bold text-primary mb-1">
                  {hasAnimated ? counts.partners : '11'}+
                </div>
                <div className="text-secondary small fw-medium">Bank & Aggregator Partners</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="rh-stat-badge-box">
                <div className="display-5 fw-bold text-primary mb-1">
                  {hasAnimated ? counts.uptime : '99.9'}%
                </div>
                <div className="text-secondary small fw-medium">Transaction Uptime</div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="rh-stat-badge-box">
                <div className="display-5 fw-bold text-primary mb-1">
                  {hasAnimated ? counts.agents.toLocaleString('en-IN') : '25,000'}+
                </div>
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

      {/* Pillars Section with Interactive 3D Parallax Tilt */}
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
                <div 
                  className="rh-pillar-card text-center"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-6px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                  }}
                >
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
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded-circle bg-primary-subtle text-primary">
                      <i className="bi bi-shield-check fs-5"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold text-dark mb-1">Direct Bank Cascade</h6>
                      <p className="text-secondary small mb-0">Multi-switch redundancy that routes around banking outages automatically.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded-circle bg-primary-subtle text-primary">
                      <i className="bi bi-award fs-5"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold text-dark mb-1">Certified Hardware</h6>
                      <p className="text-secondary small mb-0">PCI-PTS, EMV, and NPCI-certified terminals tested for maximum durability.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-4 rounded-4" style={{ background: '#f0f7ff', border: '1.5px dashed #bae6fd' }}>
                  <h5 className="fw-bold text-dark mb-3 text-center">Institutional Governance Standards</h5>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="p-3 bg-white rounded-3 shadow-sm border text-center h-100">
                        <i className="bi bi-file-earmark-lock text-primary fs-3 mb-2 d-block"></i>
                        <h6 className="fw-bold text-dark mb-1">PCI-DSS Level 1</h6>
                        <span className="text-muted xx-small">Highest Global Payment Security Standard</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="p-3 bg-white rounded-3 shadow-sm border text-center h-100">
                        <i className="bi bi-bank2 text-primary fs-3 mb-2 d-block"></i>
                        <h6 className="fw-bold text-dark mb-1">RBI Guidelines</h6>
                        <span className="text-muted xx-small">Strict Adherence to PA/PG Regulations</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="p-3 bg-white rounded-3 shadow-sm border text-center h-100">
                        <i className="bi bi-qr-code-scan text-primary fs-3 mb-2 d-block"></i>
                        <h6 className="fw-bold text-dark mb-1">NPCI Bharat QR</h6>
                        <span className="text-muted xx-small">Interoperable National UPI Switch</span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="p-3 bg-white rounded-3 shadow-sm border text-center h-100">
                        <i className="bi bi-patch-check text-primary fs-3 mb-2 d-block"></i>
                        <h6 className="fw-bold text-dark mb-1">ISO 27001 Certified</h6>
                        <span className="text-muted xx-small">Enterprise Information Security Management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Section */}
      <section className="py-5" style={{ background: '#ffffff' }}>
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Leadership</span>
            <h2>Guided by Fintech Experience</h2>
            <p>Our team brings together domain experts across merchant acquiring, switch architecture, and banking compliance.</p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="rh-card p-4 text-center h-100">
                <div 
                  className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center text-primary fw-bold fs-4"
                  style={{ width: '80px', height: '80px', background: '#e0f2fe', border: '2px solid #bae6fd' }}
                >
                  RK
                </div>
                <h5 className="fw-bold text-dark mb-1">Rajesh Kumar</h5>
                <span className="badge bg-light text-primary border mb-3">Managing Director & Co-Founder</span>
                <p className="text-secondary small mb-0">
                  18+ years in retail banking and fintech merchant distribution across India's premier banking institutions.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="rh-card p-4 text-center h-100">
                <div 
                  className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center text-primary fw-bold fs-4"
                  style={{ width: '80px', height: '80px', background: '#e0f2fe', border: '2px solid #bae6fd' }}
                >
                  AS
                </div>
                <h5 className="fw-bold text-dark mb-1">Amitabh Sharma</h5>
                <span className="badge bg-light text-primary border mb-3">Chief Technology Officer</span>
                <p className="text-secondary small mb-0">
                  Architect of high-throughput payment switch architectures and distributed IoT soundbox networks.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="rh-card p-4 text-center h-100">
                <div 
                  className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center text-primary fw-bold fs-4"
                  style={{ width: '80px', height: '80px', background: '#e0f2fe', border: '2px solid #bae6fd' }}
                >
                  PV
                </div>
                <h5 className="fw-bold text-dark mb-1">Pooja Verma</h5>
                <span className="badge bg-light text-primary border mb-3">Head of Banking & Compliance</span>
                <p className="text-secondary small mb-0">
                  Specialist in regulatory liaison, partner bank compliance audits, and payment aggregator operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />
    </div>
  );
}
