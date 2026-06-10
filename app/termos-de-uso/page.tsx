import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { PacoteProvider } from '@/lib/PacoteContext';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Termos de Uso — Provedor ISP',
};

export default function TermosDeUsoPage() {
  return (
    <PacoteProvider>
      <Navbar />
      <main id="main-content">
        <section className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.title}>Termos de Uso</h1>
            <p className={styles.updatedAt}>Última atualização: junho de 2026</p>

            <div className={styles.content}>
              <h2>1. Aceitação dos termos</h2>
              <p>
                Ao utilizar este site e contratar os serviços da Provedor ISP, você concorda com os termos
                e condições descritos nesta página.
              </p>

              <h2>2. Descrição dos serviços</h2>
              <p>
                A Provedor ISP oferece planos de acesso à internet via fibra óptica, incluindo instalação,
                suporte técnico e serviços adicionais conforme descrito em nossos planos.
              </p>

              <h2>3. Cadastro e contratação</h2>
              <p>
                Ao solicitar um plano, você se compromete a fornecer informações verdadeiras, completas e
                atualizadas. A contratação está sujeita à viabilidade técnica de instalação no endereço
                informado.
              </p>

              <h2>4. Pagamentos</h2>
              <p>
                Os valores e formas de pagamento são informados no momento da contratação. Atrasos no
                pagamento podem resultar em suspensão temporária do serviço, conforme política comercial
                vigente.
              </p>

              <h2>5. Cancelamento</h2>
              <p>
                Salvo condições específicas informadas na contratação, os planos não possuem fidelidade e
                podem ser cancelados a qualquer momento, mediante solicitação pelos canais de atendimento.
              </p>

              <h2>6. Uso adequado</h2>
              <p>
                O cliente compromete-se a utilizar a conexão de internet de forma lícita, não sendo
                permitido o uso para práticas ilegais, fraudes ou que violem direitos de terceiros.
              </p>

              <h2>7. Disponibilidade do serviço</h2>
              <p>
                Embora nos esforcemos para manter a conexão sempre disponível, eventuais manutenções,
                falhas técnicas ou fatores externos podem causar interrupções temporárias no serviço.
              </p>

              <h2>8. Alterações nos termos</h2>
              <p>
                Estes termos podem ser atualizados periodicamente. As alterações entram em vigor a partir
                da publicação nesta página.
              </p>

              <h2>9. Contato</h2>
              <p>
                Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail
                contato@provedorisp.com.br.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PacoteProvider>
  );
}
