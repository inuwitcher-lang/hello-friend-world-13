import { ArrowRight, Zap, Battery, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-solar.jpg';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Animated Background Particles */}
      <div className="particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-slide-up order-2 lg:order-1">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-glow leading-tight">
              Power the 
              <span className="text-gradient block">Future</span>
              with Solar Energy
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Premium LiFePO4 batteries, smart BMS systems, and solar solutions 
              delivered to your door. Experience the future of clean energy.
            </p>
          </div>

          {/* Hero Stats */}
          <div className="flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start">
            <div className="flex items-center space-x-2 text-primary bg-primary/10 px-3 py-2 rounded-full border border-primary/20">
              <Zap className="w-5 h-5 icon-glow" />
              <span className="font-semibold text-sm sm:text-base">8000+ Cycles</span>
            </div>
            <div className="flex items-center space-x-2 text-secondary bg-secondary/10 px-3 py-2 rounded-full border border-secondary/20">
              <Battery className="w-5 h-5 icon-glow" />
              <span className="font-semibold text-sm sm:text-base">280Ah Capacity</span>
            </div>
            <div className="flex items-center space-x-2 text-accent bg-accent/10 px-3 py-2 rounded-full border border-accent/20">
              <Shield className="w-5 h-5 icon-glow" />
              <span className="font-semibold text-sm sm:text-base">5-Year Warranty</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={scrollToProducts}
              className="btn-hero group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20ECOTECH%20solar%20solutions.%20Can%20you%20tell%20me%20more?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Talk to Expert
            </a>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative animate-scale-in order-1 lg:order-2">
          <div className="relative perspective-1000">
            <img 
              src={heroImage}
              alt="Futuristic Solar Installation"
              className="w-full max-w-lg mx-auto lg:max-w-none rounded-2xl shadow-elevated hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full blur-xl animate-glow-pulse" />
          <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-secondary/20 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;