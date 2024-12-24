import { useState, useEffect } from 'react';
import { FaChevronDown, FaShoppingBag, FaInstagram } from 'react-icons/fa';

const slides = [
  {
    image: 'https://img.freepik.com/free-photo/white-modern-vases-arrangement_23-2149835516.jpg',
    alt: 'Handgemaakte gipsporseleinen potjes'
  },
  {
    image: 'https://img.freepik.com/premium-photo/vase-table-with-wheat-interior-design-with-space-letters-3d-render_713888-2356.jpg',
    alt: 'Elegante gipsporseleinen vaasjes'
  },
  {
    image: 'https://img.freepik.com/premium-photo/modern-white-ceramic-vase-with-dry-lagurus-ovatus-grass-marble-tray-vintage-wooden-bench_713888-1049.jpg',
    alt: 'Prachtige gipsen houdertjes'
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute inset-0 w-full h-[95vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden={index !== currentSlide}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-swirlazzo-teal mb-6 sm:mb-8 font-caveat tracking-wide">
            Swirlazzo
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-swirlazzo-pink font-noto mb-8 sm:mb-12 tracking-wide">
          Handgemaakte decoratie in gips die je ruimte tot leven brengt
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            <a
              href="https://instagram.com/swirlazzo"
              target="_blank"
              rel="noopener"
              className="bg-swirlazzo-pink hover:bg-swirlazzo-pink/90 text-white px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              <FaInstagram size={20} />
              Volg ons
            </a>
            <a
              href="https://www.swirlazzo.be/shop"
              className="bg-swirlazzo-teal hover:bg-swirlazzo-teal/90 text-white px-6 sm:px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
            >
              <FaShoppingBag size={20} />
              Shop nu
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-16 sm:bottom-24 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-swirlazzo-teal w-6' 
                : 'bg-swirlazzo-cream hover:bg-swirlazzo-teal/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToContent}
          className="text-swirlazzo-teal hover:text-swirlazzo-pink transition-colors animate-bounce"
          aria-label="Scroll to content"
        >
          <FaChevronDown size={32} />
        </button>
      </div>
    </div>
  );
}