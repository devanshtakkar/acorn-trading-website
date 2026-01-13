import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import PersonalResults from './components/PersonalResults';
import WhyChooseUs from './components/WhyChooseUs';
import CopyTradingComparison from './components/CopyTradingComparison';
import HowToCopyTrades from './components/HowToCopyTrades';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RiskWarning from './pages/RiskWarning';

// Home page component
const HomePage: React.FC = () => {
  return (
    <main className="flex-grow flex flex-col">
      <Hero />
      <Testimonials />
      <PersonalResults />
      <WhyChooseUs />
      <CopyTradingComparison />
      <HowToCopyTrades />
      <FAQ />
    </main>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-veridian-700 text-white selection:bg-lime-glow selection:text-veridian-900">
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Background Gradients/Glows to make it 'sexy' */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-lime-glow/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-veridian-900/40 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/risk-warning" element={<RiskWarning />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;