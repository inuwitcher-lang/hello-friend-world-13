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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
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

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-glow">
              Power the 
              <span className="text-gradient block">Future</span>
              with Solar Energy
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              Premium LiFePO4 batteries, smart BMS systems, and solar solutions 
              delivered to your door. Experience the future of clean energy.
            </p>
          </div>

          {/* Hero Stats */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            <div className="flex items-center space-x-2 text-primary">
              <Zap className="w-6 h-6 icon-glow" />
              <span className="font-semibold">8000+ Cycles</span>
            </div>
            <div className="flex items-center space-x-2 text-secondary">
              <Battery className="w-6 h-6 icon-glow" />
              <span className="font-semibold">280Ah Capacity</span>
            </div>
            <div className="flex items-center space-x-2 text-accent">
              <Shield className="w-6 h-6 icon-glow" />
              <span className="font-semibold">5-Year Warranty</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={scrollToProducts}
              className="btn-hero group"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20ECOTECH%20solar%20solutions.%20Can%20you%20tell%20me%20more?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-glow"
            >
              Talk to Expert
            </a>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative animate-scale-in">
          <div className="relative perspective-1000">
            <img 
              src={heroImage}
              alt="Futuristic Solar Installation"
              className="w-full rounded-2xl shadow-elevated hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-glow-pulse" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;