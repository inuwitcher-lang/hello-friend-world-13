import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Solar Installer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c9dc2d7c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "ECOTECH batteries are absolutely incredible! The 8000+ cycle life is exactly as promised. I've installed over 200 systems and these are the most reliable batteries I've ever worked with.",
      project: "Residential Solar Farm"
    },
    {
      name: "Michael Chen",
      title: "Energy Engineer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The Smart BMS system is a game-changer. Real-time monitoring and the mobile app make managing our energy storage so much easier. Professional grade quality at an amazing price.",
      project: "Commercial Installation"
    },
    {
      name: "Emma Rodriguez",
      title: "Homeowner",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I was skeptical about solar at first, but ECOTECH made everything so simple. Fast delivery, easy installation guide, and the customer support is outstanding. My electricity bill is now $0!",
      project: "Home Energy System"
    },
    {
      name: "David Kim",
      title: "Off-Grid Enthusiast",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Living completely off-grid with ECOTECH batteries for 2 years now. Zero issues, consistent performance, and the 5-year warranty gives me complete peace of mind. Highly recommend!",
      project: "Off-Grid Cabin Setup"
    },
    {
      name: "Lisa Thompson",
      title: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Our warehouse runs entirely on ECOTECH solar solutions. The ROI was achieved in just 18 months. Professional installation support and monitoring capabilities are exceptional.",
      project: "Industrial Solar System"
    },
    {
      name: "Robert Wilson",
      title: "Contractor",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a contractor, I only recommend products I trust. ECOTECH has never let me down. Quality components, reliable performance, and great customer service. My go-to solar solution.",
      project: "Multiple Installations"
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gradient mb-4 sm:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers are saying 
            about their ECOTECH experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30" />
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-sm sm:text-base text-foreground leading-relaxed mb-4 sm:mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-primary">{testimonial.project}</p>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center opacity-60">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-secondary mb-2">10K+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-accent mb-2">99%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-2">50K+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Happy Customers</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-3 sm:mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience the quality and reliability that thousands of customers trust. 
            Let's discuss your energy needs and create your success story.
          </p>
          <a 
            href="https://wa.me/1234567890?text=Hi,%20I%20want%20to%20join%20your%20success%20stories!%20Can%20you%20help%20me%20with%20solar%20solutions?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero text-sm sm:text-base"
          >
            Share Your Story With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;