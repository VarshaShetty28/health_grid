import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const LoginComp = () => {

const { backendUrl, token, setToken } = useContext(AppContext)
const [state , setState] = useState('Sign Up')
const navigate = useNavigate()
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [name,setName] = useState('')

const onSubmitHandler = async (event)=>{
    event.preventDefault() //When user submit the form the website i snot reloads
    try{
        if(state === 'Sign Up'){
          const {data} = await axios.post(backendUrl+'/api/user/register',{name,password,email})
          if (data.success) {
            localStorage.setItem('token',data.token)
            setToken(data.token)
          }else{
            toast.error(data.message)
          }
        } else{
          const {data} = await axios.post(backendUrl+'/api/user/login',{password,email})
          if (data.success) {
            localStorage.setItem('token',data.token)
            setToken(data.token)
          } else{
            toast.error(data.message)
          }
        }
    } catch(error){
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }

  },[token])

  return (
  <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center justify-center bg-gray-100">
  <div className="flex flex-col gap-4 bg-white shadow-xl rounded-2xl p-8 min-w-[340px] w-full max-w-md">
    <h2 className="text-2xl font-bold text-gray-800">
      {state === 'Sign Up' ? 'Create Account' : 'Login'}
    </h2>
    <p className="text-gray-600 text-sm">
      Please {state === 'Sign Up' ? 'Sign Up' : 'Login'} to book an Appointment
    </p>
    { 
          state === "Sign Up" && <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Full Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

    }
    
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-700">Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-700">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button
      type="submit"
      className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
    >
      {state === 'Sign Up' ? 'Create Account' : 'Login'}
    </button>
    {
      state === "Sign Up"?
      <p>Already have an account? <span 
      onClick={()=>setState('Login')}
      className='text-primary underline cursor-pointer'>Login Here</span> </p> :
      <p>Create A New Account? <span 
      onClick={()=>setState('Sign Up')}
      className='text-primary underline cursor-pointer'>Click Here</span> </p>
    }
  </div>
</form>

  )
}

export default LoginComp
