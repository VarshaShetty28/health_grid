import React, { useContext, useEffect } from 'react';
import { User, MapPin, DollarSign, Clock, CheckCircle, XCircle } from 'lucide-react';
import { DoctersContext } from '../../context/DoctersContext';
import { AppContext } from '../../context/AppContext';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DoctorProfile = () => {
  const { dToken, profileData, getProfileData, setProfileData, backendUrl } = useContext(DoctersContext);
  const { currency } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false)
  
  const updateProfile = async () => {
    try{

      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available
      }

      //Api call
      const {data} = await axios.post(backendUrl+'/api/doctor/update-profile',updateData,{headers: {dToken}})
      if (data.success){
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else{
        toast.error(data.message)
      }
    } catch(error){
      toast.error(error.message)
      console.log(error);

    }
  }

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return profileData && (
    <div className="min-h-screen bg-gradient-to-br w-full ml-5 mr-5">
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-10 sm:px-8 py-6  text-white w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
          {/* Profile Image & Info */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              {profileData.image ? (
                <img
                  src={profileData.image}
                  alt={profileData.name}
                  className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center border-4 border-white">
                  <User className="w-8 h-8 text-white" />
                </div>
              )}
              <div
                className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${
                  profileData.available ? 'bg-green-500' : 'bg-red-500'
                }`}
              >
                {profileData.available ? (
                  <CheckCircle className="w-4 h-4 text-white" />
                ) : (
                  <XCircle className="w-4 h-4 text-white" />
                )}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{profileData.name}</h2>
              <p className="text-indigo-100 font-medium">
                {profileData.degree} - {profileData.speciality}
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex">
            {
              isEdit
              ? <button onClick={updateProfile} className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm">
              Save
              </button>
              : <button onClick={()=>setIsEdit(true)} className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm">
              Edit
              </button>
            }
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white p-6 sm:p-8 w-full">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* Experience */}
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-semibold text-gray-800">{profileData.experience} Years</p>
              </div>
            </div>

            {/* Fees */}
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Consultation Fees</p>
                <p className="font-semibold text-gray-800">{currency}{isEdit? <input type="number" onChange={(e)=>setProfileData(prev => ({...prev, fees: e.target.value}) )} value={profileData.fees} /> :profileData.fees}</p>
              </div>
            </div>

            {/* Availability */}
           <div className="flex items-center space-x-2">
            <input
            onChange={()=> isEdit && setProfileData(prev => ({...prev,available: !prev.available}))}
              type="checkbox"
              checked={profileData.available}
              className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <p className="text-sm text-gray-500">Available for appointments</p>
          </div>

          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Address</p>
                <div className="text-gray-800">
                  <p>{isEdit? <input type="text" onChange={(e)=>setProfileData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} value={profileData.address.line1} /> :profileData.address?.line1}</p>
                  <p>{isEdit? <input type="text" onChange={(e)=>setProfileData(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} value={profileData.address.line2} /> :profileData.address?.line2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">About</h3>
          <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
            {profileData.about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
