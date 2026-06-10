'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp, FaXmark } from 'react-icons/fa6';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './WhatsappButton.module.css';

export default function WhatsappButton() {
  const [showBalloon, setShowBalloon] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBalloon(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Estou com dúvidas e gostaria de falar com o atendimento.')}`;

  return (
    <div className={styles.wrapper}>
      {showBalloon && (
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.balloon}>
          <button
            className={styles.closeBtn}
            aria-label="Fechar"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowBalloon(false); }}
          >
            <FaXmark />
          </button>
          <p>Ficou com alguma dúvida? Fale com o nosso atendimento!</p>
        </a>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        aria-label="Falar no WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
