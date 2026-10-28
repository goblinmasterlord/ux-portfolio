import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Nav from './components/site/Nav';
import Footer from './components/site/Footer';
import PageTransition from './components/site/PageTransition';
import CursorLabel from './components/site/CursorLabel';
import Home from './pages/Home';
import Everprove from './pages/projects/everprove';
import Paynance from './pages/projects/paynance';
import KovetkezoToken from './pages/projects/kovetkezotoken';
import Eclipse from './pages/projects/eclipse';
import LoccoCity from './pages/projects/loccocity';
import Contact from './pages/Contact';
import usePageTracking from './hooks/usePageTracking';
import { initSmoothScroll, resetScroll } from './lib/scroll';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/projects/eclipse', element: <Eclipse /> },
  { path: '/projects/paynance', element: <Paynance /> },
  { path: '/projects/kovetkezotoken', element: <KovetkezoToken /> },
  { path: '/projects/everprove', element: <Everprove /> },
  { path: '/projects/loccocity', element: <LoccoCity /> },
  { path: '/contact', element: <Contact /> },
];

const AnimatedRoutes = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const firstLoad = useRef(true);
  // Remember where each history entry was scrolled to, so Back returns you there
  const positions = useRef({});
  const shownKey = useRef(location.key);
  usePageTracking();

  useEffect(() => {
    firstLoad.current = false;
    const save = () => {
      positions.current[shownKey.current] = window.scrollY;
    };
    window.addEventListener('scroll', save, { passive: true });
    return () => window.removeEventListener('scroll', save);
  }, []);

  // Runs once the old page has left and before the new one paints in
  const onExitComplete = () => {
    shownKey.current = location.key;
    resetScroll(navigationType === 'POP' ? positions.current[location.key] ?? 0 : 0);
  };

  return (
    // The footer is keyed with the page so it leaves and arrives with it
    <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
      <PageTransition key={location.pathname} skipIntro={firstLoad.current}>
        <Routes location={location}>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </PageTransition>
    </AnimatePresence>
  );
};

const App = () => {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    return initSmoothScroll();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <div className="grain" aria-hidden="true" />
        <Nav />
        <AnimatedRoutes />
        <CursorLabel />
      </BrowserRouter>
    </MotionConfig>
  );
};

export default App;
