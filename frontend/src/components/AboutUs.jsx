import React from 'react';
import { User, Calendar, Network, Bell } from "lucide-react";
import aboutImage from '../assets/About_Us.avif';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          ABOUT <span className="text-blue-600">US</span>
        </h1>
      </div>

      {/* Main Content Section with Image */}
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 mb-12 sm:mb-16">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-4 sm:space-y-6">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Welcome to Health Grid, your trusted partner in managing your healthcare needs conveniently and efficiently.
            At Health Grid, we understand the challenges individuals face when it comes to scheduling doctor
            appointments and managing their health records.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Health Grid is committed to excellence in healthcare technology. We continuously strive to enhance our
            platform, integrating the latest advancements to improve user experience and deliver superior service.
            Whether you're booking your first appointment or managing ongoing care, Health Grid is here to support you
            every step of the way.
          </p>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our vision at Health Grid is to create a seamless healthcare experience for every user. We aim to bridge the
              gap between patients and healthcare providers, making it easier for you to access the care you need, when
              you need it.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full">
          <div className="rounded-lg overflow-hidden shadow-xl w-full">
            <img
              src={aboutImage}
              alt="Healthcare professionals"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl font-bold mb-6 sm:mb-8">
          WHY <span className="text-blue-600">CHOOSE US</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Efficiency Card */}
          <div className="border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-blue-600" size={24} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">EFFICIENCY:</h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base">
              Streamlined appointment scheduling that fits into your busy lifestyle.
            </p>
          </div>

          {/* Convenience Card */}
          <div className="border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Network className="text-blue-600" size={24} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">CONVENIENCE:</h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base">
              Access to a network of trusted healthcare professionals in your area.
            </p>
          </div>

          {/* Personalization Card */}
          <div className="border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Bell className="text-blue-600" size={24} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">PERSONALIZATION:</h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base">
              Tailored recommendations and reminders to help you stay on top of your health.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 sm:mb-8">
          OUR <span className="text-blue-600">TEAM</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-full w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 overflow-hidden">
              <div className="bg-blue-100 w-full h-full flex items-center justify-center">
                <User className="text-blue-600" size={48} />
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-bold">Dr. Sarah Johnson</h3>
            <p className="text-gray-600 text-sm">Chief Medical Officer</p>
            <a href="mailto:sarah.johnson@example.com" className="text-blue-600 hover:underline text-sm">Email Dr. Sarah</a>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-full w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 overflow-hidden">
              <div className="bg-blue-100 w-full h-full flex items-center justify-center">
                <User className="text-blue-600" size={48} />
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-bold">Michael Chen</h3>
            <p className="text-gray-600 text-sm">Lead Developer</p>
            <a href="mailto:michael.chen@example.com" className="text-blue-600 hover:underline text-sm">Email Michael</a>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="bg-gray-100 rounded-full w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 overflow-hidden">
              <div className="bg-blue-100 w-full h-full flex items-center justify-center">
                <User className="text-blue-600" size={48} />
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-bold">Emma Rodriguez</h3>
            <p className="text-gray-600 text-sm">Patient Experience Director</p>
            <a href="mailto:emma.rodriguez@example.com" className="text-blue-600 hover:underline text-sm">Email Emma</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
