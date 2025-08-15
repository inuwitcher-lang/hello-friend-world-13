import { ShoppingCart, Battery, Cpu, Zap, Shield, Award } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "ECOTECH LiFePO4 280Ah Battery",
      tagline: "Premium Grade A+ Cells",
      price: "$899",
      originalPrice: "$1,199",
      image: "/lovable-uploads/7cad4108-4dbc-4a78-aac1-1f743ffa3adc.png",
      features: ["8000+ Cycles", "280Ah Capacity", "3.2V Nominal", "Grade A+ Cells"],
      badges: ["Best Seller", "32V System"],
      whatsappMessage: "Hi, I'm interested in the ECOTECH LiFePO4 280Ah Battery. Can you tell me more about pricing and availability?"
    },
    {
      id: 2,
      name: "Smart Active Balancer BMS",
      tagline: "Intelligent Battery Management",
      price: "$299",
      originalPrice: "$399",
      image: "/lovable-uploads/e38e0e3e-29c1-467b-8f4e-c148fe99c32b.png",
      features: ["Smart Balancing", "Real-time Monitoring", "Mobile App", "Safety Protection"],
      badges: ["New Tech", "IoT Ready"],
      whatsappMessage: "Hi, I'm interested in the Smart Active Balancer BMS. Can you provide more details about the mobile app and features?"
    },
    {
      id: 3,
      name: "ECOTECH 8000 Cycle Battery Pack",
      tagline: "All Above 8000 Cycles Guaranteed",
      price: "$1,299",
      originalPrice: "$1,599",
      image: "/lovable-uploads/507c0c6f-65b0-45b4-b7d2-55b47a065013.png",
      features: ["8000+ Cycles", "310Ah High Capacity", "Stackable Design", "10-Year Warranty"],
      badges: ["Premium", "Extended Warranty"],
      whatsappMessage: "Hi, I'm interested in the ECOTECH 8000 Cycle Battery Pack. Can you tell me more about the warranty and installation?"
    },
    {
      id: 4,
      name: "Complete BMS Control System",
      tagline: "Professional Grade Management",
      price: "$599",
      originalPrice: "$799",
      image: "/lovable-uploads/0f680d8e-8d35-405b-b50e-3e9e04a9b469.png",
      features: ["Multi-Cell Monitoring", "Temperature Control", "Emergency Shutdown", "Data Logging"],
      badges: ["Professional", "Complete Kit"],
      whatsappMessage: "Hi, I'm interested in the Complete BMS Control System. Can you provide installation guidance and technical support?"
    },
    {
      id: 5,
      name: "Compact Smart BMS Unit",
      tagline: "Space-Saving Intelligence",
      price: "$199",
      originalPrice: "$279",
      image: "/lovable-uploads/5e2e0b87-45f8-4d33-bf3a-17373d5c5dde.png",
      features: ["Compact Design", "QR Code Setup", "Wireless Monitoring", "Auto-Balancing"],
      badges: ["Compact", "Easy Install"],
      whatsappMessage: "Hi, I'm interested in the Compact Smart BMS Unit. Can you tell me more about the wireless monitoring capabilities?"
    }
  ];

  const handleBuyNow = (productName: string, message: string) => {
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gradient mb-4 sm:mb-6">
            Premium Solar Solutions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our cutting-edge LiFePO4 batteries and smart BMS systems. 
            Built for the future, designed for efficiency.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id} 
              className="product-card group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.badges.map((badge) => (
                  <span 
                    key={badge}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Product Image */}
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-contain bg-muted/10 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Product Info */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-secondary font-medium text-sm sm:text-base">{product.tagline}</p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                      {i === 0 && <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />}
                      {i === 1 && <Battery className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />}
                      {i === 2 && <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />}
                      {i === 3 && <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />}
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl font-bold text-gradient">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-base sm:text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className="px-2 py-1 text-xs bg-secondary/20 text-secondary rounded-full font-semibold">
                      SAVE {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}%
                    </span>
                  )}
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => handleBuyNow(product.name, product.whatsappMessage)}
                  className="w-full btn-hero group text-sm sm:text-base py-2 sm:py-3"
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Buy Now
                  <span className="ml-auto opacity-75 group-hover:opacity-100 transition-opacity text-xs sm:text-sm">
                    WhatsApp
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
            Need a custom solution? Our experts are ready to help.
          </p>
          <a 
            href="https://wa.me/1234567890?text=Hi,%20I%20need%20a%20custom%20solar%20solution.%20Can%20we%20discuss%20my%20requirements?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-glow text-sm sm:text-base"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;