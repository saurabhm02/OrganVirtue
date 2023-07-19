import React,{useState} from 'react'
import Navbar from "./Navbar"
import Thanks from './Thanks'

function RegCenter() {
    const [show,setShow]=useState(false)

    const [data,setData]=useState({
  hospitalName:"",
  location:"",
  email:"",
  mobile:"",
  organ:""
      })

      const [checks,setChecks]=useState({
        agree:false,
        consent:false,
      })
      
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-0  overflow-x-hidden scrollbar-hide">
                <div className='flex flex-row h-[70%] '>
                    <div className=' bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 w-[95%] h-[145%] mt-[2%] ml-8 rounded-lg shadow-xl '>
                        <h1 className='text-center text-3xl font-mono underline'>Donation Center Registration Form</h1>
                        <h1 className='font-bold italic'>Note: All field are mandatory, any missing or wrong information can lead to rejection. </h1>
                        <h1 className='mt-2 text-xl font-bold font-mono ml-10 underline'>Basic Details :</h1>
                        <div className='flex flex-row mt-4 justify-evenly text-lg font-bold '>
                            <div className="">
                                Organization Name
                                <input type="text" value={data.hospitalName} onChange={(e)=>{setData(prev=>{return {...prev,hospitalName:e.target.value}})}} className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                                <label for="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                            </div>
                            <div className="">
                                Owner full name
                                <input type="text" className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                                <label for="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                            </div>
                            <div className="">
                                License number
                                <input type="text" className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                                <label for="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                            </div>
                            <div className="">
                                Starting date(DD/MM/YY)
                                <input type="text" className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                                <label for="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                            </div>
                        </div>
                        <div className='flex flex-row mt-8 justify-evenly text-lg font-bold '>
                            <div className="">
                                Deals in(Organ name)
                                <input type="text" value={data.organ} onChange={(e)=>{setData(prev=>{return {...prev,organ:e.target.value}})}} className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                                <label for="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                            </div>
                            <div className="">
                                Team size
                                <input type="text" className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                                <label for="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                            </div>
                            <div className="">
                                Email
                                <input type="text" value={data.email} onChange={(e)=>{setData(prev=>{return {...prev,email:e.target.value}})}} className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                                <label for="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                            </div>
                            <div className="">
                                Conatct number
                                <input type="text" value={data.mobile} onChange={(e)=>{setData(prev=>{return {...prev,mobile:e.target.value}})}} className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                                <label for="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                            </div>
                        </div>
                        <h1 className="mt-4 text-xl font-bold font-mono ml-10 underline">Location Details :</h1>
                        <div className='flex flex-row mt-4 justify-evenly text-lg font-bold '>
                            <div className="">
                                City
                                <input  type="text" value={data.location} onChange={(e)=>{setData(prev=>{return {...prev,location:e.target.value}})}} className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                                <label for="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                            </div>
                            <div className="">
                                District
                                <input type="text" className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                                <label for="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                            </div>
                            <div className="">
                                State
                                <input type="text" className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                                <label for="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                            </div>
                            <div className="">
                                Pin Code
                                <input type="text" className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                                <label for="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                            </div>
                        </div>
                        <div className=' to-indigo-400 w-[95%]  mt-[2%] ml-8 rounded-lg shadow-xl h-[45%] scrollbar-hide'>
                            <h1 className='text-center text-3xl font-mono underline'>Terms & Condition</h1>
                            <h1 className='text-lg italic font-mono font-bold mt-2'>Please read this document carefully before submit.</h1>
                            <div className='text-xl font-serif'>
                                <p className='mt-2'>1. Organ donation is a voluntary act and the hospital will require the consent of the donor or the donor's family. The hospital will provide information on the donation process, and the donor or their family must sign a consent form before any donation can take place.</p>
                                <p className='mt-2'>2.Not everyone is eligible to donate organs, and the hospital will perform medical tests to determine the suitability of the donor. The donor must be declared brain dead or have suffered cardiac death in a hospital, and the organs must be healthy and viable for transplant.</p>
                                <p className='mt-2'>3.The allocation of donated organs is determined by a national waiting list managed by the United Network for Organ Sharing (UNOS) in the US or other appropriate regulatory bodies in other countries. Allocation is based on a number of factors including medical urgency, tissue match, and length of time on the waiting list.</p>
                                <p className='mt-2'>
                                    4.The hospital will maintain the privacy and confidentiality of the donor and their family. Medical information will only be shared with authorized personnel involved in the donation and transplant process.
                                </p>
                                <p className='mt-2'>5.There are no costs to the donor or their family for organ donation. However, there may be costs associated with medical care for the donor, and the recipient may be responsible for the cost of the transplant procedure.</p>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center mt-4">
                                <input id="link-checkbox" type="checkbox" value={checks.agree} onChange={(e)=>{setChecks(prev=>{return {...prev,agree:!checks.agree}})}} className=" ml-9 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="link-checkbox" className="ml-4 text-lg italic text-black font-serif font-bold">I agree with all the terms and conditions.</label>
                            </div>
                            <div class="flex items-center mt-2">
                                <input id="link-checkbox" type="checkbox" value={checks.consent} onChange={(e)=>{setChecks(prev=>{return {...prev,consent:!checks.consent}})}} className=" ml-9 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="link-checkbox" className="ml-4 text-lg italic text-black font-serif font-bold">I consent that all the above information by me are correct, if found wrong or illegal , legal action can be taken</label>
                            </div>
                        </div>
                        <div>
                        <button disabled={!(checks.agree && checks.consent)} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded ml-[45%] mt-4" onClick={()=>{setShow(true)}} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
          
            {show?<Thanks data={data} url={`https://organangel.onrender.com/api/hospital/addhospital`} />:<></>}
        </>
    )
}

export default RegCenter