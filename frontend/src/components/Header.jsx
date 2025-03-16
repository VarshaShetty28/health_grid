import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  const images = [
    assets.doc1,  
    assets.doc2,  
    assets.doc3,  
    assets.doc14  
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row h-[500px] md:h-[550px]">
        
        {/* Left content section - slightly more than half */}
        <div className="w-full md:w-[65%] p-10 md:p-14 bg-primary flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Consult Trusted Doctors, Book Now!
          </h1>
          <p className="text-lg text-white mb-5 leading-relaxed">
            Sick of waiting weeks for an appointment? Get in line, but not too long!
            Your health can't wait, and neither should you!
          </p>
          <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>Browse Our Trusted Doctors and Take Care of Your Health!</p>
          </div>
         <div className='mt-5'>
         <a className='inline-flex hover:bg-orange-300 items-center gap-2 bg-white px-8 py-3 rounded-full text-black text-sm w-fit md:m-0 hover:scale-105 transition-all duration-300' href="">
                Book An Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
          </a>

         </div>
        </div>

        {/* Right image section - slightly less than half */}
        <div className="w-full md:w-[35%] relative h-[300px] md:h-full bg-primary">
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
          
          {/* Small Text Box */}
          <div className="absolute bottom-6 right-6 bg-white bg-opacity-90 p-4 rounded-md shadow-md z-20">
            <p className="text-sm font-medium text-gray-800">
              Fast, easy, and no more excuses!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
