import { Zap, Shield, Truck, Award, Battery, Wifi, Clock, Leaf } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Express shipping worldwide with tracking. Get your solar solutions delivered in 2-5 business days.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    {
      icon: Shield,
      title: "5-Year Warranty",
      description: "Comprehensive warranty on all products. Peace of mind with professional support and replacement guarantee.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30"
    },
    {
      icon: Battery,
      title: "8000+ Cycle Life",
      description: "Premium Grade A+ LiFePO4 cells with guaranteed 8000+ charge cycles. Built to last decades.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30"
    },
    {
      icon: Wifi,
      title: "Smart IoT Monitoring",
      description: "Real-time monitoring via mobile app. Track performance, health, and optimize your energy system remotely.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    },
    {
      icon: Award,
      title: "Industry Leading Quality",
      description: "Certified by international standards. Rigorous testing ensures maximum safety and performance.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30"
    },
    {
      icon: Leaf,
      title: "100% Eco-Friendly",
      description: "Clean energy solutions with minimal environmental impact. Contribute to a sustainable future.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30"
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gradient mb-4 sm:mb-6">
            Why Choose ECOTECH?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just selling products – we're delivering the future of energy. 
            Here's what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 sm:p-4 rounded-2xl ${feature.bgColor} ${feature.borderColor} border-2 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.color}`} />
              </div>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Glow */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${feature.bgColor} blur-xl`} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center space-y-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">50K+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">99.9%</div>
            <div className="text-sm sm:text-base text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">24/7</div>
            <div className="text-sm sm:text-base text-muted-foreground">Expert Support</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">150+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Countries Served</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
            <div className="relative bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-3 sm:mb-4">
                Ready to Experience the Future?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md mx-auto">
                Join thousands of satisfied customers who've made the switch to clean, reliable solar energy.
              </p>
              <a 
                href="https://wa.me/1234567890?text=Hi,%20I'm%20ready%20to%20experience%20ECOTECH%20solar%20solutions.%20Can%20we%20discuss%20my%20energy%20needs?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero text-sm sm:text-base"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;