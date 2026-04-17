import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Articles from '@/components/Articles';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Services />

      <Process />
      <Portfolio />
      <About />
      <Pricing />
      <FAQ />
      <Articles />
      <CTA />
      <Footer />
    </>
  );
}

