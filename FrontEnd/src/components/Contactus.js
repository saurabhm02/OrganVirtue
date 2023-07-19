import React from 'react'
import Navbar from './Navbar'
import contactus from "../assets/contactus.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import mail from "../assets/mail.png"

function Contactus() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-0 overflow-hidden">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div >
            <img src={contactus} alt="banner" className='max-w-none'></img>
          </div>
        </div>
        <div className='flex justify-evenly'>
          <div>
            <div clas="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-0 ml-[-25%] overflow-hidden">

              <div class="text-3xl mb-6 text-center font-bold">
                Drop us a line.
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">

                <div className="col-span-2 lg:col-span-1">
                  <input type="text" class="border-solid border-gray-500 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Name" />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <input type="text" class="border-solid border-gray-500 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Email Address" />
                </div>

                <div className="col-span-2">
                  <textarea cols="30" rows="3" class="border-solid border-gray-500 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Message"></textarea>
                </div>

                <div className="text-right mr-[-20%] ">
                  <button class="py-3 px-6 bg-blue-500 hover:bg-blue-700 text-white font-bold w-full sm:w-32 rounded-lg">
                    Send
                  </button>
                </div>

              </div>
            </div>
          </div>
          <div className='justify-end'>
          <div className="text-3xl mb-6 text-center font-bold ">You can also reach us at</div>
              <div>
                <img src={mail} alt='mail' className='h-10'></img>
                <h1 className='mt-[-10%] ml-[15%] text-xl'>organdonation@gmail.com</h1>
                <img src={instagram} alt='insta'className='h-10 mt-6'></img>
                <h1 className='mt-[-10%] ml-[15%] text-xl'>donateOrgans/ig.com</h1>
                <img src={facebook} alt='fb' className='h-10 mt-6'></img>
                <h1 className='mt-[-10%] ml-[15%] text-xl'>fb/donateOrgans.com</h1>
              </div>
          </div>
          
        </div>
        <h4 className="bg-gray-300 text-center font-bold text-4xl mt-1">Get us through map</h4>
        <div className="google-map-code mt-2 mb-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.726564801243!2d75.70295481495981!3d31.25599198145792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1656911569511!5m2!1sen!2sin" 
          className='w-full h-80' title='map'></iframe>
        </div>
      </div>
    </>

  )
}

export default Contactus