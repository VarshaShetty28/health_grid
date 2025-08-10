
// Fixed DoctorAppointment component
import React, { useContext, useEffect } from 'react'
import { DoctersContext } from '../../context/DoctersContext'
import { AppContext } from '../../context/AppContext'

const DoctorAppointment = () => {
  const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctersContext) // Fixed: correct function name
  const { calculateAge, formatSlotDate, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getAppointments() // Fixed: correct function name
    }
  }, [dToken])

  console.log("Doctor token in appointments:", dToken);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen w-full">
      <p className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">All Appointments</p>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto w-full">
        {/* Header Row */}
        <div className="grid grid-cols-7 min-w-[720px] gap-4 bg-gray-100 p-4 text-gray-700 font-semibold text-sm border-b">
          <p className="flex items-center justify-center">#</p>
          <p>Patient</p>
          <p className="text-center">Payment</p>
          <p className="text-center">Age</p>
          <p className="text-center">Date & Time</p>
          <p className="text-center">Fees</p>
          <p className="flex items-center justify-center">Action</p>
        </div>

        {appointments.length > 0 ? (
          appointments.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-7 min-w-[720px] gap-4 items-center border-b border-gray-200 p-4 text-gray-700 text-sm"
            >
              <p className="flex items-center justify-center font-medium">{index + 1}</p>

              <div className="flex items-center space-x-3">
                <img
                  src={item?.userData?.image || '/placeholder-avatar.png'}
                  alt={item?.userData?.name || 'Patient'}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="truncate">
                  <p className="font-medium truncate">{item?.userData?.name || 'Unknown'}</p>
                  <p className="text-xs text-gray-500 truncate">{item?.userData?.email || ''}</p>
                </div>
              </div>

              <p className="text-center">
                <span className="inline-block px-3 py-1 border rounded-full text-sm font-medium border-gray-400 text-gray-700 bg-gray-100">
                  {item?.payment ? 'Online' : 'Cash'}
                </span>
              </p>
              
              <p className="text-center">{calculateAge(item?.userData?.dob) || 'N/A'}</p>
              
              <p className="text-center whitespace-nowrap">
                {formatSlotDate(item.slotDate)}, {item.slotTime}
              </p>
              
              <p className="text-center font-semibold">
                {currency}{item.amount}
              </p>

              <div className="flex justify-center space-x-2">
                {!item.isCompleted && !item.cancelled && (
                  <>
                    <button
                      onClick={() => completeAppointment(item._id)}
                      className="bg-green-500 hover:bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow transition"
                      aria-label="Complete"
                    >
                      ✓
                    </button>
                    <button
                      onClick={() => cancelAppointment(item._id)}
                      className="bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow transition"
                      aria-label="Cancel"
                    >
                      ✕
                    </button>
                  </>
                )}
                {item.isCompleted && (
                  <span className="text-green-600 font-semibold">Completed</span>
                )}
                {item.cancelled && (
                  <span className="text-red-600 font-semibold">Cancelled</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            <p>No appointments found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorAppointment