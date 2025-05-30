import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Profile = () => {
  const [userData , setUserData] = useState({
    name:"Varsha Shetty",
    image:assets.profile_pic,
    email:"abc@gmail.com",
    phone:"9876543210",
    address:{
      line1:"57th Cross Bangalore",
      line2:"Circle Cgurch Road Karnataka"
    },
    gender:"Female",
    dob:"2004-09-28"
  })
  const [isEdit,setIsEdit] = useState(true)

  return (
    <div className='max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-6'>
      <div className="flex flex-col items-center">
        <img src={userData.image} alt="" className="w-32 h-32 rounded-full object-cover mb-4 shadow-md" />
        {
          isEdit 
          ? <input 
              type='text' 
              value={userData.name} 
              onChange={e => setUserData(prev => ({...prev,name:e.target.value}))}
              className="text-xl font-semibold text-center border border-gray-300 rounded px-4 py-2"
            />
          : <p className="text-2xl font-bold text-gray-800">{userData.name}</p>
        }
      </div>

      <hr className="border-t border-gray-300" />

      <div>
        <p className="text-lg font-semibold text-gray-700 mb-2">CONTACT INFORMATION</p>
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium text-gray-600">Email id:</p>
            <p className="text-gray-800">{userData.email}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600">Phone:</p>
            {
              isEdit 
              ? <input 
                  type='text' 
                  value={userData.phone} 
                  onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))}
                  className="border border-gray-300 rounded px-3 py-1 w-full"
                />
              : <p className="text-gray-800">{userData.phone}</p>
            }
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600">Address:</p>
            {
              isEdit
              ? <div className="space-y-2">
                  <input 
                    onChange={(e)=>setUserData(prev=>({...prev,address: {...prev.address, line1: e.target.value}}))} 
                    value={userData.address.line1} 
                    type="text"
                    className="border border-gray-300 rounded px-3 py-1 w-full"
                  />
                  <input 
                    onChange={(e)=>setUserData(prev=>({...prev,address: {...prev.address, line2: e.target.value}}))} 
                    value={userData.address.line2} 
                    type="text"
                    className="border border-gray-300 rounded px-3 py-1 w-full"
                  />
                </div>
              : <p className="text-gray-800">
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
            }
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold text-gray-700 mb-2">BASIC INFORMATION</p>
        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium text-gray-600">Gender:</p>
            {
              isEdit 
              ? <select 
                  onChange={(e) => setUserData(prev => ({...prev,gender:e.target.value}))} 
                  value={userData.gender}
                  className="border border-gray-300 rounded px-3 py-1 w-full"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              : <p className="text-gray-800">{userData.gender}</p>
            }
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600">Birthday:</p>
            {
              isEdit
              ? <input 
                  type='date' 
                  onChange={(e) => setUserData(prev => ({...prev,dob:e.target.value}))} 
                  value={userData.dob} 
                  className="border border-gray-300 rounded px-3 py-1 w-full"
                />
              : <p className="text-gray-800">{userData.dob}</p>
            }
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {
          isEdit 
          ? <button 
              onClick={()=>setIsEdit(false)} 
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Save Information
            </button>
          : <button 
              onClick={()=>setIsEdit(true)} 
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Edit
            </button>
        }
      </div>
    </div>
  )
}

export default Profile
