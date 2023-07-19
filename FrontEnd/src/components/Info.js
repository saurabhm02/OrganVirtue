import React from 'react'
import Navbar from './Navbar'
import knowmore from "../assets/knowmore.png"

function Info() {
  return (
    <>
        <Navbar/>
        <div className="container mx-auto mt-0 overflow-x-hidden">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <img src={knowmore} alt='knowmore' className='max-w-none '/>
        </div>
        <h1 className='text-2xl bg-gray-300 font-bold'>What is organ donation and transplantation?</h1>
        <p className='text-xl leading-12 mt-3 mb-2'>Organ donation is the process of surgically removing an organ or tissue from one person (the organ donor) and placing it into another person (the recipient). Transplantation is necessary because the recipient’s organ has failed or has been damaged by disease or injury.
        Organ transplantation is one of the great advances in modern medicine. Unfortunately, the need for organ donors is much greater than the number of people who actually donate.</p>
        <h1 className='text-2xl bg-gray-300 font-bold'>What organs and tissues can be transplanted?</h1>
        <p className='text-xl mt-3'>Organs and tissues that can be transplanted include:</p>
        <div className='text-xl'>
        <ul className='list-disc list-inside mb-2'>
            <li>Liver</li>
            <li>Kidney</li>
            <li>Pancreas</li>
            <li>Heart</li>
            <li>Lungs</li>
            <li>Intestine</li>
            <li>Corneas</li>
            <li>Middle ear</li>
            <li>Skin</li>
            <li>Bone</li>
            <li>Bone marrow</li>
            <li>Heart valves</li>
            <li>Connective tissue</li>
            <li>Vascularized composite allografts (transplant of several structures that may include skin, uterus, bone, muscles, blood vessels, nerves and connective tissue)</li>
        </ul>
        </div>
        <h1 className='text-2xl bg-gray-300 font-bold '>Who can be an organ donor?</h1>
        <p className='text-xl leading-12 top-4 leading-12 mt-3 mb-2'>People of all ages should consider themselves potential donors. When a person dies, they are evaluated for donor suitability based on their medical history and age. The organ procurement organization determines medical suitability for donation.</p>
        <h1 className='text-2xl bg-gray-300 font-bold'>How many lives can one organ donor save?</h1>
        <p className='text-xl leading-12 top-4 leading-12 mt-2 mb-2'>One deceased organ donor can save up to eight lives! Two donated kidneys can free two patients from dialysis treatments. One donated liver can be split to go to two patients on the wait list. Two donated lungs mean another two patients are given a second chance, and a donated pancreas and donated heart are two more patients who will receive the gift of life.</p>
        <h1 className='text-2xl bg-gray-300 font-bold'>How many people are currently waiting for life-saving transplants?</h1>
        <p className='text-xl leading-12 top-4 leading-12 mt-3 mb-2'>Nationally, there are more than 100,000 people awaiting transplantation. Even the largest football stadium in the US could not fit the number of patients on the national transplant waiting list.</p>
        </div>
        
    </>

  )
}
export default Info
