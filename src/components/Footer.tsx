import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import ecotechLogo from '@/assets/ecotech-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 backdrop-blur-lg border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={ecotechLogo} 
                alt="ECOTECH Logo" 
                className="w-8 h-8 icon-glow"
              />
              <span className="text-2xl font-bold text-gradient">ECOTECH</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Leading the future of solar energy with premium LiFePO4 batteries, 
              smart BMS systems, and sustainable solutions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Reviews
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Products</h3>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                LiFePO4 Batteries
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                BMS Systems
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Solar Panels
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Energy Storage
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Custom Solutions
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-foreground font-medium">+1 (555) 123-4567</div>
                  <div className="text-sm text-muted-foreground">Sales & Support</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-foreground font-medium">info@ecotech.com</div>
                  <div className="text-sm text-muted-foreground">24/7 Support</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-foreground font-medium">Solar Tech Center</div>
                  <div className="text-sm text-muted-foreground">San Francisco, CA</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="text-foreground font-medium">24/7 Available</div>
                  <div className="text-sm text-muted-foreground">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} ECOTECH. All rights reserved. Powering the future with solar energy.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Warranty
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center">
          <a 
            href="https://wa.me/1234567890?text=Hi,%20I%20want%20to%20learn%20more%20about%20ECOTECH%20solar%20solutions!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors"
          >
            <span>Ready to go solar? Let's chat on WhatsApp!</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;