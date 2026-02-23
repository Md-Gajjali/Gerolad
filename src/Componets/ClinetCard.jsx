import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const ClinetCard = ({img,heading,title}) => {
  return (
    <div className='bg-black rounded-2xl  w-105  px-6.25 py-6.25 '>
      <img src={img} alt="" className='rounded-sm w-137.5' />
      <h2 className='font-bold text-[20px]  text-white mt-8.25 '>{heading}</h2>
      <p className='font-normal text-[16px] mt-2 text-gray-600 flex justify-between'>{title} <MdOutlineArrowOutward /> </p>
    </div>
  )
}

export default ClinetCard
