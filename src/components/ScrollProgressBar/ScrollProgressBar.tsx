import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(scrolled);
    };
    window.addEventListener('scroll', handleScroll);

    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '5px',
        width: `${scrollPercent}%`,
        backgroundColor: '#4cafef',
        zIndex: 9999,
        transition: 'width 0.1s ease-out',
      }}
    />
  );
};

export default ScrollProgressBar;
