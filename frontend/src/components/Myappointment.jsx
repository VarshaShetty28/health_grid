import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Myappointment = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className='pt-20 px-2 sm:px-4 max-w-4xl mx-auto'>
      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mb-6 mt-8'>My Appointments</h1>
      
      <div className='space-y-4'>
        {doctors.slice(0,4).map((item,index)=>(
          <div 
            className='bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300'
            key={index}>
            
            <div className='flex flex-col gap-4'>
              {/* Top Row - Doctor Image & Basic Info */}
              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <img
                    className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg bg-indigo-50 border border-gray-200'
                    src={item.image} 
                    alt={item.name} 
                  />
                </div>
                
                <div className='flex-1 min-w-0'>
                  <h3 className='text-lg sm:text-xl font-semibold text-gray-800 truncate'>{item.name}</h3>
                  <p className='text-blue-600 font-medium text-sm sm:text-base'>{item.speciality}</p>
                  
                  <div className='mt-2'>
                    <p className='text-gray-700 font-medium text-sm mb-1'>Address:</p>
                    <p className='text-xs sm:text-sm text-gray-600 leading-tight'>{item.address.line1}</p>
                    <p className='text-xs sm:text-sm text-gray-600 leading-tight'>{item.address.line2}</p>
                  </div>
                </div>
              </div>
              
              {/* Date & Time */}
              <div className='bg-blue-50 rounded-lg p-3 border border-blue-200'>
                <p className='text-sm'>
                  <span className='font-semibold text-blue-800'>Date & Time: </span>
                  <span className='text-blue-700'>1 June, 2025 | 2:30 PM</span>
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className='flex gap-2 sm:gap-3'>
                <button className='flex-1 bg-green-500 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 shadow-sm hover:shadow-md text-sm sm:text-base'>
                  Pay Online
                </button>
                <button className='flex-1 bg-red-500 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors duration-300 shadow-sm hover:shadow-md text-sm sm:text-base'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty State */}
      {doctors.length === 0 && (
        <div className='text-center py-12'>
          <div className='text-gray-400 text-6xl mb-4'>📅</div>
          <h3 className='text-xl font-semibold text-gray-600 mb-2'>No Appointments Yet</h3>
          <p className='text-gray-500'>Book your first appointment with our trusted doctors</p>
        </div>
      )}
    </div>
  )
}

export default Myappointment