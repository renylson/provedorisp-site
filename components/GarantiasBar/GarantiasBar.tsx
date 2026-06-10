import { FaLockOpen, FaWrench, FaHeadset, FaMobileScreen } from 'react-icons/fa6';
import styles from './GarantiasBar.module.css';

const ITEMS = [
  {
    icon: <FaLockOpen />,
    color: 'cyan',
    title: 'SEM FIDELIDADE',
    text: 'Liberdade para cancelar quando quiser.',
  },
  {
    icon: <FaWrench />,
    color: 'purple',
    title: 'INSTALAÇÃO GRÁTIS',
    text: 'Para novos clientes em áreas selecionadas.',
  },
  {
    icon: <FaHeadset />,
    color: 'orange',
    title: 'SUPORTE 24/7',
    text: 'Atendimento humano todos os dias.',
  },
  {
    icon: <FaMobileScreen />,
    color: 'magenta',
    title: 'APP EXCLUSIVO',
    text: 'Gerencie sua conta e serviços pelo app.',
  },
];

export default function GarantiasBar() {
  return (
    <section className={styles.bar}>
      {ITEMS.map(item => (
        <div key={item.title} className={styles.col}>
          <span className={`${styles.icon} ${styles[`icon_${item.color}`]}`}>{item.icon}</span>
          <div>
            <h3 className={`${styles.title} ${styles[`title_${item.color}`]}`}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
