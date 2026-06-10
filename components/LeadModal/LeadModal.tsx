'use client';

import { useState, useEffect, useRef } from 'react';
import { FaXmark, FaWhatsapp } from 'react-icons/fa6';
import { type Plano, type Adicional, WHATSAPP_NUMBER } from '@/lib/data';
import styles from './LeadModal.module.css';

interface LeadModalProps {
  plano: Plano;
  adicionais: Adicional[];
  total: number;
  onClose: () => void;
}

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0,2)}) ${digits.slice(2)}`;
  if (digits.length <= 11) return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`;
  return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7,11)}`;
}

export default function LeadModal({ plano, adicionais, total, onClose }: LeadModalProps) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [errors, setErrors] = useState<{ nome?: string; telefone?: string; endereco?: string }>({});
  const [loading, setLoading] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    firstInputRef.current?.focus();
    return () => { document.body.style.overflow = ''; };
  }, []);

  const validate = () => {
    const errs: typeof errors = {};
    if (!nome.trim() || nome.trim().length < 3) errs.nome = 'Informe seu nome completo (mín. 3 caracteres)';
    const digits = telefone.replace(/\D/g, '');
    if (digits.length < 10) errs.telefone = 'Informe um número válido com DDD';
    if (!endereco.trim() || endereco.trim().length < 5) errs.endereco = 'Informe seu endereço completo';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, telefone, endereco, plano: plano.id, adicionais: adicionais.map(a => a.id), total }),
      });
    } catch {}

    const adicionaisTexto = adicionais.length
      ? adicionais.map(a => `- ${a.nome}: R$ ${a.preco.toFixed(2).replace('.', ',')}/mês`).join('\n')
      : 'Nenhum adicional';

    const msg = `Olá! Gostaria de contratar a internet da Provedor ISP.

*Meus dados:*
Nome: ${nome}
Telefone: ${telefone}
Endereço: ${endereco}

*Plano escolhido:*
${plano.nome}: R$ ${plano.preco.toFixed(2).replace('.', ',')}/mês

*Adicionais:*
${adicionaisTexto}

*Total mensal: R$ ${total.toFixed(2).replace('.', ',')}/mês*

Aguardo o contato para finalizar!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setLoading(false);
    onClose();
  };

  return (
    <div
      className={styles.overlay}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.card}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar modal">
          <FaXmark />
        </button>

        <div className={styles.topBorder} />

        <h2 className={styles.title} id="modal-title">QUASE LÁ!</h2>
        <p className={styles.subtitle}>Informe seus dados para finalizar a contratação</p>

        {/* Resumo */}
        <div className={styles.resumo}>
          <div className={styles.resumoItem}>
            <span>{plano.nome}</span>
            <span>R$ {plano.preco.toFixed(2).replace('.', ',')}/mês</span>
          </div>
          {adicionais.map(a => (
            <div key={a.id} className={styles.resumoItem}>
              <span>{a.nome}</span>
              <span>+R$ {a.preco.toFixed(2).replace('.', ',')}/mês</span>
            </div>
          ))}
          <div className={styles.resumoTotal}>
            <span>Total</span>
            <span className={styles.resumoTotalValor}>R$ {total.toFixed(2).replace('.', ',')}/mês</span>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="nome" className={styles.label}>Seu nome completo</label>
            <input
              ref={firstInputRef}
              id="nome"
              type="text"
              className={`${styles.input} ${errors.nome ? styles.inputError : ''}`}
              value={nome}
              onChange={e => { setNome(e.target.value); setErrors(p => ({ ...p, nome: undefined })); }}
              placeholder="Ex: João da Silva"
              autoComplete="name"
            />
            {errors.nome && <span className={styles.errorMsg}>{errors.nome}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="telefone" className={styles.label}>Seu WhatsApp (com DDD)</label>
            <input
              id="telefone"
              type="tel"
              className={`${styles.input} ${errors.telefone ? styles.inputError : ''}`}
              value={telefone}
              onChange={e => { setTelefone(maskPhone(e.target.value)); setErrors(p => ({ ...p, telefone: undefined })); }}
              placeholder="(11) 99999-9999"
              autoComplete="tel"
            />
            {errors.telefone && <span className={styles.errorMsg}>{errors.telefone}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="endereco" className={styles.label}>Endereço completo</label>
            <input
              id="endereco"
              type="text"
              className={`${styles.input} ${errors.endereco ? styles.inputError : ''}`}
              value={endereco}
              onChange={e => { setEndereco(e.target.value); setErrors(p => ({ ...p, endereco: undefined })); }}
              placeholder="Rua, número, bairro, cidade - UF"
              autoComplete="street-address"
            />
            {errors.endereco && <span className={styles.errorMsg}>{errors.endereco}</span>}
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            <FaWhatsapp />
            {loading ? 'AGUARDE...' : 'FALAR COM CONSULTOR'}
          </button>
        </form>
      </div>
    </div>
  );
}
