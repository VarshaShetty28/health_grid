import React from 'react'

const Footer = () => {
    return (
        
        <footer className="bg-white-800 text-black py-6 mt-8 w-full">
            <hr className='borderLine'/>
        <div className="w-full flex justify-between items-center px-6">
          <p className="text-sm"> Copyright {new Date().getFullYear()}@ VarshaShetty- All Right Reserved.</p>
          <ul className="flex space-x-4 text-black">
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>
      </footer>
      );
}

export default Footer
