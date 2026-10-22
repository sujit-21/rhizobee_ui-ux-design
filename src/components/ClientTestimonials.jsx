import React, { useRef } from 'react';
import './ClientTestimonials.css';

export default function ClientTestimonials() {
  const cardRefs = useRef([]);

  const reviews = [
    {
      id: 'retail-mumbai',
      quote: 'Switching to Rhizobee’s QR and soundbox combination cut our checkout time in half. Customers pay, we hear the loud confirmation, and the queue keeps moving.',
      author: 'Store Owner',
      business: 'Supermarket & Retail Store',
      location: 'Marol, Mumbai',
      initials: 'RS',
      accentColor: '#0284c7', // Sky Blue
      productTag: '4G Soundbox & Dynamic QR',
      metric: '50% Faster Counter Checkout',
      rating: 5
    },
    {
      id: 'sme-distributor',
      quote: 'Our onboarding was fast and far simpler than we expected. We were live and accepting high-volume vendor payments within days without operational friction.',
      author: 'Finance Manager',
      business: 'Regional SME FMCG Distributor',
      location: 'Western Region Operations',
      initials: 'FD',
      accentColor: '#10b981', // Emerald
      productTag: 'Switch API & Bulk Payouts',
      metric: 'Live in Under 72 Hours',
      rating: 5
    },
    {
      id: 'retail-corporate',
      quote: 'Having gateway, POS, and wallet payments under one dashboard has made monthly reconciliation dramatically easier for our multi-state finance team.',
      author: 'Head of Finance',
      business: 'Multi-Location Retail Corporate',
      location: 'Pan-India Chain (120+ Outlets)',
      initials: 'MR',
      accentColor: '#6366f1', // Indigo
      productTag: 'Android POS Fleet & Wallets',
      metric: '100% Automated Reconciliation',
      rating: 5
    }
  ];

  const handleMouseMove = (e, idx) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--review-mouse-x', `${x}px`);
    card.style.setProperty('--review-mouse-y', `${y}px`);
  };

  return (
    <section className="rh-testimonials-section py-5" id="testimonials">
      <div className="container py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="rh-badge rh-badge-gold mb-2.5 d-inline-flex align-items-center gap-1.5">
            <i className="bi bi-chat-heart-fill text-warning"></i>
            <span>Verified Merchant Stories</span>
          </span>
          <h2 className="display-5 fw-bold text-dark mb-3">
            What Our Clients Say About Working with Us
          </h2>
          <p className="text-secondary mx-auto mb-0" style={{ maxWidth: '740px', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Trusted by over 50,000 businesses across India — from neighborhood counters to multi-city enterprise networks.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="row g-4">
          {reviews.map((rev, idx) => (
            <div key={rev.id} className="col-12 col-lg-4">
              <div 
                ref={(el) => (cardRefs.current[idx] = el)}
                className="rh-testimonial-card"
                style={{ '--rev-accent': rev.accentColor }}
                onMouseMove={(e) => handleMouseMove(e, idx)}
              >
                {/* Mouse Spotlight */}
                <div className="testimonial-spotlight" />

                {/* Top Row: 5 Stars & Quote Icon */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="star-rating d-flex gap-1 text-warning">
                    {[...Array(rev.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <div className="quote-mark-icon">
                    <i className="bi bi-quote"></i>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="testimonial-quote-text mb-4">
                  “{rev.quote}”
                </blockquote>

                {/* Proof Metric Tag */}
                <div className="mb-4">
                  <span className="testimonial-metric-pill">
                    <i className="bi bi-check2-circle me-1.5"></i>
                    {rev.metric}
                  </span>
                </div>

                {/* Author Info Bar */}
                <div className="testimonial-author-box mt-auto pt-3 border-top border-light-subtle d-flex align-items-center gap-3">
                  <div className="author-avatar-circle">
                    {rev.initials}
                  </div>
                  <div className="author-details">
                    <div className="author-name">{rev.author}</div>
                    <div className="author-business">{rev.business}</div>
                    <div className="author-location">
                      <i className="bi bi-geo-alt me-1 text-muted"></i>
                      {rev.location}
                    </div>
                  </div>
                </div>

                {/* Product Used Tag */}
                <div className="testimonial-product-bar mt-2.5">
                  <span className="small text-muted">Solution: </span>
                  <span className="fw-semibold small text-dark">{rev.productTag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
