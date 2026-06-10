'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import styles from './HeroCarousel.module.css';

const BANNERS = [
  {
    id: 0,
    bg: '/banners/banner1.png',
    fallbackGradient: 'linear-gradient(135deg, #0D1A4A 0%, #1A0D3A 50%, #050508 100%)',
    cta: 'VER PLANOS',
    ctaHref: '#diferenciais',
  },
  {
    id: 1,
    bg: '/banners/banner2.png',
    fallbackGradient: 'linear-gradient(135deg, #0D2A1A 0%, #0A1A2A 50%, #050508 100%)',
    cta: 'ASSINE JÁ',
    ctaHref: '#diferenciais',
  },
  {
    id: 2,
    bg: '/banners/banner3.png',
    fallbackGradient: 'linear-gradient(135deg, #0A0A2A 0%, #1A0A3A 50%, #050508 100%)',
    cta: 'SAIBA MAIS',
    ctaHref: '#diferenciais',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) setCurrent(c => (c + 1) % BANNERS.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startAutoPlay]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    startAutoPlay();
  };
  const prev = () => goTo((current - 1 + BANNERS.length) % BANNERS.length);
  const next = () => goTo((current + 1) % BANNERS.length);

  const scrollToSection = (href: string) => {
    if (href === '#inicio') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className={styles.carousel}
      id="inicio"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
      aria-label="Carrossel de banners"
    >
      {BANNERS.map((banner, idx) => (
        <div
          key={banner.id}
          className={`${styles.slide} ${idx === current ? styles.active : ''}`}
          style={{
            backgroundImage: `url(${banner.bg}), ${banner.fallbackGradient}`,
          }}
          aria-hidden={idx !== current}
        >
          <div className={styles.content}>
            <button
              className={styles.cta}
              onClick={() => scrollToSection(banner.ctaHref)}
            >
              {banner.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Banner anterior">
        <FaChevronLeft />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Próximo banner">
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className={styles.dots} role="tablist" aria-label="Selecionar banner">
        {BANNERS.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`}
            onClick={() => goTo(idx)}
            role="tab"
            aria-selected={idx === current}
            aria-label={`Banner ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
