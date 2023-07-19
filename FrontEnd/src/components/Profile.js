import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'

function Profile() {
    const [data,setData]=useState(
        {
            name:"",
            email:"",
            number:"",
            date:""
        }
    )
    const [donerdata,setDonerData]=useState([])
    const adddata=async ()=>{
        const authtoken=localStorage.getItem('authtoken')
        const response = await fetch(`https://organangel.onrender.com/api/user/getuser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authtoken
          },
        });
         const profiledata = await response.json()
         console.log(profiledata)
         setData(profiledata)
      }
     
      const donationdata=async ()=>{
        const authtoken=localStorage.getItem('authtoken')
        const response = await fetch(`https://organangel.onrender.com/api/doner/getdonerbyuser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authtoken
          },
        });
         const profiledata = await response.json()
         setDonerData(profiledata)
         console.log(donerdata)
      }
      useEffect(()=>{
           adddata()
           donationdata()
      },[]);
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-0 overflow-hidden">
                <div className='flex flex-row h-[70%] '>
                    <div className=' bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 w-[95%] h-[115%] mt-[5%] ml-8 rounded-lg shadow-xl'>
                        <div className='flex flex-row '>
                            <div>
                                <div class="w-[180%] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-[25%] ml-[100%] mb-4 h-[75%]">
                                    <div class="flex flex-col items-center pb-10 ">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg mt-4" src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="Bonnieimage" />
                                        <p className='text-white font-mono text-2xl'>Name</p>
                                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.name}</h5>
                                        <span class="text-lg font-mono italic text-white">"A pround organ donar"</span>
                                        <div class="flex mt-4 space-x-3 md:mt-6">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-[40%] mt-[5%]'>
                                <p className='text-black text-4xl font-mono font-bold '>Personal Details :-</p>
                                <p className='text-black text-2xl font-mono mt-4 font-bolf '>Mobile</p>
                                <p className='text-black text-xl font-sans' >{data.number}</p>
                                <p className='text-black text-2xl font-mono mt-2'>Email id</p>
                                <p className='text-black text-xl font-sans '>{data.email}</p>
                                <p className='text-black text-2xl font-mono mt-2'>Member since</p>
                                <p className="text-black text-xl font-sans">{data.date.slice(0,10)}</p>
                            </div>
                            <div className='ml-[-45%]'>
                                <p className='font-mono text-black text-3xl font-bold underline'>Your Profile</p>
                            </div>

                            
                        </div>
                        <div className='max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ' >
                            <h1 className='text-white text-2xl text-center font-mono'>Your valuable donations towards a bright future of someone.</h1>
                            <div className='flex flex-row justify-evenly mt-4 text-white text-lg text-center '>
                                <div className='flex flex-col'>
                                    <h1 className='bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg text-black text-2xl font-bold mb-2'>Hospital</h1>
                                   {
                                    donerdata.length>0 ?
                                    donerdata.map((item,key)=>{
                                      return   <h1 className='mt-3' key={key}>{item.hospital}</h1>
                                    }):<></>
                                   }
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg  text-black text-2xl font-bold mb-2'>Organ Donated</h1>
                                    {
                                     donerdata.length>0 ?
                                    donerdata.map((item,key)=>{
                                      return   <h1 className='mt-3' key={key}>{item.organ}</h1>
                                    }):<></>
                                   }
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg  text-black text-2xl font-bold mb-2'>Family member</h1>
                                    {
                                         donerdata.length>0 ?
                                    donerdata.map((item,key)=>{
                                      return   <h1 className='mt-3' key={key}>{item.familymember}</h1>
                                    }):<></>
                                   }
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='bg-gradient-to-r from-gray-100 to-gray-300 rounded-lg  text-black text-2xl font-bold mb-2 ' >Action</h1>
                                   
                                    {
                                         donerdata.length>0 ?
                                    donerdata.map((item,key)=>{
                                      return    <button key={key} className='bg-gradient-to-r from-slate-500 to-yellow-100 hover:bg-blue-600 rounded-lg font-bold text-xl mt-2 h-8 w-24 text-black'>Call now</button>
                                    }):<></>
                                   }
                                </div>

                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Profile