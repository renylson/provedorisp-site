'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { PLANOS, type Plano } from '@/lib/data';

interface PacoteContextValue {
  planSelecionado: Plano;
  setPlanSelecionado: (plano: Plano) => void;
}

const PacoteContext = createContext<PacoteContextValue | null>(null);

export function PacoteProvider({ children }: { children: ReactNode }) {
  const [planSelecionado, setPlanSelecionado] = useState<Plano>(PLANOS[1]);
  return (
    <PacoteContext.Provider value={{ planSelecionado, setPlanSelecionado }}>
      {children}
    </PacoteContext.Provider>
  );
}

export function usePacote() {
  const ctx = useContext(PacoteContext);
  if (!ctx) throw new Error('usePacote must be used within a PacoteProvider');
  return ctx;
}
