import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, telefone, endereco, plano, adicionais, total } = body;

  if (!nome || !telefone || !endereco || !plano) {
    return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 });
  }

  console.log('[LEAD]', { nome, telefone, endereco, plano, adicionais, total, ts: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
