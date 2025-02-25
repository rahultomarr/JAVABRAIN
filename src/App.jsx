import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatWeDo from './pages/WhatWeDo';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import EnrollmentForm from './components/EnrollmentForm';
import Footer from './components/Footer';
import Placement from './components/Placement';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/enroll" element={<EnrollmentForm />} />
          <Route path="/placement" element={<Placement />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;