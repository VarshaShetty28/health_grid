import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-blue-600 font-semibold py-1' : 'py-1';

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white'>
      <div className='flex items-center justify-between text-sm py-4 px-4 border-b border-b-gray-400'>
        <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="HealthGrid Logo" />

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-start gap-5 font-medium'>
          <NavLink to='/' className={navLinkClass}>
            <li>HOME</li>
          </NavLink>
          <NavLink to='/docters' className={navLinkClass}>
            <li>ALL DOCTORS</li>
          </NavLink>
          <NavLink to='/about' className={navLinkClass}>
            <li>ABOUT</li>
          </NavLink>
          <NavLink to='/contact' className={navLinkClass}>
            <li>CONTACT</li>
          </NavLink>
        </ul>

        {/* Right Side */}
        <div className='flex items-center gap-4'>
          {
            token ?
              <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='fixed top-0 right-36 pt-24 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                  <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointment</p>
                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                  </div>
                </div>
              </div>
              :
              <button onClick={() => navigate('/login')} className='custome-btn'>Create Account</button>
          }

          {/* Hamburger for Mobile */}
          <img
            onClick={() => setShowMenu(!showMenu)}
            className='w-7 md:hidden cursor-pointer p-1 border border-gray-300 rounded-md'
            src={assets.menu_icon} alt="menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {
        showMenu && (
          <ul className='md:hidden absolute left-4 right-4 mx-auto mt-2 bg-white rounded-lg shadow-lg p-5 flex flex-col gap-4 font-medium'>
            <NavLink to='/' className={navLinkClass} onClick={() => setShowMenu(false)}>
              <li>HOME</li>
            </NavLink>
            <NavLink to='/docters' className={navLinkClass} onClick={() => setShowMenu(false)}>
              <li>ALL DOCTORS</li>
            </NavLink>
            <NavLink to='/about' className={navLinkClass} onClick={() => setShowMenu(false)}>
              <li>ABOUT</li>
            </NavLink>
            <NavLink to='/contact' className={navLinkClass} onClick={() => setShowMenu(false)}>
              <li>CONTACT</li>
            </NavLink>
          </ul>
        )
      }
    </div>
  )
}

export default Navbar;