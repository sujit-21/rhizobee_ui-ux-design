import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ConsultationModal from './components/ConsultationModal';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// Separate Service Pages (Each with dedicated JSX and separate CSS)
import PaymentGateway from './pages/services/PaymentGateway';
import QRCodePayments from './pages/services/QRCodePayments';
import SoundboxSolutions from './pages/services/SoundboxSolutions';
import POSDevices from './pages/services/POSDevices';
import PPIWallets from './pages/services/PPIWallets';
import GiftCards from './pages/services/GiftCards';
import ZoompePortal from './pages/services/ZoompePortal';
import SwitchAPI from './pages/services/SwitchAPI';
import BankingCashServices from './pages/services/BankingCashServices';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('payment-gateway');

  const handleOpenConsultation = (serviceId) => {
    setPreselectedService(serviceId || 'payment-gateway');
    setModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100" style={{ background: '#070b14', color: '#cbd5e1' }}>
        <Navbar onOpenConsultation={handleOpenConsultation} />

        <main className="grow">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<About onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services" element={<Services onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/solutions" element={<Solutions onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/industries" element={<Industries onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/careers" element={<Careers onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/contact" element={<Contact />} />

            {/* Separate Service Pages (User Requirement: All services separate page and their separate CSS) */}
            <Route path="/services/payment-gateway" element={<PaymentGateway onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services/qr-code" element={<QRCodePayments onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services/soundbox" element={<SoundboxSolutions onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services/pos-devices" element={<POSDevices onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services/ppi-wallets" element={<PPIWallets onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services/gift-cards" element={<GiftCards onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services/zoompe-portal" element={<ZoompePortal onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services/switch-api" element={<SwitchAPI onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services/banking-aeps" element={<BankingCashServices onOpenConsultation={handleOpenConsultation} />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer onOpenConsultation={handleOpenConsultation} />

        {/* Global Interactive Consultation & Lead Modal */}
        <ConsultationModal 
          isOpen={modalOpen} 
          onClose={handleCloseConsultation} 
          preselectedService={preselectedService} 
        />
      </div>
    </Router>
  );
}
