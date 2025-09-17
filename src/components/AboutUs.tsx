import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Home, Facebook, Truck } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 bg-[hsl(var(--asphalt-grey))]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight">
                ABOUT US
              </h2>
              <div className="w-16 h-1 bg-primary"></div>
              
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                We are a trusted provider of composite and wooden decking and fencing solutions. Our skilled joiners are experts in all aspects of joinery work, ensuring that every project is completed to the highest standards. When it comes to decking and fencing, we believe in combining functionality with aesthetics to create outdoor spaces that enhance the beauty of your property while providing long-lasting and durable solutions.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/people/Clyde-Decking/100095203176792/?_rdr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-[hsl(var(--asphalt-grey))]" />
                </a>
                <a 
                  href="https://wa.me/447495295903" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" color="black" />
                </a>
              </div>
            </div>
          </div>

          {/* Company Logo/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="text-center">
              <div className="mb-6 mx-auto">
                <LazyImage
                  src="/cds - Edited.png"
                  alt="Clyde Decking Solutions Ltd logo"
                  className="w-80 h-80 object-contain brightness-0 invert"
                  fallbackSrc="/cds - Edited.png"
                />
              </div>
              <h3 className="font-display font-bold text-3xl text-white mb-2">
                CLYDE DECKING
              </h3>
              <p className="text-white/80 text-lg">
                Solutions Ltd
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;