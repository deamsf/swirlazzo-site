import { useState, useEffect } from 'react';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Swirlazzo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('categories')}
              className="text-swirlazzo-teal hover:text-swirlazzo-pink transition-colors"
            >
              Collections
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-swirlazzo-teal hover:text-swirlazzo-pink transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('aboutsection')}
              className="text-swirlazzo-teal hover:text-swirlazzo-pink transition-colors"
            >
              About
            </button>
            <a
              href="https://instagram.com/swirlazzo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-swirlazzo-pink hover:text-swirlazzo-teal transition-colors"
              aria-label="Visit our Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-swirlazzo-teal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 shadow-lg py-4">
            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={() => scrollToSection('categories')}
                className="text-swirlazzo-teal hover:text-swirlazzo-pink transition-colors"
              >
                Collections
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-swirlazzo-teal hover:text-swirlazzo-pink transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('aboutsection')}
                className="text-swirlazzo-teal hover:text-swirlazzo-pink transition-colors"
              >
                About
              </button>
              <a
                href="https://instagram.com/swirlazzo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-swirlazzo-pink hover:text-swirlazzo-teal transition-colors"
                aria-label="Visit our Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}