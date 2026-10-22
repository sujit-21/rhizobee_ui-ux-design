import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import PartnerMarquee from '../../components/PartnerMarquee';
import './SoundboxSolutions.css';

export default function SoundboxSolutions({ onOpenConsultation }) {
  const [activeLang, setActiveLang] = useState('hi');
  const [amount, setAmount] = useState('500');
  const [isPlaying, setIsPlaying] = useState(false);

  const voiceAlerts = {
    hi: {
      langName: 'Hindi',
      nativeText: 'राइजोबी पर ₹' + amount + ' प्राप्त हुए',
      speechText: 'Rhizobee par ' + amount + ' rupaye prapt hue',
      code: 'hi-IN'
    },
    en: {
      langName: 'English',
      nativeText: '₹' + amount + ' received on Rhizobee UPI',
      speechText: amount + ' rupees received on Rhizobee UPI',
      code: 'en-IN'
    },
    ta: {
      langName: 'Tamil',
      nativeText: 'Rhizobee-இல் ₹' + amount + ' பெறப்பட்டது',
      speechText: 'Rhizobee il ' + amount + ' roobai perappattathu',
      code: 'ta-IN'
    },
    te: {
      langName: 'Telugu',
      nativeText: 'Rhizobee లో ₹' + amount + ' అందుకున్నారు',
      speechText: 'Rhizobee lo ' + amount + ' roopayalu andukunnaru',
      code: 'te-IN'
    },
    bn: {
      langName: 'Bengali',
      nativeText: 'Rhizobee-তে ₹' + amount + ' গৃহীত হয়েছে',
      speechText: 'Rhizobee te ' + amount + ' taka griheeto hoyeche',
      code: 'bn-IN'
    }
  };

  const handlePlayVoice = () => {
    if (isPlaying) return;
    setIsPlaying(true);

    const alert = voiceAlerts[activeLang];

    // Trigger Browser Speech Synthesis if available
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(alert.speechText);
      utterance.rate = 1.0;
      utterance.pitch = 1.1;
      
      utterance.onend = () => {
        setIsPlaying(false);
      };
      utterance.onerror = () => {
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => {
        setIsPlaying(false);
      }, 2500);
    }

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    // Safety timeout in case voice synthesis is blocked
    setTimeout(() => {
      setIsPlaying(false);
    }, 3500);
  };

  return (
    <div className="rh-soundbox-page">
      {/* Hero Section with Interactive Live 4G Soundbox Simulator */}
      <section className="rh-soundbox-hero">
        <div className="container position-relative">
          <div className="rh-breadcrumb justify-content-center mb-4">
            <Link to="/"><i className="bi bi-house"></i> Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span className="current">Soundbox Solutions</span>
          </div>

          <div className="row align-items-center g-5">
            {/* Left Column: Heading & Value Prop */}
            <div className="col-lg-6 text-start">
              <span className="rh-badge rh-badge-blue mb-3">
                <i className="bi bi-volume-up-fill me-1"></i> Audible Payment Confirmation
              </span>
              <h1 className="rh-hero-title mb-3">
                Instant Voice Alerts for <span className="rh-gradient-text">Every Counter</span>
              </h1>
              <p className="lead text-secondary mb-4">
                Give your cashiers and counter staff immediate, crystal-clear voice verification of every 
                payment received — eliminating fake screenshot fraud and screen-checking delays during rush hours.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white shadow-sm border">
                  <i className="bi bi-broadcast text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">Dual 4G VoLTE + WiFi</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white shadow-sm border">
                  <i className="bi bi-battery-charging text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">72-Hour Battery Backup</span>
                </div>
                <div className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-white shadow-sm border">
                  <i className="bi bi-megaphone-fill text-primary fs-5"></i>
                  <span className="text-dark small fw-semibold">Ultra-Loud 95dB Speaker</span>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <button 
                  onClick={() => onOpenConsultation('soundbox')}
                  className="btn-rh-primary px-4 py-3"
                >
                  <i className="bi bi-box-seam-fill me-2"></i> Order 4G Soundbox
                </button>
                <a href="#specs" className="btn-rh-outline px-4 py-3">
                  <i className="bi bi-cpu-fill me-2"></i> View Hardware Specs
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Live Soundbox Hardware Simulator */}
            <div className="col-lg-6">
              <div className="rh-soundbox-simulator-box">
                <div className="rh-pos-interactive-badge">
                  <span className="rh-live-dot"></span> Interactive 4G Soundbox • Test Voice Alert Below
                </div>

                {/* 3D Soundbox Hardware Mockup */}
                <div className={`rh-speaker-hardware-body ${isPlaying ? 'audio-active' : ''}`}>
                  {/* Concentric Acoustic Waves */}
                  <div className="rh-speaker-top-grille">
                    <div className={`rh-speaker-grille ${isPlaying ? 'speaking' : ''}`}>
                      <i className={`bi ${isPlaying ? 'bi-volume-up-fill' : 'bi-volume-up'} fs-1 text-primary`}></i>
                    </div>

                    {/* Animated Equalizer Wave Bars */}
                    <div className={`rh-soundwave-bars ${isPlaying ? 'active' : ''}`}>
                      <span className="rh-soundwave-bar"></span>
                      <span className="rh-soundwave-bar"></span>
                      <span className="rh-soundwave-bar"></span>
                      <span className="rh-soundwave-bar"></span>
                      <span className="rh-soundwave-bar"></span>
                      <span className="rh-soundwave-bar"></span>
                      <span className="rh-soundwave-bar"></span>
                    </div>
                  </div>

                  {/* Soundbox Front LCD Status Display */}
                  <div className="rh-soundbox-lcd-screen">
                    <div className="d-flex justify-content-between align-items-center px-1 text-white-50 xx-small mb-1">
                      <span><i className="bi bi-broadcast text-info me-1"></i>4G VoLTE</span>
                      <span><i className="bi bi-battery-full text-success me-1"></i>100%</span>
                    </div>
                    <div className="rh-lcd-marquee-text text-white fw-bold">
                      {isPlaying ? (
                        <span className="text-warning animate-pulse">
                          <i className="bi bi-bell-fill me-1"></i> {voiceAlerts[activeLang].nativeText}
                        </span>
                      ) : (
                        <span>₹{amount} • Ready for Next UPI Payment</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Interactive Controls Panel */}
                <div className="rh-soundbox-controls-panel mt-3">
                  {/* Amount Presets */}
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="xx-small fw-bold text-secondary text-uppercase">Test Payment Amount:</span>
                    <div className="d-flex gap-1">
                      {['50', '150', '500', '2000'].map((amt) => (
                        <button
                          key={amt}
                          className={`btn btn-xs py-0 px-2 rounded-pill xx-small ${amount === amt ? 'btn-primary' : 'btn-light border'}`}
                          onClick={() => setAmount(amt)}
                        >
                          ₹{amt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Language Selector */}
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {Object.keys(voiceAlerts).map((langKey) => (
                      <button
                        key={langKey}
                        className={`btn btn-sm py-1 px-3 rounded-pill x-small ${activeLang === langKey ? 'btn-primary' : 'btn-light border'}`}
                        onClick={() => setActiveLang(langKey)}
                      >
                        {voiceAlerts[langKey].langName}
                      </button>
                    ))}
                  </div>

                  {/* Play Voice Trigger Button */}
                  <button
                    className={`btn w-100 py-3 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 ${
                      isPlaying ? 'btn-warning text-dark' : 'btn-primary'
                    }`}
                    onClick={handlePlayVoice}
                    disabled={isPlaying}
                  >
                    <i className={`bi ${isPlaying ? 'bi-soundwave' : 'bi-play-circle-fill'} fs-5`}></i>
                    <span>{isPlaying ? 'Playing Voice Announcement...' : `Test Audio Alert in ${voiceAlerts[activeLang].langName}`}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Specs & Advantages */}
      <section className="py-5" style={{ background: '#f8fbff' }} id="specs">
        <div className="container py-4">
          <div className="rh-section-header">
            <span className="rh-badge rh-badge-blue mb-2">Hardware Specs</span>
            <h2>Engineered for Demanding Retail Counters</h2>
            <p>Built tough with splash resistance and intelligent acoustic resonance for noisy bazaars.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="rh-card p-4 text-center h-100">
                <i className="bi bi-cpu fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Instant 0.8s Alert</h5>
                <p className="text-secondary small mb-0">High-speed IoT processor connects to partner gateway websockets instantly.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="rh-card p-4 text-center h-100">
                <i className="bi bi-sim fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Pre-activated 4G</h5>
                <p className="text-secondary small mb-0">Includes pre-installed multi-network SIM with lifetime connectivity data.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="rh-card p-4 text-center h-100">
                <i className="bi bi-shield-check fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">Anti-Fraud Proof</h5>
                <p className="text-secondary small mb-0">Prevents fraudulent customers from walking away with forged screenshots.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="rh-card p-4 text-center h-100">
                <i className="bi bi-headset fs-1 text-primary mb-3 d-block"></i>
                <h5 className="text-dark fw-bold">24/7 Replacement</h5>
                <p className="text-secondary small mb-0">Doorstep repair and replacement warranty backed by Rhizobee service hubs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />
    </div>
  );
}
