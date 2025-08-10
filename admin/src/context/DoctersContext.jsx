// Fixed DoctersContext with consistent naming
import { createContext, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const DoctersContext = createContext();

const DoctersContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [dToken, setDToken] = useState(localStorage.getItem("dToken") || "");
  const [appointments, setAppointments] = useState([]);

  // Fixed: Renamed to getAppointments (consistent naming)
  const getAppointments = async () => {
    try {
      console.log('Making request with token:', dToken);
      console.log('Backend URL:', backendUrl);

      const { data } = await axios.get(
        backendUrl + '/api/doctor/appointments',
        {
          headers: {
            'dtoken': dToken,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('API Response:', data);

      if (data.success) {
        // Sort appointments by increasing date and time
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

            // Reverse order to show newest first
            return dateB - dateA;
            });


        setAppointments(sortedAppointments);
        console.log('Appointments loaded:', sortedAppointments.length);
      } else {
        console.log('API returned error:', data.message);
        toast.error(data.message);
      }

    } catch (error) {
      console.log('Request failed:', error);
      console.log('Error response:', error.response?.data);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const completeAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/complete-appointment', {
        appointmentId
      }, {
        headers: { dtoken: dToken } // Fixed: consistent header name
      });

      if (data.success) {
        toast.success(data.message);
        getAppointments(); // Fixed: correct function name
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/cancel-appointment', {
        appointmentId
      }, {
        headers: { dtoken: dToken } // Fixed: consistent header name
      });

      if (data.success) {
        toast.success(data.message);
        getAppointments(); // Fixed: correct function name
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const value = {
    dToken,
    setDToken,
    backendUrl,
    appointments,
    setAppointments,
    getAppointments, // Fixed: consistent naming
    completeAppointment,
    cancelAppointment,
  };

  return (
    <DoctersContext.Provider value={value}>
      {props.children}
    </DoctersContext.Provider>
  );
};

export default DoctersContextProvider;