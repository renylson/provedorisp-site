import Image from 'next/image';
import {
  FaFacebook, FaInstagram, FaYoutube, FaTiktok,
  FaWhatsapp, FaPhone, FaEnvelope, FaClock, FaUserGear
} from 'react-icons/fa6';
import { WHATSAPP_NUMBER, PHONE_NUMBER, AREA_CLIENTE_URL } from '@/lib/data';
import styles from './Footer.module.css';

export default function Footer() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Col 1 — Marca */}
          <div className={styles.col}>
            <a href="/#inicio" className={styles.logo}>
              <Image src="/logo2.png" alt="Provedor ISP" width={225} height={150} className={styles.logoImg} />
            </a>
            <p className={styles.tagline}>
              Conectando você ao futuro com ultravelocidade, estabilidade e o melhor atendimento.
            </p>
            <div className={styles.sociais}>
              <a href="#" aria-label="Facebook" className={styles.social}><FaFacebook /></a>
              <a href="#" aria-label="Instagram" className={styles.social}><FaInstagram /></a>
              <a href="#" aria-label="YouTube" className={styles.social}><FaYoutube /></a>
              <a href="#" aria-label="TikTok" className={styles.social}><FaTiktok /></a>
            </div>
          </div>

          {/* Col 2 — Links rápidos */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>LINKS RÁPIDOS</h4>
            <ul className={styles.linkList}>
              <li><a href="#planos" className={styles.link}>Planos</a></li>
              <li><a href="#faq" className={styles.link}>Perguntas frequentes</a></li>
              <li><a href="/politica-de-privacidade" className={styles.link}>Política de privacidade</a></li>
              <li><a href="/termos-de-uso" className={styles.link}>Termos de uso</a></li>
            </ul>
          </div>

          {/* Col 3 — Atendimento */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>ATENDIMENTO</h4>
            <ul className={styles.contactList}>
              <li>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <FaWhatsapp className={styles.iconGreen} />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className={styles.contactItem}>
                  <FaPhone className={styles.iconCyan} />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@provedorisp.com.br" className={styles.contactItem}>
                  <FaEnvelope className={styles.iconPurple} />
                  <span>contato@provedorisp.com.br</span>
                </a>
              </li>
              <li>
                <a href={AREA_CLIENTE_URL} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <FaUserGear className={styles.iconCyan} />
                  <span>Central do Cliente</span>
                </a>
              </li>
              <li className={styles.contactItem}>
                <FaClock className={styles.iconGray} />
                <div>
                  <div>Seg a Sáb: 8h às 22h</div>
                  <div>Dom e Feriados: 9h às 18h</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <span>© 2025 Provedor ISP. Todos os direitos reservados.</span>
          <span>CNPJ: XX.XXX.XXX/0001-XX</span>
        </div>
      </div>

      {/* Decorativo */}
      <div className={styles.decorativo} aria-hidden="true" />
    </footer>
  );
}
