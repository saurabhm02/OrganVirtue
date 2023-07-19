import React from 'react'
import { Link } from 'react-router-dom'
import OrganAngel from "../assets/OrganAngel.png"
function Navbar() {
  return (
     <>
      <div className="flex flex-col h-screen p-3  bg-gradient-to-l from-gray-700 via-gray-900 to-black shadow w-60 sticky top-0 left-0">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-white ml-1"><img className='rounded shadow-lg' src={OrganAngel} alt='dash'></img></h2>
          </div>
          <div className="flex-1 ">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm bg-gradient-to-l from-gray-700 via-gray-900 to-black  hover:from-gray-300 hover:via-gray-400 hover:to-gray-600">
                <div  className="flex items-center p-2 space-x-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-gray-100 text-xl font-mono font-bold "><Link to="/home">Home</Link></span>
                </div>
              </li>
              <li className="rounded-sm bg-gradient-to-l from-gray-700 via-gray-900 to-black hover:from-gray-300 hover:via-gray-400 hover:to-gray-600">
                <div  className="flex items-center p-2 space-x-3 rounded-lg mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <span className="text-gray-100 text-xl font-mono font-bold"><Link to="/info">Know more</Link></span>
                </div>
              </li>
              <li className="rounded-sm bg-gradient-to-l from-gray-700 via-gray-900 to-black  hover:from-gray-300 hover:via-gray-400 hover:to-gray-600">
                <div className="flex items-center p-2 space-x-3 rounded-md mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-100" fill="none" viewBox="0 0 60 60" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M31 17h2v-4h4v-2h-4V7h-2v4h-4v2h4v4zM33 21h7v2h-7zM9 34h8v2H9zM24 21h7v2h-7zM9 44h8v2H9zM9 54h8v2H9zM33 31h7v2h-7zM24 31h7v2h-7zM33 41h7v2h-7zM24 41h7v2h-7zM46 26h10v2H46zM46 36h10v2H46zM46 46h10v2H46zM33 51h7v2h-7zM24 51h7v2h-7z" />
                  </svg>
                  <span className="text-gray-100 text-lg font-mono font-bold"><Link to="/centers">DonationCenters</Link></span>
                </div>
              </li>
              <li className="rounded-sm bg-gradient-to-l from-gray-700 via-gray-900 to-black  hover:from-gray-300 hover:via-gray-400 hover:to-gray-600">
                <div className="flex items-center p-2 space-x-3 rounded-md mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-100" fill="none" viewBox="0 0 60 60" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M32,3A29,29,0,0,0,12.28,53.24l1.9-1c2.92-1.56,7.71-4.12,8.69-4.73a3.22,3.22,0,0,0,1.69-2.23V42.06a19.42,19.42,0,0,1-3.35-6.79.37.37,0,0,0-.12-.2,3.46,3.46,0,0,1-1.34-2.34l0-5.08a4.57,4.57,0,0,1,.75-1.52.81.81,0,0,0,.16-.34V20.16A8,8,0,0,1,23,14.41c2.09-2,5.1-3.06,9-3.06s6.85,1,9,3.06a8,8,0,0,1,2.35,5.75v5.63a.81.81,0,0,0,.18.36,4.17,4.17,0,0,1,.73,1.5l0,.25v4.83a3.49,3.49,0,0,1-1.36,2.36.35.35,0,0,0-.09.16,19.34,19.34,0,0,1-3.36,6.81v3.23a3.25,3.25,0,0,0,1.69,2.23c1,.61,5.77,3.16,8.71,4.72l1.89,1A29,29,0,0,0,32,3Z" />
                  </svg>
                  <span className="text-gray-100 text-lg font-mono font-bold ml-2"><Link to="/profile">Profile</Link></span>
                </div>
              </li>
              <li className="rounded-sm bg-gradient-to-l from-gray-700 via-gray-900 to-black  hover:from-gray-300 hover:via-gray-400 hover:to-gray-600">
                <div className="flex items-center p-2 space-x-3 rounded-md mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-100" fill="white" viewBox="0 0 60 60" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M72 50c0 1.1-.9 2-2 2H52v18c0 1.1-.9 2-2 2s-2-.9-2-2V52H30c-1.1 0-2-.9-2-2s.9-2 2-2h18V30c0-1.1.9-2 2-2s2 .9 2 2v18h18c1.1 0 2 .9 2 2zm16 0c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.2-34-34-34S16 31.2 16 50s15.2 34 34 34 34-15.2 34-34z"/>
                  </svg>
                  <span className="text-gray-100 text-lg font-mono font-bold "><Link to="/regcenter">Register as DonationCenter</Link></span>
                </div>
              </li>
              <li className="rounded-sm bg-gradient-to-l from-gray-700 via-gray-900 to-black hover:from-gray-300 hover:via-gray-400 hover:to-gray-600">
                <div  className="flex items-center p-2 space-x-3 rounded-md mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-100 bold" fill="white" viewBox="0 0 1707 1707" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M1181 695c-13,0 -22,-12 -19,-25 24,-93 -59,-177 -153,-153 -25,7 -35,-32 -10,-38 57,-15 118,1 159,43 41,41 58,102 43,158 -3,9 -11,15 -20,15zm-151 702c-472,0 -918,-717 -566,-1069 33,-33 56,-66 99,-66 22,0 42,9 57,24l169 169c32,32 32,83 0,114l-162 163c14,86 260,333 348,347l162 -162c31,-31 83,-31 114,0l169 169c32,32 32,83 0,114l-43 44c-119,118 -242,153 -347,153zm-551 -1027c-373,412 362,1322 858,858l-227 -227 -113 113c-59,58 -417,-278 -410,-391 0,-5 2,-9 6,-13l113 -113 -227 -227zm886 830c19,-19 61,-51 27,-85l-169 -170c-16,-16 -42,-16 -58,0l-27 28 227 227zm-631 -631l27 -28c16,-16 16,-41 0,-57l-169 -170c-34,-34 -66,9 -85,28l227 227zm119 1137c-471,0 -852,-382 -852,-853 0,-471 382,-852 852,-852 471,0 853,381 853,852 0,471 -382,853 -853,853zm0 -1665c-448,0 -812,364 -812,812 0,448 364,813 812,813 448,0 813,-365 813,-813 0,-448 -365,-812 -813,-812zm454 780c-15,0 -25,-17 -17,-31 71,-115 54,-263 -42,-359 -96,-96 -244,-113 -360,-43 -22,14 -43,-20 -21,-34 205,-126 477,3 504,246 8,74 -8,148 -47,211 -3,7 -10,10 -17,10zm-58 -58c-15,0 -24,-16 -17,-29 92,-183 -104,-379 -287,-287 -24,12 -42,-23 -18,-35 98,-50 215,-31 293,47 78,77 97,195 47,293 -3,7 -10,11 -18,11z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-100 text-xl font-sans font-bold"><Link to="/contact">Contact us</Link></span>
                </div>
              </li>
              <li className="rounded-sm bg-gradient-to-l from-gray-700 via-gray-900 to-black hover:from-gray-300 hover:via-gray-400 hover:to-gray-600">
                <div  className="flex items-center p-2 space-x-3 rounded-md mt-[115%]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span className="text-gray-100 text-xl font-sans font-bold"><Link to="/">Log out</Link></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </>
  )
}
export default Navbar
