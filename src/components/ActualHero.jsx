import React, { useState, useEffect, useRef } from 'react';
import './ActualHero.css';

export default function ActualHero({ onOpenConsultation }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const slides = [
    {
      id: 'pos-omni',
      headlineTop: 'One Device, One Counter',
      headlineBottom: 'Any Payment Method',
      ctaText: 'Get your Rhizobee POS',
      ctaAction: () => onOpenConsultation('pos-devices'),
      badgeText: '₹2,450.00 Received',
      subBadge: 'Contactless Card Tap • Approved',
      image: '/images/hero/pos_3d.jpg',
      themeColor: '#0284c7'
    },
    {
      id: 'soundbox',
      headlineTop: 'Instant Voice Announcements',
      headlineBottom: 'In 10+ Indian Languages',
      ctaText: 'Get 4G Soundbox',
      ctaAction: () => onOpenConsultation('soundbox'),
      badgeText: '₹500.00 Paid via UPI',
      subBadge: 'Loud 95dB Audio Confirmed',
      image: '/images/hero/soundbox_3d.jpg',
      themeColor: '#f59e0b'
    },
    {
      id: 'switch-gateway',
      headlineTop: 'High-Throughput Switch Gateway',
      headlineBottom: '99.99% Banking Uptime SLA',
      ctaText: 'Explore Switch API',
      ctaAction: () => onOpenConsultation('payment-gateway'),
      badgeText: '82ms • Webhook 200 OK',
      subBadge: 'Direct Multi-Bank Redundancy',
      image: '/images/hero/gateway_3d.jpg',
      themeColor: '#6366f1'
    },
    {
      id: 'zoompe-retailer',
      headlineTop: 'Zoompe Retailer CSP Portal',
      headlineBottom: 'AEPS, Micro ATM & BBPS Bills',
      ctaText: 'Explore Zoompe Portal',
      ctaAction: () => onOpenConsultation('zoompe-portal'),
      badgeText: 'Commission Credited',
      subBadge: 'Instant Counter Payout',
      image: '/images/hero/retailer_3d.jpg',
      themeColor: '#10b981'
    }
  ];

  // Auto-play timer (5 seconds per slide)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  // Interactive 3D mouse parallax tracking
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsPaused(false);
  };

  const slide = slides[activeSlide];

  return (
    <section 
      className="rh-phonepe-exact-hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Ambient Glow Mesh Orbs */}
      <div className="rh-ambient-orb orb-primary"></div>
      <div className="rh-ambient-orb orb-secondary"></div>
      <div className="rh-ambient-mesh"></div>

      {/* Centered Heading in readable container */}
      <div className="container-xl text-center position-relative z-2 rh-pp-hero-header-container">
        <div className="rh-pp-hero-header" key={`header-${activeSlide}`}>
          <div className="rh-headline-wrapper">
            <h1 className="rh-pp-hero-top-title animate-title-in">{slide.headlineTop}</h1>
            <h2 className="rh-pp-hero-bot-title animate-subtitle-in">{slide.headlineBottom}</h2>
          </div>
          
          <div className="mt-3 animate-fade-in">
            <button
              type="button"
              className="rh-pp-hero-cta-btn"
              onClick={slide.ctaAction}
            >
              <span>{slide.ctaText}</span>
              <i className="bi bi-arrow-right ms-2 rh-cta-arrow"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Full-Width 3D Showcase Stage - Expands Left and Right Full Screen */}
      <div className="rh-pp-fullwidth-stage-container w-100 position-relative z-2">
        <div 
          className="rh-pp-stage-wrapper"
          style={{
            transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`
          }}
        >
          {/* Circular Glowing Pedestal Shadows */}
          <div className="rh-pp-platform-glow"></div>
          <div className="rh-pp-radial-rings">
            <div className="rh-neon-ring rh-ring-1"></div>
            <div className="rh-neon-ring rh-ring-2"></div>
            <div className="rh-neon-ring rh-ring-3"></div>
          </div>

          {/* High-Resolution 3D Render Presentation */}
          <div className="rh-pp-image-showcase" key={`art-${activeSlide}`}>
            <img 
              src={slide.image} 
              alt={slide.headlineTop} 
              className="rh-3d-hero-render animate-image-reveal"
            />
            <div className="rh-image-shimmer-sweep"></div>
          </div>
        </div>

        {/* PhonePe Minimalist Slider Dots with Animated Fill Progress */}
        <div className="rh-pp-minimal-dots">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              className={`rh-pp-dot ${activeSlide === idx ? 'active' : ''}`}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            >
              {activeSlide === idx && <span className="rh-dot-progress-fill"></span>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
