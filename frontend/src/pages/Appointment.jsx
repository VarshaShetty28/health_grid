import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// useParams() is a hook that lets you access the dynamic parts of the URL (also called route parameters).
//useContext(AppContext):This hook tells Hey, I want to access the context value provided by AppContext.
//{ docters }:This is destructuring the value returned from the context. So you're grabbing the docters property from the context value.

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return(
    <div>
    {/* Docters Details */}
    <div>
      <div>
      <img src={docInfo?.image} alt="" /> 
      {/* Here ? means if docters image present then displey this is impo or else it will take null and nothing is goimng to present */}

      </div>
      <div>
        {/* Doctor Information */}
        <p>{docInfo?.name}</p>
      </div>
    </div>

  </div>
  )
};

export default Appointment;
