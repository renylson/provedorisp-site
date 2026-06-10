import { FaShieldHalved, FaDownload, FaHeadset } from 'react-icons/fa6';
import styles from './DiferencialBar.module.css';

const ITEMS = [
  {
    icon: <FaShieldHalved />,
    color: 'cyan',
    title: 'CONEXÃO QUE NÃO CAI',
    text: 'Mais estabilidade para o que realmente importa.',
  },
  {
    icon: <FaDownload />,
    color: 'purple',
    title: 'DOWNLOAD E UPLOAD',
    text: 'Velocidade simétrica para melhor performance.',
  },
  {
    icon: <FaHeadset />,
    color: 'orange',
    title: 'ATENDIMENTO HUMANO',
    text: 'Suporte especializado sempre que você precisar.',
  },
];

export default function DiferencialBar() {
  return (
    <div className={styles.bar} id="diferenciais">
      {ITEMS.map((item, i) => (
        <div key={item.title} className={styles.col}>
          <span className={`${styles.icon} ${styles[`icon${item.color.charAt(0).toUpperCase() + item.color.slice(1)}`]}`}>
            {item.icon}
          </span>
          <div className={styles.text}>
            <h3 className={`${styles.title} ${styles[`title${item.color.charAt(0).toUpperCase() + item.color.slice(1)}`]}`}>
              {item.title}
            </h3>
            <p className={styles.desc}>{item.text}</p>
          </div>
          {i < ITEMS.length - 1 && <div className={styles.sep} />}
        </div>
      ))}
    </div>
  );
}
