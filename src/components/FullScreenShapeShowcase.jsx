import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import './FullScreenShapeShowcase.css';

export default function FullScreenShapeShowcase({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState(0);
  const [inView, setInView] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isSimulating, setIsSimulating] = useState(false);
  const sectionRef = useRef(null);

  // Scroll In / Out Viewport Trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 3D Parallax Tracking
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 16, y: -y * 16 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const dimensions = [
    {
      id: 'pos',
      tag: '01 // SMART HARDWARE ARCHITECTURE',
      title: 'Smart Contactless POS Terminals',
      subtitle: 'High-speed Android 11 terminal with thermal printer, 4G VoLTE, and instant NFC tap verification.',
      image: '/images/hero/pos_3d.jpg',
      accentColor: '#0ea5e9',
      glowColor: 'rgba(14, 165, 233, 0.45)',
      link: '/services/pos-devices',
      stats: [
        { label: 'Tap Speed', val: '0.4s NFC' },
        { label: 'Thermal Print', val: '80mm/s' },
        { label: 'Security', val: 'PCI-PTS 6.x' }
      ],
      badges: [
        { title: '₹2,450.00 Paid', sub: 'Mastercard Tap Approved', icon: 'bi-check-circle-fill', color: '#10b981' },
        { title: 'Thermal Receipt', sub: 'Instant Auto-Cut', icon: 'bi-printer-fill', color: '#0ea5e9' }
      ]
    },
    {
      id: 'soundbox',
      tag: '02 // IOT ACOUSTIC BROADCAST',
      title: 'Acoustic 4G Instant Soundbox',
      subtitle: 'Crystal-clear 95dB voice announcements in 10+ Indian languages that stop counter fraud in 0.8 seconds.',
      image: '/images/hero/soundbox_3d.jpg',
      accentColor: '#f59e0b',
      glowColor: 'rgba(245, 158, 11, 0.45)',
      link: '/services/soundbox',
      stats: [
        { label: 'Alert Latency', val: '0.8s Voice' },
        { label: 'Speaker Output', val: '95dB Ultra-Loud' },
        { label: 'Battery Life', val: '72-Hour Backup' }
      ],
      badges: [
        { title: '₹500.00 Received', sub: 'Hindi • UPI Voice Confirmed', icon: 'bi-megaphone-fill', color: '#f59e0b' },
        { title: 'Dual 4G SIM', sub: 'Always Online SLA', icon: 'bi-broadcast', color: '#10b981' }
      ]
    },
    {
      id: 'switch',
      tag: '03 // CORE BANKING SWITCH',
      title: 'High-Throughput Switch Gateway',
      subtitle: 'Bank-grade multi-switch cascade engineered for 99.99% uptime and dynamic 18ms failover routing.',
      image: '/images/hero/gateway_3d.jpg',
      accentColor: '#6366f1',
      glowColor: 'rgba(99, 102, 241, 0.45)',
      link: '/services/payment-gateway',
      stats: [
        { label: 'Uptime SLA', val: '99.99% Banking' },
        { label: 'Switch Ping', val: '82ms Webhook' },
        { label: 'Modes', val: '120+ Payment Rails' }
      ],
      badges: [
        { title: '200 OK Webhook', sub: 'Direct Bank Clearance', icon: 'bi-shield-fill-check', color: '#6366f1' },
        { title: 'AI Routing', sub: 'Zero Dropped Carts', icon: 'bi-shuffle', color: '#0ea5e9' }
      ]
    },
    {
      id: 'zoompe',
      tag: '04 // LAST-MILE FINANCIAL INCLUSION',
      title: 'Zoompe CSP Retailer Network',
      subtitle: 'Turn every local retail store into an Aadhaar mini-bank with AEPS, Micro ATM, and instant wallet earnings.',
      image: '/images/hero/retailer_3d.jpg',
      accentColor: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      link: '/services/zoompe-portal',
      stats: [
        { label: 'Active CSPs', val: '25,000+ Stores' },
        { label: 'Daily Services', val: '30+ Live Products' },
        { label: 'Settlement', val: 'Real-Time Wallet' }
      ],
      badges: [
        { title: 'Commission Credited', sub: 'Instant Cash-out', icon: 'bi-wallet-fill', color: '#10b981' },
        { title: 'AEPS & Micro ATM', sub: 'Doorstep Banking Hub', icon: 'bi-bank2', color: '#f59e0b' }
      ]
    }
  ];

  const current = dimensions[activeTab];

  const handleSimulate = () => {
    setIsSimulating(true);
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.65 }
      });
    } catch (e) {}

    setTimeout(() => {
      setIsSimulating(false);
    }, 1800);
  };

  return (
    <section 
      className={`rh-cinematic-stage-section ${inView ? 'stage-in-view' : ''}`}
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--active-accent': current.accentColor,
        '--active-glow': current.glowColor
      }}
    >
      {/* Dynamic Cosmic Ambient Bloom */}
      <div className="rh-cosmic-glow glow-1"></div>
      <div className="rh-cosmic-glow glow-2"></div>
      <div className="rh-cyber-grid-backdrop"></div>

      <div className="container position-relative z-3 py-5">
        {/* Section Top Header */}
        <div className="text-center mb-5 animate-slide-down">
          <div className="rh-futuristic-pill mb-3">
            <span className="rh-neon-beacon"></span>
            <span>NEXT-GENERATION ENTERPRISE FINTECH</span>
          </div>
          <h2 className="rh-cinematic-heading text-white">
            The Multi-Dimensional <span className="rh-neon-gradient-text">Payment Architecture</span>
          </h2>
          <p className="text-white-50 mx-auto mt-3 fs-5" style={{ maxWidth: '820px' }}>
            Explore how Rhizobee synchronizes smart counter hardware, audible voice IoT, 
            high-throughput banking switches, and rural CSP networks into a unified powerhouse.
          </p>

          {/* Interactive Futuristic Dimension Switcher Tabs */}
          <div className="rh-dimension-tabs-bar mt-4">
            {dimensions.map((dim, idx) => (
              <button
                key={dim.id}
                type="button"
                className={`rh-dim-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="rh-tab-dot"></span>
                <span className="rh-tab-label">{dim.title.split(' ')[0]} {dim.title.split(' ')[1]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Central 3D Keynote Showcase Stage */}
        <div className="row g-5 align-items-center rh-keynote-stage-row">
          {/* Left Column: Rich Metrics & Live Dimension Info */}
          <div className="col-lg-5 text-start animate-fade-left" key={`left-${activeTab}`}>
            <span className="rh-dim-badge mb-3 d-inline-block">
              {current.tag}
            </span>
            <h3 className="rh-dim-title text-white mb-3">
              {current.title}
            </h3>
            <p className="rh-dim-desc text-white-50 leading-relaxed mb-4">
              {current.subtitle}
            </p>

            {/* Spec Metrics Grid */}
            <div className="rh-dim-specs-grid mb-4">
              {current.stats.map((st, i) => (
                <div key={i} className="rh-dim-spec-cell">
                  <div className="rh-spec-val text-white">{st.val}</div>
                  <div className="rh-spec-lbl text-white-50">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <Link to={current.link} className="btn-rh-cinematic-primary">
                <span>Explore Full Capabilities</span>
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
              <button 
                type="button"
                className={`btn-rh-cinematic-outline ${isSimulating ? 'simulating' : ''}`}
                onClick={handleSimulate}
              >
                <i className={`bi ${isSimulating ? 'bi-lightning-charge-fill animate-spin' : 'bi-play-circle-fill'} me-2`}></i>
                <span>{isSimulating ? 'Simulating High Volume...' : 'Trigger Live Pipeline'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Isometric Centerpiece with Parallax Float & Glass Badges */}
          <div className="col-lg-7">
            <div 
              className="rh-cinematic-3d-podium"
              style={{
                transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`
              }}
            >
              {/* Concentric Neon Pedestal Rings */}
              <div className="rh-podium-glow-ambient"></div>
              <div className="rh-podium-neon-rings">
                <div className="rh-pedestal-ring p-ring-1"></div>
                <div className="rh-pedestal-ring p-ring-2"></div>
                <div className="rh-pedestal-ring p-ring-3"></div>
              </div>

              {/* High-Definition 3D Render Canvas */}
              <div className="rh-podium-image-frame" key={`render-${activeTab}`}>
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="rh-podium-render-img animate-cinematic-reveal"
                />
                <div className="rh-podium-light-sweep"></div>
              </div>

              {/* Floating Spatial Glass Badges (Layered in 3D Space) */}
              <div className="rh-floating-spatial-badge badge-top-right animate-float-slow">
                <div className="d-flex align-items-center gap-2.5">
                  <div className="rh-spatial-icon-box" style={{ background: current.badges[0].color }}>
                    <i className={`bi ${current.badges[0].icon} text-white`}></i>
                  </div>
                  <div>
                    <strong className="text-white d-block small">{current.badges[0].title}</strong>
                    <span className="text-white-50 xx-small">{current.badges[0].sub}</span>
                  </div>
                </div>
              </div>

              <div className="rh-floating-spatial-badge badge-bottom-left animate-float-reverse">
                <div className="d-flex align-items-center gap-2.5">
                  <div className="rh-spatial-icon-box" style={{ background: current.badges[1].color }}>
                    <i className={`bi ${current.badges[1].icon} text-white`}></i>
                  </div>
                  <div>
                    <strong className="text-white d-block small">{current.badges[1].title}</strong>
                    <span className="text-white-50 xx-small">{current.badges[1].sub}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
