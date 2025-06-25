
const Gallery = () => {
  const galleryItems = [
    {
      category: "Weddings",
      items: [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Royal Wedding Collection",
          description: "Elegant gold and cream themed bottles for a traditional Indian wedding"
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Destination Wedding",
          description: "Custom bottles for a beautiful beach wedding celebration"
        },
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Mehendi Ceremony",
          description: "Colorful bottles for pre-wedding festivities"
        }
      ]
    },
    {
      category: "Corporate Events",
      items: [
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Tech Conference 2024",
          description: "Professional branding for technology summit attendees"
        },
        {
          id: 5,
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Annual Corporate Meet",
          description: "Branded bottles for company annual general meeting"
        },
        {
          id: 6,
          image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Product Launch Event",
          description: "Exclusive bottles for new product unveiling ceremony"
        }
      ]
    },
    {
      category: "Restaurant Displays",
      items: [
        {
          id: 7,
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Fine Dining Restaurant",
          description: "Premium bottles with restaurant branding for exclusive dining"
        },
        {
          id: 8,
          image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Heritage Restaurant",
          description: "Traditional design bottles for authentic Indian cuisine restaurant"
        },
        {
          id: 9,
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: "Café Collection",
          description: "Trendy bottles for modern café and coffee shop chains"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-customsip-blue to-customsip-darkblue py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-elegant text-4xl md:text-6xl font-bold text-white mb-6">
            Our Gallery
          </h1>
          <p className="font-modern text-xl text-gray-200 leading-relaxed">
            Discover the endless possibilities with CustomSip. From intimate weddings to grand corporate events, 
            see how we bring your vision to life with personalized water bottles.
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {galleryItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="font-elegant text-3xl md:text-4xl font-bold text-customsip-darkblue mb-4">
                {section.category}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-customsip-gold to-customsip-lightgold mx-auto rounded-full"></div>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-elegant text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="font-modern text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.description}
                    </p>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-customsip-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {section.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-customsip-cream to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-customsip-blue">1000+</div>
              <div className="text-gray-600 font-modern">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-customsip-blue">500+</div>
              <div className="text-gray-600 font-modern">Weddings Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-customsip-blue">200+</div>
              <div className="text-gray-600 font-modern">Corporate Events</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-customsip-blue">50+</div>
              <div className="text-gray-600 font-modern">Restaurant Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-customsip-darkblue py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-elegant text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="font-modern text-xl text-gray-200 mb-8">
            Join our gallery of satisfied customers and create personalized bottles that tell your unique story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/factory'}
              className="bg-gradient-to-r from-customsip-gold to-customsip-lightgold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Design
            </button>
            <button
              onClick={() => {
                const message = "Hi CustomSip! I saw your amazing gallery and I'm interested in creating custom bottles for my event. Can you help me?";
                const phoneNumber = "+919876543210";
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(url, "_blank");
              }}
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
