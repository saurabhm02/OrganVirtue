import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
function Thanks({data,url}) {
  const navigateTo=useNavigate()
  const adddata=async ()=>{
    const authtoken=localStorage.getItem('authtoken')
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': authtoken
      },
      body: JSON.stringify(data)});
     const logindata = await response.json()
     console.log(logindata)
     navigateTo('/home')
  }
          useEffect(()=>{
           adddata()
          })
  return (
    <div className=' fixed w-full h-full bg-[#000000b4] backdrop-blur-sm'>
      <div className='relative top-[20%] left-[40%] bg-white w-[30%] h-[35%] rounded-lg bg-gradient-to-r from-rose-100 to-teal-100'>
            <h1 className="text-5xl font-serif text-center p-5 ">Thank you..</h1>
            <h1 className="text-2xl font-serif text-center italic mt-[-3%]">"You have did a great job"</h1>
            <h1 className="text-2xl font-serif text-center mt-8">We'll revert you back within 24 hrs</h1>
            <h1 className="text-xl font serif text-right mt-[10%] italic">you'll be redirected to home page...</h1>
      </div>
    </div>
  )
}

export default Thanks