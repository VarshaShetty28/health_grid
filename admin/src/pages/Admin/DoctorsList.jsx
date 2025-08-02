import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);
  console.log("Stored token:", aToken);

  return (
    <div className="px-4 py-6 max-w-[1440px] mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">All Doctors</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:text-blue-600 hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-cover rounded-full mb-4"
            />
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600 mb-2">{item.speciality}</p>
            <div className="flex items-center gap-2">
              <input
                onChange={()=>changeAvailability(item._id)}
                type="checkbox"
                checked={item.available}
                readOnly
                className="form-checkbox text-green-500"
              />
              <p className={item.available ? "text-green-600" : "text-red-600"}>
                {item.available ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
