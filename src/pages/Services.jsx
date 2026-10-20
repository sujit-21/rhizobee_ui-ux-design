import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '../data/servicesData';
import PartnerMarquee from '../components/PartnerMarquee';
import './Services.css';

export default function Services({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Interactive Solution Finder Quiz state
  const [quizChannel, setQuizChannel] = useState('counter');
  const [quizScale, setQuizScale] = useState('small');

  const categories = ['All', 'Digital Acceptance', 'Counter Payments', 'Counter Hardware', 'Issuance & Wallets', 'Retailer & CSP', 'Core Infrastructure'];

  const filteredServices = servicesList.filter(service => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getRecommendedService = () => {
    if (quizChannel === 'counter') {
      if (quizScale === 'small') return servicesList.find(s => s.id === 'soundbox');
      if (quizScale === 'medium') return servicesList.find(s => s.id === 'pos-devices');
      return servicesList.find(s => s.id === 'pos-devices');
    } else if (quizChannel === 'online') {
      return servicesList.find(s => s.id === 'payment-gateway');
    } else if (quizChannel === 'corporate') {
      return servicesList.find(s => s.id === 'ppi-wallets');
    } else {
      return servicesList.find(s => s.id === 'zoompe-portal');
    }
  };

  const recommendation = getRecommendedService();

  return (
    <div className="rh-services-overview-page">
      {/* Hero Section */}
      <section className="rh-services-hero text-center">
        <div className="container">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">All Services</span>
          </div>

          <span className="rh-badge rh-badge-blue mb-3">
            <i className="bi bi-grid-3x3-gap-fill"></i> Complete Payment Suite
          </span>
          <h1 className="rh-hero-title-oneline mb-3">
            Payment Technology Built for <span className="rh-gradient-text">How You Do Business</span>
          </h1>
          <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
            From a single QR code at a local store to bank-grade enterprise payment APIs, 
            every service is built to get money moving safely, quickly, and with full settlement visibility.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mb-4" style={{ maxWidth: '520px' }}>
            <div className="input-group shadow-sm rounded-pill overflow-hidden">
              <span className="input-group-text bg-white border-light-subtle text-secondary ps-3">
                <i className="bi bi-search"></i>
              </span>
              <input 
                type="text" 
                className="form-control bg-white text-dark border-light-subtle py-2.5" 
                placeholder="Search services (e.g. Soundbox, POS, Gateway, AEPS, Gift Card)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="btn btn-white border-light-subtle text-secondary pe-3"
                  onClick={() => setSearchTerm('')}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rh-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (Links to each separate page!) */}
      <section className="py-5" style={{ background: '#f8fbff' }}>
        <div className="container py-4">
          <div className="row g-4">
            {filteredServices.map(service => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="rh-service-card-hub">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div 
                        className="rh-dropdown-icon" 
                        style={{ width: '48px', height: '48px', fontSize: '1.4rem', color: service.color, borderColor: `${service.color}40`, background: `${service.color}15` }}
                      >
                        <i className={`bi ${service.icon}`}></i>
                      </div>
                      <span className="badge small px-2.5 py-1" style={{ background: '#e0f2fe', color: '#0284c7', border: '1px solid #bae6fd' }}>
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="fs-5 fw-bold text-dark mb-2">{service.title}</h3>
                    <p className="text-secondary small mb-3 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features checklist */}
                    <ul className="list-unstyled text-dark small mb-4 d-flex flex-column gap-1.5" style={{ fontSize: '0.85rem' }}>
                      {service.features.slice(0, 2).map((feat, i) => (
                        <li key={i} className="d-flex align-items-start gap-2">
                          <i className="bi bi-check2 text-primary shrink-0 mt-0.5"></i>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-top border-light-subtle d-flex align-items-center justify-content-between">
                    <Link to={service.path} className="btn btn-outline-primary rounded-pill btn-sm px-3 fw-semibold">
                      More Details <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                    <button 
                      onClick={() => onOpenConsultation(service.id)}
                      className="btn btn-link text-primary p-0 small fw-bold text-decoration-none"
                    >
                      Instant Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Solution Recommender Quiz */}
      <section className="py-5" style={{ background: '#ffffff' }}>
        <div className="container py-4">
          <div className="rh-quiz-box">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="rh-badge rh-badge-blue mb-2">Interactive Guide</span>
                <h2 className="text-dark fw-bold mb-3">Not Sure Which Payment Tool Fits Your Business?</h2>
                <p className="text-secondary mb-4">
                  Answer 2 simple questions to find the ideal combination of soundbox, POS, 
                  gateway, or wallet for your transaction volume.
                </p>

                <div className="mb-3">
                  <label className="text-dark small fw-bold mb-2 d-block">1. Where do you collect payments?</label>
                  <div className="d-flex flex-wrap gap-2">
                    <button 
                      onClick={() => setQuizChannel('counter')} 
                      className={`btn btn-sm rounded-pill ${quizChannel === 'counter' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    >
                      Physical Store Counter
                    </button>
                    <button 
                      onClick={() => setQuizChannel('online')} 
                      className={`btn btn-sm rounded-pill ${quizChannel === 'online' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    >
                      Website / Mobile App
                    </button>
                    <button 
                      onClick={() => setQuizChannel('corporate')} 
                      className={`btn btn-sm rounded-pill ${quizChannel === 'corporate' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    >
                      Corporate Payouts / Cards
                    </button>
                    <button 
                      onClick={() => setQuizChannel('agent')} 
                      className={`btn btn-sm rounded-pill ${quizChannel === 'agent' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    >
                      Retail CSP / Banking Kiosk
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-dark small fw-bold mb-2 d-block">2. Expected Daily Footfall / Transactions:</label>
                  <div className="d-flex flex-wrap gap-2">
                    <button 
                      onClick={() => setQuizScale('small')} 
                      className={`btn btn-sm rounded-pill ${quizScale === 'small' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    >
                      Under 50 Txns / Day
                    </button>
                    <button 
                      onClick={() => setQuizScale('medium')} 
                      className={`btn btn-sm rounded-pill ${quizScale === 'medium' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    >
                      50 - 500 Txns / Day
                    </button>
                    <button 
                      onClick={() => setQuizScale('large')} 
                      className={`btn btn-sm rounded-pill ${quizScale === 'large' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    >
                      500+ High Volume (Chain/Enterprise)
                    </button>
                  </div>
                </div>
              </div>

              {/* Recommended Service Preview */}
              <div className="col-lg-6">
                <div className="rh-card p-4 text-start">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge small px-2.5 py-1" style={{ background: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0' }}>Recommended Solution</span>
                    <span className="text-warning small"><i className="bi bi-star-fill"></i> Best Match</span>
                  </div>

                  <h3 className="text-dark fw-bold fs-4 mb-2">{recommendation?.title}</h3>
                  <p className="text-secondary small mb-3">{recommendation?.tagline}</p>

                  <div className="p-3 rounded-3 mb-3" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <div className="text-dark small fw-bold mb-1">Why this fits your business:</div>
                    <p className="text-secondary small mb-0">{recommendation?.shortDesc}</p>
                  </div>

                  <div className="d-flex flex-wrap gap-3">
                    <Link to={recommendation?.path || '/'} className="btn-rh-primary grow text-center justify-content-center">
                      View Service Details
                    </Link>
                    <button 
                      onClick={() => onOpenConsultation(recommendation?.id)}
                      className="btn btn-outline-primary rounded-pill px-3"
                    >
                      Get Quote
                    </button>
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
