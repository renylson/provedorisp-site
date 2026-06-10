import { FaBuilding, FaHeadset, FaShieldHalved, FaNetworkWired } from 'react-icons/fa6';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './Empresas.module.css';

const ITEMS = [
  {
    icon: <FaNetworkWired />,
    title: 'LINKS DEDICADOS',
    text: 'Conexão simétrica e exclusiva, sem compartilhamento de banda.',
  },
  {
    icon: <FaShieldHalved />,
    title: 'IP FIXO E SLA',
    text: 'IP fixo incluso e acordo de nível de serviço garantido.',
  },
  {
    icon: <FaHeadset />,
    title: 'SUPORTE PRIORITÁRIO',
    text: 'Atendimento dedicado para sua empresa, 24/7.',
  },
  {
    icon: <FaBuilding />,
    title: 'PLANOS SOB MEDIDA',
    text: 'Soluções personalizadas para o tamanho do seu negócio.',
  },
];

export default function Empresas() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Quero saber mais sobre os planos empresariais.')}`;

  return (
    <section className={styles.section} id="empresas">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          PARA SUA <span className="gradientTextCyan">EMPRESA</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Internet de alta performance e suporte dedicado para o seu negócio crescer sem limites.
        </p>

        <div className={styles.grid}>
          {ITEMS.map(item => (
            <div key={item.title} className={styles.card}>
              <span className={styles.icon}>{item.icon}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <div>
            <h3 className={styles.ctaTitle}>Tem uma empresa e precisa de uma solução sob medida?</h3>
            <p className={styles.ctaText}>
              Fale com nossos consultores e descubra o plano empresarial ideal para você.
            </p>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            FALAR COM CONSULTOR
          </a>
        </div>
      </div>
    </section>
  );
}
