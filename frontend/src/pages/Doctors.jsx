import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors = [] } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showfilter,setShowFilter] = useState(false)
  const navigate = useNavigate();

  const specialties = [
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
    "Dentist",
    "Cardiologist",
    "Orthopedic",
    "Otologist",
    "Psychiatrist",
    "Hepatologist"
  ];

  useEffect(() => {
    if (speciality) {
      setFilterDoc(
        doctors.filter(
          (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
        )
      );
    } else {
      setFilterDoc(doctors);
    }
  }, [doctors, speciality]);

  const handleNavigate = (spec) => {
    if (speciality?.toLowerCase() === spec.toLowerCase()) {
      navigate("/docters");
    } else {
      navigate(`/docters/${spec}`);
    }
  };

  return (
    <div className=" mt-24 p-4 max-w-screen-xl mx-auto">
      <p className="text-primary font-semibold text-lg mb-4">Browse through the doctors</p>
      <button
          className={`py-2 px-6 border mb-5 rounded text-sm transition-all sm:hidden ${
            showfilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filter
        </button>

        {/* Specialties as Light Boxes */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8 
            ${showfilter ? "flex" : "hidden sm:grid"} 
            lg:flex lg:flex-wrap lg:gap-4 lg:justify-start`}
        >
          {specialties.map((spec, idx) => (
            <div
              key={idx}
              onClick={() => handleNavigate(spec)}
              className={`p-4 rounded-xl shadow-sm border border-gray-200 cursor-pointer text-center text-sm font-medium transition-transform duration-300 hover:shadow-md hover:scale-[1.03] ${
                speciality?.toLowerCase() === spec.toLowerCase()
                  ? "bg-blue-100 text-blue-600 border-blue-300"
                  : "bg-white text-gray-700"
              }`}
            >
              {spec}
            </div>
          ))}
        </div>

      {/* Doctors Grid */}
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterDoc.length > 0 ? (
          filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-500"
              key={index}
            >
              <img
                className="w-full h-48 object-contain rounded-t-xl border-b border-gray-200 bg-white"
                src={item.image}
                alt={item.name}
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  <span>Available</span>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No doctors found for this speciality.</p>
        )}
      </div>
    </div>
  );
};

export default Doctors;
