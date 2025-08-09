import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import docIcon from "../../assets/doctor_icon.svg";
import appointmentIcon from "../../assets/appoi_icon.png";
import patientIcon from "../../assets/patients.png";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { aToken, dashData, getDashData } = useContext(AdminContext) || {};
  const {formatSlotDate} = useContext(AppContext)
  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className="min-h-screen w-full bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Doctors Card */}
            <div className="flex items-center p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow w-full">
              <img
                src={docIcon}
                alt="Doctors"
                className="w-12 h-12 object-contain mr-4"
              />
              <div>
                <p className="text-xl text-gray-600 font-bold">
                  {dashData.doctors}
                </p>
                <p className="text-gray-800">Doctors</p>
              </div>
            </div>

            {/* Appointments Card */}
            <div className="flex items-center p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow w-full">
              <img
                src={appointmentIcon}
                alt="Appointments"
                className="w-12 h-12 object-contain mr-4"
              />
              <div>
                <p className="text-xl text-gray-600 font-bold">
                  {dashData.appointments}
                </p>
                <p className="text-gray-800">Appointments</p>
              </div>
            </div>

            {/* Patients Card */}
            <div className="flex items-center p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow w-full">
              <img
                src={patientIcon}
                alt="Patients"
                className="w-12 h-12 object-contain mr-4"
              />
              <div>
                <p className="text-xl text-gray-600 font-bold">
                  {dashData.patients}
                </p>
                <p className="text-gray-800">Registered Users</p>
              </div>
            </div>
          </div>

          {/* Latest Appointments Section */}
         
          <div className="w-full bg-white shadow-md rounded-md p-6">
            <p className="text-lg font-semibold mb-4">Latest Bookings</p>

            {dashData.latestAppointments &&
            dashData.latestAppointments.length > 0 ? (
              <div className="space-y-4">
                {dashData.latestAppointments.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md transition w-full"
                  >
                    <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                      <img
                        src={item.docData.image}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover border border-gray-300"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.docData.name}
                        </p>
                        <p className="text-sm text-gray-500">Booked on {formatSlotDate(item.slotDate)}</p>
                      </div>
                    </div>
                    <div>
                      {item.cancelled ? (
                        <p className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition">
                          Cancelled
                        </p>
                      ) : (
                        <button
                          onClick={() => cancelAppointment(item._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No appointments found.</p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
