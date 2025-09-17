import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Facebook } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/gallery/deck1.jpg",
      alt: "Professional decking installation - composite decking project",
      title: "Composite Decking",
      location: "Scotland"
    },
    {
      src: "/gallery/deck2.jpg",
      alt: "High-quality wooden decking installation",
      title: "Wooden Decking",
      location: "Scotland"
    },
    {
      src: "/gallery/deck3.jpg",
      alt: "Custom decking design with modern finish",
      title: "Custom Decking",
      location: "Scotland"
    },
    {
      src: "/gallery/Fence1.jpg",
      alt: "Professional fencing installation work",
      title: "Fencing Project",
      location: "Scotland"
    },
    {
      src: "/gallery/imgi_4_gallery 7.jpg",
      alt: "Professional decking installation project",
      title: "Decking Project",
      location: "Scotland"
    },
    {
      src: "/gallery/imgi_5_gallery 6.jpg", 
      alt: "Expert fencing installation work",
      title: "Fencing Project",
      location: "Scotland"
    },
    {
      src: "/gallery/imgi_6_gallery 4.jpg",
      alt: "Custom decking and outdoor structure",
      title: "Outdoor Structure", 
      location: "Scotland"
    },
    {
      src: "/gallery/imgi_7_gallery 2.jpg",
      alt: "Professional decking installation",
      title: "Decking Installation",
      location: "Scotland"
    },
    {
      src: "/gallery/imgi_8_gallery 3.jpg",
      alt: "High-quality decking and fencing work",
      title: "Complete Project",
      location: "Scotland"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-16">
          <div className="flex items-center mb-6">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mr-6">
              OUR <span className="text-primary">WORK</span> GALLERY
            </h2>
            <div className="flex-1 h-px bg-[hsl(var(--asphalt-grey))]"></div>
          </div>
          <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl">
            Take a look at some of our recent decking and fencing projects across Scotland
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.facebook.com/people/Clyde-Decking/100095203176792/?_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Facebook className="w-6 h-6" />
            View more on Facebook
          </a>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4 text-white">
                <h3 className="font-semibold text-xl">{galleryImages[selectedImage].title}</h3>
                <p className="text-white/80">{galleryImages[selectedImage].location}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;