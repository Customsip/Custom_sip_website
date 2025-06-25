
const About = () => {
  const values = [
    {
      title: "Quality First",
      description: "We never compromise on the quality of our bottles or printing. Every product meets international food safety standards.",
      icon: "⭐"
    },
    {
      title: "Customer Delight",
      description: "Your satisfaction is our priority. We go above and beyond to ensure every order exceeds expectations.",
      icon: "😊"
    },
    {
      title: "Innovation",
      description: "Constantly evolving our printing technology and bottle designs to offer you the latest and best options.",
      icon: "💡"
    },
    {
      title: "Sustainability",
      description: "Committed to eco-friendly practices and promoting reusable bottles to protect our environment.",
      icon: "🌱"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Design Consultation",
      description: "Share your vision with our design team. We help refine your ideas and create the perfect label design."
    },
    {
      step: "2",
      title: "Premium Sourcing",
      description: "We source only the highest quality, food-grade bottles from certified manufacturers."
    },
    {
      step: "3",
      title: "Precision Printing",
      description: "Using state-of-the-art printing technology, we apply your custom designs with vibrant colors and sharp details."
    },
    {
      step: "4",
      title: "Quality Check",
      description: "Every bottle undergoes rigorous quality inspection before packaging to ensure perfection."
    },
    {
      step: "5",
      title: "Swift Delivery",
      description: "We package your bottles securely and deliver them across South India within 3-5 business days."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      description: "15+ years in packaging industry",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Design Director",
      description: "Expert in visual branding",
      image: "https://images.unsplash.com/photo-1494790108755-2616b95b5d9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Arjun Patel",
      role: "Operations Head",
      description: "Ensures quality & timely delivery",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-customsip-blue via-customsip-darkblue to-customsip-blue py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-elegant text-4xl md:text-6xl font-bold text-white mb-6">
            About CustomSip
          </h1>
          <p className="font-modern text-xl text-gray-200 leading-relaxed">
            Crafting personalized experiences, one bottle at a time. Discover the story behind South India's most trusted custom water bottle brand.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-elegant text-3xl md:text-4xl font-bold text-customsip-darkblue mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-modern text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2018, CustomSip began with a simple vision: to make every occasion special with personalized water bottles that tell a story. What started as a small venture in Chennai has now grown to serve thousands of customers across South India.
                </p>
                <p>
                  We recognized that in a world of mass production, people craved something unique and personal. Whether it's a wedding celebration, a corporate event, or a restaurant's brand identity, we believe every bottle should reflect the personality and values of its owner.
                </p>
                <p>
                  Today, CustomSip stands as South India's premier destination for personalized water bottles, combining traditional Indian hospitality with modern printing technology to deliver exceptional products that exceed expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="CustomSip Story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-customsip-gold text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-customsip-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-elegant text-2xl font-bold text-customsip-darkblue mb-4">Our Vision</h3>
              <p className="font-modern text-gray-600 leading-relaxed">
                To become South India's most trusted and innovative personalized water bottle brand, making every occasion memorable with our custom-designed bottles that reflect individual stories and brand identities.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-elegant text-2xl font-bold text-customsip-darkblue mb-4">Our Mission</h3>
              <p className="font-modern text-gray-600 leading-relaxed">
                To provide premium quality, personalized water bottles with exceptional service, sustainable practices, and innovative designs that help our customers create lasting impressions at their special events and brand experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-3xl md:text-4xl font-bold text-customsip-darkblue mb-4">
              Our Values
            </h2>
            <p className="font-modern text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at CustomSip
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-elegant text-xl font-semibold text-customsip-darkblue mb-3">
                  {value.title}
                </h3>
                <p className="font-modern text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-customsip-cream to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-3xl md:text-4xl font-bold text-customsip-darkblue mb-4">
              Our Process
            </h2>
            <p className="font-modern text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to delivery, see how we bring your custom bottles to life
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="font-elegant text-xl font-semibold text-customsip-darkblue mb-3">
                      {step.title}
                    </h3>
                    <p className="font-modern text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-customsip-blue to-customsip-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1 hidden md:block">
                  {index % 2 === 0 && <div></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-elegant text-3xl md:text-4xl font-bold text-customsip-darkblue mb-4">
              Meet Our Team
            </h2>
            <p className="font-modern text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind CustomSip's success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-customsip-gold"
                />
                <h3 className="font-elegant text-xl font-semibold text-customsip-darkblue mb-2">
                  {member.name}
                </h3>
                <p className="font-medium text-customsip-gold mb-2">{member.role}</p>
                <p className="font-modern text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-customsip-blue to-customsip-darkblue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-elegant text-3xl md:text-4xl font-bold text-white mb-6">
            Join the CustomSip Family
          </h2>
          <p className="font-modern text-xl text-gray-200 mb-8">
            Ready to create something amazing together? Let's bring your vision to life with our personalized water bottles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/factory'}
              className="bg-gradient-to-r from-customsip-gold to-customsip-lightgold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-customsip-blue transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
