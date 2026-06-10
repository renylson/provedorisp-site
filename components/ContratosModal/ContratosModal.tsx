'use client';

import { useEffect } from 'react';
import { FaXmark, FaHouse, FaBuilding, FaDownload, FaWhatsapp } from 'react-icons/fa6';
import { CONTRATOS, WHATSAPP_NUMBER } from '@/lib/data';
import styles from './ContratosModal.module.css';

interface ContratosModalProps {
  onClose: () => void;
}

export default function ContratosModal({ onClose }: ContratosModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const openWhatsApp = () => {
    const msg = 'Olá! Tenho dúvidas sobre os contratos da Provedor ISP. Pode me ajudar?';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      className={styles.overlay}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contratos-title"
    >
      <div className={styles.card}>
        <div className={styles.topBorder} />
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar modal">
          <FaXmark />
        </button>

        <h2 className={styles.title} id="contratos-title">CONTRATOS</h2>
        <p className={styles.subtitle}>Faça o download do contrato correspondente ao seu perfil</p>

        <div className={styles.cards}>
          {CONTRATOS.map(contrato => (
            <div key={contrato.id} className={`${styles.contratoCard} ${styles[contrato.tipo]}`}>
              <span className={`${styles.contratoIcon} ${styles[`icon_${contrato.tipo}`]}`}>
                {contrato.tipo === 'residencial' ? <FaHouse /> : <FaBuilding />}
              </span>
              <h3 className={styles.contratoTitulo}>{contrato.titulo}</h3>
              <p className={styles.contratoDesc}>{contrato.descricao}</p>
              <a
                href={contrato.arquivo}
                download
                className={`${styles.downloadBtn} ${styles[`downloadBtn_${contrato.tipo}`]}`}
                aria-label={`Baixar ${contrato.titulo}`}
              >
                <FaDownload />
                BAIXAR PDF
              </a>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p>Dúvidas? Fale com nosso atendimento pelo WhatsApp.</p>
          <button className={styles.waBtn} onClick={openWhatsApp}>
            <FaWhatsapp />
            Chamar no WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
