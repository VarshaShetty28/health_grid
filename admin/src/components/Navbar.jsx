import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import Logo from '../assets/Logo_WithoutBg.png';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { DoctersContext } from '../context/DoctersContext';

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctersContext); 
  const navigate = useNavigate();

  const logout = () => {
    if (aToken) {
      setAToken('');
      localStorage.removeItem('aToken');
    }
    if (dToken) {
      setDToken('');
      localStorage.removeItem('dToken');
    }
    navigate('/');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300 px-4 py-2 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">

        {/* Left: Logo */}
        <div className="flex w-full justify-between items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-36 sm:w-40 object-contain cursor-pointer ml-9"
            onClick={() => navigate('/')}
          />

          {/* Mobile view: role + logout icon */}
          <div className="flex md:hidden items-center gap-2">
            <span className="text-xs text-gray-600 border px-2 py-1 rounded-full border-gray-300 whitespace-nowrap">
              {aToken ? 'Admin' : 'Doctor'}
            </span>
            <FiLogOut
              onClick={logout}
              className="text-red-500 text-lg cursor-pointer hover:text-red-600 transition"
              title="Logout"
            />
          </div>
        </div>

        {/* Desktop view: role + logout button */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs text-gray-600 border px-3 py-1 rounded-full border-gray-300 whitespace-nowrap">
            {aToken ? 'Admin' : 'Doctor'}
          </span>
          <button
            onClick={logout}
            className="text-sm bg-red-500 text-white px-4 py-1.5 rounded-full hover:bg-red-600 transition"
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
