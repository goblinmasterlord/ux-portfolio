import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Everprove from './pages/projects/everprove';
import Paynance from './pages/projects/paynance';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/projects/everprove" element={<PageTransition><Everprove /></PageTransition>} />
        <Route path="/projects/paynance" element={<PageTransition><Paynance /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-background min-h-screen">
        <Navigation />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;