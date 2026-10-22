import React, { useState, useEffect, useRef } from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(null);

  const pillars = [
    {
      id: 'trusted-partners',
      title: 'Backed by Trusted Partners',
      badge: 'Bank-Grade Infrastructure',
      desc: 'We operate as a distribution partner to leading banks and authorized payment aggregators, so every solution is built on regulated, high-availability, and audited financial rails.',
      icon: 'bi bi-shield-check',
      iconEmoji: '🛡️',
      color: '#0284c7', // Sky Blue
      glowRgb: '2, 132, 199',
      highlight: 'PayU · JioPay · Easebuzz · Razorpay'
    },
    {
      id: 'compliance-built-in',
      title: 'Compliance Built In',
      badge: 'RBI & PCI-DSS Aligned',
      desc: 'Security, multi-factor tokenization, and enterprise data protection are engineered into every terminal and API we deploy, adhering to strict regulatory governance.',
      icon: 'bi bi-lock-fill',
      iconEmoji: '🔒',
      color: '#059669', // Emerald
      glowRgb: '5, 150, 105',
      highlight: 'Zero Compromise Security'
    },
    {
      id: 'one-partner',
      title: 'One Partner, Every Method',
      badge: 'Unified Relationship',
      desc: 'Gateway, QR, Soundbox, Smart POS, PPI Wallets, and Corporate Gifting under a single merchant relationship instead of managing six disconnected vendors.',
      icon: 'bi bi-credit-card-2-front-fill',
      iconEmoji: '💳',
      color: '#4f46e5', // Indigo
      glowRgb: '79, 70, 229',
      highlight: 'QR · Soundbox · POS · PPI'
    },
    {
      id: 'every-size',
      title: 'Built for Every Business Size',
      badge: 'Hyper-Scalable Rails',
      desc: 'From a single-counter neighborhood grocery shop to a nationwide enterprise chain with thousands of terminals, our architecture effortlessly scales with your transaction volume.',
      icon: 'bi bi-graph-up-arrow',
      iconEmoji: '📈',
      color: '#d97706', // Amber / Gold
      glowRgb: '217, 119, 6',
      highlight: '1 to 10,000+ Terminals'
    },
    {
      id: 'real-time-visibility',
      title: 'Real-Time Visibility',
      badge: 'T+0 Live Reporting',
      desc: 'Merchants and corporate finance teams receive live settlement webhooks and unified dashboard analytics — completely eliminating end-of-month reconciliation surprises.',
      icon: 'bi bi-lightning-charge-fill',
      iconEmoji: '⚡',
      color: '#0891b2', // Cyan
      glowRgb: '8, 145, 178',
      highlight: 'Automated Instant Recon'
    },
    {
      id: 'dedicated-support',
      title: 'Dedicated Merchant Support',
      badge: 'Direct Payments Desk',
      desc: 'Rapid onboarding, seamless hardware swap support, and everyday assistance from a team of payments specialists, not an automated chatbot or generic call center.',
      icon: 'bi bi-headset',
      iconEmoji: '🎧',
      color: '#db2777', // Rose / Pink
      glowRgb: '219, 39, 119',
      highlight: '24/7 Desk · <15s Response'
    }
  ];

  // Rotate smoothly over time when not paused
  useEffect(() => {
    if (isPaused || isManual) return;

    const speed = 360 / 26000; // 360 degrees in 26 seconds

    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      setCurrentAngle((prev) => (prev - delta * speed) % 360);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lastTimeRef.current = null;
    };
  }, [isPaused, isManual]);

  // Navigate directly to a specific card
  const handleSelectCard = (index) => {
    setIsManual(true);
    setActiveCardIndex(index);
    // Card index corresponds to initial angle of index * 60deg
    // To bring index to front (0deg), rotate carousel by -index * 60deg
    const targetAngle = -index * 60;
    setCurrentAngle(targetAngle);
    // Resume auto rotation after 6s of inactivity
    setTimeout(() => {
      setIsManual(false);
    }, 6000);
  };

  return (
    <section className="rh-why-choose-section" id="why-choose-us">
      {/* Background Ambience & Cyber Grid */}
      <div className="why-3d-backdrop" aria-hidden="true">
        <div className="why-radial-glow glow-cyan" />
        <div className="why-radial-glow glow-gold" />
        <div className="why-grid-lines" />
      </div>

      <div className="container relative-z">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="rh-badge rh-badge-blue mb-2.5 d-inline-flex align-items-center gap-1.5 shadow-sm">
            <i className="bi bi-shield-check text-primary"></i>
            <span>Enterprise Advantage</span>
          </span>
          <h2 className="display-5 fw-bold text-dark mb-3 tracking-tight">
            Why Merchants & Corporates Choose to Grow with Us
          </h2>
          <p className="text-secondary mx-auto mb-0" style={{ maxWidth: '780px', fontSize: '1.05rem', lineHeight: '1.7', color: '#475569' }}>
            Every partnership is run the way we’d want a payments partner to run one for us — 
            transparent, bank-grade, and engineered for relentless uptime.
          </p>
        </div>

        {/* 3D CAROUSEL THEATER */}
        <div className="why-3d-stage-wrapper">
          {/* Holographic Floor Disc */}
          <div className="why-hologram-floor" aria-hidden="true">
            <div className="floor-ring floor-ring-outer" />
            <div className="floor-ring floor-ring-inner" />
            <div className="floor-glow" />
          </div>

          {/* 3D Rotating Cylinder */}
          <div 
            className="why-3d-carousel-stage"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="why-3d-carousel"
              style={{
                transform: `rotateX(-4deg) rotateY(${currentAngle}deg)`
              }}
            >
              {pillars.map((pillar, index) => {
                const cardAngle = index * 60; // 6 cards 60deg apart
                return (
                  <div 
                    key={pillar.id}
                    className={`why-3d-card ${activeCardIndex === index ? 'active-spotlight' : ''}`}
                    style={{
                      '--card-angle': `${cardAngle}deg`,
                      '--pillar-color': pillar.color,
                      '--pillar-glow': pillar.glowRgb,
                      transform: `rotateY(${cardAngle}deg) translateZ(480px)`
                    }}
                    onClick={() => handleSelectCard(index)}
                  >
                    {/* Ambient Cyber Card Border Glow */}
                    <div className="why-card-glow-border" />

                    {/* Card Header: Icon & Micro Badge */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="why-3d-ico-box">
                        <i className={pillar.icon}></i>
                      </div>
                      <span className="why-3d-micro-badge">
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Card Body */}
                    <h3 className="why-3d-card-title mb-2">
                      {pillar.title}
                    </h3>
                    <p className="why-3d-card-desc mb-3">
                      {pillar.desc}
                    </p>

                    {/* Card Footer: Highlight & Arrow */}
                    <div className="why-3d-card-footer mt-auto pt-3 border-top border-light-subtle d-flex align-items-center justify-content-between">
                      <span className="why-3d-highlight-pill">
                        <i className="bi bi-check-circle-fill me-1.5"></i>
                        <span>{pillar.highlight}</span>
                      </span>
                      <span className="why-3d-arrow-btn">
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Interaction Hint & Indicator Dots */}
          <div className="text-center mt-4">
            <div className="d-inline-flex align-items-center gap-2 mb-2">
              {pillars.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`why-dot-pill ${activeCardIndex === idx ? 'active' : ''}`}
                  onClick={() => handleSelectCard(idx)}
                  aria-label={`View Pillar ${idx + 1}`}
                />
              ))}
            </div>
            <div className="why-3d-hint">
              <i className="bi bi-cursor-fill me-1"></i>
              HOVER TO PAUSE ROTATION • CLICK ANY CARD TO BRING FRONT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

