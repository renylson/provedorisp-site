import Navbar from '@/components/Navbar/Navbar';
import HeroCarousel from '@/components/HeroCarousel/HeroCarousel';
import DiferencialBar from '@/components/DiferencialBar/DiferencialBar';
import Planos from '@/components/Planos/Planos';
import MontePacote from '@/components/MontePacote/MontePacote';
import Empresas from '@/components/Empresas/Empresas';
import Faq from '@/components/Faq/Faq';
import GarantiasBar from '@/components/GarantiasBar/GarantiasBar';
import FaleConosco from '@/components/FaleConosco/FaleConosco';
import Footer from '@/components/Footer/Footer';
import { PacoteProvider } from '@/lib/PacoteContext';

export default function Home() {
  return (
    <PacoteProvider>
      <Navbar />
      <main id="main-content">
        <HeroCarousel />
        <DiferencialBar />
        <Planos />
        <MontePacote />
        <Empresas />
        <Faq />
        <FaleConosco />
        <GarantiasBar />
      </main>
      <Footer />
    </PacoteProvider>
  );
}
