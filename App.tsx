
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Minecraft from './pages/Minecraft';
import VPS from './pages/VPS';
import Support from './pages/Support';
import Discord from './pages/Discord';
import Web from './pages/Web';
import LoadingScreen from './components/LoadingScreen';

// Simple scroll-to-top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/minecraft" element={<Minecraft />} />
          <Route path="/vps" element={<VPS />} />
          <Route path="/web" element={<Web />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <AppContent key="app" />
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;
