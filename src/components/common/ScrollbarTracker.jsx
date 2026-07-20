import React, { useEffect, useRef } from 'react';
import NasCloudLogo from './NasCloudLogo';
import './ScrollbarTracker.css';

export default function ScrollbarTracker() {
  const scrollTimeout = useRef(null);

  const handleScroll = () => {
    // Add is-scrolling class to trigger the brighter active CSS scrollbar logo state natively
    if (!document.body.classList.contains('is-scrolling')) {
      document.body.classList.add('is-scrolling');
    }
    
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      document.body.classList.remove('is-scrolling');
    }, 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    /* Static bottom logo watermark */
    <div className="scrollbar-bottom-anchor">
      <NasCloudLogo size={12} className="static-logo" />
    </div>
  );
}
