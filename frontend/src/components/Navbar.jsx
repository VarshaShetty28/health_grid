import React, { useState } from 'react'
import {assets }from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
      const navigate = useNavigate(); //Hook  useNavigate is a React Router hook used to programmatically navigate between pages without using <Link> or <Redirect>
      //both state variables used to check whether the user is logged in or not 
      const [showMenu,setShowMenu] = useState(false)
      const [token,setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="HealthGrid Logo" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden'/>
        </NavLink>
        <NavLink to='/docters'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/4 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {/* this is ternary oprator */}
        {
          token 
          ? 
          <div className='flex items-center gap-2 cursor-pointer group relative '>
              <img className = 'w-8 rounded-full ' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='fixed top-0 right-36 pt-24 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appontment</p>
                    <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
          </div>
          :
          <button onClick={()=>navigate('/login')} className='custome-btn'>Create Account</button>
        }
        
      </div>
    </div>
  )
}

export default Navbar
