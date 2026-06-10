import type { Metadata } from 'next';
import WhatsappButton from '@/components/WhatsappButton/WhatsappButton';
import './globals.css';

export const metadata: Metadata = {
  title: 'Provedor ISP — Internet Fibra Óptica até 1 Giga',
  description: 'Conecte-se com ultravelocidade, estabilidade e suporte 24/7. Planos de internet fibra óptica a partir de R$ 99,90/mês.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Provedor ISP — Internet Fibra Óptica até 1 Giga',
    description: 'Conecte-se com ultravelocidade, estabilidade e suporte 24/7.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skipLink">Ir para conteúdo principal</a>
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
