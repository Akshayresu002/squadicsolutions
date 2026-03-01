import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full">
          <Hero />
          <Services />
          <CaseStudies />
          <About />
          <Process />
          <Testimonials />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
