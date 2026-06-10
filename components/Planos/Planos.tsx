'use client';

import { FaCheck } from 'react-icons/fa6';
import { PLANOS, ADICIONAIS } from '@/lib/data';
import { usePacote } from '@/lib/PacoteContext';
import styles from './Planos.module.css';

function ServiceBadge({ id }: { id: string }) {
  const adicional = ADICIONAIS.find(a => a.id === id);
  if (!adicional) return null;
  return <span className={styles.serviceBadge}>{adicional.nome}</span>;
}

export default function Planos() {
  const { setPlanSelecionado } = usePacote();

  const escolherPlano = (plano: typeof PLANOS[number]) => {
    setPlanSelecionado(plano);
    document.querySelector('#pacote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section} id="planos">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          PLANOS DE <span className="gradientText">INTERNET</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Escolha o plano ideal para você ou monte o seu pacote personalizado.
        </p>

        <div className={styles.grid}>
          {PLANOS.map(plano => (
            <div
              key={plano.id}
              className={`${styles.card} ${plano.destaque ? styles.cardDestaque : ''}`}
            >
              {plano.badge && (
                <div className={styles.badge}>{plano.badge}</div>
              )}

              <div className={styles.velocidade}>
                <span className={styles.velocidadeNum}>{plano.velocidade}</span>
                <span className={styles.velocidadeUnit}>{plano.unidade}</span>
              </div>
              <p className={styles.planNome}>{plano.nome}</p>
              <p className={styles.planDesc}>{plano.descricao}</p>

              <ul className={styles.inclusoList}>
                {plano.incluso.map(item => (
                  <li key={item} className={styles.inclusoItem}>
                    <FaCheck className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>

              {plano.servicos.length > 0 && (
                <div className={styles.servicos}>
                  {plano.servicos.map(id => <ServiceBadge key={id} id={id} />)}
                </div>
              )}

              <div className={styles.divider} />

              <div className={styles.preco}>
                <span className={styles.precoLabel}>R$</span>
                <span className={styles.precoValor}>{plano.preco.toFixed(2).replace('.', ',')}</span>
                <span className={styles.precoMes}>/mês</span>
              </div>

              <button
                className={`${styles.btn} ${plano.destaque ? `${styles.btnDestaque} ctaButton` : styles.btnGhost}`}
                onClick={() => escolherPlano(plano)}
              >
                ESCOLHER PLANO
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
