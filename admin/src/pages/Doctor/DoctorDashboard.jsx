import React, { useContext, useEffect } from 'react'
import { DoctersContext } from '../../context/DoctersContext'
import { AppContext } from '../../context/AppContext';
import earningIcon from "../../assets/image.png";
import appointmentIcon from "../../assets/appoi_icon.png";
import patientIcon from "../../assets/patients.png";

const DoctorDashboard = () => {
  const {dToken, dashData, setDashData, getDashData} = useContext(DoctersContext)
  const { formatSlotDate, currency } = useContext(AppContext)

  useEffect(()=>{
    if(dToken){
      getDashData()
    }
  },[dToken])
  return dashData && (
      <div className="min-h-screen w-full bg-gray-100 p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Earnings */}
        <div className="flex items-center p-5 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow cursor-default w-full">
          <img src={earningIcon} alt="Earnings" className="w-12 h-12 mr-4" />
          <div>
            <p className="text-2xl font-bold text-gray-700">₹{dashData.earnings}</p>
            <p className="text-gray-500">Total Earnings</p>
          </div>
        </div>

        {/* Total Appointments */}
        <div className="flex items-center p-5 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow cursor-default w-full">
          <img src={appointmentIcon} alt="Appointments" className="w-12 h-12 mr-4" />
          <div>
            <p className="text-2xl font-bold text-gray-700">{dashData.appointments}</p>
            <p className="text-gray-500">Appointments</p>
          </div>
        </div>

        {/* Registered Patients */}
        <div className="flex items-center p-5 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow cursor-default w-full">
          <img src={patientIcon} alt="Patients" className="w-12 h-12 mr-4" />
          <div>
            <p className="text-2xl font-bold text-gray-700">{dashData.patients}</p>
            <p className="text-gray-500">Registered Patients</p>
          </div>
        </div>
      </div>

      {/* Latest Appointments */}
      <section className="bg-white p-6 rounded-md shadow-md w-full">
        <h2 className="text-xl font-semibold mb-4">Latest Appointments</h2>

        {dashData.latestAppointments && dashData.latestAppointments.length > 0 ? (
          <div className="space-y-4">
            {dashData.latestAppointments.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md transition w-full"
              >
                <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                  <img
                    src={item.docData?.image || earningIcon}
                    alt={item.docData?.name || "Doctor"}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{item.docData?.name || "N/A"}</p>
                    <p className="text-sm text-gray-500">
                      Booked on: {formatSlotDate(item.slotDate)}
                    </p>
                  </div>
                </div>
                <div>
                  {/* Status badges or Cancel button */}
                  {item.cancelled ? (
                    <span className="inline-block bg-red-600 text-white px-3 py-1 rounded text-xs">
                      Cancelled
                    </span>
                  ) : item.isCompleted ? (
                    <span className="inline-block bg-green-600 text-white px-3 py-1 rounded text-xs">
                      Completed
                    </span>
                  ) : (
                    <button
                      onClick={() => cancelAppointment(item._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700 transition"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No appointments found.</p>
        )}
      </section>
    </div>
  )
}

export default DoctorDashboard
