import { Shield, MapPin, Star, Phone } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: MapPin,
      text: "Scotland Central Belt"
    },
    {
      icon: Shield,
      text: "Expert Joiners"
    },
    {
      icon: Phone,
      text: "Free Quotes"
    },
    {
      icon: Star,
      text: "5★ Recommended"
    }
  ];

  return (
    <section className="py-8 bg-green-600">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <item.icon className="w-6 h-6" />
              <span className="font-semibold text-lg whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;