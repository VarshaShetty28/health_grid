import React, { useContext, useState } from 'react';
import uploadArea from '../../assets/upload_area.svg';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {
  const doctorSpecialties = [
    "General Physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologists",
    "Gastrologist", "Dentist", "Cardiologist", "Orthopedic", "Otologist", "Psychiatrist", "Hepatologist"
  ];

  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('');
  const [fees, setFees] = useState('');
  const [about, setAbout] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [degree, setDegree] = useState('');
  const [address, setAddress] = useState({ line1: '', line2: '' });

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }

      const formData = new FormData();
      formData.append('image', docImg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', fees);
      formData.append('about', about);
      formData.append('speciality', speciality);
      formData.append('degree', degree);
      formData.append('address', JSON.stringify(address));

      const { data } = await axios.post(
        backendUrl + '/api/admin/add-doctor',
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName('');
        setPassword('');
        setEmail('');
        setAddress({ line1: '', line2: '' });
        setDegree('');
        setAbout('');
        setFees('');
        setExperience('');
        setSpeciality('');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='w-full'>
      <div className="flex justify-center items-start min-h-screen px-4 sm:px-6 md:px-16 lg:px-32 xl:px-48 py-8">
        <div className="w-full bg-white shadow-xl rounded-2xl p-6 sm:p-8 space-y-6 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">Add New Doctor</h2>

          {/* Upload */}
          <div className="flex flex-col items-center">
            <label htmlFor='doc-img' className="cursor-pointer transition-transform duration-200 hover:scale-105">
              <img
                src={docImg ? URL.createObjectURL(docImg) : uploadArea}
                alt="Upload doctor"
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 shadow-lg"
              />
            </label>
            <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id='doc-img' hidden />
            <p className="text-sm text-gray-700 mt-2 text-center font-medium">Upload Doctor Picture</p>
          </div>

          {/* Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Doctor Name</label>
              <input onChange={(e) => setName(e.target.value)} value={name} type="text" required placeholder="Enter doctor name" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" required placeholder="Enter email" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required placeholder="Set password" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Experience</label>
              <select onChange={(e) => setExperience(e.target.value)} value={experience} required className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white">
                <option value="">Select Experience</option>
                {Array.from({ length: 20 }, (_, i) => (
                  <option key={i + 1} value={`${i + 1} Year${i + 1 > 1 ? 's' : ''}`}>
                    {i + 1} Year{i + 1 > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Fees</label>
              <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" required placeholder="Consultation fees" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Speciality</label>
              <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} required className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white">
                <option value="">Select Speciality</option>
                {doctorSpecialties.map((item, idx) => (
                  <option key={idx} value={item}>{item}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Education</label>
              <input onChange={(e) => setDegree(e.target.value)} value={degree} type="text" required placeholder="e.g., MBBS, MD, PhD" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Clinic Address Line 1</label>
              <input onChange={(e) => setAddress({ ...address, line1: e.target.value })} value={address.line1} type="text" required placeholder="Street, Area" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Clinic Address Line 2</label>
              <input onChange={(e) => setAddress({ ...address, line2: e.target.value })} value={address.line2} type="text" placeholder="City, Zip, State" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 text-gray-700">About Me</label>
              <textarea onChange={(e) => setAbout(e.target.value)} value={about} required placeholder="Short bio..." rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 resize-y"></textarea>
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 text-lg font-semibold shadow-md">
              Add Doctor
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
