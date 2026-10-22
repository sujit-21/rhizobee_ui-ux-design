import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BusinessStagesOrbit.css';

export default function BusinessStagesOrbit({ onOpenConsultation }) {
  const [activeStageId, setActiveStageId] = useState('small-business');
  const [hoveredStageId, setHoveredStageId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [sheetHoverPos, setSheetHoverPos] = useState({ x: 50, y: 50 });

  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(performance.now());
  const stageRef = useRef(null);

  const stages = [
    {
      id: 'small-business',
      tag: 'Kirana & Retail',
      shortTitle: 'Kirana & Retail',
      icon: 'bi bi-shop',
      color: '#0284c7', // Sky Blue
      angleOffset: 270, // 12 o'clock
      title: 'Small Business Owners & Kiranas',
      subtitle: 'Zero hardware hassle with instant loud payment verification',
      desc: 'Local grocery shops, cafes, clinics, and retail service counters that need rapid QR payment acceptance, multilingual voice alerts, and instant daily settlements to restock fast-moving inventory.',
      solutions: [
        { name: 'Soundbox Solutions (4G)', icon: 'bi bi-megaphone-fill', tag: 'Voice Alert' },
        { name: 'Durable Acrylic QR Standees', icon: 'bi bi-qr-code-scan', tag: 'Zero MDR' },
        { name: 'Zoompe Recharge & Bill Portal', icon: 'bi bi-phone-fill', tag: 'Value Added' }
      ],
      stats: ['⚡ Instant Audio Alerts', '₹0 MDR on UPI', '📅 Daily Instant Settlement'],
      recommendedLink: '/services/soundbox'
    },
    {
      id: 'sme',
      tag: 'SMEs & Retailers',
      shortTitle: 'SMEs & Stores',
      icon: 'bi bi-bag-check-fill',
      color: '#10b981', // Emerald
      angleOffset: 342, // ~2 o'clock
      title: 'SMEs & Growing Retailers',
      subtitle: 'Modernize counter checkout with smart Android POS & receipts',
      desc: 'Specialty stores, multi-counter restaurants, boutique apparel, and electronics retailers that need contactless card swiping, integrated thermal receipts, and real-time inventory synchronization.',
      solutions: [
        { name: 'Android Smart POS Terminals', icon: 'bi bi-credit-card-2-front-fill', tag: 'Tap & Chip' },
        { name: 'Dynamic Billing QR Screens', icon: 'bi bi-display', tag: 'Fast Billing' },
        { name: 'Payment Gateway (Shopify/Woo)', icon: 'bi bi-cart-check-fill', tag: 'Online Rails' }
      ],
      stats: ['💳 Contactless NFC & Chip', '🧾 Inbuilt Thermal Receipts', '🔋 All-Day 4G Battery'],
      recommendedLink: '/services/pos-devices'
    },
    {
      id: 'msme',
      tag: 'MSMEs & Payouts',
      shortTitle: 'MSMEs & Payouts',
      icon: 'bi bi-buildings-fill',
      color: '#f59e0b', // Amber
      angleOffset: 54, // ~4 o'clock
      title: 'MSMEs & Manufacturers',
      subtitle: 'Corporate bank transfers, vendor payouts and virtual accounts',
      desc: 'Small and medium manufacturing enterprises, logistics operators, and wholesale distributors needing bulk IMPS/NEFT vendor payouts, invoice collection links, and dedicated relationship management.',
      solutions: [
        { name: 'Switch Unified Payment API', icon: 'bi bi-cpu-fill', tag: 'One API' },
        { name: 'Virtual Account Collection', icon: 'bi bi-bank2', tag: 'Auto Reconcile' },
        { name: 'Vendor Payout Gateway', icon: 'bi bi-send-check-fill', tag: 'Bulk IMPS' }
      ],
      stats: ['⚡ Sub-second IMPS Payouts', '📊 Automated Reconciliation', '🛡️ 99.99% Core SLA'],
      recommendedLink: '/services/switch-api'
    },
    {
      id: 'enterprise',
      tag: 'Enterprises & Chains',
      shortTitle: 'Chains & Retail',
      icon: 'bi bi-globe2',
      color: '#6366f1', // Indigo
      angleOffset: 126, // ~8 o'clock
      title: 'Large Enterprises & Retail Chains',
      subtitle: 'Multi-store ERP integration and 99.99% high-availability uptime',
      desc: 'National supermarket chains, department stores, and nationwide franchises requiring centralized multi-terminal fleet management, automated chargeback resolution, and custom volume pricing tiers.',
      solutions: [
        { name: 'High-throughput Gateway Switch', icon: 'bi bi-diagram-3-fill', tag: '10K TPS' },
        { name: 'Multi-terminal POS Fleet Manager', icon: 'bi bi-device-ssd-fill', tag: 'Central Fleet' },
        { name: 'Custom ERP Accounting Webhooks', icon: 'bi bi-code-slash', tag: 'Direct Webhook' }
      ],
      stats: ['🏬 Nationwide Terminal Fleet', '💼 Dedicated Account Manager', '📈 Custom Volume Pricing'],
      recommendedLink: '/services/payment-gateway'
    },
    {
      id: 'corporates',
      tag: 'Corporates & Perks',
      shortTitle: 'Corporates & Perks',
      icon: 'bi bi-wallet-fill',
      color: '#ec4899', // Pink
      angleOffset: 198, // ~10 o'clock
      title: 'Corporates & Institutions',
      subtitle: 'Programmatic expense cards and employee festive gifting',
      desc: 'Mid to large corporates looking to eliminate manual employee reimbursements with customized prepaid RuPay/Visa corporate fuel and food cards, plus automated festive gift voucher distribution.',
      solutions: [
        { name: 'PPI Wallet Card Issuance', icon: 'bi bi-wallet2', tag: 'RuPay / Visa' },
        { name: '500+ Brand Gift Vouchers', icon: 'bi bi-gift-fill', tag: 'Instant Code' },
        { name: 'Bulk Payroll Disbursement API', icon: 'bi bi-cash-stack', tag: 'Direct Credit' }
      ],
      stats: ['🎁 500+ Top Consumer Brands', '💳 Tax-Compliant Food Cards', '📋 Programmatic Controls'],
      recommendedLink: '/services/ppi-wallets'
    }
  ];

  const currentStage = stages.find(s => s.id === activeStageId) || stages[0];

  // Continuous smooth orbital rotation when not paused or hovered
  useEffect(() => {
    const animate = (currentTime) => {
      const delta = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      if (!isPaused && !hoveredStageId) {
        // Luxury rotation: ~360deg in 45s (0.008deg per ms)
        setOrbitAngle((prev) => (prev + delta * 0.009) % 360);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPaused, hoveredStageId]);

  // Stage coordinate system: 700x700 with center at (350, 350)
  // Radius for 3D orbiting nodes (scaled up for computers and laptops)
  const STAGE_CENTER = 350;
  const orbitRadius = 285;

  // Calculate coordinates for the laser energy beam
  const activeStage = currentStage;
  const activeTotalAngle = (activeStage.angleOffset + orbitAngle) * (Math.PI / 180);
  const activeX = STAGE_CENTER + orbitRadius * Math.cos(activeTotalAngle);
  const activeY = STAGE_CENTER + orbitRadius * Math.sin(activeTotalAngle);

  // Hover handlers to automatically switch & show stage details
  const handleStageHover = (stageId) => {
    setActiveStageId(stageId);
    setHoveredStageId(stageId);
  };

  const handleStageLeave = () => {
    setHoveredStageId(null);
  };

  // Interactive 3D Gyro/Tilt on Orbit Stage
  const handleStageMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x: x * 14, y: -y * 12 });
  };

  const handleStageMouseLeave = () => {
    setIsPaused(false);
    setHoveredStageId(null);
    setMouseTilt({ x: 0, y: 0 });
  };

  // Mouse spotlight on the Detail Sheet
  const handleSheetMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSheetHoverPos({ x, y });
  };

  return (
    <section className="rh-orbit-theater-section" id="stages-orbit">
      <div className="container py-5">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="rh-badge rh-badge-blue mb-2.5 d-inline-flex align-items-center gap-1.5">
            <span className="orbit-pulse-dot"></span>
            <span>3D Interactive Architecture Ecosystem</span>
          </span>
          <h2 className="display-5 fw-bold text-dark mb-2">
            Built for Every Stage of Business
          </h2>
          <p className="text-secondary mx-auto mb-4" style={{ maxWidth: '750px', fontSize: '1.05rem' }}>
            Hover your mouse over any 3D node or category tab below to <strong>automatically reveal</strong> its live payment architecture, hardware setup, and enterprise APIs.
          </p>

          {/* Quick-Switch Pill Dock */}
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 mb-4">
            <div className="orbit-selector-pills">
              {stages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  onMouseEnter={() => handleStageHover(stage.id)}
                  onMouseLeave={handleStageLeave}
                  className={`orbit-pill-btn ${activeStageId === stage.id ? 'active' : ''}`}
                >
                  <i className={`${stage.icon} me-1.5`}></i>
                  <span>{stage.tag}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            FULL-WIDTH 3D SPATIAL ORBIT THEATER
            ======================================================== */}
        <div 
          ref={stageRef}
          className="orbit-stage-wrapper"
          onMouseMove={handleStageMouseMove}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleStageMouseLeave}
        >
          {/* 3D Depth Scene Container with Perspective */}
          <div className="orbit-3d-scene">
            {/* 3D Ground Shadow Plane */}
            <div className="orbit-3d-shadow-plane" />

            {/* Ambient Cosmic Radial Glow Behind Wheel */}
            <div className="orbit-ambient-glow" />

            {/* 3D Tilted Orbital Planetary Disc with Interactive Parallax */}
            <div 
              className="orbit-circular-stage"
              style={{
                transform: `rotateX(${52 + mouseTilt.y}deg) rotateZ(${-12 + mouseTilt.x}deg) rotateY(${mouseTilt.x * 0.4}deg)`
              }}
            >
              {/* 3D Perspective Grid Rays on the Disc Floor */}
              <div className="orbit-floor-rays" />

              {/* SVG Connecting Energy Beam + Traveling Light Photon */}
              <svg className="orbit-beam-svg" viewBox="0 0 700 700" aria-hidden="true">
                <defs>
                  <linearGradient id="beamGradient" x1={STAGE_CENTER} y1={STAGE_CENTER} x2={activeX} y2={activeY} gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.85" />
                    <stop offset="100%" stopColor={currentStage.color} stopOpacity="1" />
                  </linearGradient>
                  
                  <filter id="beamGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Laser Energy Track from Rhizobee Hub to Active Node */}
                <line 
                  x1={STAGE_CENTER} 
                  y1={STAGE_CENTER} 
                  x2={activeX} 
                  y2={activeY} 
                  stroke="url(#beamGradient)" 
                  strokeWidth="3.5" 
                  strokeDasharray="8 5"
                  className="orbit-beam-line"
                  filter="url(#beamGlow)"
                />

                {/* Animated Light Photon Pulse traveling along the laser beam */}
                <circle r="4.5" fill="#ffffff" stroke={currentStage.color} strokeWidth="2" filter="url(#beamGlow)">
                  <animateMotion 
                    path={`M ${STAGE_CENTER},${STAGE_CENTER} L ${activeX},${activeY}`} 
                    dur="1.2s" 
                    repeatCount="indefinite" 
                  />
                </circle>

                {/* Target Node Energy Ring */}
                <circle 
                  cx={activeX} 
                  cy={activeY} 
                  r="26" 
                  fill="none" 
                  stroke={currentStage.color} 
                  strokeWidth="2" 
                  opacity="0.6"
                  className="target-node-pulse-ring"
                />
              </svg>

              {/* 3D Concentric Orbital Rings */}
              <div className="orbit-track track-outer" />
              <div className="orbit-track track-middle" />
              <div className="orbit-track track-inner" />

              {/* ====================================================
                  CENTRAL ANCHOR: 3D MULTI-TIER RHIZOBEE CORE NUCLEUS
                  ==================================================== */}
              <div className="rhizobee-central-nucleus">
                {/* 3D Tiered Pedestal Layers */}
                <div className="nucleus-3d-pedestal pedestal-bottom" />
                <div className="nucleus-3d-pedestal pedestal-mid" />

                {/* Outer Radiant Glow Rings */}
                <div className="nucleus-glow-ring ring-1" />
                <div className="nucleus-glow-ring ring-2" />

                {/* 3D Light Pillar Cylinder */}
                <div className="nucleus-light-pillar" />

                {/* Upright Floating Core Disk (Faces viewer with inverse tilt) */}
                <div 
                  className="nucleus-core-disc nucleus-3d-upright"
                  style={{
                    transform: `rotateZ(${12 - mouseTilt.x}deg) rotateX(${-52 - mouseTilt.y}deg) translateZ(54px)`
                  }}
                >
                  <div className="nucleus-inner-shimmer" />
                  <img 
                    src="/images/rhizobee-icon.png" 
                    alt="Rhizobee Core Hub" 
                    className="nucleus-logo-mark"
                  />
                  <span className="nucleus-brand-text">RHIZOBEE</span>
                  <span className="nucleus-hub-tag">CORE HUB</span>
                </div>
              </div>

              {/* ====================================================
                  5 ORBITING SATELLITE BUSINESS TIER NODES
                  (Tilted with plane, but Counter-Tilted Upright in 3D!)
                  ==================================================== */}
              {stages.map((stage) => {
                const currentAngleRad = ((stage.angleOffset + orbitAngle) % 360) * (Math.PI / 180);
                const xPos = STAGE_CENTER + orbitRadius * Math.cos(currentAngleRad);
                const yPos = STAGE_CENTER + orbitRadius * Math.sin(currentAngleRad);
                const isActive = stage.id === activeStageId;
                const isHovered = stage.id === hoveredStageId;

                return (
                  <div
                    key={stage.id}
                    className={`orbit-node-item ${isActive ? 'is-active' : ''} ${isHovered ? 'is-hovered' : ''}`}
                    style={{
                      left: `${xPos}px`,
                      top: `${yPos}px`,
                      '--node-accent': stage.color
                    }}
                    onMouseEnter={() => handleStageHover(stage.id)}
                    onMouseLeave={handleStageLeave}
                    onClick={() => setActiveStageId(stage.id)}
                    role="button"
                    tabIndex={0}
                    title={`Hover or click to automatically inspect ${stage.title}`}
                  >
                    {/* 3D Ground Drop Shadow on Disc Floor */}
                    <div className="node-ground-shadow" />

                    {/* Upright 3D Card (Faces camera in 3D perspective) */}
                    <div 
                      className="orbit-node-card node-3d-upright"
                      style={{
                        transform: `rotateZ(${12 - mouseTilt.x}deg) rotateX(${-52 - mouseTilt.y}deg) translateZ(${isActive ? 72 : 38}px)`
                      }}
                    >
                      {/* 3D Hologram Light Stem Anchor to Track */}
                      <span className="node-3d-stem" />

                      {/* Active Status Beacon */}
                      {isActive && <span className="node-active-ping" />}

                      {/* Node Icon Tile */}
                      <div className="node-icon-tile">
                        <i className={stage.icon}></i>
                      </div>

                      {/* Node Text Label (Always upright) */}
                      <div className="node-label-wrap">
                        <span className="node-tag">{stage.tag}</span>
                        <span className="node-title">{stage.shortTitle}</span>
                      </div>

                      {/* 3D Hover Pill Badge */}
                      <span className="node-hover-badge">
                        <i className="bi bi-chevron-right"></i>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================
            HOVER-REVEAL FLOATING ACTIVE DETAIL SHEET (Below Orbit)
            (Automatically shows & updates when mouse hovers over
             any orbit node or any tab on the sheet itself)
            ======================================================== */}
        <div className="orbit-detail-sheet-wrap">
          {/* Main Detail Sheet Card with 3D Spotlight */}
          <div 
            className="orbit-detail-card" 
            key={currentStage.id}
            style={{ 
              '--tier-accent': currentStage.color,
              '--mouse-x': `${sheetHoverPos.x}%`,
              '--mouse-y': `${sheetHoverPos.y}%`
            }}
            onMouseMove={handleSheetMouseMove}
          >
            {/* 3D Glass Ambient Spotlight Overlay */}
            <div className="orbit-card-spotlight" />

            {/* Top Subtitle Pill */}
            <div className="mb-3">
              <span className="orbit-tier-subtitle-pill">
                <i className={`${currentStage.icon} me-1.5`}></i>
                {currentStage.subtitle}
              </span>
            </div>

            {/* Stage Title & Description */}
            <h3 className="display-6 fw-bold text-dark mb-2">
              {currentStage.title}
            </h3>
            <p className="text-secondary leading-relaxed mb-4" style={{ fontSize: '1.05rem', maxWidth: '880px' }}>
              {currentStage.desc}
            </p>

            {/* Recommended Hardware & Software Architecture Setup */}
            <div className="orbit-setup-box mb-4">
              <div className="setup-header-label mb-2.5">
                <i className="bi bi-cpu me-1.5 text-primary"></i>
                <span>Recommended Rhizobee Architecture Setup:</span>
              </div>
              <div className="row g-2.5">
                {currentStage.solutions.map((sol, idx) => (
                  <div key={idx} className="col-12 col-md-4">
                    <div className="orbit-solution-pill">
                      <div className="sol-icon-box">
                        <i className={sol.icon}></i>
                      </div>
                      <div className="sol-text-box">
                        <span className="sol-name">{sol.name}</span>
                        <span className="sol-badge">{sol.tag}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights / Performance Strip */}
            <div className="orbit-highlights-strip mb-4">
              {currentStage.stats.map((stat, i) => (
                <div key={i} className="highlight-pill">
                  {stat}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="d-flex flex-wrap align-items-center gap-3">
              <Link to={currentStage.recommendedLink} className="btn-rh-primary">
                <span>Explore This Setup Details</span>
                <i className="bi bi-arrow-right ms-1"></i>
              </Link>

              <button
                type="button"
                onClick={() => onOpenConsultation && onOpenConsultation(currentStage.recommendedLink.replace('/services/', ''))}
                className="btn-rh-outline"
              >
                <i className="bi bi-chat-dots me-1.5"></i>
                <span>Get Custom Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
