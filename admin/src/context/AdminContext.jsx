import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([])
  const [dashData, setDashData] = useState(false)
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Function to check if token is expired
  const isTokenExpired = (token) => {
    if (!token) return true;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;
      return payload.exp < currentTime;
    } catch (error) {
      return true;
    }
  };

  // Function to handle logout
  const logout = () => {
    setAToken("");
    localStorage.removeItem("aToken");
    setDoctors([]);
    setAppointments([]);
    toast.info("Session expired. Please login again.");
  };

  // Check token validity on component mount and token change
  useEffect(() => {
    if (aToken && isTokenExpired(aToken)) {
      logout();
    }
  }, [aToken]);

  // Enhanced axios interceptor to handle token errors
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 || 
            error.response?.data?.message?.includes("Token missing") ||
            error.response?.data?.message?.includes("Invalid token") ||
            error.response?.data?.message?.includes("jwt expired")) {
          logout();
        }
        return Promise.reject(error);
      }
    );

    return () => axios.interceptors.response.eject(interceptor);
  }, []);
  
  const getAllDoctors = async () => {
    try {
      // Check token before making request
      if (!aToken || isTokenExpired(aToken)) {
        logout();
        return;
      }

      console.log("Backend URL:", backendUrl);
      console.log("Token:", aToken);
      
      const { data } = await axios.post(
        backendUrl + '/api/admin/all-doctors', 
        {}, 
        {
          headers: { aToken }
        }
      );

      if (data.success) {
        setDoctors(data.doctors);
        console.log(data.doctors);
      } else {
        toast.error(data.message);
        console.log("No doctors");
        
        // If it's a token-related error, logout
        if (data.message?.includes("Token") || data.message?.includes("authorized")) {
          logout();
        }
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
      console.error("Error fetching doctors:", error);
      
      // Handle token expiry errors
      if (errorMessage?.includes("jwt expired") || 
          errorMessage?.includes("Invalid token") ||
          error.response?.status === 401) {
        logout();
      }
    }
  };

  const changeAvailability = async (docId) => {
    try {
      if (!aToken || isTokenExpired(aToken)) {
        logout();
        return;
      }

      const { data } = await axios.post(
        backendUrl + '/api/admin/change-availability', 
        { docId }, 
        { headers: { aToken } }
      );
      
      if (data.success) {
        toast.success(data.message);
        getAllDoctors();
      } else {
        toast.error(data.message);
        if (data.message?.includes("Token") || data.message?.includes("authorized")) {
          logout();
        }
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(error.message);
      
      if (errorMessage?.includes("jwt expired") || 
          errorMessage?.includes("Invalid token") ||
          error.response?.status === 401) {
        logout();
      }
    }
  };

  const getAllAppointments = async () => {
    try {
      if (!aToken || isTokenExpired(aToken)) {
        logout();
        return;
      }

      const { data } = await axios.get(
        backendUrl + '/api/admin/appointments', 
        { headers: { aToken } }
      );
      
      if (data.success) {
        setAppointments(data.appointments);
        console.log(data.appointments)
      } else {
        toast.error(data.message);
        if (data.message?.includes("Token") || data.message?.includes("authorized")) {
          logout();
        }
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
      
      if (errorMessage?.includes("jwt expired") || 
          errorMessage?.includes("Invalid token") ||
          error.response?.status === 401) {
        logout();
      }
    }
  };

  const cancelAppointment = async (appointmentId) =>{
    try{

      const { data } = await axios.post(backendUrl+'/api/admin/cancel-appointment',{appointmentId},{headers:{aToken}})
      if(data.success){
        toast.success(data.message)
        getAllAppointments()
      } else{
        toast.error(data.message)
      }

    } catch(error){
      toast.error(error.message);
    }
  }
  const getDashData = async () => {
    try{
      const { data } = await axios.get(backendUrl+'/api/admin/dashboard',{headers:{aToken}})
       if(data.success)
        {
            setDashData(data.dash_data); 
            console.log(data.dash_data);

        } else{
             toast.error(data.message)
        }
    } catch (error){
        toast.error(error.message);
    }
  }

  const value = {
    aToken,
    setAToken,
    backendUrl,
    doctors,
    getAllDoctors,
    changeAvailability,
    appointments,
    setAppointments,
    getAllAppointments,
    logout, // Export logout function
    isTokenExpired, // Export token check function
    cancelAppointment,
    dashData,
    getDashData
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;