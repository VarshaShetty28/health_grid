import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RealtedDocters from "../components/RealtedDocters";

const Appointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors, currencySymb, user } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docslot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false); // New Modal State

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlot = async () => {
    setDocSlot([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlot((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlot();
    }
  }, [docInfo]);

  const handleDateSelect = (index) => {
    setSlotIndex(index);
    setSelectedTime("");
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowConfirmModal(true); // Open Confirm Modal
  };
  useEffect(() => {
    setSelectedTime(null); // Reset selection on day change
  }, [slotIndex]);

  const handleBookAppointment = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (!selectedTime) {
      setBookingError("Please select a time slot.");
      return;
    }

    setIsBooking(true);
    setBookingError("");
    setBookingSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Booking confirmed for:", selectedDate, selectedTime, "with doctor ID:", docId);
      setBookingSuccess(true);
      setShowConfirmModal(false); // Close modal after booking
      setSelectedDate(new Date());
      setSelectedTime("");
    } catch (error) {
      console.error("Booking failed:", error);
      setBookingError("Failed to book appointment. Please try again later.");
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Doctor Profile */}
        {docInfo && (
          <div className="bg-white shadow-lg rounded-3xl p-8 flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <img
                src={docInfo?.image}
                alt="Doctor"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-indigo-100"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center space-x-2 text-2xl font-bold text-indigo-700">
                {docInfo?.name}
                <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
              </div>
              <div className="text-gray-600">
                <p className="text-lg">{docInfo?.degree} <span className="text-indigo-600">• {docInfo?.speciality}</span></p>
                <span className="mt-1 inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {docInfo?.experience}
                </span>
              </div>
              <div className="pt-3 border-t">
                <h4 className="text-md font-semibold text-gray-700">About</h4>
                <p className="text-sm text-gray-500 mt-1">{docInfo?.about}</p>
              </div>
              <div className="pt-2 text-gray-600">
                Appointment Fee: <strong>{currencySymb}{docInfo?.fees}</strong>
              </div>
            </div>
          </div>
        )}

            {/* Booking Slots */}
       
          <div className="mt-10 bg-white shadow-lg rounded-3xl p-8 space-y-8">
            <h2 className="text-xl font-bold text-gray-500">Booking slots</h2>

            {/* Date and Day Selector */}
            <div className="flex overflow-x-scroll gap-4 items-center justify-center mt-4">
              {
                docslot.length && docslot.map((item, index) => (
                  <div 
                  onClick={()=> setSlotIndex(index)}
                  className={`flex flex-col items-center shadow-lg rounded-lg p-4 min-w-max ${slotIndex === index ? 'bg-primary' : 'bg-white'}`} 
                  key={index}>
                  <p >{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p >{item[0] && item[0].datetime.getDate()}</p>
                </div>

                ))
              }
            </div>


            {/* Time Slot Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {docslot[slotIndex]?.map((item, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition duration-200 ease-in-out
                    ${selectedTime === item.time 
                      ? "bg-blue-600 text-white" 
                      : "bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white"}`}
                  onClick={() => handleTimeSelect(item.time)}
                >
                  {item.time.toLowerCase()}
                </button>
              ))}
            </div>
          </div>
       
      </div>

      {/* Confirm Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl w-80 space-y-4 animate-scaleIn">
            <h3 className="text-xl font-bold text-gray-800">Confirm Details</h3>
            <p><strong>Doctor:</strong> {docInfo?.name}</p>
            <p><strong>Date:</strong> {new Date(Date.now() + slotIndex * 86400000).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {selectedTime}</p>
            <p><strong>Fee:</strong> {currencySymb}{docInfo?.fees}</p>

            {bookingError && <p className="text-red-500 text-sm">{bookingError}</p>}
            {bookingSuccess && <p className="text-green-600 text-sm font-semibold">Appointment booked successfully!</p>}

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 py-2 rounded-xl bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleBookAppointment}
                disabled={isBooking || bookingSuccess}
                className="flex-1 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
              >
                {isBooking ? "Booking..." : "Book an Appointment"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Related Docter  */}
      <RealtedDocters docId={docId} speciality={docInfo?.speciality} />
    </div>
  );
};

export default Appointment;
