'use client'
import { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrolled);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(scrolled);
      });
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