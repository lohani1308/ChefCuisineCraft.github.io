import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file for styling
import Chef1 from '../Images/chef4.jpg';
import Chef2 from '../Images/chef5.jpg';
import Chef3 from '../Images/chef6.jpeg';

function Carousel() {
  const images = [
    Chef1,Chef2,Chef3
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevImage}>&#8249;</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="carousel-image" />
      <button className="carousel-button next" onClick={nextImage}>&#8250;</button>
    </div>
  );
}

export default Carousel;
