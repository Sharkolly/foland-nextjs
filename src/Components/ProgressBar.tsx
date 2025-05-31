'use client'
import { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
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
        height: '4px',
        width: `${scrollPercentage}%`,
        zIndex: 1000,
      }}
      className='bg-blue-700'
    />
  );
};

export default ScrollProgressBar;