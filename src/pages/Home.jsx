import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../components/PartnerMarquee';
import ActualHero from '../components/ActualHero';
import CategoryCards from '../components/CategoryCards';
import TrustStatsStrip from '../components/TrustStatsStrip';
import SecurityCertifications from '../components/SecurityCertifications';
import WhatWeDoShowcase from '../components/WhatWeDoShowcase';
import BusinessStagesOrbit from '../components/BusinessStagesOrbit';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientTestimonials from '../components/ClientTestimonials';
import './Home.css';

export default function Home({ onOpenConsultation }) {
  const [activeFaq, setActiveFaq] = useState(0);

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

      {/* Business Stages Orbit Theater (Layout B: Circular Rhizobee Ecosystem) */}
      <BusinessStagesOrbit onOpenConsultation={onOpenConsultation} />

      {/* Why Merchants & Corporates Choose to Grow with Us (6 Value Pillars) */}
      <WhyChooseUs />

      {/* Enterprise Security & Compliance Certifications */}
      <SecurityCertifications />

      {/* What Our Clients Say About Working with Us (Verified Testimonials) */}
      <ClientTestimonials />

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
