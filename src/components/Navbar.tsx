import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaInstagram } from 'react-icons/fa';
import styles from '../styles/NavHighlight.module.css';

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

  const NavItem = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
    <button onClick={onClick} className="text-lg">
      <span className={styles.navHighlightSpan}>
        <span className="text-lg text-swirlazzo-teal">
          {children}
        </span>
        <span className={styles.navHighlightEffect} />
      </span>
    </button>
  );

  const InstagramLink = () => (
    <a
      href="https://instagram.com/swirlazzo"
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg"
      aria-label="Visit our Instagram"
    >
      <span className={styles.navHighlightSpan}>
        <span className={`${styles.instagramIcon} text-swirlazzo-pink`}>
          <FaInstagram size={24} />
        </span>
        <span className={styles.navHighlightEffect} />
      </span>
    </a>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/swirlazzo-logo.svg" alt="" className="h-12 w-auto" />
            <span className="text-3xl font-caveat text-swirlazzo-teal">Swirlazzo</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavItem onClick={() => scrollToSection('categories')}>
              Collecties
            </NavItem>
            <NavItem onClick={() => scrollToSection('testimonials')}>
              Testimonials
            </NavItem>
            <NavItem onClick={() => scrollToSection('aboutsection')}>
              Over mij
            </NavItem>
            <InstagramLink />
          </div>

          <button
            className="md:hidden text-swirlazzo-teal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 shadow-lg py-4">
            <div className="flex flex-col items-center gap-4">
              <NavItem onClick={() => scrollToSection('categories')}>
                Collecties
              </NavItem>
              <NavItem onClick={() => scrollToSection('testimonials')}>
                Testimonials
              </NavItem>
              <NavItem onClick={() => scrollToSection('aboutsection')}>
                Over mij
              </NavItem>
              <InstagramLink />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}