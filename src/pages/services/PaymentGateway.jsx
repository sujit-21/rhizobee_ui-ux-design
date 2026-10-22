import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import PartnerMarquee from '../../components/PartnerMarquee';
import './PaymentGateway.css';

export default function PaymentGateway({ onOpenConsultation }) {
  const [pipelineStep, setPipelineStep] = useState(0); // 0 = idle, 1, 2, 3, 4 = active steps, 5 = completed
  const [isRunning, setIsRunning] = useState(false);

  const simulatePipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setPipelineStep(1);

    setTimeout(() => setPipelineStep(2), 600);
    setTimeout(() => setPipelineStep(3), 1200);
    setTimeout(() => setPipelineStep(4), 1800);
    setTimeout(() => {
      setPipelineStep(5);
      setIsRunning(false);
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.65 }
        });
      } catch (e) {}
    }, 2400);
  };

  const steps = [
    {
      id: 1,
      title: 'Customer Checkout',
      subtitle: 'UPI / Card / Netbanking',
      icon: 'bi-phone',
      latency: '12ms'
    },
    {
      id: 2,
      title: '256-Bit Tokenizer',
      subtitle: 'PCI-DSS L1 Vault & Fraud Filter',
      icon: 'bi-shield-lock',
      latency: '18ms'
    },
    {
      id: 3,
      title: 'Rhizobee AI Switch',
      subtitle: 'Dynamic Multi-Bank Routing',
      icon: 'bi-cpu',
      latency: '14ms'
    },
    {
      id: 4,
      title: 'NPCI / Bank Host',
      subtitle: 'Multi-Bank Core Settlement',
      icon: 'bi-bank',
      latency: '24ms'
    },
    {
      id: 5,
      title: 'Merchant Credit',
      subtitle: 'T+0 Instant Ledger Credit',
      icon: 'bi-check-circle-fill',
      latency: '68ms Total'
    }
  ];

  return (
    <div className="rh-payment-gateway-page">
      {/* Hero Section */}
      <section className="rh-pg-hero">
        <div className="rh-pg-glow"></div>
        <div className="container position-relative">
          <div className="rh-breadcrumb justify-content-center">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Payment Gateway Solutions</span>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-9">
              <span className="rh-badge rh-badge-blue mb-3">
                <i className="bi bi-credit-card-2-front-fill me-1"></i> Flagship Gateway
              </span>
              <h1 className="rh-hero-title-oneline mb-3">
                Accept Payments Online with <span className="rh-gradient-text">Zero Friction</span>
              </h1>
              <p className="lead text-secondary rh-hero-subtitle-justified mb-4">
                Accept payments online with a fast, secure gateway that supports cards, net banking, 
                UPI, and wallets through a single unified integration. Engineered for high-volume 
                checkout flows with real-time settlement visibility.
              </p>

              {/* Key Highlights */}
              <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">99.9% Uptime Guarantee</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">T+0 Same-Day Settlement</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">120+ Payment Modes</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill" style={{ background: '#e0f2fe', border: '1px solid #bae6fd' }}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span className="text-dark small fw-semibold">Bank-Grade PCI-DSS L1</span>
                </div>
              </div>

              <div className="d-flex justify-content-center flex-wrap gap-3">
                <button 
                  onClick={() => onOpenConsultation('payment-gateway')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-key-fill text-warning me-1"></i> Get API Keys & Onboard
                </button>
                <a href="#pipeline" className="btn-rh-outline px-4 py-3">
                  <i className="bi bi-diagram-3-fill me-1"></i> View Live Transaction Route
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Animated Transaction Flow & Circuit Pulse Pipeline */}
      <section className="py-5" style={{ background: '#f0f7ff' }} id="pipeline">
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Real-Time Routing</span>
            <h2>Under the Hood: Sub-Second Transaction Journey</h2>
            <p>Experience how Rhizobee routes, tokenizes, and settles your transactions in under 100 milliseconds.</p>
          </div>

          <div className="rh-pipeline-card">
            {/* Pipeline Controls */}
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4 pb-3 border-bottom">
              <div>
                <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fw-semibold">
                  <i className="bi bi-activity me-1 animate-pulse"></i> Live Pipeline Simulator
                </span>
                <span className="ms-3 text-secondary small">Click button to send a simulated ₹1,500 checkout pulse</span>
              </div>
              <button 
                className="btn btn-primary rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2 shadow-sm"
                onClick={simulatePipeline}
                disabled={isRunning}
              >
                <i className={`bi ${isRunning ? 'bi-hourglass-split' : 'bi-play-fill'} fs-5`}></i>
                <span>{isRunning ? 'Processing Route (68ms)...' : 'Simulate Transaction Route'}</span>
              </button>
            </div>

            {/* Circuit Nodes Row */}
            <div className="row g-3 position-relative rh-nodes-row">
              {steps.map((s, idx) => {
                const isActive = pipelineStep === s.id;
                const isPassed = pipelineStep > s.id;
                return (
                  <div key={s.id} className="col-12 col-md">
                    <div className={`rh-pipeline-node text-center ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}>
                      <div className="rh-node-icon-circle mx-auto mb-2">
                        <i className={`bi ${s.icon} fs-4`}></i>
                        {isPassed && <span className="rh-node-tick"><i className="bi bi-check"></i></span>}
                      </div>
                      <div className="fw-bold text-dark x-small mb-1">{s.title}</div>
                      <div className="text-secondary xx-small mb-2">{s.subtitle}</div>
                      <span className={`badge ${isPassed || isActive ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-light text-muted'} rounded-pill xx-small`}>
                        {s.latency}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pipeline Status Banner */}
            <div className="mt-4 p-3 rounded-4 d-flex align-items-center justify-content-between flex-wrap gap-2" style={{ background: '#ffffff', border: '1px solid #bae6fd' }}>
              <div className="d-flex align-items-center gap-2">
                <span className="rh-live-dot"></span>
                <span className="small text-dark fw-semibold">
                  {pipelineStep === 0 && 'Pipeline Ready: Standby mode with 99.99% multi-bank uptime.'}
                  {pipelineStep === 1 && 'Step 1/5: Customer initiates ₹1,500 payment via UPI intent.'}
                  {pipelineStep === 2 && 'Step 2/5: PCI-DSS L1 Tokenizer encrypts payload; AI fraud risk score: 0.01 (Clean).'}
                  {pipelineStep === 3 && 'Step 3/5: Smart routing directs traffic to primary high-availability bank pipe.'}
                  {pipelineStep === 4 && 'Step 4/5: NPCI Switch returns status 200 OK confirmation.'}
                  {pipelineStep === 5 && 'Success: ₹1,500 instant ledger credit completed in 68ms!'}
                </span>
              </div>
              <span className="badge bg-primary text-white rounded-pill px-3 py-1 x-small fw-bold">
                Direct Switch SLA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-5" style={{ background: '#ffffff' }} id="features">
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Technical Capabilities</span>
            <h2>Built for High Volumes and 100% Reliability</h2>
            <p>Every layer of our payment gateway is optimized for maximum checkout conversions and zero dropped carts.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <div className="rh-dropdown-icon mb-3" style={{ width: '48px', height: '48px', fontSize: '1.4rem' }}>
                  <i className="bi bi-shuffle"></i>
                </div>
                <h4 className="fs-5 text-dark fw-bold mb-2">Dynamic Multi-Aggregator Routing</h4>
                <p className="text-secondary small">
                  Never suffer when a specific bank gateway goes down. Our AI smart router switches between 
                  top aggregators (PayU, Razorpay, Zaakpay, Easebuzz) dynamically in under 20ms.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <div className="rh-dropdown-icon mb-3" style={{ width: '48px', height: '48px', fontSize: '1.4rem', color: '#d97706', borderColor: '#fde68a', background: '#fef3c7' }}>
                  <i className="bi bi-clock-history"></i>
                </div>
                <h4 className="fs-5 text-dark fw-bold mb-2">Instant T+0 Settlements</h4>
                <p className="text-secondary small">
                  Tired of waiting 48 hours for your funds? Configure instant T+0 or twice-daily settlement cycles 
                  directly into your current bank account to optimize working capital.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="rh-card p-4 h-100">
                <div className="rh-dropdown-icon mb-3" style={{ width: '48px', height: '48px', fontSize: '1.4rem', color: '#059669', borderColor: '#a7f3d0', background: '#ecfdf5' }}>
                  <i className="bi bi-shield-lock-fill"></i>
                </div>
                <h4 className="fs-5 text-dark fw-bold mb-2">PCI-DSS L1 & AI Fraud Shield</h4>
                <p className="text-secondary small">
                  Tokenized card vault, 3D Secure 2.0 authentication, velocity checks, and automated chargeback 
                  dispute management built in to keep payments secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Marquee */}
      <PartnerMarquee />
    </div>
  );
}
