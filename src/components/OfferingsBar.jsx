import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '../data/servicesData';
import './OfferingsBar.css';

export default function OfferingsBar() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.7 : clientWidth * 0.7;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="rh-offerings-strip-section">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-3 px-1">
          <div>
            <span className="rh-badge rh-badge-blue mb-1" style={{ fontSize: '0.72rem' }}>
              Solutions At a Glance
            </span>
            <h3 className="fs-5 fw-bold text-dark mb-0">Explore Our Complete Payment Suite</h3>
          </div>

          {/* Left/Right Scroll Controls */}
          <div className="d-flex gap-2">
            <button 
              type="button" 
              className="rh-scroll-btn" 
              onClick={() => scroll('left')}
              aria-label="Scroll Left"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button 
              type="button" 
              className="rh-scroll-btn" 
              onClick={() => scroll('right')}
              aria-label="Scroll Right"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Row */}
        <div className="rh-offerings-scroll-container" ref={scrollRef}>
          {servicesList.map((service) => (
            <Link 
              key={service.id} 
              to={service.path} 
              className="rh-offering-card text-decoration-none"
            >
              <div 
                className="rh-offering-icon-circle"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                <i className={`bi ${service.icon}`}></i>
              </div>
              <div className="rh-offering-info">
                <span className="rh-offering-title">{service.title}</span>
                <span className="rh-offering-badge">{service.badge}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
