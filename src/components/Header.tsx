import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ecotechLogo from '@/assets/ecotech-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src={ecotechLogo} 
            alt="ECOTECH Logo" 
            className="w-8 h-8 icon-glow"
          />
          <span className="text-2xl font-bold text-gradient">ECOTECH</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Reviews
          </button>
          <a 
            href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20ECOTECH%20solar%20solutions.%20Can%20you%20tell%20me%20more?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-glow"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <a 
              href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20ECOTECH%20solar%20solutions.%20Can%20you%20tell%20me%20more?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-glow inline-block text-center"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;