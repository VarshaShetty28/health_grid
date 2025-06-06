import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Clock, Headset, AlertTriangle } from 'lucide-react';
import contactUs from '../assets/contact_us.jpg';
import HospitalMapEmbed from './HospitalMapEmbed';

const ContactUs = () => {
  return (
    <div className="max-w-6xl mx-auto py-2 font-sans px-4 md:px-0">
      {/* Header */}
      <div className="text-center text-3xl pt-10 text-gray-500 mb-14 font-medium">
        <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10 mb-20">
        {/* Left: Image */}
        <div className="md:w-2/5 lg:w-3/5 flex justify-center items-center">
          <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-md h-64 md:h-80">
            <img 
              src={contactUs} 
              alt="Healthcare professionals helping patient" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right: Contact Information */}
        <div className="md:w-3/5 lg:w-3/5 flex flex-col justify-center">
          {/* Office Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
              Our Office
            </h2>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-start">
                <MapPin className="mr-3 text-blue-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-lg">
                  123 Health Avenue<br />
                  Suite 450, San Francisco, CA 94103
                </span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-3 text-blue-600 flex-shrink-0" size={20} />
                <span className="text-lg">Tel: (415) 555-8732</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-3 text-blue-600 flex-shrink-0" size={20} />
                <span className="text-lg">Email: contact@healthgrid.com</span>
              </p>
            </div>
          </div>

          {/* Support Hours */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
              Support Hours
            </h2>

            <div className="text-gray-600 space-y-3 text-[16px] leading-relaxed">
              <p className="flex items-center gap-2">
                <Clock className="text-blue-600" size={18} />
                <span>Hospital: <strong>Open 24/7</strong></span>
              </p>

              <p className="flex items-center gap-2">
                <Headset className="text-blue-600" size={18} />
                <span>Support Desk: <strong>Mon–Sat</strong></span>
              </p>

              <p className="flex items-center gap-2">
                <AlertTriangle className="text-red-600" size={18} />
                <span><strong>Emergency:</strong> Always available</span>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="text-blue-600" size={18} />
                <span>Email us anytime for non-urgent queries</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mb-16 bg-gray-50 py-10 px-4 sm:px-6 md:px-10 rounded-xl shadow-sm max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
          Contact Our Medical Team
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-2">
                  Patient's Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="department" className="block text-md font-medium text-gray-700 mb-2">
                Department / Concern
              </label>
              <input
                type="text"
                id="department"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="e.g., Cardiology, General Consultation"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-2">
                Describe Your Concern or Symptoms
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="Provide brief details about your medical concern..."
                required
              ></textarea>
            </div>
            <div className="text-center pt-2">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-md"
                onClick={() => alert('Thank you. Our medical staff will reach out soon.')}
              >
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mb-16 w-full h-64 md:h-80 lg:h-96 rounded-xl shadow-md overflow-hidden px-4 md:px-0">
        <HospitalMapEmbed />
      </div>
    </div>
  );
};

export default ContactUs;
