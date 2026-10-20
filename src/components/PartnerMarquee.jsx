import React from 'react';
import { partnerLogos } from '../data/servicesData';
import './PartnerMarquee.css';

export default function PartnerMarquee() {
  // Duplicate for seamless infinite loop
  const doublePartners = [...partnerLogos, ...partnerLogos];

  return (
    <section className="rh-partner-section" aria-label="Our Payment Partners">
      <div className="container text-center mb-4">
        <span className="rh-badge rh-badge-blue mb-2">
          <i className="bi bi-shield-check"></i> Trusted Banking Ecosystem
        </span>
        <h2 className="fs-3 fw-bold text-dark mb-2">Our Payments Partners</h2>
        <p className="text-secondary small max-w-xl mx-auto" style={{ maxWidth: '620px' }}>
          We work with India's leading payment aggregators, sponsor banks, and fintech switches to deliver 
          compliant, reliable, bank-grade payment acceptance to merchants.
        </p>
      </div>

      <div className="rh-partner-marquee">
        <div className="rh-partner-track">
          {doublePartners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="rh-partner-card" title={partner.name}>
              <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
