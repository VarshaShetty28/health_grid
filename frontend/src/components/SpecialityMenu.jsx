import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { assets, specialityData } from "../assets/assets";

const SpecialityMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  // Ensure `specialties` is assigned correctly
  const specialties = specialityData || [];

  // Filter specialties based on search query
  const filteredSpecialties =
    searchQuery.trim() === ""
      ? specialties
      : specialties.filter((specialty) =>
          specialty.speciality?.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleSpecialtyClick = (specialty) => {
    console.log(`Selected specialty: ${specialty}`);
    // Redirect to the doctors' availability page
    navigate(`/doctors/${specialty.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div id="speciality" className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          Search <span className="text-blue-500">Doctors</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Search Your Doctor and Book Appointment in one click
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex mb-8">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </span>
        </button>
      </form>

      {/* Filtered Results Section */}
      {searchQuery.trim() !== "" && (
        <div className="mb-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Showing results for "{searchQuery}" ({filteredSpecialties.length} found)
          </p>
          <button
            onClick={handleClearSearch}
            className="text-sm text-blue-500 hover:text-blue-700"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Specialties Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {filteredSpecialties.length > 0 ? (
          filteredSpecialties.map((specialty) => (
            <button
              key={specialty.id || specialty.speciality}
              className="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center hover:bg-gray-200 transition-colors"
              onClick={() => handleSpecialtyClick(specialty.speciality)}
            >
              <div className="mb-2">
                <img
                  src={specialty.image}
                  alt={specialty.speciality || "Specialty"}
                  className="h-20 w-20 object-contain hover:translate-y-[-10px] transition-all duration-500"
                />
              </div>
              <span className="text-sm font-medium">{specialty.speciality}</span>
            </button>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">No specialties found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialityMenu;
