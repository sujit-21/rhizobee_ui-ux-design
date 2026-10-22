import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroDeviceShowcase.css';

export default function HeroDeviceShowcase({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('soundbox'); // 'soundbox' | 'pos' | 'api'
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Play realistic Soundbox Chime + Voice Alert using Web Audio & SpeechSynthesis
  const playSoundboxAlert = () => {
    if (isPlayingSound) return;
    setIsPlayingSound(true);

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const now = ctx.currentTime;
        
        // Fintech chime chord (Pleasant two-tone alert)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(587.33, now); // D5
        osc1.frequency.setValueAtTime(880.00, now + 0.12); // A5

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(880.00, now);
        osc2.frequency.setValueAtTime(1174.66, now + 0.12); // D6

        gainNode.gain.setValueAtTime(0.18, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.45);
        osc2.stop(now + 0.45);
      }

      // Voice alert after chime
      if ('speechSynthesis' in window) {
        setTimeout(() => {
          const utterance = new SpeechSynthesisUtterance('Payment of 500 rupees received on Rhizobee');
          utterance.rate = 1.05;
          utterance.pitch = 1.1;
          utterance.lang = 'en-IN';
          utterance.onend = () => setIsPlayingSound(false);
          utterance.onerror = () => setIsPlayingSound(false);
          window.speechSynthesis.speak(utterance);
        }, 350);
      } else {
        setTimeout(() => setIsPlayingSound(false), 1200);
      }
    } catch {
      setTimeout(() => setIsPlayingSound(false), 800);
    }
  };

  const copyApiSnippet = () => {
    const snippet = `// Rhizobee Switch API - Instant UPI Intent
const response = await rhizobee.payments.createOrder({
  amount: 250000, // INR in paise (₹2,500)
  currency: "INR",
  merchant_id: "RHZ_MERC_88921",
  payment_capture: 1
});`;
    navigator.clipboard?.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="rh-device-showcase-container">
      {/* Floating Status Pill Top */}
      <div className="rh-floating-badge rh-badge-top">
        <span className="rh-live-indicator"></span>
        <span className="fw-semibold">Bank Switch Live</span>
        <span className="text-muted">|</span>
        <span className="text-primary fw-bold">99.99% Uptime</span>
      </div>

      {/* Main Terminal Frame */}
      <div className="rh-device-terminal-card">
        {/* Device Switcher Tabs */}
        <div className="rh-device-nav-tabs">
          <button
            type="button"
            className={`rh-device-tab ${activeTab === 'soundbox' ? 'active' : ''}`}
            onClick={() => setActiveTab('soundbox')}
          >
            <i className="bi bi-speaker-fill me-1"></i> Soundbox 4G
          </button>
          <button
            type="button"
            className={`rh-device-tab ${activeTab === 'pos' ? 'active' : ''}`}
            onClick={() => setActiveTab('pos')}
          >
            <i className="bi bi-credit-card-2-front-fill me-1"></i> Smart POS
          </button>
          <button
            type="button"
            className={`rh-device-tab ${activeTab === 'api' ? 'active' : ''}`}
            onClick={() => setActiveTab('api')}
          >
            <i className="bi bi-code-slash me-1"></i> Switch API
          </button>
        </div>

        {/* Tab 1: Smart Soundbox 4G */}
        {activeTab === 'soundbox' && (
          <div className="rh-device-content animate-fade-in">
            <div className="rh-soundbox-visual">
              {/* Soundbox Body Simulation */}
              <div className="rh-soundbox-hardware">
                <div className="rh-soundbox-top-bar">
                  <div className="d-flex align-items-center gap-1">
                    <span className="rh-led-dot rh-led-green" title="4G Network Active"></span>
                    <span className="rh-led-dot rh-led-blue" title="Battery 100%"></span>
                    <span className="small text-white-50 ms-1 fw-bold" style={{ fontSize: '0.65rem' }}>4G VoLTE</span>
                  </div>
                  <span className="rh-soundbox-brand">RHIZOBEE PAY</span>
                </div>

                {/* Speaker Grill with pulsing audio waves */}
                <div className={`rh-speaker-grill ${isPlayingSound ? 'playing' : ''}`}>
                  <div className="rh-grill-ring ring-3"></div>
                  <div className="rh-grill-ring ring-2"></div>
                  <div className="rh-grill-ring ring-1"></div>
                  <div className="rh-speaker-core">
                    <i className={`bi ${isPlayingSound ? 'bi-volume-up-fill text-warning' : 'bi-speaker text-white'} fs-3`}></i>
                  </div>
                </div>

                {/* Live Transaction Display Card */}
                <div className="rh-soundbox-display">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="badge bg-success-subtle text-success border border-success-subtle small py-1 px-2">
                      <i className="bi bi-check-circle-fill me-1"></i> Payment Received
                    </span>
                    <span className="small text-muted font-monospace" style={{ fontSize: '0.7rem' }}>Just now</span>
                  </div>
                  <div className="rh-display-amount">
                    <span className="currency">₹</span>
                    <span className="amount">500.00</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center small text-secondary">
                    <span>UPI ID: merchant@rhizo</span>
                    <span className="text-success fw-bold">Settled</span>
                  </div>
                </div>
              </div>

              {/* Action: Interactive Sound Test */}
              <div className="d-flex flex-column align-items-center gap-2 mt-3 w-100">
                <button
                  type="button"
                  className={`btn rh-test-voice-btn w-100 ${isPlayingSound ? 'btn-warning text-dark' : 'btn-primary'}`}
                  onClick={playSoundboxAlert}
                  disabled={isPlayingSound}
                >
                  <i className={`bi ${isPlayingSound ? 'bi-soundwave' : 'bi-play-circle-fill'} me-2 fs-5`}></i>
                  <span>{isPlayingSound ? 'Announcing Alert...' : 'Tap to Test Voice Announcement'}</span>
                </button>
                <div className="d-flex justify-content-between w-100 px-1 text-muted" style={{ fontSize: '0.74rem' }}>
                  <span><i className="bi bi-translate text-primary me-1"></i> 10+ Indian Languages</span>
                  <span><i className="bi bi-battery-charging text-success me-1"></i> 72-Hour Battery</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Android Smart POS */}
        {activeTab === 'pos' && (
          <div className="rh-device-content animate-fade-in">
            <div className="rh-pos-hardware">
              {/* POS Paper Receipt roll simulation */}
              <div className="rh-pos-receipt">
                <div className="rh-receipt-zigzag"></div>
                <div className="rh-receipt-body">
                  <div className="text-center fw-bold small text-dark mb-1">RHIZOBEE SMART TERMINAL</div>
                  <div className="text-center text-muted" style={{ fontSize: '0.68rem' }}>TRANS #8942-01 • APPROVAL CODE: 77281</div>
                  <div className="border-top border-bottom border-secondary border-opacity-25 py-1 my-1 d-flex justify-content-between fw-bold text-dark small">
                    <span>SALE (VISA CONTACTLESS)</span>
                    <span>₹1,250.00</span>
                  </div>
                  <div className="text-center text-success fw-bold" style={{ fontSize: '0.72rem' }}>
                    <i className="bi bi-check-all"></i> TRANSACTION APPROVED
                  </div>
                </div>
              </div>

              {/* POS Touchscreen */}
              <div className="rh-pos-screen">
                <div className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom border-light-subtle">
                  <div className="small fw-bold text-dark">
                    <i className="bi bi-shield-lock-fill text-success me-1"></i> Secure PIN Pad
                  </div>
                  <span className="badge bg-primary-subtle text-primary border border-primary-subtle" style={{ fontSize: '0.65rem' }}>
                    NFC Enabled
                  </span>
                </div>

                <div className="text-center py-2">
                  <div className="text-muted small">Enter Amount or Tap Card</div>
                  <div className="display-6 fw-bold text-dark my-1">₹1,250.00</div>
                  <div className="d-flex justify-content-center gap-2 my-2">
                    <span className="badge bg-light text-dark border px-2 py-1">Visa</span>
                    <span className="badge bg-light text-dark border px-2 py-1">Mastercard</span>
                    <span className="badge bg-light text-dark border px-2 py-1">RuPay</span>
                    <span className="badge bg-light text-dark border px-2 py-1">UPI Dynamic</span>
                  </div>
                </div>

                <div className="row g-1 mt-1">
                  <div className="col-6">
                    <Link to="/services/pos-devices" className="btn btn-sm btn-outline-primary w-100 py-1.5 fw-semibold" style={{ fontSize: '0.75rem' }}>
                      Terminal Specs
                    </Link>
                  </div>
                  <div className="col-6">
                    <button 
                      type="button" 
                      onClick={() => onOpenConsultation('pos-devices')} 
                      className="btn btn-sm btn-primary w-100 py-1.5 fw-semibold" 
                      style={{ fontSize: '0.75rem' }}
                    >
                      Order Terminal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Switch API & Developer Code */}
        {activeTab === 'api' && (
          <div className="rh-device-content animate-fade-in">
            <div className="rh-code-preview">
              <div className="rh-code-header">
                <div className="d-flex align-items-center gap-1.5">
                  <span className="rh-code-dot bg-danger"></span>
                  <span className="rh-code-dot bg-warning"></span>
                  <span className="rh-code-dot bg-success"></span>
                  <span className="ms-2 font-monospace small text-white-50">rhizobee-checkout.js</span>
                </div>
                <button 
                  type="button" 
                  className="btn btn-sm btn-dark text-white-50 py-0 px-2"
                  onClick={copyApiSnippet}
                  style={{ fontSize: '0.75rem' }}
                >
                  <i className={`bi ${copiedCode ? 'bi-check2 text-success' : 'bi-clipboard'} me-1`}></i>
                  {copiedCode ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <pre className="rh-code-body font-monospace">
                <code>
{`// 1. Initialize Rhizobee Switch
const payment = await rhizo.checkout({
  key: "rzb_live_99214781",
  amount: 250000, // ₹2,500
  currency: "INR",
  flow: "UPI_INTENT",
  customer: {
    phone: "9876543210",
    email: "buyer@enterprise.in"
  }
});

// Response: Status 200 OK
// Latency: 82ms | Route: Direct Bank Switch`}
                </code>
              </pre>

              <div className="rh-code-footer d-flex align-items-center justify-content-between p-2 mt-2 bg-dark rounded text-white-50 small">
                <span className="d-flex align-items-center gap-1 text-success">
                  <i className="bi bi-check-circle-fill"></i> Bank Settlement 99.99% Uptime
                </span>
                <span className="font-monospace text-warning">82ms Latency</span>
              </div>
            </div>
          </div>
        )}

        {/* Terminal Bottom Sub-Bar */}
        <div className="rh-terminal-footer">
          <div className="d-flex align-items-center justify-content-between text-secondary small">
            <span className="d-flex align-items-center gap-1">
              <i className="bi bi-patch-check-fill text-primary"></i>
              <span className="fw-semibold text-dark">Authorized Banking Infrastructure</span>
            </span>
            <Link to="/services" className="text-primary text-decoration-none fw-semibold">
              Compare All <i className="bi bi-chevron-right small"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Trust Badge Bottom */}
      <div className="rh-floating-badge rh-badge-bottom">
        <i className="bi bi-shield-fill-check text-success fs-5"></i>
        <div>
          <div className="fw-bold text-dark lh-1" style={{ fontSize: '0.8rem' }}>PCI-DSS Level 1</div>
          <div className="text-secondary" style={{ fontSize: '0.68rem' }}>Bank Grade Security</div>
        </div>
      </div>
    </div>
  );
}
