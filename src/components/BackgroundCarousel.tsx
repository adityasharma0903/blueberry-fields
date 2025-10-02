import React, { useState, useEffect } from 'react';

// Import all the specified images
import activity from '@/assets/activity.jpg';
import annualDay from '@/assets/annual-day.jpg';
import celeberate from '@/assets/celeberate.jpg';
import dance from '@/assets/dance.jpg';
import dandia from '@/assets/dandia.jpg';
import girlchild from '@/assets/girlchild.jpg';
import independence from '@/assets/independence.jpg';
import independence2 from '@/assets/independence2.jpg';
import logo from '@/assets/logo.jpg';
import medical from '@/assets/medical.jpg';
import school from '@/assets/school.jpg';
import skating from '@/assets/skating.jpg';

const BackgroundCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    activity,
    annualDay,
    celeberate,
    dance,
    dandia,
    girlchild,
    independence,
    independence2,
    logo,
    medical,
    school,
    skating,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-30' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Background slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundCarousel;
