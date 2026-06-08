import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';
import f from '../assets/f.jpg';
import g from '../assets/g.png';
import h from '../assets/h.png';
import fallbackImage from '../assets/fallback.jpg';

interface HomePageProps {
  onClickCallback: () => void;
}

const slides = [
  { img: a, label: 'New Drop', sub: 'SS25 Collection' },
  { img: b, label: 'Hardgoods', sub: 'Decks · Trucks · Wheels' },
  { img: c, label: 'Apparel', sub: 'Jacob Brand Cuts' },
  { img: d, label: 'Accessories', sub: 'Bags · Caps · Gear' },
  { img: e, label: 'Riders', sub: 'Meet the Team' },
  { img: f, label: 'Limited', sub: 'Drop Series' },
  { img: g, label: 'Shop Now', sub: 'Free shipping over ₪200' },
  { img: h, label: 'Lookbook', sub: 'SS25 Editorial' },
];

const INTERVAL = 4500;

const HomePage: React.FC<HomePageProps> = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <div className="hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((slide, i) => (
        <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
          <img
            src={slide.img}
            alt={slide.label}
            onError={ev => { (ev.target as HTMLImageElement).src = fallbackImage; }}
          />
          <div className="hero-overlay" />
        </div>
      ))}

      <div className="hero-content">
        <span className="hero-eyebrow">{slides[current].sub}</span>
        <h1 className="hero-title">{slides[current].label}</h1>
        <div className="hero-cta">
          <Link to="/collections" className="btn-hero-primary">Shop Now</Link>
          <Link to="/accessories" className="btn-hero-ghost">Accessories</Link>
        </div>
      </div>

      <button className="hero-arrow hero-prev" onClick={prev} aria-label="Previous">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="hero-arrow hero-next" onClick={next} aria-label="Next">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero-progress">
        <div key={current} className={`hero-progress-bar ${paused ? 'paused' : ''}`} style={{ animationDuration: `${INTERVAL}ms` }} />
      </div>
    </div>
  );
};

export default HomePage;
