import { Link } from "react-router-dom";

const Home = () => {
  const whoWeServe = [
    { emoji: "💒", title: "Weddings", description: "Make your special day memorable" },
    { emoji: "🏢", title: "Corporate Events", description: "Professional branded bottles" },
    { emoji: "🏬", title: "Retail Stores", description: "Custom bottles for your customers" },
    { emoji: "🎉", title: "Special Events", description: "Celebrations made unique" },
    { emoji: "🚚", title: "Food Trucks & Restaurants", description: "Brand your beverages" },
    { emoji: "🎓", title: "Schools & Colleges", description: "Educational events & functions" },
    { emoji: "🧘", title: "Gyms & Wellness", description: "Health-focused branding" }
  ];

  const whyChooseUs = [
    {
      icon: "🚀",
      title: "Fast Local Delivery",
      description: "Quick delivery across South India"
    },
    {
      icon: "🎨",
      title: "Free Label Design Support",
      description: "Professional design assistance included"
    },
    {
      icon: "📦",
      title: "Low Minimum Order (100 Bottles)",
      description: "Perfect for small to large events"
    },
    {
      icon: "🌱",
      title: "Eco-Friendly Options",
      description: "Sustainable packaging choices"
    }
  ];

  const testimonials = [
    {
      quote: "Made our wedding stand out!",
      author: "Priya",
      location: "Udaipur"
    },
    {
      quote: "Best return gift we ever used.",
      author: "Karan",
      location: "Bangalore"
    },
    {
      quote: "Professional service, amazing quality!",
      author: "Meera",
      location: "Chennai"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = "Hi CustomSip! I'm interested in your personalized water bottles. Can you help me with my order?";
    const phoneNumber = "+919381626193";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-customsip-blue/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="font-elegant text-5xl md:text-7xl font-bold text-customsip-darkblue mb-6 leading-tight">
                Your Brand.
                <span className="text-customsip-gold block">Our Bottle.</span>
              </h1>
              <p className="font-modern text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Affordable, personalized bottled water for your big day or brand. 
                Make every sip memorable with custom labels that tell your story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/factory"
                  className="bg-gradient-to-r from-customsip-blue to-customsip-darkblue text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Start Customizing
                </Link>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                  </svg>
                  Order on WhatsApp
                </button>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Custom Water Bottles"
                  className="w-full max-w-md h-96 object-cover rounded-3xl shadow-2xl animate-float"
                />
                <div className="absolute -top-4 -right-4 bg-customsip-gold text-white px-4 py-2 rounded-full font-semibold text-sm">
                  Premium Quality
                </div>
                <div className="absolute -bottom-4 -left-4 bg-customsip-blue text-white px-4 py-2 rounded-full font-semibold text-sm">
                  100% Custom
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-4xl md:text-5xl font-bold text-customsip-darkblue mb-4">
              Who We Serve
            </h2>
            <p className="font-modern text-xl text-gray-600 max-w-2xl mx-auto">
              From intimate celebrations to grand events, we bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {whoWeServe.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">{service.emoji}</div>
                <h3 className="font-elegant text-lg font-semibold text-customsip-darkblue mb-2">
                  {service.title}
                </h3>
                <p className="font-modern text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-4xl md:text-5xl font-bold text-customsip-darkblue mb-4">
              Why Choose CustomSip?
            </h2>
            <p className="font-modern text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver excellence with every bottle, ensuring your brand stands out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-customsip-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-customsip-blue/20 transition-colors duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-elegant text-xl font-semibold text-customsip-darkblue mb-3">
                  {feature.title}
                </h3>
                <p className="font-modern text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-customsip-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-4xl md:text-5xl font-bold text-customsip-darkblue mb-4">
              Our Work Speaks
            </h2>
            <p className="font-modern text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've brought brands to life with custom water bottles
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <img
                  src={image}
                  alt={`Gallery Preview ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-customsip-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-customsip-darkblue transition-all duration-300 transform hover:scale-105"
            >
              See Full Gallery
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-4xl md:text-5xl font-bold text-customsip-darkblue mb-4">
              What Our Customers Say
            </h2>
            <p className="font-modern text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied customers across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-customsip-gold text-4xl mb-4">"</div>
                <p className="font-modern text-lg text-gray-700 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="border-t pt-4">
                  <p className="font-elegant font-semibold text-customsip-darkblue">
                    {testimonial.author}
                  </p>
                  <p className="font-modern text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gradient-to-r from-customsip-blue to-customsip-darkblue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-elegant text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to customize your bottle?
          </h2>
          <p className="font-modern text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who chose CustomSip for their special moments
          </p>
          <Link
            to="/factory"
            className="inline-flex items-center gap-2 bg-customsip-gold text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-customsip-lightgold transition-all duration-300 transform hover:scale-105"
          >
            Start Customizing Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
