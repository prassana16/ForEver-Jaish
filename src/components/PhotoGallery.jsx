import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import '../assets/css/Banner.css'

const galleryImages = [
  { src: 'src/assets/image/pj8.jpeg', alt: 'Trip to the mountains' },
  { src: 'src/assets/image/pj9.jpeg', alt: 'Celebrating our anniversary' },
  { src: 'src/assets/image/pj10.jpeg', alt: 'Day at the beach' },
  { src: 'src/assets/image/pj11.jpeg', alt: 'City lights date night' },
  { src: 'src/assets/image/pj7.jpeg', alt: 'Trip to the mountains' },
  { src: 'src/assets/image/pj6.jpeg', alt: 'Celebrating our anniversary' },
  { src: 'src/assets/image/pj14.jpeg', alt: 'Day at the beach' },
  { src: 'src/assets/image/pj13.jpeg', alt: 'City lights date night' },
  { src: 'src/assets/image/pj1.jpeg', alt: 'Trip to the mountains' },
  { src: 'src/assets/image/pj2.jpeg', alt: 'Celebrating our anniversary' },
  { src: 'src/assets/image/pj3.jpeg', alt: 'Day at the beach' },
  { src: 'src/assets/image/pj4.jpeg', alt: 'City lights date night' },
  // Add more images as needed
];

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage + galleryImages.length - 1) % galleryImages.length);
  };

  return (
    <div className="photo-gallery bg-gray-50 py-10 px-4 md:px-16">
      <h2 className="text-4xl font-serif font-bold text-center text-[#743c1f] mb-8">Our Moments Together</h2>
      <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={galleryImages[currentImage].src}
          nextSrc={galleryImages[(currentImage + 1) % galleryImages.length].src}
          prevSrc={galleryImages[(currentImage + galleryImages.length - 1) % galleryImages.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={prevImage}
          onMoveNextRequest={nextImage}
        />
      )}
    </div>
  );
};

export default PhotoGallery;
