import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackPhoneCall, trackMessenger, trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const serviceOptions = [
    'Composite Decking',
    'Wooden Decking', 
    'Fencing Installation',
    'Fence Repairs',
    'Garden Joinery Work',
    'Outdoor Structures',
    'Decking Maintenance',
    'Custom Decking Solutions'
  ];


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xgvljren', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: 'Free Quote Request from Website'
        }),
      });

      if (response.ok) {
        // Track successful form submission
        trackQuoteRequest('contact_form', [formData.service]);
        trackFormInteraction('quote_form', 'submit_success');
        
        toast({
          title: "Quote request sent!",
          description: "Thank you for your request. We'll respond within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      trackFormInteraction('quote_form', 'submit_error');
      toast({
        title: "Error sending request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleCallClick = () => {
    trackPhoneCall('hero_section');
    window.location.href = "tel:+447495295903";
  };

  const handleMessengerClick = () => {
    trackMessenger('hero_section');
    window.open("https://wa.me/447495295903", "_blank");
  };

  return (
    <section id="hero" className="relative bg-background min-h-screen flex items-center py-20 px-4 pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="/gallery/Fence1.jpg"
          alt="Professional decking and fencing background"
          className="w-full h-full object-cover"
          fallbackSrc="/gallery/Fence1.jpg"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              
              <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
                Professional decking & fencing across Scotland
              </h1>
              
              <p className="text-xl text-white/90 font-medium max-w-lg leading-relaxed drop-shadow-md">
                Trusted provider of composite and wooden decking and fencing solutions. Our skilled joiners are experts in all aspects of joinery work, ensuring every project is completed to the highest standards. Creating outdoor spaces that enhance beauty and provide long-lasting durability.
              </p>
            </div>



            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/20">
              <Button 
                onClick={handleCallClick}
                className="flex items-center gap-3 bg-white hover:bg-gray-100 text-primary rounded-xl px-8 py-5 justify-start text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                Call: 07495 295903
              </Button>
              <Button 
                onClick={handleMessengerClick}
                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white rounded-xl px-8 py-5 justify-start text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <WhatsAppIcon className="w-8 h-8" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-service bg-black text-white border-white/20" id="contact-form">
            <div className="text-center mb-6">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-2">
                GET A FREE QUOTE.
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white font-semibold">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white font-semibold">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-white font-semibold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="mt-2 rounded-xl border-2"
                />
              </div>


              <div>
                <Label htmlFor="message" className="text-white font-semibold">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us about your decking and fencing needs..."
                  className="mt-2 rounded-xl border-2 min-h-[100px]"
                />
              </div>

           <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200">
             SEND
           </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;