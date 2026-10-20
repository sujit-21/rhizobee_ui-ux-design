export const servicesList = [
  {
    id: 'payment-gateway',
    title: 'Payment Gateway Solutions',
    shortDesc: 'Accept cards, UPI, net banking, and wallets online with bank-grade security and instant settlements.',
    tagline: 'High-speed online checkout infrastructure with 99.9% success rate',
    icon: 'bi-credit-card-2-front',
    path: '/services/payment-gateway',
    badge: 'Flagship Gateway',
    color: '#1656d6',
    category: 'Digital Acceptance',
    stats: { successRate: '99.9%', latency: '<1.2s', paymentModes: '120+' },
    features: [
      'Single unified integration API for Cards, UPI, Netbanking & Wallets',
      'Real-time transaction analytics and custom settlement tracking (T+0 / T+1)',
      'Bank-grade PCI-DSS Level 1 compliance with AI fraud screening',
      'Smart dynamic routing with automatic failover across 10+ bank aggregators'
    ]
  },
  {
    id: 'qr-code',
    title: 'QR Code Payments',
    shortDesc: 'Instant UPI acceptance at counters with static, dynamic, and soundbox-integrated QR options.',
    tagline: 'Frictionless, zero-setup counter payments for merchants of all scales',
    icon: 'bi-qr-code-scan',
    path: '/services/qr-code',
    badge: 'Zero Hardware',
    color: '#06b6d4',
    category: 'Counter Payments',
    stats: { setupTime: '5 Mins', zeroMDR: 'UPI 0%', scanSpeed: '0.4s' },
    features: [
      'Instant UPI payment acceptance from all apps (GPay, PhonePe, Paytm, BHIM)',
      'Custom branded durable acrylic standees with dynamic QR support',
      'Instant webhook notifications & settlement directly into your bank account',
      'Multi-cashier reconciliation on a single merchant mobile dashboard'
    ]
  },
  {
    id: 'soundbox',
    title: 'Soundbox Solutions',
    shortDesc: 'Loud, instant voice confirmation in 10+ languages for every payment received at busy counters.',
    tagline: 'Eliminate counter fraud and screen checking with audible payment confirmation',
    icon: 'bi-speaker-fill',
    path: '/services/soundbox',
    badge: 'Popular for Retail',
    color: '#f59e0b',
    category: 'Counter Hardware',
    stats: { battery: '7 Days', loudness: '95 dB', languages: '10+' },
    features: [
      'Instant voice confirmation in Hindi, English, Tamil, Telugu, Marathi, and more',
      'Reliable dual 4G SIM + WiFi connectivity for zero downtime',
      'Ultra-loud 95dB dual-magnet speaker engineered for crowded shops',
      'Long-lasting rechargeable battery with intelligent power management'
    ]
  },
  {
    id: 'pos-devices',
    title: 'POS Devices & Terminals',
    shortDesc: 'Smart Android and mPOS terminals accepting contactless cards, chip & PIN, QR, and tap-and-pay.',
    tagline: 'Industrial-grade retail checkout terminals built for high-footfall commerce',
    icon: 'bi-calculator-fill',
    path: '/services/pos-devices',
    badge: 'Hardware & Terminal',
    color: '#8b5cf6',
    category: 'Counter Hardware',
    stats: { printSpeed: '80mm/s', screen: '5.5" HD', battery: '5000mAh' },
    features: [
      'Accepts Contactless NFC Tap & Pay, RuPay, Visa, Mastercard, and UPI',
      'Built-in high-speed thermal paper receipt printer',
      'Centralized multi-store inventory and daily sales reconciliation',
      'Nationwide doorstep terminal delivery and 24/7 hardware replacement'
    ]
  },
  {
    id: 'ppi-wallets',
    title: 'PPI Wallet Solutions',
    shortDesc: 'Prepaid payment instrument wallet infrastructure for employee corporate payouts, loyalty, and customer cards.',
    tagline: 'RBI-compliant co-branded digital wallet and prepaid card ecosystem',
    icon: 'bi-wallet2',
    path: '/services/ppi-wallets',
    badge: 'Corporate & Payroll',
    color: '#10b981',
    category: 'Issuance & Wallets',
    stats: { compliance: 'RBI Certified', issuance: 'Real-time API', cards: 'Physical & Virtual' },
    features: [
      'Issue virtual and physical RuPay / Visa co-branded prepaid cards',
      'Bulk corporate salary disbursements, incentives, and petty cash management',
      'Custom merchant category code (MCC) spending restrictions and budget limits',
      'Complete end-to-end e-KYC onboarding with bank partner integration'
    ]
  },
  {
    id: 'gift-cards',
    title: 'Brand Gift Vouchers & Cards',
    shortDesc: 'Empower recipients with 500+ top brand vouchers for corporate gifting, customer rewards, and perks.',
    tagline: 'Versatile corporate rewards, client incentives, and festive gifting platform',
    icon: 'bi-gift-fill',
    path: '/services/gift-cards',
    badge: 'Corporate Rewards',
    color: '#ec4899',
    category: 'Corporate & Loyalty',
    stats: { brands: '500+', delivery: 'Instant SMS/Email', redemption: 'Online & Offline' },
    features: [
      'Wide catalog of top brands (Amazon, Flipkart, Swiggy, Zomato, Croma, Nykaa, etc.)',
      'Instant digital delivery via SMS, WhatsApp, and email with custom greetings',
      'White-label corporate branding for customer loyalty and festive campaigns',
      'Automated bulk distribution API for employee rewards and festive bonuses'
    ]
  },
  {
    id: 'zoompe-portal',
    title: 'Zoompe — Retailer Portal',
    shortDesc: 'All-in-one digital business suite for small retail shops, CSPs, and agents to earn high commissions.',
    tagline: 'Transform any local shop into a full-fledged digital bank and service center',
    icon: 'bi-shop',
    path: '/services/zoompe-portal',
    badge: 'Retailer Network',
    color: '#f97316',
    category: 'Retailer & CSP',
    stats: { commission: 'Up to ₹15/Txn', agents: '25,000+', services: '30+' },
    features: [
      'Complete suite: Micro ATM, AEPS, BBPS, Mobile Recharge, Travel, Insurance & Loans',
      'Highest instant commissions credited directly to agent wallet',
      'Seamless Android mobile app and web desktop portal',
      'Dedicated regional distributor support and bilingual helpdesk'
    ]
  },
  {
    id: 'switch-api',
    title: 'Switch & Unified Payments API',
    shortDesc: 'Single switch API engine powering UPI, IMPS, NEFT, RTGS, and BBPS with ultra-low latency routing.',
    tagline: 'Carrier-grade payment switch connecting banks, aggregators, and fintechs',
    icon: 'bi-cpu-fill',
    path: '/services/switch-api',
    badge: 'Core Infrastructure',
    color: '#3b82f6',
    category: 'Core Infrastructure',
    stats: { uptime: '99.99%', tps: '10,000+', latency: '45ms' },
    features: [
      'Unified API for instant UPI, IMPS, NEFT, RTGS, and Bharat BillPay (BBPS)',
      'Intelligent dynamic routing algorithm to avoid bank downtime spikes',
      'Comprehensive webhook events, idempotency keys, and automated reconciliation',
      'Comprehensive sandbox environment with ready-to-run SDKs and code samples'
    ]
  },
  {
    id: 'banking-aeps',
    title: 'Banking & Cash AEPS Services',
    shortDesc: 'Empower semi-urban and rural communities with biometric cash withdrawals, Micro ATMs, and Bank CSP.',
    tagline: 'Last-mile financial inclusion and doorstep cash services across India',
    icon: 'bi-bank2',
    path: '/services/banking-aeps',
    badge: 'Financial Inclusion',
    color: '#059669',
    category: 'Retailer & CSP',
    stats: { coverage: 'Pan-India', auth: 'Aadhaar Biometric', settlement: 'Instant' },
    features: [
      'AEPS Aadhaar biometric cash withdrawal and balance enquiry from any bank',
      'Portable Bluetooth Micro-ATM card swiping device with instant receipt generation',
      'Direct Bank Customer Service Point (CSP) verification and operational onboarding',
      'Aadhaar Pay for payments above standard debit card limits'
    ]
  }
];

export const partnerLogos = [
  { name: 'PayU', logo: '/images/partners/payu.png' },
  { name: 'Razorpay', logo: '/images/partners/razorpay.png' },
  { name: 'PhonePe', logo: '/images/partners/phonepe.png' },
  { name: 'Zaakpay', logo: '/images/partners/zaakpay.png' },
  { name: 'JioPay', logo: '/images/partners/jiopay.png' },
  { name: 'Getepay', logo: '/images/partners/getepay.png' },
  { name: 'Easebuzz', logo: '/images/partners/easebuzz.png' },
  { name: 'PayPoint', logo: '/images/partners/paypoint.png' },
  { name: 'ArthPay', logo: '/images/partners/arthpay.png' },
  { name: 'Airpay', logo: '/images/partners/airpay.png' },
  { name: 'Finacus', logo: '/images/partners/finacus.png' }
];
