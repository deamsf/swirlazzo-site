import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { CategoryGrid } from './components/CategoryGrid';
import { TestimonialGrid } from './components/TestimonialGrid';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { testimonials } from './data/testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <BackgroundEffect />
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center">
        <HeroSlider />
      </section>

      <section
        id="categories"
        className="py-12 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-90"
      >
        <h2 className="text-3xl font-bold text-center text-swirlazzo-teal mb-8">
          Ontdek onze collectie
        </h2>
        <CategoryGrid />
      </section>

      <section
        id="testimonials"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-swirlazzo-cream bg-opacity-20"
      >
        <h2 className="text-3xl font-bold text-center text-swirlazzo-teal mb-8">
          Dit vinden zij
        </h2>
        <TestimonialGrid testimonials={testimonials} />
      </section>

      <section
        id="aboutsection"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-swirlazzo-cream bg-opacity-30"
      >
        <AboutSection />
      </section>

      <Footer />
    </div>
  );
}
