import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import PartnerMarquee from '../components/PartnerMarquee';
import './Careers.css';

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const jobs = [
    {
      id: 'gateway-dev',
      title: 'Lead Payment Gateway Engineer',
      department: 'Core Infrastructure',
      location: 'Bengaluru / Hybrid',
      type: 'Full-Time',
      exp: '4-7 Years',
      desc: 'Architect high-throughput payment switches, NPCI UPI hooks, and bank aggregator cascade failovers.'
    },
    {
      id: 'iot-pos',
      title: 'Senior POS & Hardware IoT Specialist',
      department: 'Hardware Operations',
      location: 'Delhi NCR / On-Site',
      type: 'Full-Time',
      exp: '3-6 Years',
      desc: 'Oversee Android Smart POS firmware provisioning, thermal printer drivers, and 4G Soundbox acoustics.'
    },
    {
      id: 'bd-manager',
      title: 'Regional Merchant Acquisition Manager',
      department: 'Sales & Growth',
      location: 'Mumbai / Pan-India',
      type: 'Full-Time',
      exp: '2-5 Years',
      desc: 'Scale merchant acquiring for retail chains, supermarkets, and Zoompe CSP distribution channels.'
    },
    {
      id: 'compliance-aml',
      title: 'FinTech Compliance & AML Officer',
      department: 'Legal & Risk',
      location: 'Remote / Hybrid',
      type: 'Full-Time',
      exp: '3-5 Years',
      desc: 'Liaise with RBI circulars, sponsor bank AML compliance, merchant e-KYC validation, and chargeback audits.'
    }
  ];

  const handleApply = (e) => {
    e.preventDefault();
    setAppliedSuccess(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setSelectedRole(null);
      setAppliedSuccess(false);
      setApplicantName('');
      setApplicantEmail('');
    }, 3000);
  };

  return (
    <div className="rh-careers-page">
      {/* Hero Section */}
      <section className="rh-careers-hero text-center">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Careers</span>
          </div>

          <span className="rh-badge rh-badge-blue mb-3 d-inline-block">
            <i className="bi bi-rocket-takeoff-fill me-1"></i> We're Hiring
          </span>
          <h1 className="rh-hero-title-oneline mb-3">
            Build the Future of <span className="rh-gradient-text">India's Digital Payments</span>
          </h1>
          <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
            Join a fast-moving, mission-driven team shaping payment infrastructure for millions of retail 
            merchants, CSP agents, and enterprises nationwide.
          </p>

          <a href="#open-roles" className="btn-rh-primary px-4 py-3">
            <span>View Open Positions ({jobs.length})</span>
            <i className="bi bi-arrow-down"></i>
          </a>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-5" style={{ background: '#f8fbff' }}>
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Life at Rhizobee</span>
            <h2>Why Build Your Career Here?</h2>
            <p>We provide a supportive, high-ownership environment where high impact is recognized and rewarded.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-heart-pulse fs-1 text-danger mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Comprehensive Healthcare</h5>
                <p className="text-secondary small mb-0">Premium health insurance for you and your dependents with zero co-pay.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-graph-up-arrow fs-1 text-success mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Competitive Stock Options</h5>
                <p className="text-secondary small mb-0">Generous ESOP grants so you share directly in company value creation.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-laptop fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Top Hardware & Tools</h5>
                <p className="text-secondary small mb-0">Latest Apple M-series MacBooks, 4K monitors, and generous home-office budgets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-5" style={{ background: '#ffffff' }} id="open-roles">
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Current Openings</span>
            <h2>Explore Open Positions</h2>
            <p>Find the role that matches your skills and passions.</p>
          </div>

          <div className="row g-4">
            {jobs.map(job => (
              <div key={job.id} className="col-lg-6">
                <div className="rh-job-card d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h4 className="text-dark fw-bold fs-5 mb-0">{job.title}</h4>
                      <span className="badge small px-2.5 py-1" style={{ background: '#e0f2fe', color: '#0284c7', border: '1px solid #bae6fd' }}>
                        {job.type}
                      </span>
                    </div>

                    <div className="d-flex flex-wrap gap-2 text-secondary small mb-3">
                      <span><i className="bi bi-building me-1"></i> {job.department}</span>
                      <span>•</span>
                      <span><i className="bi bi-geo-alt me-1"></i> {job.location}</span>
                      <span>•</span>
                      <span><i className="bi bi-clock me-1"></i> {job.exp}</span>
                    </div>

                    <p className="text-secondary small mb-3 leading-relaxed">
                      {job.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-top border-light-subtle d-flex justify-content-between align-items-center">
                    <button 
                      onClick={() => setSelectedRole(job)}
                      className="btn btn-outline-primary rounded-pill btn-sm px-4 fw-semibold"
                    >
                      Apply Now <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                    <span className="text-muted small">Immediate Opening</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedRole && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(15, 23, 42, 0.55)', backdropFilter: 'blur(6px)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 p-4 shadow-lg" style={{ background: '#ffffff', border: '1px solid #bae6fd', borderRadius: '24px' }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <span className="badge small mb-1" style={{ background: '#e0f2fe', color: '#0284c7' }}>Applying For</span>
                  <h5 className="text-dark fw-bold mb-0">{selectedRole.title}</h5>
                </div>
                <button type="button" className="btn-close" onClick={() => setSelectedRole(null)}></button>
              </div>

              {appliedSuccess ? (
                <div className="text-center py-4">
                  <i className="bi bi-check-circle-fill text-success display-4 mb-2 d-block"></i>
                  <h4 className="text-dark fw-bold">Application Received!</h4>
                  <p className="text-secondary small">Thank you! Our recruitment team will review your profile and reach out within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleApply}>
                  <div className="mb-3">
                    <label className="text-dark small fw-semibold mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      required 
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="text-dark small fw-semibold mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      required 
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="priya@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="text-dark small fw-semibold mb-1">LinkedIn Profile or Portfolio URL</label>
                    <input 
                      type="url" 
                      className="form-control" 
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>

                  <button type="submit" className="btn-rh-primary w-100 py-2.5 justify-content-center">
                    Submit Job Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <PartnerMarquee />
    </div>
  );
}
