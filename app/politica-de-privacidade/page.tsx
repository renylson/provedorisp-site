import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { PacoteProvider } from '@/lib/PacoteContext';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Política de Privacidade — Provedor ISP',
};

export default function PoliticaDePrivacidadePage() {
  return (
    <PacoteProvider>
      <Navbar />
      <main id="main-content">
        <section className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.title}>Política de Privacidade</h1>
            <p className={styles.updatedAt}>Última atualização: junho de 2026</p>

            <div className={styles.content}>
              <h2>1. Quais dados coletamos</h2>
              <p>
                Coletamos as informações fornecidas por você em nossos formulários, como nome, telefone,
                endereço e e-mail, quando você solicita um plano, entra em contato conosco ou contrata
                nossos serviços.
              </p>

              <h2>2. Como usamos seus dados</h2>
              <p>
                Utilizamos seus dados para entrar em contato sobre planos e serviços, realizar a instalação
                e prestação do serviço de internet, enviar comunicações sobre sua conta e melhorar a
                qualidade do nosso atendimento.
              </p>

              <h2>3. Compartilhamento de dados</h2>
              <p>
                Não vendemos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.
                Seus dados podem ser compartilhados apenas com parceiros estritamente necessários para a
                prestação do serviço (ex: equipe técnica de instalação) ou quando exigido por lei.
              </p>

              <h2>4. Armazenamento e segurança</h2>
              <p>
                Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não
                autorizado, perda ou alteração indevida.
              </p>

              <h2>5. Seus direitos</h2>
              <p>
                Você pode solicitar, a qualquer momento, a confirmação, correção, atualização ou exclusão
                dos seus dados pessoais, entrando em contato pelos canais informados na seção &quot;Fale
                Conosco&quot;.
              </p>

              <h2>6. Cookies</h2>
              <p>
                Nosso site pode utilizar cookies para melhorar a experiência de navegação e gerar
                estatísticas de uso. Você pode desativar os cookies nas configurações do seu navegador.
              </p>

              <h2>7. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail
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
