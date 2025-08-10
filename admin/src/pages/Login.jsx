import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctersContext } from "../context/DoctersContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setAToken, backendUrl } = useContext(AdminContext);
  const {setDToken} = useContext(DoctersContext)
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (state === "Admin") {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password,
        });

        console.log("Response from API:", data);

        if (data.success) {
          // Clear any existing token first
          localStorage.removeItem('aToken');
          
          // Store new token
          localStorage.setItem('aToken', data.token);
          setAToken(data.token);
          
          toast.success("Login successful!");
          
          // Clear form
          setEmail("");
          setPassword("");
          navigate("/admin-dashboard"); 
        } else {
          toast.error(data.message || "Login failed");
        }
      } else {
        // For Doctor login (future use)
        const {data} = await axios.post(backendUrl + '/api/doctor/login', {email, password})
        if (data.success) {
          // Clear any existing token first
          localStorage.removeItem('dToken');
          
          // Store new token
          localStorage.setItem('dToken', data.token);
          setDToken(data.token);
          console.log(data.token);
          
          
          toast.success("Login successful!");
          
          // Clear form
          setEmail("");
          setPassword("");
          navigate("/doctor-dashboard"); 
        } else {
          toast.error(data.message || "Login failed");
        }
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      
      const errorMessage = error.response?.data?.message || 
                          error.message || 
                          "Login failed. Please check your credentials and try again.";
      
      toast.error(errorMessage);
      
      // Clear any invalid token from storage
      localStorage.removeItem('aToken');
      setAToken("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[300px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto text-primary">
          <span>{state}</span> Login
        </p>

        {/* Email Field */}
        <div className="w-full">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="border border-[#DADADA] rounded w-full p-2 mt-1 disabled:opacity-50"
          />
        </div>

        {/* Password Field */}
        <div className="w-full">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            className="border border-[#DADADA] rounded w-full p-2 mt-1 disabled:opacity-50"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary text-white w-full py-2 rounded-md text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>

        {/* Toggle Login Type */}
        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;