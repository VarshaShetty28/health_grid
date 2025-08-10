import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router-dom';
import home_icon from '../assets/home_icon.svg';
import appointment_icon from '../assets/appointment_icon.svg';
import doctor_icon from '../assets/people_icon.svg';
import { DoctersContext } from '../context/DoctersContext';

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctersContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 border-gray-300 rounded-md hover:bg-gray-100 transition"
        aria-label="Toggle sidebar"
      >
        {isMobileMenuOpen ? (
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-full lg:w-72 max-w-[18rem]
           border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Admin Panel Links */}
        {aToken && (
          <nav className="h-full flex flex-col px-6 py-8" aria-label="Sidebar Navigation">
            <h2 className="text-xl font-semibold text-blue-700 mb-8">Admin Panel</h2>
            <ul className="space-y-3">
              <SidebarLink to="/admin-dashboard" icon={home_icon} label="Dashboard" closeMobileMenu={closeMobileMenu} />
              <SidebarLink to="/all-appointments" icon={appointment_icon} label="Appointments" closeMobileMenu={closeMobileMenu} />
              <SidebarLink to="/add-doctors" icon={doctor_icon} label="Add Doctor" closeMobileMenu={closeMobileMenu} />
              <SidebarLink to="/doctor-list" icon={doctor_icon} label="Doctors List" closeMobileMenu={closeMobileMenu} />
            </ul>
          </nav>
        )}

        {/* Doctor Panel Links */}
        {dToken && !aToken && (
          <nav className="h-full flex flex-col px-6 py-8" aria-label="Sidebar Navigation">
            <h2 className="text-xl font-semibold text-blue-700 mb-8">Doctor Panel</h2>
            <ul className="space-y-3">
              <SidebarLink to="/doctor-dashboard" icon={home_icon} label="Dashboard" closeMobileMenu={closeMobileMenu} />
              <SidebarLink to="/doctor-appointments" icon={appointment_icon} label="My Appointments" closeMobileMenu={closeMobileMenu} />
              <SidebarLink to="/doctor-profile" icon={doctor_icon} label="Profile" closeMobileMenu={closeMobileMenu} />
            </ul>
          </nav>
        )}
      </aside>
    </>
  );
};

// Reusable Link Component
const SidebarLink = ({ to, icon, label, closeMobileMenu }) => (
  <li>
    <NavLink
      to={to}
      onClick={closeMobileMenu}
      className={({ isActive }) =>
        `flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
          isActive
            ? 'bg-blue-100 text-blue-600 font-semibold'
            : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100'
        }`
      }
    >
      <img
        src={icon}
        alt={label}
        className="w-5 h-5 group-hover:scale-110 transition-transform"
      />
      <span>{label}</span>
    </NavLink>
  </li>
);

export default Sidebar;
