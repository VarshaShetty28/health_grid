import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 w-full border-gray-200">
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-center md:text-left">
        
        {/* Copyright Text */}
        <p>© {new Date().getFullYear()} Varsha Shetty – All Rights Reserved.</p>
        
        {/* Footer Links */}
        <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <li>
            <a href="/about" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
          </li>
          <li>
            <a href="/about" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</a>
          </li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;
