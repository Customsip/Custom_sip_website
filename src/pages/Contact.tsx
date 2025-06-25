import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleWhatsAppClick = () => {
    const message = `Hi CustomSip! I'm interested in your personalized water bottles.

Name: ${formData.name || "Not provided"}
Email: ${formData.email || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Message: ${formData.message || "I'd like to know more about your services."}

Please help me with my requirements.`;

    const phoneNumber = "+919381626193";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const contactInfo = [
    {
      title: "Phone",
      value: "+91 93816 26193",
      icon: "📞",
      link: "tel:+919381626193"
    },
    {
      title: "Email",
      value: "customsipbottle@gmail.com",
      icon: "✉️",
      link: "mailto:customsipbottle@gmail.com"
    },
    {
      title: "Address",
      value: "123 Industrial Area, Chennai, Tamil Nadu 600001",
      icon: "📍",
      link: "https://maps.google.com"
    },
    {
      title: "Hours",
      value: "Mon-Sat: 9AM-6PM",
      icon: "🕐",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-customsip-cream to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-customsip-blue to-customsip-darkblue py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-elegant text-4xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="font-modern text-xl text-gray-200 leading-relaxed">
            Ready to create your custom water bottles? We're here to help bring your vision to life. 
            Contact us today for a personalized consultation.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-elegant text-2xl text-customsip-darkblue">
                  Send Us a Message
                </CardTitle>
                <p className="font-modern text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements, event details, quantity needed, etc."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-customsip-blue to-customsip-darkblue text-white py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Send Message
                    </Button>

                    <div className="text-center">
                      <p className="text-gray-500 mb-3">Or contact us instantly via</p>
                      <Button
                        type="button"
                        onClick={handleWhatsAppClick}
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold transition-all duration-300"
                      >
                        📱 WhatsApp Now
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h3 className="font-elegant text-lg font-semibold text-customsip-darkblue">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="font-modern text-gray-600 hover:text-customsip-blue transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-modern text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Response Promise */}
            <Card className="shadow-lg bg-gradient-to-r from-customsip-blue to-customsip-darkblue text-white">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-elegant text-xl font-semibold mb-2">
                  Quick Response Guarantee
                </h3>
                <p className="font-modern">
                  We respond to all inquiries within 2 hours during business hours. 
                  For urgent orders, WhatsApp us for instant support!
                </p>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-elegant text-xl text-customsip-darkblue">
                  Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 font-modern text-gray-600">
                  <div>• Chennai</div>
                  <div>• Bangalore</div>
                  <div>• Hyderabad</div>
                  <div>• Coimbatore</div>
                  <div>• Kochi</div>
                  <div>• Madurai</div>
                  <div>• Tiruchy</div>
                  <div>• Salem</div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  *Delivery available across South India. Contact us for other locations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="font-elegant text-3xl font-bold text-customsip-darkblue text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-elegant text-lg font-semibold text-customsip-darkblue mb-3">
                  What's the minimum order quantity?
                </h3>
                <p className="font-modern text-gray-600">
                  Our minimum order is 50 bottles. For smaller quantities, please contact us for special arrangements.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-elegant text-lg font-semibold text-customsip-darkblue mb-3">
                  How long does delivery take?
                </h3>
                <p className="font-modern text-gray-600">
                  Standard delivery is 3-5 business days. Rush orders can be completed in 24-48 hours with additional charges.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-elegant text-lg font-semibold text-customsip-darkblue mb-3">
                  Can I see a sample before ordering?
                </h3>
                <p className="font-modern text-gray-600">
                  Yes! We provide digital proofs for approval. Physical samples are available for large orders (500+ bottles).
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-elegant text-lg font-semibold text-customsip-darkblue mb-3">
                  What file formats do you accept?
                </h3>
                <p className="font-modern text-gray-600">
                  We accept PNG, JPG, PDF, and AI files. High resolution (300 DPI) images work best for printing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
