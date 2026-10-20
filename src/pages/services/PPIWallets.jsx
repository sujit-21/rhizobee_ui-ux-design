import React from 'react';
import { Link } from 'react-router-dom';
import PartnerMarquee from '../../components/PartnerMarquee';
import './PPIWallets.css';

export default function PPIWallets({ onOpenConsultation }) {
  return (
    <div className="rh-ppi-page">
      {/* Hero Section */}
      <section className="rh-ppi-hero">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">PPI Wallet Solutions</span>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-9">
              <span className="rh-badge rh-badge-blue mb-3">
                <i className="bi bi-wallet2 me-1"></i> Prepaid Payment Instruments
              </span>
              <h1 className="rh-hero-title-oneline mb-3">
                RBI-Compliant Digital Wallets & <span className="rh-gradient-text">Co-Branded Cards</span>
              </h1>
              <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
                Launch your own branded corporate wallets and physical or virtual RuPay/Visa prepaid cards. 
                Streamline employee payroll disbursements, fleet fuel expenses, vendor settlements, and 
                customer loyalty with granular spending controls.
              </p>

              <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">Physical & Virtual Prepaid Cards</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">Category (MCC) Spending Limits</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">Backed by Regulated Sponsor Banks</span>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button 
                  onClick={() => onOpenConsultation('ppi-wallets')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-credit-card-2-front"></i> Issue Branded Corporate Cards
                </button>
                <a href="#use-cases" className="btn-rh-outline px-4 py-3">
                  <i className="bi bi-briefcase-fill"></i> Explore Use Cases
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Use Cases */}
      <section className="py-5" style={{ background: '#f8fbff' }} id="use-cases">
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Enterprise Use Cases</span>
            <h2>How Corporates Deploy Rhizobee Wallets</h2>
            <p>Eliminate paper reimbursements and cash advances with smart programmatic spending cards.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-fuel-pump fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Fleet & Fuel Expense Cards</h5>
                <p className="text-secondary small">
                  Lock cards strictly to petrol pumps and highway tolls (MCC 5541 / 5542). Eliminates unauthorized fuel bill inflation.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-cup-hot fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Tax-Saving Meal & Food Cards</h5>
                <p className="text-secondary small">
                  Issue digital meal allowances valid at grocery stores, restaurants, and food delivery apps with income tax exemption compliance.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <i className="bi bi-award fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Sales Performance Incentives</h5>
                <p className="text-secondary small">
                  Instantly credit quarterly sales bonuses and channel partner commissions directly to employee cards in seconds via API.
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
