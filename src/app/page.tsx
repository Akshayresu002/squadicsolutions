import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Trust from '@/components/sections/Trust';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Results from '@/components/sections/Results';
import Industries from '@/components/sections/Industries';
import Process from '@/components/sections/Process';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import BlogSection from '@/components/sections/BlogSection';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full">
          <Hero />
          <Trust />
          <Services />
          <WhyChooseUs />
          <Results />
          <Industries />
          <Process />
          <CaseStudies />
          <Testimonials />
          <BlogSection />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
