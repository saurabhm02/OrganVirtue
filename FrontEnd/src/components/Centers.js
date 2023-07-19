import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import centers from "../assets/centers.png"
import doctor from "../assets/doctor.png"
import CenterInfo from './CenterInfo'
function Centers() {
    const data = [
        {
            hospitalName: "MGM Hospital",
            locatiom: 'hardaspur',
            contact: '+91785548452',
            email: 'email.com',
            organType: 'Kidney',
            tag: 'kid'
        },
    ]
    const [filteredData, setFilteredData] = useState(data)
    const [sliced, setSliced] = useState(7)
    const handleLoadmore = () => {
        setSliced(prev=>prev+4)
    }
    const [filters, setFilters] = useState("")
    const adddata=async ()=>{
        const authtoken=localStorage.getItem('authtoken')
        const response = await fetch(`https://organangel.onrender.com/api/hospital/gethospitals`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authtoken
          },
        });
         const logindata = await response.json()
         console.log(logindata)
         setFilteredData(logindata)
      }
      useEffect(()=>{
          adddata()
      },[])

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-0 overflow-x-hidden scrollbar-hide">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 ">
                    <div >
                        <img src={centers} alt="banner" className='max-w-none'></img>
                    </div>
                </div>
                <div className='flex justify-evenly'>
                    <div className='w-[70%] overflow-hidden'>
                        <h1 className='bg-slate-300 text-2xl font-bold'>What our team do?</h1>
                        <blockquote>
                            <p className='text-2xl italic mt-3'>Organ donation is the process of donating a healthy organ or tissue to someone who needs it. It is a life-saving and life-changing act that can make a significant difference in the lives of people who are waiting for a transplant.There are two types of organ donation: living donation and deceased donation. Living donation involves donating a kidney, a portion of the liver, or lung, and it is done while the donor is still alive. Deceased donation, on the other hand, involves donating organs after death.</p>
                            <p className='text-xl italic ml-[70%] font-bold'>~with love from OrganAngel</p>
                        </blockquote>
                    </div>
                    <div>
                        <img src={doctor} alt='doctor' className='h-80 mt-[-8%] ml-[10%]'></img>
                    </div>

                </div>
                <h1 className='text-center text-3xl font-mono font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>You can select from a wide range of donation centers</h1>
                <div className='flex justify-evenly text-xl mt-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <button className=' w-[7%] h-10 hover:bg-purple-600 text-white font-bold rounded-lg' onClick={() => { setFilters("");setSliced(7) }}>All</button>
                    <button className='  w-[7%] h-10 hover:bg-purple-600 text-white font-bold rounded-lg' onClick={() => { setFilters("Kidney");setSliced(7) }}>Kidney</button>
                    <button className='  w-[7%] hover:bg-purple-600 text-white font-bold rounded-lg' onClick={() => { setFilters("Eyes");setSliced(7) }}>Eyes</button>
                    <button className='  w-[7%] hover:bg-purple-600 text-white font-bold rounded-lg' onClick={() => { setFilters("Heart");setSliced(7) }}>Heart</button>
                    <button className='  w-[7%] hover:bg-purple-600 text-white font-bold rounded-lg' onClick={() => { setFilters("Intestine");setSliced(7) }}>Intestine</button>
                    <button className='  w-[7%] hover:bg-purple-600 text-white font-bold rounded-lg' onClick={() => { setFilters("Lungs");setSliced(7) }}>Lungs</button>
                    <button className='  w-[7%] hover:bg-purple-600 text-white font-bold rounded-lg' onClick={() => { setFilters("Corneas");setSliced(7) }}>Corneas</button>
                    {/* <button className=' bg-blue-500 w-[7%] hover:bg-blue-600 text-white font-bold rounded-lg'>Others</button> */}
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {
                        filteredData.filter((item => {
                            return item.organ === filters || filters === ""
                        })).map((item, key) => {
                            return key<=sliced? <CenterInfo data={item} key={key} /> : <></>
                        })

                    }
                </div>

                <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded ml-[45%] mt-4 mb-4" onClick={() => { handleLoadmore() }}>Load More</button>
            </div>
        </>
    )
}

export default Centers