import { FaWhatsapp, FaPhone, FaEnvelope, FaLocationDot, FaClock } from 'react-icons/fa6';
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '@/lib/data';
import styles from './FaleConosco.module.css';

export default function FaleConosco() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com a Provedor ISP.')}`;

  return (
    <section className={styles.section} id="contato">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          FALE <span className="gradientText">CONOSCO</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Estamos prontos para te atender. Entre em contato ou venha nos visitar.
        </p>

        <div className={styles.grid}>
          <div className={styles.info}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.item}>
              <FaWhatsapp className={styles.iconGreen} />
              <div>
                <span className={styles.itemLabel}>WhatsApp</span>
                <span className={styles.itemValue}>{PHONE_NUMBER}</span>
              </div>
            </a>

            <a href={`tel:+${WHATSAPP_NUMBER}`} className={styles.item}>
              <FaPhone className={styles.iconCyan} />
              <div>
                <span className={styles.itemLabel}>Telefone</span>
                <span className={styles.itemValue}>{PHONE_NUMBER}</span>
              </div>
            </a>

            <a href="mailto:contato@provedorisp.com.br" className={styles.item}>
              <FaEnvelope className={styles.iconPurple} />
              <div>
                <span className={styles.itemLabel}>E-mail</span>
                <span className={styles.itemValue}>contato@provedorisp.com.br</span>
              </div>
            </a>

            <div className={styles.item}>
              <FaLocationDot className={styles.iconCyan} />
              <div>
                <span className={styles.itemLabel}>Endereço</span>
                <span className={styles.itemValue}>Petrolina - PE</span>
              </div>
            </div>

            <div className={styles.item}>
              <FaClock className={styles.iconGray} />
              <div>
                <span className={styles.itemLabel}>Horário de atendimento</span>
                <span className={styles.itemValue}>Seg a Sáb: 8h às 22h</span>
                <span className={styles.itemValue}>Dom e Feriados: 9h às 18h</span>
              </div>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              className={styles.map}
              title="Localização Provedor ISP"
              src="https://www.google.com/maps?q=Petrolina,PE&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
