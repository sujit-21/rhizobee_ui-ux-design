import React from 'react';
import './SecurityCertifications.css';

export default function SecurityCertifications() {
  const certifications = [
    {
      badge: 'PCI-DSS v4.0',
      title: 'Level 1 Service Provider',
      desc: 'Highest global security benchmark for card and digital transaction processing.',
      icon: 'bi-shield-shaded',
      color: '#0284c7'
    },
    {
      badge: 'ISO/IEC 27001',
      title: 'Information Security',
      desc: 'Certified enterprise data protection, disaster recovery, and operational hygiene.',
      icon: 'bi-file-earmark-lock2-fill',
      color: '#10b981'
    },
    {
      badge: '256-Bit SSL/TLS',
      title: 'End-to-End Encryption',
      desc: 'Hardware-level tokenization and cryptographic keys guarding in-flight transactions.',
      icon: 'bi-key-fill',
      color: '#6366f1'
    },
    {
      badge: 'RBI & NPCI Compliant',
      title: 'Regulated Bank Rails',
      desc: 'Direct routing through Scheduled Commercial Banks and authorized payment aggregators.',
      icon: 'bi-bank2',
      color: '#d97706'
    }
  ];

  return (
    <section className="rh-security-section py-5">
      <div className="container py-3">
        <div className="rh-security-banner">
          <div className="row align-items-center mb-4">
            <div className="col-lg-8">
              <span className="rh-badge rh-badge-blue mb-2">
                <i className="bi bi-shield-check me-1.5"></i> Enterprise-Grade Compliance
              </span>
              <h2 className="text-dark fw-bold mb-2">Bank-Grade Security Built Into Every Transaction</h2>
              <p className="text-secondary mb-0 leading-relaxed">
                Operating in the financial sector demands relentless security. Rhizobee delivers 
                audited, bank-certified infrastructure so your business and your customers are completely protected.
              </p>
            </div>
            <div className="col-lg-4 text-start text-lg-end mt-3 mt-lg-0">
              <div className="d-inline-flex align-items-center gap-2 p-2 px-3 bg-white border border-success-subtle rounded-pill shadow-sm">
                <span className="rh-pulse-dot bg-success"></span>
                <span className="small fw-bold text-dark">All Systems Audited & Verified</span>
              </div>
            </div>
          </div>

          <div className="row g-3">
            {certifications.map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="rh-cert-card h-100">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div 
                      className="rh-cert-icon"
                      style={{ color: item.color, background: `${item.color}15` }}
                    >
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <span className="badge rounded-pill" style={{ background: '#f0f9ff', color: '#0284c7', border: '1px solid #bae6fd', fontSize: '0.72rem' }}>
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="fs-6 fw-bold text-dark mb-1.5">{item.title}</h4>
                  <p className="text-secondary small mb-0 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Micro Legal Footnote */}
          <div className="mt-4 pt-3 border-top border-light-subtle d-flex flex-wrap align-items-center justify-content-between text-secondary" style={{ fontSize: '0.75rem' }}>
            <span className="d-flex align-items-center gap-2">
              <i className="bi bi-info-circle text-primary"></i>
              <span>All payment acceptance and fund settlements adhere strictly to Reserve Bank of India (RBI) payment guidelines.</span>
            </span>
            <span className="text-muted">Zero Chargeback Liability Shield Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
