'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import ContratosModal from '@/components/ContratosModal/ContratosModal';
import { AREA_CLIENTE_URL } from '@/lib/data';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'INÍCIO',    href: '#inicio' },
  { label: 'PLANOS',    href: '#planos' },
  { label: 'PACOTES',   href: '#pacote' },
  { label: 'EMPRESAS',  href: '#empresas' },
  { label: 'FAQ',       href: '#faq' },
  { label: 'CONTATO',   href: '#contato' },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contratosOpen, setContratosOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    setActiveLink(href);
    setMobileOpen(false);

    if (pathname !== '/') {
      router.push(`/${href}`);
      return;
    }

    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }, [pathname, router]);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} aria-label="Navegação principal">
        <div className={styles.inner}>
          <a href="/#inicio" onClick={(e) => { e.preventDefault(); scrollTo('#inicio'); }} className={styles.logo}>
            <Image src="/logo2.png" alt="Provedor ISP" width={225} height={150} className={styles.logoImg} priority />
          </a>

          <ul className={styles.navLinks}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={`/${link.href}`}
                  className={`${styles.navLink} ${activeLink === link.href ? styles.active : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button className={styles.navLink} onClick={() => setContratosOpen(true)}>
                CONTRATOS
              </button>
            </li>
          </ul>

          <div className={styles.actions}>
            <button
              className={styles.areaClienteBtn}
              onClick={() => window.open(AREA_CLIENTE_URL, '_blank')}
              aria-label="Acessar central do cliente"
            >
              CENTRAL DO CLIENTE
            </button>

            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ''}`} role="dialog" aria-modal="true" aria-label="Menu móvel">
        <ul className={styles.drawerLinks}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={`/${link.href}`}
                className={styles.drawerLink}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button className={styles.drawerLink} onClick={() => { setMobileOpen(false); setContratosOpen(true); }}>
              CONTRATOS
            </button>
          </li>
          <li>
            <button
              className={styles.drawerClienteBtn}
              onClick={() => { setMobileOpen(false); window.open(AREA_CLIENTE_URL, '_blank'); }}
            >
              CENTRAL DO CLIENTE
            </button>
          </li>
        </ul>
      </div>
      {mobileOpen && <div className={styles.overlay} onClick={() => setMobileOpen(false)} />}

      {contratosOpen && <ContratosModal onClose={() => setContratosOpen(false)} />}
    </>
  );
}
