import { createContext, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const DoctersContext = createContext();

const DoctersContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [dToken, setDToken] = useState(localStorage.getItem("dToken") || "");
  const [appointments, setAppointments] = useState([]);
  const [dashData, setDashData] = useState(false);
  const [profileData, setProfileData] = useState(false);

  const getAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + '/api/doctor/appointments',
        {
          headers: {
            dtoken: dToken,
            'Content-Type': 'application/json'
          }
        }
      );

      if (data.success) {
        const sortedAppointments = data.appointments.sort((a, b) => {
          const parseDateTime = (slotDate, slotTime) => {
            if (!slotDate) return new Date(0);
            const [day, month, year] = slotDate.split('_');
            if (!day || !month || !year) return new Date(0);

            let hours = 0, minutes = 0;
            if (slotTime) {
              const timeParts = slotTime.split(':');
              if (timeParts.length === 2) {
                hours = parseInt(timeParts[0], 10);
                const minPart = timeParts[1].split(' ')[0];
                minutes = parseInt(minPart, 10);
              }
            }
            return new Date(year, month - 1, day, hours, minutes);
          };

          const dateA = parseDateTime(a.slotDate, a.slotTime);
          const dateB = parseDateTime(b.slotDate, b.slotTime);

          // Show newest first
          return dateB - dateA;
        });

        setAppointments(sortedAppointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const completeAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/complete-appointment', {
        appointmentId
      }, {
        headers: { dtoken: dToken }
      });

      if (data.success) {
        toast.success(data.message);
        getAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/cancel-appointment', {
        appointmentId
      }, {
        headers: { dtoken: dToken }
      });

      if (data.success) {
        toast.success(data.message);
        getAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const getDashData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/dashboard', {
        headers: { dtoken: dToken }
      });

      if (data.success) {
        setDashData(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const getProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/profile', {
        headers: { dtoken: dToken }
      });

      if (data.success) {
        setProfileData(data.profileData);
        console.log(data.profileData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const value = {
    dToken,
    setDToken,
    backendUrl,
    appointments,
    setAppointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
    dashData,
    setDashData,
    getDashData,
    profileData,
    setProfileData,
    getProfileData
  };

  return (
    <DoctersContext.Provider value={value}>
      {props.children}
    </DoctersContext.Provider>
  );
};

export default DoctersContextProvider;
