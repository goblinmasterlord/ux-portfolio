import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Sends a GA4 page_view on each React Router navigation. The gtag config in
// index.html uses send_page_view:false, so this is the single source of pageviews.
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);
};

export default usePageTracking;
