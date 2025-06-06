import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  const images = [assets.doc1, assets.doc2, assets.doc3, assets.doc14];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className=" mt-32 relative w-full max-w-[1200px] mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row h-auto lg:min-h-[450px] gap-x-0">
        
        {/* Left content section */}
        <div className="w-full lg:w-[65%] p-6 sm:p-8 lg:p-10 bg-primary flex flex-col justify-center">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
            Consult Trusted Doctors, Book Now!
          </h1>
          <p className="text-sm sm:text-base text-white mb-4 sm:mb-5 leading-relaxed">
            Sick of waiting weeks for an appointment? Get in line, but not too long!
            Your health can't wait, and neither should you!
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-3 text-white text-sm font-light'>
            <img className='w-20 sm:w-24' src={assets.group_profiles} alt="" />
            <p className="text-center sm:text-left px-2 sm:px-0">Browse Our Trusted Doctors and Take Care of Your Health!</p>
          </div>
          <div className='mt-4 sm:mt-5'>
            <a className='inline-flex hover:bg-orange-300 items-center gap-2 bg-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-black text-sm w-fit hover:scale-105 transition-all duration-300' href="#speciality">
              Book An Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
            </a>
          </div>
        </div>

        {/* Right Image Slideshow - Only on large screens */}
        <div className="hidden lg:block w-full lg:w-[35%] relative min-h-[450px] bg-primary rounded-r-lg overflow-hidden shadow-lg">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Medical service ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0'
              }`}
            />
          ))}

          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none z-20"></div>

          {/* Floating Text Box */}
          <div className="absolute bottom-5 right-5 bg-white bg-opacity-90 p-3 rounded-md shadow-md z-30 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg max-w-[90%]">
            <p className="text-sm font-medium text-orange-400">
              Fast, easy, and no more excuses!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
