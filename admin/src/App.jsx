import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashborad from './pages/Admin/Dashborad';
import AllAppointment from './pages/Admin/AllAppointment';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';


const App = () => {

  const {aToken} = useContext(AdminContext)
  console.log("aToken is", aToken);
  return aToken ? (
    <div className='overflow-x-hidden bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start pt-20'>
        <div>
          <Sidebar/>
        </div>
        <Routes>
            <Route path='/' element={<></>}/>
            <Route path='/admin-dashboard' element={<Dashborad/>}/>
            <Route path='/all-appointments' element={<AllAppointment/>}/>
            <Route path='/add-doctors' element={<AddDoctor/>}/>
            <Route path='/doctor-list' element={<DoctorsList/>}/>
        </Routes>
      </div>
    </div>
  ) : (
    <>
        <Login/>
        <ToastContainer/>
    </>
  )
}

export default App
