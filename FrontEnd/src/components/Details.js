import React,{useState} from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import Thanks from './Thanks'
function Details() {
    const location=useLocation()
    const [data,setData]=useState({
        hospital:location.state.hospital,
        familymember:"",
        organ:location.state.organ
    })
    // useEffect(() =>
    // {
    //     console.log(location.state)
    //     setData(prev=>{return{...prev,hospital:location.state.hospital,organ:location.state.organ}})
    // },[location.state])
    const [show,setShow] =useState(false)
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-0 overflow-x-hidden">
                <div className=''>
                    <h1 className=' bg-gradient-to-r from-purple-500 to-pink-500 text-5xl h-20 text-center font-bold'>We Just want to know some information about you</h1>
                    <h1 className='text-center text-4xl font-mono mt-3 '>Please fill this form </h1>
                </div>
                <div>
                    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 formbg">

                        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-gray-50 shadow-md sm:max-w-lg sm:rounded-lg">
                            
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 undefined">Your good name </label>
                                    <div className="flex flex-col items-start">
                                        <input type="text" name="name" className="block w-full mt-1 h-10 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">Mobile number</label>
                                    <div className="flex flex-col items-start">
                                        <input type="email" name="email" className="block w-full mt-1 h-10 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined"> Email </label>
                                    <div className="flex flex-col items-start">
                                        <input type="email" name="email" className="block w-full mt-1 h-10 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">Current Address</label>
                                    <div className="flex flex-col items-start">
                                        <input type="email" name="email" className="block w-full mt-1 h-10 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">Current City</label>
                                    <div className="flex flex-col items-start">
                                        <input type="email" name="email" className="block w-full mt-1 h-10 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">Current State</label>
                                    <div className="flex flex-col items-start">
                                        <input type="email" name="email" className="block w-full mt-1 h-10 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">Pincode</label>
                                    <div className="flex flex-col items-start">
                                        <input type="email" name="email" className="block w-full mt-1 h-10 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">Your current age</label>
                                    <div className="flex flex-col items-start">
                                        <input type="email" name="email" className="block w-full mt-1 h-10 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                    </div>
                                </div>
                                <div className="mt-4 ">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">Your preffered gender</label>
                                    <div className="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                     <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Male</label>

                                    <input id="default-radio-1" type="radio" value="" name="default-radio" className=" ml-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                     <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Female</label>

                                     <input id="default-radio-1" type="radio" value="" name="default-radio" className=" ml-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                     <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Others</label>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">Any family member name</label>
                                    <div className="flex flex-col items-start">
                                        <input type="email" name="email" value={data.familymember} onChange={(e)=>{setData(prev=>{return{...prev,familymember:e.target.value}})}} className="block w-full mt-1 h-10 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                    </div>
                                </div>
                                
                                <div className="flex items-center mt-4">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={()=>{setShow(true)}}>Submit
                                </button>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>

           {show?<Thanks data={data} url={`https://organangel.onrender.com/api/doner/adddonation`}/>:<></>}
        </>
    )
}

export default Details