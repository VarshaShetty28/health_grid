import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDocters = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext) //This is instead of Importing the Doctors from assets 
    // We can use this useContext bcs we dexlared it in AppContext file 


  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Docters to Book </h1>
        <p className=' text-center'>Find our Trusted Docters.. </p>
       <div className=' w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 '>
            {doctors.slice(0,10).map((item,index)=>(
                <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500' key={index }>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500' >
                            <p className='w-2 h-2 rounded-full bg-green-500' ></p>
                            <p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium' >{item.name}</p>
                        <p className='text-gray-600 text-sm' >{item.speciality}</p>
                    </div>
                </div>
            ))}
       </div>
       <button 
       onClick={ () => { navigate('/docters'),scrollTo(0,0)}} //scrollTo(0,0) is used To redirectaS to The Top of the Doctors page only
       className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'  >more</button>
    </div>
  )
}

export default TopDocters
