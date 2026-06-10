'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { PLANOS, ADICIONAIS, type Plano, type Adicional } from '@/lib/data';
import { usePacote } from '@/lib/PacoteContext';
import LeadModal from '@/components/LeadModal/LeadModal';
import styles from './MontePacote.module.css';

export default function MontePacote() {
  const { planSelecionado, setPlanSelecionado } = usePacote();
  const [adicionaisSelecionados, setAdicionaisSelecionados] = useState<Set<string>>(new Set());
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleAdicional = (id: string) => {
    setAdicionaisSelecionados(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const adicionaisSelecionadosList = ADICIONAIS.filter(a => adicionaisSelecionados.has(a.id));
  const total = planSelecionado.preco + adicionaisSelecionadosList.reduce((s, a) => s + a.preco, 0);

  const visibleAdicionais = mostrarTodos ? ADICIONAIS : ADICIONAIS.slice(0, 3);

  return (
    <section className={styles.section} id="pacote">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          MONTE SEU <span className="gradientTextWarm">PACOTE</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Escolha seu plano de internet e adicione os serviços que você ama.
        </p>

        <div className={styles.grid}>
          {/* Coluna 1 — Plano */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>
              <span className={styles.step}>1</span>
              ESCOLHA SUA INTERNET
            </h3>
            <ul className={styles.planoList}>
              {PLANOS.map(plano => (
                <li key={plano.id}>
                  <button
                    className={`${styles.planoItem} ${planSelecionado.id === plano.id ? styles.planoItemActive : ''}`}
                    onClick={() => setPlanSelecionado(plano)}
                    aria-pressed={planSelecionado.id === plano.id}
                  >
                    <span className={styles.planoNome}>{plano.nome}</span>
                    <span className={styles.planoPreco}>R$ {plano.preco.toFixed(2).replace('.', ',')}/mês</span>
                    {planSelecionado.id === plano.id && (
                      <span className={styles.planoCheck}><FaCheck /></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2 — Adicionais */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>
              <span className={styles.step}>2</span>
              ADICIONE SERVIÇOS OPCIONAIS
            </h3>
            <ul className={styles.adicionaisList}>
              {visibleAdicionais.map(adicional => {
                const checked = adicionaisSelecionados.has(adicional.id);
                return (
                  <li key={adicional.id}>
                    <button
                      className={`${styles.adicionalItem} ${checked ? styles.adicionalItemActive : ''}`}
                      onClick={() => toggleAdicional(adicional.id)}
                      aria-pressed={checked}
                    >
                      <span className={styles.adicionalInfo}>
                        <span className={styles.adicionalNome}>{adicional.nome}</span>
                        <span className={styles.adicionalDesc}>{adicional.descricao}</span>
                      </span>
                      <span className={styles.adicionalPreco}>+R$ {adicional.preco.toFixed(2).replace('.', ',')}/mês</span>
                      <span className={`${styles.checkbox} ${checked ? styles.checkboxActive : ''}`}>
                        {checked && <FaCheck />}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              className={styles.verMais}
              onClick={() => setMostrarTodos(v => !v)}
            >
              {mostrarTodos ? <><FaChevronUp /> VER MENOS</> : <><FaChevronDown /> VER MAIS OPÇÕES</>}
            </button>
          </div>

          {/* Coluna 3 — Resumo */}
          <div className={styles.resumoCol}>
            <div className={styles.resumoCard}>
              <h3 className={styles.resumoTitle}>
                <span className={styles.step}>3</span>
                RESUMO DO SEU PACOTE
              </h3>

              <ul className={styles.resumoList}>
                <li className={styles.resumoItem}>
                  <span>{planSelecionado.nome}</span>
                  <span>R$ {planSelecionado.preco.toFixed(2).replace('.', ',')}</span>
                </li>
                {adicionaisSelecionadosList.map(a => (
                  <li key={a.id} className={styles.resumoItem}>
                    <span>{a.nome}</span>
                    <span>+R$ {a.preco.toFixed(2).replace('.', ',')}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.resumoDivider} />

              <div className={styles.totalBlock}>
                <span className={styles.totalLabel}>Total mensal</span>
                <span className={styles.totalValor}>R$ {total.toFixed(2).replace('.', ',')}<span className={styles.totalMes}>/mês</span></span>
                <span className={styles.totalNote}>Sem fidelidade · Cancele quando quiser</span>
              </div>

              <button
                className={`${styles.contrateBtn} ctaButton`}
                onClick={() => setModalOpen(true)}
              >
                CONTRATE AGORA
              </button>
              <p className={styles.resumoNota}>Instalação grátis para novos clientes!</p>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <LeadModal
          plano={planSelecionado}
          adicionais={adicionaisSelecionadosList}
          total={total}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}
