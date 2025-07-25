import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import { useScrollToTop } from './hooks/useScrollToTop';
import { AppointmentProvider, useAppointment } from './context/AppointmentContext';

// Import service pages
import EsteticaDentara from './pages/EsteticaDentara';
import Protetica from './pages/Protetica';
import ImplantologieChirurgie from './pages/ImplantologieChirurgie';
import Ortodontie from './pages/Ortodontie';
import Profilaxie from './pages/Profilaxie';
import Odontoterapie from './pages/Odontoterapie';
import EndodontieMicroscop from './pages/EndodontieMicroscop';
import PricingPage from './pages/PricingPage';

// Import legal pages
import PoliticaConfidentialitate from './pages/PoliticaConfidentialitate';
import TermeniConditii from './pages/TermeniConditii';
import PoliticaCookies from './pages/PoliticaCookies';

// Main page component
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}

function AppContent() {
  const { isModalOpen, closeModal } = useAppointment();
  
  // Use the scroll to top hook
  useScrollToTop();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/estetica-dentara" element={<EsteticaDentara />} />
        <Route path="/protetica" element={<Protetica />} />
        <Route path="/implantologie-chirurgie" element={<ImplantologieChirurgie />} />
        <Route path="/ortodontie" element={<Ortodontie />} />
        <Route path="/profilaxie" element={<Profilaxie />} />
        <Route path="/odontoterapie" element={<Odontoterapie />} />
        <Route path="/endodontie-microscop" element={<EndodontieMicroscop />} />
        <Route path="/preturi" element={<PricingPage />} />
        <Route path="/politica-confidentialitate" element={<PoliticaConfidentialitate />} />
        <Route path="/termeni-conditii" element={<TermeniConditii />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />
      </Routes>
      <Footer />
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppointmentProvider>
        <AppContent />
      </AppointmentProvider>
    </Router>
  );
}

export default App; 