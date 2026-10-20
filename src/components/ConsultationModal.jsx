import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { servicesList } from '../data/servicesData';

export default function ConsultationModal({ isOpen, onClose, preselectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    service: preselectedService || 'payment-gateway',
    monthlyVolume: '₹1 Lakh - ₹10 Lakhs',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback gracefully
      }
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="modal fade show d-block" 
      tabIndex="-1" 
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.55)', backdropFilter: 'blur(6px)', zIndex: 1060 }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div 
          className="modal-content border-0 shadow-lg" 
          style={{ background: '#ffffff', border: '1px solid #bae6fd', borderRadius: '24px', overflow: 'hidden' }}
        >
          {/* Header */}
          <div 
            className="modal-header border-bottom px-4 py-3 d-flex align-items-center justify-content-between" 
            style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #e0f2fe 100%)', borderColor: '#e2e8f0' }}
          >
            <div className="d-flex align-items-center gap-2">
              <span className="rh-badge rh-badge-blue">
                <i className="bi bi-patch-check-fill"></i> Instant Consultation
              </span>
              <h5 className="modal-title fw-bold text-dark mb-0">Get in Touch with Rhizobee</h5>
            </div>
            <button 
              type="button" 
              className="btn-close" 
              aria-label="Close"
              onClick={handleReset}
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body p-4 p-md-5">
            {submitted ? (
              <div className="text-center py-4">
                <div 
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                  style={{ width: '80px', height: '80px', background: '#ecfdf5', color: '#059669', fontSize: '2.5rem', border: '1px solid #a7f3d0' }}
                >
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <h3 className="text-dark fw-bold mb-2">Enquiry Submitted Successfully!</h3>
                <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '480px' }}>
                  Thank you, <strong className="text-dark">{formData.fullName || 'Merchant'}</strong>! 
                  Our digital payments specialist will reach out on <strong className="text-dark">{formData.phone}</strong> within 
                  2 business hours to configure your solution.
                </p>
                <div className="p-3 rounded-4 mb-4" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div className="row text-start small">
                    <div className="col-6 mb-2 text-muted">Selected Solution:</div>
                    <div className="col-6 mb-2 text-dark fw-semibold">
                      {servicesList.find(s => s.id === formData.service)?.title || formData.service}
                    </div>
                    <div className="col-6 text-muted">Estimated Turnaround:</div>
                    <div className="col-6 fw-semibold text-success">Same-Day Verification</div>
                  </div>
                </div>
                <button 
                  className="btn btn-rh-primary px-5 py-2"
                  onClick={handleReset}
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="text-secondary small mb-4">
                  Fill in your merchant or corporate details below. Our onboarding team will coordinate 
                  with bank partners to activate your payment gateway, QR, soundbox, or POS at zero setup delay.
                </p>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-dark small fw-semibold">Your Name *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. Rahul Sharma"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-dark small fw-semibold">Mobile Number (WhatsApp) *</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-dark small fw-semibold">Business / Store Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. Sharma Supermarket"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-dark small fw-semibold">Official Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="rahul@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-dark small fw-semibold">Interested Service *</label>
                    <select 
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      {servicesList.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="custom">All Solutions / Multi-product Bundle</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-dark small fw-semibold">Estimated Monthly Volume</label>
                    <select 
                      className="form-select"
                      value={formData.monthlyVolume}
                      onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                    >
                      <option value="under-1L">Under ₹1 Lakh / Month</option>
                      <option value="1L-10L">₹1 Lakh - ₹10 Lakhs</option>
                      <option value="10L-50L">₹10 Lakhs - ₹50 Lakhs</option>
                      <option value="50L-2Cr">₹50 Lakhs - ₹2 Crores</option>
                      <option value="above-2Cr">Above ₹2 Crores (Enterprise)</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label text-dark small fw-semibold">Specific Requirements or Note</label>
                    <textarea 
                      className="form-control" 
                      rows="2"
                      placeholder="Tell us what you need (e.g. 5 Soundbox devices, API docs, custom settlement timing)"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 pt-2 d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <div className="small text-muted d-flex align-items-center gap-2">
                    <i className="bi bi-shield-lock-fill text-primary"></i>
                    <span>Zero spam. Direct bank-grade compliance guarantee.</span>
                  </div>
                  <div className="d-flex gap-2">
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary rounded-pill px-4"
                      onClick={handleReset}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-rh-primary px-4"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Callback <i className="bi bi-arrow-right"></i>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
