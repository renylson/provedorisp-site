'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import styles from './Faq.module.css';

const PERGUNTAS = [
  {
    pergunta: 'Quanto tempo leva para a instalação?',
    resposta: 'Após a contratação, nossa equipe agenda a instalação em até 48 horas úteis, de acordo com a disponibilidade na sua região.',
  },
  {
    pergunta: 'A instalação tem custo?',
    resposta: 'Não. A instalação é totalmente grátis em todos os nossos planos.',
  },
  {
    pergunta: 'Existe fidelidade no contrato?',
    resposta: 'Trabalhamos com planos com e sem fidelidade. Nossa equipe pode te explicar as condições no momento da contratação.',
  },
  {
    pergunta: 'Posso mudar de plano depois de contratar?',
    resposta: 'Sim! Você pode solicitar upgrade ou downgrade do seu plano a qualquer momento através da Central do Cliente ou do nosso suporte.',
  },
  {
    pergunta: 'Como funciona o suporte técnico?',
    resposta: 'Nosso suporte está disponível por telefone, WhatsApp e chat, com atendimento prioritário para identificar e resolver problemas rapidamente.',
  },
  {
    pergunta: 'A internet é via fibra óptica?',
    resposta: 'Sim, toda a nossa rede é 100% fibra óptica, garantindo mais velocidade, estabilidade e baixa latência.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          PERGUNTAS <span className="gradientText">FREQUENTES</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Tire suas dúvidas sobre nossos planos, instalação e atendimento.
        </p>

        <div className={styles.list}>
          {PERGUNTAS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.pergunta} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.pergunta}</span>
                  <FaChevronDown className={styles.icon} />
                </button>
                {isOpen && <p className={styles.answer}>{item.resposta}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
