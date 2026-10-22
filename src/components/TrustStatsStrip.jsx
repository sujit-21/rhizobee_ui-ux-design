import React from 'react';
import './TrustStatsStrip.css';

export default function TrustStatsStrip() {
  const stats = [
    {
      value: '₹2,500 Cr+',
      label: 'Annualized GMV Capacity',
      subtext: 'High-throughput payment switch',
      icon: 'bi-graph-up-arrow',
      color: '#0284c7'
    },
    {
      value: '99.99%',
      label: 'Gateway Uptime SLA',
      subtext: 'Multi-bank redundant routing',
      icon: 'bi-shield-check',
      color: '#10b981'
    },
    {
      value: '50,000+',
      label: 'Active Counters & Merchants',
      subtext: 'Across 28+ states & UTs in India',
      icon: 'bi-shop',
      color: '#f59e0b'
    },
    {
      value: '< 120ms',
      label: 'Average Switch Latency',
      subtext: 'Direct NPCI & bank connectivity',
      icon: 'bi-lightning-charge-fill',
      color: '#6366f1'
    }
  ];

  return (
    <section className="rh-stats-strip-section">
      <div className="container">
        <div className="rh-stats-glass-card">
          <div className="row g-4 align-items-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="col-6 col-lg-3">
                <div className="rh-stat-item">
                  <div className="rh-stat-icon-wrapper" style={{ color: stat.color, background: `${stat.color}15` }}>
                    <i className={`bi ${stat.icon}`}></i>
                  </div>
                  <div>
                    <div className="rh-stat-value">{stat.value}</div>
                    <div className="rh-stat-label">{stat.label}</div>
                    <div className="rh-stat-subtext d-none d-md-block">{stat.subtext}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
