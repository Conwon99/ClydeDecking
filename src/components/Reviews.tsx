import { Star, ArrowRight } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Glasgow",
      rating: 5,
      text: "Clyde Decking Solutions were absolutely brilliant! They installed our composite decking and the quality is outstanding. Professional, reliable, and great value for money. Would definitely use again and recommend to anyone needing decking work.",
      service: "Composite Decking"
    },
    {
      name: "Mike Thompson",
      location: "Edinburgh",
      rating: 5,
      text: "Excellent fencing installation! The team delivered on time and the workmanship is superb. Great communication throughout. Will definitely use again for future projects.",
      service: "Fencing Installation"
    },
    {
      name: "Lisa Brown",
      location: "Aberdeen",
      rating: 5,
      text: "The team helped repair our damaged fence and did an excellent job. Very professional and the quality of work is outstanding. Very reasonable price and highly recommend!",
      service: "Fence Repairs"
    },
    {
      name: "David Wilson",
      location: "Dundee",
      rating: 5,
      text: "Fantastic service! They built our custom decking and the work is exceptional. Very professional and delivered exactly what we wanted. Will definitely use again for future projects.",
      service: "Decking Installation"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-accent fill-current" : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 px-4 relative overflow-hidden" style={{ backgroundImage: 'url(/backgroundcds.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            {/* Dark banner */}
            <div className="bg-[hsl(var(--asphalt-grey))] text-white px-6 py-3 rounded-lg mb-4 inline-block">
              <p className="font-semibold text-sm">DISCOVER WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US</p>
            </div>
            
            {/* Main title */}
            <h2 className="font-display font-bold text-6xl lg:text-7xl text-white mb-4">
              REVIEWS
            </h2>
          </div>
          
          {/* Contact button */}
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            CONTACT US NOW <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {renderStars(review.rating)}
              </div>
              
              <blockquote className="text-gray-700 mb-4 leading-relaxed text-sm">
                "{review.text}"
              </blockquote>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-base">
                  {review.name}
                </h4>
                {/* Google logo placeholder */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span className="text-xs text-gray-500">Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Reviews;