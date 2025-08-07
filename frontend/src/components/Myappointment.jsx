import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const months = [' ', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const formatSlotDate = (slotDate) => {
    const [day, month, year] = slotDate.split('_');
    if (!day || !month || !year) return slotDate;
    return `${day} ${months[Number(month)]} ${year}`;
  };

  const fetchAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/my-appointments`, {
        headers: { token },
      });
      if (data.success) {
        setAppointments(data.appointments);

        // ✅ Console Output for Debugging
        console.log('📋 Appointments Data:', data.appointments);
      } else {
        toast.error(data.message || 'Could not fetch appointments');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error fetching appointments');
    } finally {
      setLoading(false);
    }
  };

  const initPay = (order) => {
    const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!key) {
      toast.error('Razorpay key is missing');
      return;
    }

    const options = {
      key,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(`${backendUrl}/api/user/verifyRazorpay`, response, {
            headers: { token },
          });
          if (data.success) {
            fetchAppointments();
            navigate('/my-appointments');
          }
        } catch (error) {
          console.error(error);
          toast.error(error.message || 'Payment verification failed');
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/payment-razorpay`,
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        initPay(data.order);
      } else {
        toast.error(data.message || 'Failed to initiate payment');
      }
    } catch (error) {
      console.error(error);
      toast.error('Payment initiation error');
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/cancel-appointment`,
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        fetchAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message || 'Cancellation failed');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Error cancelling appointment');
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className='pt-20 px-2 sm:px-4 max-w-4xl mx-auto'>
      <h1 className='text-xl sm:text-2xl font-bold text-gray-800 mb-6 mt-8'>My Appointments</h1>

      {loading ? (
        <div className='text-center py-12'>
          <p className='text-gray-500'>Loading appointments...</p>
        </div>
      ) : appointments.length === 0 ? (
        <div className='text-center py-12'>
          <div className='text-gray-400 text-6xl mb-4'>📅</div>
          <h3 className='text-xl font-semibold text-gray-600 mb-2'>No Appointments Yet</h3>
          <p className='text-gray-500'>Book your first appointment with our trusted doctors</p>
        </div>
      ) : (
        <div className='space-y-4'>
          {appointments.map((item) => (
            <div
              className='bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300'
              key={item._id}
            >
              <div className='flex flex-col gap-4'>
                {/* Doctor Info */}
                <div className='flex gap-4'>
                  <div className='flex-shrink-0'>
                    <img
                      className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg bg-indigo-50 border border-gray-200'
                      src={item.docData.image}
                      alt={item.docData.name}
                    />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <h3 className='text-lg sm:text-xl font-semibold text-gray-800 truncate'>{item.docData.name}</h3>
                    <p className='text-blue-600 font-medium text-sm sm:text-base'>{item.docData.speciality}</p>
                    <div className='mt-2'>
                      <p className='text-gray-700 font-medium text-sm mb-1'>Address:</p>
                      <p className='text-xs sm:text-sm text-gray-600 leading-tight'>{item.docData.address.line1}</p>
                      <p className='text-xs sm:text-sm text-gray-600 leading-tight'>{item.docData.address.line2}</p>
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className='bg-blue-50 rounded-lg p-3 border border-blue-200'>
                  <p className='text-sm'>
                    <span className='font-semibold text-blue-800'>Date & Time: </span>
                    <span className='text-blue-700'>
                      {formatSlotDate(item.slotDate)} | {item.slotTime}
                    </span>
                  </p>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-2 sm:gap-3'>
                  {!item.cancelled && item.payment && (
                  <button className="w-56 bg-green-400 text-white px-1 py-2 font-medium transition-colors duration-300 shadow-sm hover:shadow-md text-sm sm:text-base">
                    Paid
                  </button>
                )}

                  {!item.cancelled && !item.payment ? (
                    <>
                      <button
                        onClick={() => appointmentRazorpay(item._id)}
                        className='flex-1 bg-green-500 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 shadow-sm hover:shadow-md text-sm sm:text-base'
                      >
                        Pay Online
                      </button>
                      <button
                        onClick={() => cancelAppointment(item._id)}
                        className='flex-1 bg-red-500 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors duration-300 shadow-sm hover:shadow-md text-sm sm:text-base'
                      >
                        Cancel Appointment
                      </button>
                    </>
                  ) : (
                    <button className='sm:min-w-48 py-2 border bg-red-200 border-red-700 rounded text-red-600'>
                      Appointment Cancelled
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
