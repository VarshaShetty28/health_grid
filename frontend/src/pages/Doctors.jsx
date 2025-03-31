import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors = [] } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (speciality) {
      setFilterDoc(
        doctors.filter((doc) => doc.speciality.toLowerCase() === speciality.toLowerCase())
      );
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        
        {/* Sidebar*/}
        <div className="flex flex-col gap-4 text-sm text-gray-600">
            <p onClick={() => speciality === 'General Physician' ? navigate('/doctors') : navigate('/docters/General Physician')} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-all">General Physician</p>
            <p onClick={() => speciality === 'Gynecologist' ? navigate('/docters') : navigate('/docters/Gynecologist')} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-all">Gynecologist</p>
            <p onClick={() => speciality === 'Dermatologist' ? navigate('/docters') : navigate('/docters/Dermatologist')} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-all">Dermatologist</p>
            <p onClick={() => speciality === 'Pediatricians' ? navigate('/docters') : navigate('/docters/Pediatricians')} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-all">Pediatricians</p>
            <p onClick={() => speciality === 'Neurologist' ? navigate('/docters') : navigate('/docters/Neurologist')} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-all">Neurologist</p>
            <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/docters') : navigate('/docters/Gastroenterologist')} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-all">Gastroenterologist</p>
            <p onClick={() => speciality === 'Dentist' ? navigate('/docters') : navigate('/docters/Dentist')} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-all">Dentist</p>
            <p onClick={() => speciality === 'Cardiologist' ? navigate('/docters') : navigate('/docters/Cardiologist')} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-all">Cardiologist</p>
            <p onClick={() => speciality === 'Orthopedic' ? navigate('/docters') : navigate('/docters/Orthopedic')} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-all">Orthopedic</p>
            <p onClick={() => speciality === 'Ontologist' ? navigate('/docters') : navigate('/docters/Ontologist')} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-all">Ontologist</p>
            <p onClick={() => speciality === 'Psychiatrist' ? navigate('/docters') : navigate('/docters/Psychiatrist')} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-all">Psychiatrist</p>
            <p onClick={() => speciality === 'Hepatologist' ? navigate('/docters') : navigate('/docters/Hepatologist')} className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 rounded cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-all">Hepatologist</p>
        </div>
        {/* Doctors Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
          {filterDoc.length > 0 ? (
            filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-500"
                key={index}
              >
            {/* <img 
              className="w-full h-41 object-cover rounded-xl border border-gray-300 shadow-md bg-white transition-transform duration-300 hover:scale-[1.02]" 
              src={item.image} 
              alt={item.name} 
            /> */}
            <img 
              className="w-full h-48 object-contain rounded-xl border border-gray-300 shadow-md bg-white" 
              src={item.image} 
              alt={item.name} 
            />

                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p className="w-2 h-2 rounded-full bg-green-500"></p>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No doctors found for this speciality.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
