import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import upload_area from '../assets/upload_area.png';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateUserProfileData = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);
      if (image) formData.append('image', image);

      const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, {
        headers: { token },
      });

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  if (!userData) return null;

  return (
    <div className="mt-20 max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-6 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center">
        {isEdit ? (
          <label htmlFor="image" className="cursor-pointer">
            <div className="w-32 h-32 relative">
              <img
                src={image ? URL.createObjectURL(image) : userData.image}
                alt="Profile Preview"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              {!image && (
                <img
                  src={upload_area}
                  alt="Upload Prompt"
                  className="absolute top-0 left-0 w-32 h-32 rounded-full opacity-50 object-cover"
                />
              )}
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              accept="image/*"
            />
          </label>
        ) : (
          <img
            src={userData.image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
          />
        )}

        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
            className="text-xl font-semibold text-center border border-gray-300 rounded px-4 py-2 w-full max-w-xs sm:max-w-sm"
          />
        ) : (
          <p className="text-2xl font-bold text-gray-800">{userData.name}</p>
        )}
      </div>

      <hr className="border-t border-gray-300" />

      <div>
        <p className="text-lg font-semibold text-gray-700 mb-2">CONTACT INFORMATION</p>
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium text-gray-600">Email id:</p>
            <p className="text-gray-800 break-words">{userData.email}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600">Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs sm:max-w-sm"
              />
            ) : (
              <p className="text-gray-800">{userData.phone}</p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600">Address:</p>
            {isEdit ? (
              <div className="space-y-2">
                <input
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  value={userData.address?.line1 || ''}
                  type="text"
                  className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs sm:max-w-sm"
                  placeholder="Address Line 1"
                />
                <input
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={userData.address?.line2 || ''}
                  type="text"
                  className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs sm:max-w-sm"
                  placeholder="Address Line 2"
                />
              </div>
            ) : (
              <p className="text-gray-800 whitespace-pre-line">
                {userData.address?.line1}
                <br />
                {userData.address?.line2}
              </p>
            )}
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold text-gray-700 mb-2">BASIC INFORMATION</p>
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium text-gray-600">Gender:</p>
            {isEdit ? (
              <select
                onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
                value={userData.gender}
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs sm:max-w-sm"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-800">{userData.gender}</p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600">Birthday:</p>
            {isEdit ? (
              <input
                type="date"
                onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
                value={userData.dob}
                className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs sm:max-w-sm"
              />
            ) : (
              <p className="text-gray-800">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {isEdit ? (
          <button
            onClick={updateUserProfileData}
            className={`bg-blue-600 text-white px-6 py-2 rounded transition w-full max-w-xs sm:max-w-sm flex items-center justify-center ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Saving...
              </>
            ) : (
              'Save Information'
            )}
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition w-full max-w-xs sm:max-w-sm"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
