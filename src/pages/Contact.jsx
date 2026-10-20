import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { servicesList } from '../data/servicesData';
import PartnerMarquee from '../components/PartnerMarquee';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    service: 'payment-gateway',
    city: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback
      }
    }, 1000);
  };

  return (
    <div className="rh-contact-page">
      {/* Hero Section */}
      <section className="rh-contact-hero text-center">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Contact Us</span>
          </div>

          <span className="rh-badge rh-badge-blue mb-3">
            <i className="bi bi-telephone-fill"></i> Merchant Onboarding Support
          </span>
          <h1 className="rh-hero-title-oneline mb-3">
            Let's Get Your Business <span className="rh-gradient-text">Accepting Payments</span>
          </h1>
          <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
            Tell us how you currently accept payments — we'll recommend the right combination of 
            gateway, QR, soundbox, POS, or wallet for you and get you live in record time.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5" style={{ background: '#f8fbff' }}>
        <div className="container py-4">
          <div className="row g-5">
            {/* Left Column: Contact Cards & Info */}
            <div className="col-lg-5">
              <h3 className="text-dark fw-bold fs-4 mb-4">Direct Communication Channels</h3>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="rh-contact-info-card">
                  <div className="d-flex align-items-center gap-3">
                    <div className="rh-feature-icon-box mb-0" style={{ background: '#e0f2fe', color: '#0284c7', border: '1px solid #bae6fd' }}>
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                      <div className="text-secondary small">Email Support</div>
                      <a href="mailto:info@rhizobee.com" className="text-dark fw-bold fs-6 text-decoration-none hover-primary">
                        info@rhizobee.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rh-contact-info-card">
                  <div className="d-flex align-items-center gap-3">
                    <div className="rh-feature-icon-box mb-0" style={{ background: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0' }}>
                      <i className="bi bi-whatsapp"></i>
                    </div>
                    <div>
                      <div className="text-secondary small">Merchant WhatsApp Desk</div>
                      <div className="text-dark fw-bold fs-6">Instant Support Active</div>
                    </div>
                  </div>
                </div>

                <div className="rh-contact-info-card">
                  <div className="d-flex align-items-center gap-3">
                    <div className="rh-feature-icon-box mb-0" style={{ background: '#fef3c7', color: '#b45309', border: '1px solid #fde68a' }}>
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                      <div className="text-secondary small">Corporate Headquarters</div>
                      <div className="text-dark fw-bold small">
                        Rhizobee Innovations Private Limited
                      </div>
                      <div className="text-secondary" style={{ fontSize: '0.78rem' }}>
                        Pan-India Operations & Merchant Network
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-4" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(15,23,42,0.04)' }}>
                <div className="d-flex align-items-center gap-2 mb-2 text-primary fw-bold small">
                  <i className="bi bi-clock-history"></i> Support Working Hours
                </div>
                <p className="text-secondary small mb-0">
                  Monday to Saturday: 9:00 AM – 7:00 PM IST.<br/>
                  24/7 automated transaction monitoring for payment gateway and switch nodes.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Lead Capture Form */}
            <div className="col-lg-7">
              <div className="rh-contact-form-card">
                {submitted ? (
                  <div className="text-center py-5">
                    <div className="rounded-circle d-inline-flex p-4 mb-3" style={{ background: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0' }}>
                      <i className="bi bi-check-circle-fill display-4"></i>
                    </div>
                    <h3 className="text-dark fw-bold mb-2">Thank You, {formData.name}!</h3>
                    <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '480px' }}>
                      Your merchant enquiry has been logged successfully. A dedicated account manager from 
                      our team will contact you at <strong className="text-dark">{formData.phone}</strong> within 
                      2 business hours to review your requirements.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn btn-outline-primary rounded-pill px-5"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="rh-badge rh-badge-blue">Quick Onboarding</span>
                    </div>
                    <h3 className="text-dark fw-bold fs-4 mb-2">Request Onboarding or Consultation</h3>
                    <p className="text-secondary small mb-4">
                      Fill out the form below and we will tailor the optimal payment gateway, soundbox, 
                      or POS package for your business.
                    </p>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="text-dark small mb-1 fw-semibold">Full Name *</label>
                        <input 
                          type="text" 
                          required 
                          className="form-control" 
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="text-dark small mb-1 fw-semibold">Mobile Number *</label>
                        <input 
                          type="tel" 
                          required 
                          className="form-control" 
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="text-dark small mb-1 fw-semibold">Business / Shop Name *</label>
                        <input 
                          type="text" 
                          required 
                          className="form-control" 
                          placeholder="Store or Company Name"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="text-dark small mb-1 fw-semibold">Email Address</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          placeholder="name@business.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="text-dark small mb-1 fw-semibold">Interested Product / Service *</label>
                        <select 
                          className="form-select"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          {servicesList.map(s => (
                            <option key={s.id} value={s.id}>{s.title}</option>
                          ))}
                          <option value="multi-bundle">Multi-Product Bundle</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="text-dark small mb-1 fw-semibold">City / State *</label>
                        <input 
                          type="text" 
                          required 
                          className="form-control" 
                          placeholder="e.g. Mumbai, Maharashtra"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      </div>

                      <div className="col-12">
                        <label className="text-dark small mb-1 fw-semibold">Additional Message or Device Count</label>
                        <textarea 
                          rows="3" 
                          className="form-control" 
                          placeholder="Tell us what you're looking for (e.g. need 10 soundbox devices for retail outlets, or custom payment gateway API)"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>
                    </div>

                    <div className="mt-4 pt-2 d-flex align-items-center justify-content-between">
                      <div className="small text-muted d-flex align-items-center gap-1.5">
                        <i className="bi bi-shield-check text-success"></i> 100% Data Confidentiality
                      </div>
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="btn-rh-primary px-4 py-2.5"
                      >
                        {loading ? 'Submitting...' : 'Submit Enquiry'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />
    </div>
  );
}
