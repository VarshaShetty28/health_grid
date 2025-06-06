import React from 'react'
import { useNavigate } from "react-router-dom";
import { assets } from '../assets/assets'

const Banner = () => {
   const navigate = useNavigate();
  return (
   <div>
      <div className="w-full flex flex-col items-center justify-center px-6 gap-6 text-center">
        
        {/* Call to Action */}
        <div className="max-w-xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Ready to Take the First Step to Better Health?</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-5">
            Join our community and get access to 100+ trusted doctors and instant appointments.
          </p>
          <button
            onClick={() => {
              navigate('/login');
              scrollTo(0, 0);
            }}
            className="bg-primary text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-orange-500 hover:scale-105 transition-all duration-300"
          >
            Create Account
          </button>
        </div>

        {/* Divider */}
        <hr className="w-full border-t border-gray-300 my-1" />
      </div>
   </div>
  )
}

export default Banner
