import React from 'react'
import { Link } from 'react-router-dom'

function CenterInfo({ data }) {

  return (
    <>

      <div className="border mt-4 rounded-xl shadow-xl ">
        <img src='https://static.vecteezy.com/system/resources/previews/004/493/181/original/hospital-building-for-healthcare-background-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-free-vector.jpg ' alt='hos' className='h-40 w-full rounded-xl '></img>
        <h3 className='text-center text-black font-bold text-2xl'>{data.hospitalName}</h3>
        <div className='flex justify-center'>
          <p className='text-lg font-mono font-semibold'>Location : </p>
          <p className='ml-4 font-mono'>{data.location}</p>
        </div>
        <div className='flex justify-center'>
          <p className='text-lg font-mono font-semibold'>Mobile: </p>
          <p className='ml-4 font-mono'>{data.mobile}</p>
        </div>
        <div className='flex justify-center'>
          <p className='text-lg font-mono font-semibold'>Email : </p>
          <p className='ml-4 font-mono'>{data.email}</p>
        </div>
        <div className='flex justify-center'>
          <p className='text-lg font-mono font-semibold'>Deals in : </p>
          <p className='ml-4 font-mono'>{data.organ}</p>
        </div>

        <Link to="/details" state={{ hospital:data.hospitalName,organ:data.organ }}>
          <button className='bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 w-32 h-8 text-white font-bold rounded-lg ml-20 mt-2 mb-2'>Connect</button>
        </Link>
      </div>
    </>
  )
}

export default CenterInfo
