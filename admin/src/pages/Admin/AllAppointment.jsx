import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AllAppointment = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)
  const { calculateAge, formatSlotDate, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-8">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        All Appointments
      </h1>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg w-full">
        {/* Header */}
        <div className="grid grid-cols-[50px_minmax(150px,1.5fr)_80px_1.2fr_minmax(150px,1.5fr)_100px_120px] gap-4 bg-gray-100 px-4 py-3 font-semibold text-gray-700 text-xs sm:text-sm uppercase">
          <p className="text-center">#</p>
          <p>Patient</p>
          <p className="text-center">Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p className="text-center">Fees</p>
          <p className="text-center">Actions</p>
        </div>

        {/* Rows */}
        {appointments && appointments.length > 0 ? (
          appointments.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[50px_minmax(150px,1.5fr)_80px_1.2fr_minmax(150px,1.5fr)_100px_120px] gap-4 px-4 py-3 border-b text-xs sm:text-sm text-gray-700 items-center hover:bg-gray-50 transition"
            >
              {/* Serial Number */}
              <p className="text-center">{index + 1}</p>

              {/* Patient Info */}
              <div className="flex items-center gap-3 truncate">
                <img
                  src={item.userData.image}
                  alt={item.userData.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border"
                />
                <p className="font-medium truncate">{item.userData.name}</p>
              </div>

              {/* Age */}
              <p className="text-center">{calculateAge(item.userData.dob)} yrs</p>

              {/* Date & Time */}
              <p className="truncate">
                {formatSlotDate(item.slotDate)}, {item.slotTime}
              </p>

              {/* Doctor */}
              <div className="flex items-center gap-3 truncate">
                <img
                  src={item.docData.image}
                  alt={item.docData.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border"
                />
                <p className="font-medium truncate">{item.docData.name}</p>
              </div>

              {/* Fees */}
              <p className="text-center">{currency}{item.amount}</p>

              {/* Actions */}
              <div className="flex justify-center gap-2">
                  {item.cancelled ? (
                    <p className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition">
                      Cancelled
                    </p>
                  ) : item.isCompleted
                  ? <p className='bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition'>Completed</p>
                  : (
                    <button onClick={()=>cancelAppointment(item._id)} className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition">
                      Cancel
                    </button>
                  )}
              </div>
            </div>
          ))
        ) : (
          <p className="px-4 py-6 text-center text-gray-500">
            No appointments found.
          </p>
        )}
      </div>
    </div>
  )
}

export default AllAppointment
