import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashborad from "./pages/Admin/Dashborad";
import AllAppointment from "./pages/Admin/AllAppointment";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";
import { DoctersContext } from "./context/DoctersContext";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointment from "./pages/Doctor/DoctorAppointment";
import DoctorProfile from "./pages/Doctor/DoctorProfile";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctersContext);
  console.log("aToken is", aToken);

  return aToken || dToken ? (
    <div className="overflow-x-hidden bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start pt-20">
        <div>
          <Sidebar />
        </div>
        <Routes>
          {/* Redirect root based on login */}
          <Route
            path="/"
            element={
              aToken ? (
                <Navigate to="/admin-dashboard" replace />
              ) : dToken ? (
                <Navigate to="/doctor-dashboard" replace />
              ) : (
                <Login />
              )
            }
          />
          <Route path="/admin-dashboard" element={<Dashborad />} />
          <Route path="/all-appointments" element={<AllAppointment />} />
          <Route path="/add-doctors" element={<AddDoctor />} />
          <Route path="/doctor-list" element={<DoctorsList />} />

          {/* Doctor Routes */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor-appointments" element={<DoctorAppointment />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
